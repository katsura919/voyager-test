/* ─────────────────────────────────────────────
   Playbook Registry
   To add a new playbook:
   1. Create /data/playbooks/your-slug.ts
   2. Import it here and add to PLAYBOOKS array
   3. Add STRIPE_PRICE_YOUR_SLUG to .env.local
   4. Create Supabase entry for new slug (auto)
───────────────────────────────────────────── */

import type { PlaybookConfig } from "./types";
import spainDnv from "./spain-dnv";
import visaRunner from "./visa-runner";

// ── Available playbooks (purchasable) ────────
export const PLAYBOOKS: PlaybookConfig[] = [spainDnv];

// ── Waitlist playbooks (preview + email capture) ──
export const WAITLIST_PLAYBOOKS: PlaybookConfig[] = [visaRunner];

// ── Coming-soon catalog entries (display only) ──
export const COMING_SOON = [
  {
    emoji: "🏡",
    title: "Spain NLV Playbook",
    tagline: "Non-Lucrative Visa for passive income & retirees",
    description:
      "The step-by-step guide for moving to Spain on passive income ~ pension, investments, or rental income. No work required.",
    status: "coming-soon" as const,
    accent: "#8fa38d",
    bg: "#d4e0d3",
  },
  {
    emoji: "💼",
    title: "Beckham Law Deep Dive",
    tagline: "Spain's expat flat-tax regime, fully explained",
    description:
      "Who qualifies, how to apply within the first 6 months, and whether the 24% flat rate actually saves you money compared to standard IRPF.",
    status: "coming-soon" as const,
    accent: "#c9a84c",
    bg: "#f5ecd7",
  },
  {
    emoji: "🏆",
    title: "Citizenship Fast Track",
    tagline: "2-year path for PH & LATAM nationals",
    description:
      "If your country has historical ties with Spain, you can apply for citizenship after just 2 years. Full playbook for Filipino and Latin American nationals.",
    status: "coming-soon" as const,
    accent: "#7a8f90",
    bg: "#e0eaeb",
  },
  {
    emoji: "🌞",
    title: "The Soft Landing Playbook",
    tagline: "Life in Spain, from day one",
    description:
      "NIE appointments, bank accounts, healthcare registration, SIM cards, housing contracts, and schooling ~ everything you need to actually live here once the visa is stamped.",
    status: "coming-soon" as const,
    accent: "#c47c5a",
    bg: "#f5e6dc",
  },
];

// ── Lookup helpers ────────────────────────────
export function getPlaybook(slug: string): PlaybookConfig | undefined {
  return PLAYBOOKS.find((p) => p.slug === slug);
}

export function getWaitlistPlaybook(slug: string): PlaybookConfig | undefined {
  return WAITLIST_PLAYBOOKS.find((p) => p.slug === slug);
}

// ── Static params for Next.js generateStaticParams ──
export function getAvailableSlugs(): { slug: string }[] {
  return [
    ...PLAYBOOKS.map((p) => ({ slug: p.slug })),
    ...WAITLIST_PLAYBOOKS.map((p) => ({ slug: p.slug })),
  ];
}
