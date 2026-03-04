import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { supabaseAdmin } from "@/lib/supabase-admin";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: NextRequest) {
    const body = await req.text();
    const signature = req.headers.get("stripe-signature");

    if (!signature) {
        return NextResponse.json({ error: "No signature" }, { status: 400 });
    }

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err) {
        console.error("Webhook signature verification failed:", err);
        return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }

    if (event.type === "checkout.session.completed") {
        const session = event.data.object as Stripe.Checkout.Session;

        const email = session.customer_details?.email || session.customer_email;
        const name = session.customer_details?.name || null;
        const sessionId = session.id;

        if (!email) {
            console.warn("No email found in checkout session:", sessionId);
            return NextResponse.json({ received: true });
        }

        const { error } = await supabaseAdmin
            .from("playbook_purchasers")
            .upsert(
                { email, name, stripe_session_id: sessionId },
                { onConflict: "stripe_session_id" } // idempotent — safe for Stripe retries
            );

        if (error) {
            console.error("Supabase insert error:", error);
            return NextResponse.json({ error: "DB error" }, { status: 500 });
        }

        console.log(`✅ Playbook access granted to: ${email}`);
    }

    return NextResponse.json({ received: true });
}
