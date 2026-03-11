import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

async function resolveOwnership(email: string, playbookSlug: string) {
  const normalizedEmail = email.toLowerCase().trim();

  const { data: purchaser } = await supabaseAdmin
    .from("playbook_purchasers")
    .select("id")
    .eq("email", normalizedEmail)
    .single();

  if (!purchaser) return null;

  const { data: playbook } = await supabaseAdmin
    .from("playbooks")
    .select("id")
    .eq("slug", playbookSlug)
    .single();

  if (!playbook) return null;

  const { data: purchase } = await supabaseAdmin
    .from("playbook_purchases")
    .select("id")
    .eq("purchaser_id", purchaser.id)
    .eq("playbook_id", playbook.id)
    .maybeSingle();

  if (!purchase) return null;

  return { purchaserId: purchaser.id, playbookId: playbook.id };
}

// GET /api/playbook/progress?email=<email>&playbook_slug=<slug>
export async function GET(request: NextRequest) {
  const email = request.nextUrl.searchParams.get("email");
  const playbookSlug = request.nextUrl.searchParams.get("playbook_slug");

  if (!email || !playbookSlug) {
    return NextResponse.json({ completedLessonIds: [] });
  }

  const ownership = await resolveOwnership(email, playbookSlug);
  if (!ownership) {
    return NextResponse.json({ completedLessonIds: [] });
  }

  const { data: progress } = await supabaseAdmin
    .from("playbook_lesson_progress")
    .select("lesson_id")
    .eq("purchaser_id", ownership.purchaserId)
    .eq("playbook_id", ownership.playbookId);

  const completedLessonIds = (progress ?? []).map((r) => r.lesson_id);
  return NextResponse.json({ completedLessonIds });
}

// POST /api/playbook/progress
// Body: { email, playbook_slug, lesson_id, completed: boolean }
export async function POST(request: NextRequest) {
  let body: { email?: string; playbook_slug?: string; lesson_id?: string; completed?: boolean };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { email, playbook_slug, lesson_id, completed } = body;

  if (!email || !playbook_slug || !lesson_id || completed === undefined) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const ownership = await resolveOwnership(email, playbook_slug);
  if (!ownership) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  if (completed) {
    await supabaseAdmin
      .from("playbook_lesson_progress")
      .upsert(
        {
          purchaser_id: ownership.purchaserId,
          playbook_id: ownership.playbookId,
          lesson_id,
        },
        { onConflict: "purchaser_id,playbook_id,lesson_id" }
      );
  } else {
    await supabaseAdmin
      .from("playbook_lesson_progress")
      .delete()
      .eq("purchaser_id", ownership.purchaserId)
      .eq("playbook_id", ownership.playbookId)
      .eq("lesson_id", lesson_id);
  }

  return NextResponse.json({ success: true, lesson_id, completed });
}
