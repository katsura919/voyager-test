"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import {
    BookOpen,
    Lock,
    CheckCircle,
    ArrowRight,
    ChevronRight,
    Sparkles,
    FileText,
    Globe,
    Shield,
    Clock,
    Star,
    AlertCircle,
} from "lucide-react";
import Link from "next/link";
import PlaybookContent from "./content";

export default function PlaybookPage() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [hasAccess, setHasAccess] = useState(false);
    const [userName, setUserName] = useState("");

    const handleAccess = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const { data, error: dbError } = await supabase
            .from("playbook_purchasers")
            .select("email, name")
            .eq("email", email.toLowerCase().trim())
            .single();

        setLoading(false);

        if (dbError || !data) {
            setError(
                "No purchase found for this email. Please use the email you purchased with."
            );
            return;
        }

        setUserName(data.name?.split(" ")[0] || "");
        // Save to session so they don't have to re-enter
        sessionStorage.setItem("playbook_email", email.toLowerCase().trim());
        setHasAccess(true);
    };

    if (hasAccess) {
        return <PlaybookContent userName={userName} />;
    }

    return (
        <main className="min-h-screen bg-[#f9f5f2] flex flex-col">
            {/* Top nav */}
            <nav className="px-6 py-5 flex items-center justify-between border-b border-[#e7ddd3]">
                <Link href="/" className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-[#e3a99c]" />
                    <span className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#3a3a3a]">
                        Happy Voyager
                    </span>
                </Link>
                <span className="text-xs text-[#aaaaaa] flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5" />
                    Purchasers only
                </span>
            </nav>

            {/* Email gate */}
            <div className="flex-1 flex items-center justify-center px-4 py-16">
                <div className="w-full max-w-md">
                    {/* Header */}
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white shadow-lg border border-[#e7ddd3] mb-6">
                            <BookOpen className="w-9 h-9 text-[#e3a99c]" />
                        </div>
                        <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-[#3a3a3a] mb-3">
                            Playbook Pro
                        </h1>
                        <p className="font-[family-name:var(--font-body)] text-[#6b6b6b] leading-relaxed">
                            Your complete guide to the Spain Digital Nomad Visa.
                            <br />
                            Enter the email you used to purchase.
                        </p>
                    </div>

                    {/* Form card */}
                    <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-[#e7ddd3]">
                        <form onSubmit={handleAccess} className="space-y-4">
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-semibold text-[#3a3a3a] mb-2 font-[family-name:var(--font-body)]"
                                >
                                    Purchase email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@example.com"
                                    className="w-full px-4 py-3.5 rounded-xl border border-[#e7ddd3] bg-[#f9f5f2] text-[#3a3a3a] placeholder-[#aaaaaa] focus:outline-none focus:ring-2 focus:ring-[#e3a99c]/40 focus:border-[#e3a99c] transition-all font-[family-name:var(--font-body)]"
                                />
                            </div>

                            {error && (
                                <div className="flex items-start gap-2.5 px-4 py-3 rounded-xl bg-red-50 border border-red-100">
                                    <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                                    <p className="text-sm text-red-600 font-[family-name:var(--font-body)]">
                                        {error}
                                    </p>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-4 rounded-xl bg-[#3a3a3a] text-white font-bold font-[family-name:var(--font-body)] flex items-center justify-center gap-2 hover:bg-[#e3a99c] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg"
                            >
                                {loading ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Verifying...
                                    </>
                                ) : (
                                    <>
                                        Access my Playbook
                                        <ArrowRight className="w-4 h-4" />
                                    </>
                                )}
                            </button>
                        </form>

                        <div className="mt-6 pt-6 border-t border-[#e7ddd3] text-center">
                            <p className="text-sm text-[#aaaaaa] font-[family-name:var(--font-body)]">
                                Haven&apos;t purchased yet?{" "}
                                <Link
                                    href="/#pricing"
                                    className="text-[#e3a99c] font-semibold hover:underline"
                                >
                                    Get the Playbook Pro →
                                </Link>
                            </p>
                        </div>
                    </div>

                    {/* Trust badges */}
                    <div className="mt-8 flex items-center justify-center gap-6 flex-wrap">
                        {[
                            { icon: Shield, label: "Secure access" },
                            { icon: Clock, label: "Instant unlock" },
                            { icon: Star, label: "Lifetime updates" },
                        ].map(({ icon: Icon, label }) => (
                            <div
                                key={label}
                                className="flex items-center gap-1.5 text-xs text-[#aaaaaa] font-[family-name:var(--font-body)]"
                            >
                                <Icon className="w-3.5 h-3.5" />
                                {label}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
