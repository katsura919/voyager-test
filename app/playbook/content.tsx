"use client";

import {
    BookOpen,
    CheckCircle,
    ChevronRight,
    Globe,
    FileText,
    Shield,
    Clock,
    Star,
    AlertCircle,
    ArrowRight,
    Lightbulb,
    MapPin,
    Phone,
    Mail,
    ExternalLink,
    Users,
    Zap,
    Sparkles
} from "lucide-react";
import Link from "next/link";

interface Props {
    userName?: string;
}

type ContentBlock =
    | { type: "intro"; text: string }
    | { type: "highlight"; label?: string; items: string[] }
    | { type: "checklist"; label?: string; items: string[] }
    | { type: "callout"; icon: string; text: string }
    | { type: "steps"; items: { step: string; title: string; desc: string }[] }
    | { type: "docList"; categories: { label: string; docs: string[] }[] }
    | { type: "linkList"; label?: string; items: { label: string; url: string }[] };

type Section = {
    id: string;
    emoji: string;
    title: string;
    content: ContentBlock[];
};

const sections: Section[] = [
    {
        id: "overview",
        emoji: "🇪🇸",
        title: "What is the Spain Digital Nomad Visa?",
        content: [
            {
                type: "intro",
                text: "The Spain Digital Nomad Visa (DNV), also known as the 'Startup Law Visa', is a residency permit that allows remote workers and freelancers from non-EU countries to live and work legally in Spain for up to 5 years.",
            },
            {
                type: "highlight",
                label: "Key Benefits",
                items: [
                    "Live legally in Spain for up to 5 years (renewable)",
                    "Travel freely within the Schengen Zone",
                    "Access to Spain's public healthcare system",
                    "Path to permanent residency after 5 years",
                    "Special tax regime (Beckham Law) — flat 24% tax rate for first 6 years",
                    "Bring your spouse and dependents under the same application",
                ],
            },
            {
                type: "callout",
                icon: "💡",
                text: "The DNV is processed through the Unidad de Grandes Empresas (UGE) — Spain's fast-track immigration office. Processing time is typically 20–30 business days from submission.",
            },
        ],
    },
    {
        id: "eligibility",
        emoji: "✅",
        title: "Who Qualifies?",
        content: [
            {
                type: "intro",
                text: "You must meet ALL of the following requirements to be eligible for the Spain DNV:",
            },
            {
                type: "checklist",
                items: [
                    "Non-EU/EEA national (EU citizens don't need this visa)",
                    "Work remotely for a company outside Spain OR be a freelancer with non-Spanish clients",
                    "Minimum income: €2,646/month (approx. 200% of Spain's minimum wage for 2025)",
                    "Clean criminal record from your home country (past 5 years)",
                    "No prior immigration violations in Spain",
                    "Valid health insurance covering Spain",
                    "Must have been working for your current employer for at least 3 months",
                ],
            },
            {
                type: "callout",
                icon: "⚠️",
                text: "Freelancers: You can qualify if your Spanish clients represent less than 20% of your total income. This is key — document it carefully.",
            },
        ],
    },
    {
        id: "documents",
        emoji: "📄",
        title: "Required Documents Checklist",
        content: [
            {
                type: "intro",
                text: "Gather these documents BEFORE starting your application. All foreign documents must be apostilled and translated into Spanish by a sworn translator.",
            },
            {
                type: "docList",
                categories: [
                    {
                        label: "Identity & Status",
                        docs: [
                            "Valid passport (minimum 1 year validity beyond intended stay)",
                            "Passport photos (biometric, white background, 32×26mm)",
                            "EX-01 Application form (completed and signed)",
                            "Modelo 790 Código 052 (fee payment receipt — approx. €73)",
                        ],
                    },
                    {
                        label: "Work & Income Proof",
                        docs: [
                            "Employment contract or freelance contracts showing remote work",
                            "Last 3 months payslips OR bank statements showing income",
                            "Letter from employer confirming remote work authorization",
                            "For freelancers: invoices + client contracts + tax filings",
                            "Company registration documents (apostilled)",
                        ],
                    },
                    {
                        label: "Criminal & Health",
                        docs: [
                            "Criminal background check (apostilled + Spanish translation)",
                            "Private health insurance policy valid in Spain (min. 6 months)",
                        ],
                    },
                    {
                        label: "Apostille & Translation",
                        docs: [
                            "All foreign documents need an Apostille stamp (Hague Apostille Convention)",
                            "Spanish sworn translation of all apostilled documents",
                            "Check if your country is a Hague Convention member",
                        ],
                    },
                ],
            },
            {
                type: "callout",
                icon: "📌",
                text: "Pro tip: Order your criminal background check FIRST — it takes the longest (2–6 weeks in most countries). The apostille adds another 1–3 weeks.",
            },
        ],
    },
    {
        id: "process",
        emoji: "🗺️",
        title: "Step-by-Step Application Process",
        content: [
            {
                type: "intro",
                text: "Follow this exact process. Skipping steps or submitting incomplete documents is the #1 reason for rejections.",
            },
            {
                type: "steps",
                items: [
                    {
                        step: "01",
                        title: "Order your criminal background check",
                        desc: "Apply from your home country. You need 5-year history. In the Philippines: NBI Clearance. In the US: FBI Apostille Service. Allow 4–8 weeks total including apostille.",
                    },
                    {
                        step: "02",
                        title: "Get your documents apostilled",
                        desc: "Submit background check + employment documents to the apostille authority in your country. For US: State Secretary of State office. For others: Ministry of Foreign Affairs.",
                    },
                    {
                        step: "03",
                        title: "Get sworn Spanish translations",
                        desc: "Find a jurado (sworn translator) accredited by the Spanish Ministry of Foreign Affairs. Costs €20–60 per document. Do NOT use Google Translate or unaccredited translators.",
                    },
                    {
                        step: "04",
                        title: "Set up a health insurance policy",
                        desc: "Must cover Spain, have no copays and no deductibles (\"sin copagos, sin franquicias\"). Recommended: Adeslas, Sanitas, or Cigna Global. Cost: €50–150/month.",
                    },
                    {
                        step: "05",
                        title: "Complete EX-01 form & pay fee",
                        desc: "Fill out the EX-01 form (available on sede.administracionespublicas.gob.es). Pay the Modelo 790-052 fee (~€73) at any Spanish bank or online. Keep the receipt.",
                    },
                    {
                        step: "06",
                        title: "Request UGE appointment (DigiCert)",
                        desc: "The UGE requires digital certificate (Cl@ve or FNMT). Book your appointment via sedes.sepe.es. Appointments fill up fast — check daily at 8am Madrid time.",
                    },
                    {
                        step: "07",
                        title: "Submit application to UGE",
                        desc: "Submit online via sede.administracionespublicas.gob.es using your digital certificate, or in person at the UGE office in Madrid. Online is faster and strongly recommended.",
                    },
                    {
                        step: "08",
                        title: "Wait for resolution (20–30 business days)",
                        desc: "Check status via the UGE online portal. You'll receive an email notification. If approved, you'll get a resolution letter to collect your visa.",
                    },
                    {
                        step: "09",
                        title: "Collect visa & enter Spain",
                        desc: "Take the resolution to the Spanish consulate in your country to collect your D-Visa sticker. Enter Spain within 6 months.",
                    },
                    {
                        step: "10",
                        title: "Apply for TIE (Residency Card)",
                        desc: "Within 30 days of entering Spain, book a NIE + TIE appointment at your local Policía Nacional. This card is your official residency card.",
                    },
                ],
            },
        ],
    },
    {
        id: "uge-tips",
        emoji: "🏛️",
        title: "UGE Insider Tips",
        content: [
            {
                type: "intro",
                text: "The UGE (Unidad de Grandes Empresas) is where your application actually goes. Here's what most guides don't tell you:",
            },
            {
                type: "highlight",
                label: "What UGE Officers Look For",
                items: [
                    "Consistency — your income proof must match across payslips, contracts, and bank statements",
                    "The 3-month minimum employment rule is strictly enforced — do NOT apply early",
                    "Health insurance must explicitly say 'sin copagos, sin franquicias' in Spanish",
                    "Your employer letter must be on official company letterhead with a real signature",
                    "Apostille dates must be within 3 months of application submission",
                ],
            },
            {
                type: "callout",
                icon: "🔑",
                text: "The UGE has a maximum 45 business days to respond. If you don't hear back, it's considered approved by administrative silence ('silencio administrativo positivo'). Document the submission date.",
            },
            {
                type: "linkList",
                label: "Official UGE Links",
                items: [
                    {
                        label: "UGE Online Portal (Application Submission)",
                        url: "https://sede.administracionespublicas.gob.es/",
                    },
                    {
                        label: "DNV Official Requirements (Ministerio de Inclusión)",
                        url: "https://www.inclusion.gob.es/",
                    },
                    {
                        label: "Check FNMT DigiCert (Digital Certificate)",
                        url: "https://www.sede.fnmt.gob.es/",
                    },
                    {
                        label: "Spanish Accredited Sworn Translators Registry",
                        url: "https://www.exteriores.gob.es/",
                    },
                ],
            },
        ],
    },
    {
        id: "tax",
        emoji: "💰",
        title: "Tax Considerations (Beckham Law)",
        content: [
            {
                type: "intro",
                text: "Spain's special expat tax regime — known as the Beckham Law (Régimen Especial de Trabajadores Desplazados) — is one of the most valuable benefits of the DNV.",
            },
            {
                type: "highlight",
                label: "Beckham Law at a Glance",
                items: [
                    "Flat 24% income tax rate (vs. up to 47% standard progressive rate)",
                    "Applies only to Spanish-source income (foreign income often exempt)",
                    "Valid for 6 tax years",
                    "Must apply within 6 months of registering as a Spanish tax resident",
                    "Form: Modelo 149",
                    "Not automatic — you must actively elect this regime",
                ],
            },
            {
                type: "callout",
                icon: "⚠️",
                text: "Consult a Spanish tax advisor (gestor or asesor fiscal) before deciding. The Beckham Law is excellent for high earners but may not benefit everyone, especially those with complex freelance income structures.",
            },
        ],
    },
    {
        id: "settling",
        emoji: "🏠",
        title: "Settling In Spain — First 30 Days",
        content: [
            {
                type: "intro",
                text: "Once you arrive in Spain, here's your action checklist for the first month:",
            },
            {
                type: "checklist",
                items: [
                    "Register at your local Ayuntamiento (town hall) — Empadronamiento certificate",
                    "Open a Spanish bank account (Sabadell, BBVA, or N26 are expat-friendly)",
                    "Book NIE + TIE appointment at Policía Nacional (book as soon as you land)",
                    "Get a Spanish SIM card (Orange, Vodafone, or Movistar)",
                    "Register with a local health center (Centro de Salud) using your TIE",
                    "Elect Beckham Law tax regime if applicable (Modelo 149, within 6 months)",
                    "Join expat communities: Internations, Facebook groups, local meetups",
                ],
            },
            {
                type: "callout",
                icon: "🏘️",
                text: "Best cities for digital nomads in Spain: Barcelona (vibrant but expensive), Valencia (best value), Madrid (business hub), Málaga (growing nomad scene), Las Palmas de Gran Canaria (best weather + low cost).",
            },
        ],
    },
];

export default function PlaybookContent({ userName }: Props) {
    return (
        <main className="min-h-screen bg-[#f9f5f2]">
            {/* Top bar */}
            <nav className="sticky top-0 z-50 px-6 py-4 bg-white/80 backdrop-blur-md border-b border-[#e7ddd3] flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-[#e3a99c]" />
                    <span className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#3a3a3a]">
                        Happy Voyager
                    </span>
                </Link>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e3a99c]/10 border border-[#e3a99c]/20">
                    <CheckCircle className="w-3.5 h-3.5 text-[#e3a99c]" />
                    <span className="text-xs font-semibold text-[#e3a99c] font-[family-name:var(--font-body)]">
                        Playbook Pro — Full Access
                    </span>
                </div>
            </nav>

            {/* Hero */}
            <div className="bg-[#3a3a3a] text-white px-6 py-16 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#3a3a3a] via-[#4a4a4a] to-[#3a3a3a]" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#e3a99c]/10 rounded-full blur-[80px]" />
                <div className="relative z-10 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6">
                        <Sparkles className="w-3.5 h-3.5 text-[#e3a99c]" />
                        <span className="text-xs font-bold tracking-wider text-[#e3a99c] uppercase font-[family-name:var(--font-body)]">
                            Spain Digital Nomad Visa
                        </span>
                    </div>
                    <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-6xl font-bold mb-4 leading-tight">
                        {userName ? `Welcome, ${userName}! 👋` : "Your Playbook Pro 🇪🇸"}
                    </h1>
                    <p className="font-[family-name:var(--font-body)] text-white/70 text-lg max-w-xl mx-auto leading-relaxed">
                        The complete, no-fluff system to get your Spain DNV — from docs to
                        doorstep.
                    </p>

                    {/* Stats */}
                    <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg mx-auto">
                        {[
                            { value: "7", label: "Sections" },
                            { value: "10", label: "Process Steps" },
                            { value: "∞", label: "Lifetime Updates" },
                        ].map(({ value, label }) => (
                            <div
                                key={label}
                                className="bg-white/10 rounded-2xl p-4 border border-white/10"
                            >
                                <div className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#e3a99c]">
                                    {value}
                                </div>
                                <div className="font-[family-name:var(--font-body)] text-xs text-white/60 mt-1">
                                    {label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Table of Contents */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
                <div className="bg-white rounded-[2rem] p-8 border border-[#e7ddd3] shadow-sm mb-12">
                    <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#3a3a3a] mb-6 flex items-center gap-2">
                        <FileText className="w-5 h-5 text-[#e3a99c]" />
                        Table of Contents
                    </h2>
                    <div className="space-y-2">
                        {sections.map((section, i) => (
                            <a
                                key={section.id}
                                href={`#${section.id}`}
                                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#f9f5f2] transition-colors group"
                            >
                                <span className="text-lg">{section.emoji}</span>
                                <span className="font-[family-name:var(--font-body)] text-[#3a3a3a] group-hover:text-[#e3a99c] transition-colors flex-1 font-medium">
                                    {i + 1}. {section.title}
                                </span>
                                <ChevronRight className="w-4 h-4 text-[#aaaaaa] group-hover:text-[#e3a99c] transition-colors" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Content sections */}
                <div className="space-y-12">
                    {sections.map((section, sIdx) => (
                        <section
                            key={section.id}
                            id={section.id}
                            className="scroll-mt-24"
                        >
                            {/* Section header */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[#3a3a3a] text-2xl flex-shrink-0">
                                    {section.emoji}
                                </div>
                                <div>
                                    <span className="font-[family-name:var(--font-body)] text-xs font-bold text-[#e3a99c] uppercase tracking-widest">
                                        Section {sIdx + 1}
                                    </span>
                                    <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-[#3a3a3a] leading-tight">
                                        {section.title}
                                    </h2>
                                </div>
                            </div>

                            <div className="space-y-6">
                                {(section.content as ContentBlock[]).map((block: ContentBlock, bIdx) => {
                                    if (block.type === "intro") {
                                        return (
                                            <p
                                                key={bIdx}
                                                className="font-[family-name:var(--font-body)] text-[#6b6b6b] leading-relaxed text-base"
                                            >
                                                {block.text}
                                            </p>
                                        );
                                    }

                                    if (block.type === "callout") {
                                        return (
                                            <div
                                                key={bIdx}
                                                className="flex items-start gap-4 p-5 rounded-2xl bg-[#e3a99c]/8 border border-[#e3a99c]/20"
                                            >
                                                <span className="text-2xl flex-shrink-0">
                                                    {block.icon}
                                                </span>
                                                <p className="font-[family-name:var(--font-body)] text-[#6b6b6b] leading-relaxed text-sm">
                                                    {block.text}
                                                </p>
                                            </div>
                                        );
                                    }

                                    if (block.type === "highlight" || block.type === "checklist") {
                                        return (
                                            <div
                                                key={bIdx}
                                                className="bg-white rounded-2xl p-6 border border-[#e7ddd3]"
                                            >
                                                {block.label && (
                                                    <h3 className="font-[family-name:var(--font-heading)] text-base font-bold text-[#3a3a3a] mb-4">
                                                        {block.label}
                                                    </h3>
                                                )}
                                                <ul className="space-y-3">
                                                    {block.items.map((item: string, i: number) => (
                                                        <li key={i} className="flex items-start gap-3">
                                                            <CheckCircle className="w-4 h-4 text-[#e3a99c] flex-shrink-0 mt-0.5" />
                                                            <span className="font-[family-name:var(--font-body)] text-sm text-[#6b6b6b] leading-relaxed">
                                                                {item}
                                                            </span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        );
                                    }

                                    if (block.type === "steps") {
                                        return (
                                            <div key={bIdx} className="space-y-4">
                                                {block.items.map((step: { step: string; title: string; desc: string }, i: number) => (
                                                    <div
                                                        key={i}
                                                        className="flex gap-4 bg-white rounded-2xl p-5 border border-[#e7ddd3] hover:shadow-md transition-shadow"
                                                    >
                                                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#3a3a3a] flex items-center justify-center text-white font-bold font-[family-name:var(--font-heading)] text-sm">
                                                            {step.step}
                                                        </div>
                                                        <div>
                                                            <h4 className="font-[family-name:var(--font-heading)] font-bold text-[#3a3a3a] mb-1">
                                                                {step.title}
                                                            </h4>
                                                            <p className="font-[family-name:var(--font-body)] text-sm text-[#6b6b6b] leading-relaxed">
                                                                {step.desc}
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        );
                                    }

                                    if (block.type === "docList") {
                                        return (
                                            <div key={bIdx} className="space-y-4">
                                                {block.categories.map((cat: { label: string; docs: string[] }, i: number) => (
                                                    <div
                                                        key={i}
                                                        className="bg-white rounded-2xl p-5 border border-[#e7ddd3]"
                                                    >
                                                        <h4 className="font-[family-name:var(--font-heading)] font-bold text-[#3a3a3a] mb-3 text-sm uppercase tracking-wider">
                                                            📁 {cat.label}
                                                        </h4>
                                                        <ul className="space-y-2">
                                                            {cat.docs.map((doc, j) => (
                                                                <li
                                                                    key={j}
                                                                    className="flex items-start gap-2.5"
                                                                >
                                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#e3a99c] flex-shrink-0 mt-2" />
                                                                    <span className="font-[family-name:var(--font-body)] text-sm text-[#6b6b6b]">
                                                                        {doc}
                                                                    </span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        );
                                    }

                                    if (block.type === "linkList") {
                                        return (
                                            <div
                                                key={bIdx}
                                                className="bg-white rounded-2xl p-6 border border-[#e7ddd3]"
                                            >
                                                <h3 className="font-[family-name:var(--font-heading)] text-base font-bold text-[#3a3a3a] mb-4">
                                                    {block.label}
                                                </h3>
                                                <div className="space-y-2">
                                                    {block.items.map((link: { label: string; url: string }, i: number) => (
                                                        <a
                                                            key={i}
                                                            href={link.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center gap-2 px-4 py-3 rounded-xl hover:bg-[#f9f5f2] group transition-colors"
                                                        >
                                                            <ExternalLink className="w-3.5 h-3.5 text-[#e3a99c] flex-shrink-0" />
                                                            <span className="font-[family-name:var(--font-body)] text-sm text-[#3a3a3a] group-hover:text-[#e3a99c] transition-colors">
                                                                {link.label}
                                                            </span>
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        );
                                    }

                                    return null;
                                })}
                            </div>
                        </section>
                    ))}
                </div>

                {/* Footer CTA */}
                <div className="mt-16 bg-[#3a3a3a] rounded-[2rem] p-10 text-center text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#3a3a3a] to-[#4a4a4a]" />
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#e3a99c]/10 rounded-full blur-[60px]" />
                    <div className="relative z-10">
                        <div className="text-4xl mb-4">🎉</div>
                        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-3">
                            You&apos;re ready to move to Spain!
                        </h2>
                        <p className="font-[family-name:var(--font-body)] text-white/70 max-w-md mx-auto mb-8 leading-relaxed">
                            Need hands-on help? Upgrade to a strategy session or full VIP
                            concierge service.
                        </p>
                        <Link
                            href="/#pricing"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#e3a99c] text-white font-bold font-[family-name:var(--font-body)] hover:bg-white hover:text-[#3a3a3a] transition-all duration-300 shadow-lg"
                        >
                            View Upgrade Options
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
