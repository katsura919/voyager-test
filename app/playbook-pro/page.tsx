"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Lock,
  Unlock,
  CheckCircle2,
  ExternalLink,
  ChevronDown,
  ChevronRight,
  Clock,
  ArrowRight,
  X,
  Zap,
  Star,
  BookOpen,
  Plane,
  FileText,
  Globe,
  TrendingUp,
  Trophy,
  RefreshCw,
  AlertTriangle,
} from "lucide-react";

/* ─────────────────────────────────────────────
   Curriculum Data
───────────────────────────────────────────── */
const phases = [
  {
    id: "qualify",
    phase: "Phase 0",
    title: "Qualify",
    emoji: "🎯",
    description: "Confirm you're eligible before you spend a minute on paperwork.",
    accent: "#8fa38d",
    bg: "#d4e0d3",
    icon: <CheckCircle2 className="w-4 h-4" />,
    lessons: [
      {
        id: "l01",
        number: "01",
        title: "Is the DNV Right for You?",
        description:
          "Take the 2-minute eligibility assessment. Check income type, employment structure, and your current Schengen status before touching a single document.",
        bullets: [
          "Minimum income threshold check (€2,849/mo)",
          "Employment type ~ employee vs freelancer vs company owner",
          "Current visa status and Schengen day count",
          "Disqualifying factors most people miss",
        ],
        time: "2 min",
        tag: "Interactive Tool",
        free: true,
        link: "/assessment",
      },
      {
        id: "l02",
        number: "02",
        title: "Understanding Spain's Visa Landscape",
        description:
          "DNV vs NLV vs Student vs Tourist ~ understand all four options, the key differences, and which path fits your income, lifestyle, and long-term goals.",
        bullets: [
          "Side-by-side comparison of all Spain visa types",
          "Work rights for each visa",
          "Which visas count toward residency and citizenship",
          "2-year citizenship path for PH and LATAM nationals",
        ],
        time: "8 min",
        tag: "Guide",
        free: true,
        link: "/digital-nomad-visa",
      },
    ],
  },
  {
    id: "prepare",
    phase: "Phase 1",
    title: "Prepare",
    emoji: "📋",
    description: "Build your application file before you touch the portal.",
    accent: "#e3a99c",
    bg: "#f2d6c9",
    icon: <FileText className="w-4 h-4" />,
    lessons: [
      {
        id: "l03",
        number: "03",
        title: "The Master Document Checklist",
        description:
          "Every document you need in the exact order UGE expects them ~ with apostille and sworn translation requirements flagged clearly.",
        bullets: [
          "Full 18-item document checklist",
          "Apostille requirements by document type",
          "Which documents need sworn translation",
          "Self-employment proof requirements",
        ],
        time: "10 min",
        tag: "Checklist",
        free: false,
        link: "/document-checklist",
      },
      {
        id: "l04",
        number: "04",
        title: "Proving Your Income the Right Way",
        description:
          "What counts as qualifying income, what doesn't, and exactly how to package your proof so UGE reviewers immediately understand your financial picture.",
        bullets: [
          "Employee vs freelancer income documentation",
          "Bank statement formatting and currency conversion",
          "How to handle multiple income sources",
          "The 3-month average trap and how to avoid it",
        ],
        time: "12 min",
        tag: "Deep Dive",
        free: false,
        link: null,
      },
      {
        id: "l05",
        number: "05",
        title: "Health Insurance ~ What Actually Qualifies",
        description:
          "Not all health insurance passes UGE review. Learn the exact coverage requirements and which international providers Spanish immigration accepts.",
        bullets: [
          "Minimum coverage requirements",
          "Co-pay and deductible rules",
          "Approved international providers",
          "What the certificate must say to pass review",
        ],
        time: "8 min",
        tag: "Deep Dive",
        free: false,
        link: null,
      },
      {
        id: "l06",
        number: "06",
        title: "Criminal Background Check & Apostille",
        description:
          "How to order your background check, get it apostilled, have it sworn-translated, and time it so it doesn't expire before your submission date.",
        bullets: [
          "FBI vs state-level check (US applicants)",
          "Country-specific apostille process",
          "Translation requirements and valid translators",
          "Timing so your 6-month window doesn't close",
        ],
        time: "10 min",
        tag: "Step-by-Step",
        free: false,
        link: null,
      },
      {
        id: "l07",
        number: "07",
        title: "Schengen Timing Strategy",
        description:
          "Plan your application window so you don't run out of legal days in Spain before your visa is approved. This is where most people panic ~ unnecessarily.",
        bullets: [
          "90/180-day rule explained clearly",
          "When to submit based on your entry date",
          "How to extend legally if you're running low",
          "Use the Schengen Day Calculator live",
        ],
        time: "5 min",
        tag: "Strategy + Tool",
        free: false,
        link: "/schengen-calculator",
      },
    ],
  },
  {
    id: "apply",
    phase: "Phase 2",
    title: "Apply",
    emoji: "📤",
    description: "Submit a clean, complete application that doesn't come back with a requerimiento.",
    accent: "#7a8f90",
    bg: "#e0eaeb",
    icon: <Plane className="w-4 h-4" />,
    lessons: [
      {
        id: "l08",
        number: "08",
        title: "UGE vs Consulate ~ Which Route Is Yours",
        description:
          "Apply in Spain through UGE, or from home through your consulate? The right answer depends on where you are and how much time you have.",
        bullets: [
          "UGE: apply inside Spain (in-country route)",
          "Consulate: apply from your home country",
          "Processing time differences",
          "Which route gives you more control",
        ],
        time: "8 min",
        tag: "Decision Guide",
        free: false,
        link: null,
      },
      {
        id: "l09",
        number: "09",
        title: "Step-by-Step Application Walkthrough",
        description:
          "The exact system Abie used. Every form, every field, every upload ~ with the common mistakes that trigger requerimientos and how to avoid them.",
        bullets: [
          "Form-by-form walkthrough with screenshots",
          "File format and naming requirements",
          "How to handle the digital signature requirement",
          "What to do if you get a requerimiento",
        ],
        time: "20 min",
        tag: "Core Lesson",
        free: false,
        link: "/how-to-apply-spain-digital-nomad-visa",
      },
      {
        id: "l10",
        number: "10",
        title: "DNV 2026 Updates ~ What's Changed",
        description:
          "UGE keeps updating their requirements. This lesson covers exactly what changed in 2026 and how it affects your application right now.",
        bullets: [
          "New income threshold calculations",
          "Updated document format requirements",
          "Changes to the UGE online portal",
          "What reviewers are scrutinizing most in 2026",
        ],
        time: "10 min",
        tag: "Updated 2026",
        free: false,
        link: "/dnv-updates-2026",
      },
      {
        id: "l11",
        number: "11",
        title: "Common Rejection Reasons & How to Avoid Them",
        description:
          "The 7 most common requerimientos and visa suspensions ~ and how to bulletproof your application against every one of them before you submit.",
        bullets: [
          "Income documentation gaps",
          "Insurance certificate wording failures",
          "Criminal background timing errors",
          "How to respond to a requerimiento fast",
        ],
        time: "15 min",
        tag: "Risk Management",
        free: false,
        link: null,
      },
    ],
  },
  {
    id: "arrive",
    phase: "Phase 3",
    title: "Arrive",
    emoji: "✈️",
    description: "Land in Spain and complete your legal setup within the correct windows.",
    accent: "#8fa38d",
    bg: "#d4e0d3",
    icon: <Globe className="w-4 h-4" />,
    lessons: [
      {
        id: "l12",
        number: "12",
        title: "Your First 30 Days in Spain",
        description:
          "A day-by-day action checklist for your first month ~ empadronamiento, Spanish bank account, SIM card, and getting your NIE sorted before any deadline.",
        bullets: [
          "Empadronamiento (address registration) ~ day 1 priority",
          "Opening a Spanish bank account as a foreigner",
          "SIM card and internet setup",
          "30-day countdown to TIE appointment",
        ],
        time: "12 min",
        tag: "Action Plan",
        free: false,
        link: null,
      },
      {
        id: "l13",
        number: "13",
        title: "NIE & TIE Appointment Guide",
        description:
          "How to book your NIE and TIE appointments at the police station, what to bring, what to expect, and how to handle long wait times.",
        bullets: [
          "NIE vs TIE ~ what each one is and when you need it",
          "How to book the appointment (cita previa)",
          "Exact documents to bring on the day",
          "What to do if your appointment is months away",
        ],
        time: "10 min",
        tag: "Step-by-Step",
        free: false,
        link: "/appointments",
      },
      {
        id: "l14",
        number: "14",
        title: "Document Translations ~ What Needs Translating",
        description:
          "Not every document needs a sworn translation. Learn what does, how to get it certified, and who is legally authorized to do it in Spain.",
        bullets: [
          "Which documents require sworn translation",
          "How to find an authorized sworn translator (jurado)",
          "Typical costs and turnaround times",
          "When a notarized translation isn't enough",
        ],
        time: "8 min",
        tag: "Guide",
        free: false,
        link: "/translations",
      },
    ],
  },
  {
    id: "maintain",
    phase: "Phase 4",
    title: "Maintain",
    emoji: "🔄",
    description: "Keep your visa valid, your residency clean, and your taxes sorted.",
    accent: "#e3a99c",
    bg: "#f2d6c9",
    icon: <RefreshCw className="w-4 h-4" />,
    lessons: [
      {
        id: "l15",
        number: "15",
        title: "DNV Renewal ~ The Complete Process",
        description:
          "What changes at renewal vs initial application, which documents you need to gather again, and how to renew without any gaps in your residency continuity.",
        bullets: [
          "Renewal timeline ~ when to start preparing",
          "Documents that expire and need refreshing",
          "Income requirements at renewal",
          "How to maintain continuous residency for citizenship",
        ],
        time: "15 min",
        tag: "Guide",
        free: false,
        link: null,
      },
      {
        id: "l16",
        number: "16",
        title: "Spain Tax Obligations for Digital Nomads",
        description:
          "The 183-day tax residency rule, when you become a Spanish tax resident, what you owe, and when you need a gestor to handle your Modelo 100.",
        bullets: [
          "183-day rule and when it triggers",
          "IRPF vs worldwide income reporting",
          "Modelo 720 foreign asset declaration",
          "When to hire a gestor vs DIY",
        ],
        time: "20 min",
        tag: "Tax Strategy",
        free: false,
        link: null,
      },
      {
        id: "l17",
        number: "17",
        title: "Beckham Law ~ Is It Worth It?",
        description:
          "Spain's expat flat-tax regime explained ~ who qualifies, how to apply within the first 6 months, and whether the 24% flat rate actually saves you money.",
        bullets: [
          "Who qualifies for Beckham Law",
          "How to apply (Modelo 149) within the deadline",
          "24% flat rate vs progressive IRPF comparison",
          "The catch ~ worldwide income exclusions",
        ],
        time: "12 min",
        tag: "Tax Strategy",
        free: false,
        link: null,
      },
    ],
  },
  {
    id: "citizenship",
    phase: "Phase 5",
    title: "Become Spanish",
    emoji: "🏆",
    description: "The endgame. EU passport. Schengen for life.",
    accent: "#c9a84c",
    bg: "#f5ecd7",
    icon: <Trophy className="w-4 h-4" />,
    lessons: [
      {
        id: "l18",
        number: "18",
        title: "The Road to Permanent Residency",
        description:
          "After 5 years of continuous legal residency, you qualify for larga duración (permanent residency). Here's exactly how to apply and what not to mess up.",
        bullets: [
          "5-year continuous residency requirements",
          "What counts as a 'gap' that resets your clock",
          "Documents for permanent residency application",
          "Permanent residency vs citizenship ~ what's the difference",
        ],
        time: "15 min",
        tag: "Guide",
        free: false,
        link: null,
      },
      {
        id: "l19",
        number: "19",
        title: "Spanish Citizenship ~ Full Timeline",
        description:
          "From DELE language test to oath ceremony ~ the complete citizenship application process in the correct order.",
        bullets: [
          "DELE A2 language requirement and test prep",
          "CCSE civic knowledge exam",
          "Application via MiCiudad portal",
          "Timeline from submission to passport",
        ],
        time: "20 min",
        tag: "Core Lesson",
        free: false,
        link: "/road-to-spanish-citizenship",
      },
      {
        id: "l20",
        number: "20",
        title: "The 2-Year Path (Philippines & LATAM)",
        description:
          "If your country has a historical tie with Spain, you can apply for citizenship after just 2 years ~ not 10. Full guide for Filipino and Latin American nationals.",
        bullets: [
          "22 countries that qualify for the 2-year path",
          "Iberoamerican vs Sephardic distinctions",
          "How to count your 2 years correctly",
          "What a live countdown to your citizenship date looks like",
        ],
        time: "15 min",
        tag: "Shortcut",
        free: false,
        link: "/road-to-spanish-citizenship",
      },
    ],
  },
];

const totalLessons = phases.reduce((acc, p) => acc + p.lessons.length, 0);
const freeLessons = phases.reduce(
  (acc, p) => acc + p.lessons.filter((l) => l.free).length,
  0
);

/* ─────────────────────────────────────────────
   Tag color helper
───────────────────────────────────────────── */
function tagStyle(tag: string) {
  if (tag.includes("Tool") || tag.includes("Interactive"))
    return "bg-[#d4e0d3] text-[#5d7a5b]";
  if (tag.includes("Core")) return "bg-[#f2d6c9] text-[#c47a6a]";
  if (tag.includes("Tax")) return "bg-[#f5ecd7] text-[#9a7a3a]";
  if (tag.includes("Updated")) return "bg-[#e0eaeb] text-[#4a7070]";
  if (tag.includes("Shortcut")) return "bg-[#f2d6c9] text-[#e3a99c]";
  return "bg-[#f0ebe6] text-[#7a7a7a]";
}

/* ─────────────────────────────────────────────
   Unlock Modal
───────────────────────────────────────────── */
function UnlockModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#f0ebe6] flex items-center justify-center hover:bg-[#e7ddd3] transition-colors"
        >
          <X className="w-4 h-4 text-[#6b6b6b]" />
        </button>

        <div className="w-12 h-12 rounded-2xl bg-[#f2d6c9] flex items-center justify-center mx-auto mb-5">
          <Zap className="w-6 h-6 text-[#e3a99c]" />
        </div>

        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#3a3a3a] text-center mb-2">
          Unlock Playbook Pro
        </h2>
        <p className="text-[#6b6b6b] text-sm text-center mb-6 leading-relaxed">
          Get full access to all {totalLessons} lessons ~ from your first document to your Spanish passport.
        </p>

        <ul className="space-y-2 mb-7">
          {[
            `${totalLessons} lessons across 6 phases`,
            "Application → Citizenship, step by step",
            "Links to every tool, checklist, and guide",
            "Tax strategy + Beckham Law breakdown",
            "2-year citizenship path for PH & LATAM",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-sm text-[#3a3a3a]">
              <CheckCircle2 className="w-4 h-4 text-[#8fa38d] flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <Link
          href="/#pricing"
          onClick={onClose}
          className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-[#3a3a3a] text-white font-bold hover:bg-[#e3a99c] transition-colors duration-300 mb-3"
        >
          <Star className="w-4 h-4" />
          See Packages & Pricing
        </Link>
        <Link
          href="https://calendly.com/abie-gamao/spain-dnv"
          onClick={onClose}
          className="flex items-center justify-center gap-2 w-full py-3 rounded-full border border-[#e7ddd3] text-[#6b6b6b] text-sm font-medium hover:bg-[#f9f5f2] transition-colors duration-300"
        >
          Book a Strategy Call First
        </Link>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Page
───────────────────────────────────────────── */
export default function PlaybookProPage() {
  const [activePhase, setActivePhase] = useState("qualify");
  const [expandedPhases, setExpandedPhases] = useState<string[]>(["qualify"]);
  const [showModal, setShowModal] = useState(false);

  const togglePhase = (id: string) => {
    setExpandedPhases((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const handleLessonClick = (lesson: { free: boolean; link: string | null }) => {
    if (!lesson.free) {
      setShowModal(true);
    }
  };

  const scrollToPhase = (id: string) => {
    setActivePhase(id);
    const el = document.getElementById(`phase-${id}`);
    if (el) {
      const offset = 100;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <Header darkBg />
      {showModal && <UnlockModal onClose={() => setShowModal(false)} />}

      <div className="min-h-screen bg-[#f9f5f2] font-sans text-[#3a3a3a]">

        {/* ── Page Hero ──────────────────────────────────────────── */}
        <div className="bg-[#3a3a3a] text-white pt-28 pb-12 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span className="text-[10px] font-bold tracking-widest uppercase bg-[#e3a99c]/20 text-[#e3a99c] border border-[#e3a99c]/30 px-3 py-1.5 rounded-full">
                Playbook Pro
              </span>
              <span className="text-[10px] font-bold tracking-widest uppercase bg-white/10 text-white/60 px-3 py-1.5 rounded-full">
                Application → Citizenship
              </span>
              <span className="text-[10px] font-bold tracking-widest uppercase bg-[#8fa38d]/20 text-[#8fa38d] border border-[#8fa38d]/30 px-3 py-1.5 rounded-full">
                Updated 2026
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Spain DNV Playbook Pro
            </h1>
            <p className="text-white/60 text-lg max-w-2xl leading-relaxed mb-8">
              The complete system for getting Spain's Digital Nomad Visa, building your life in Spain, and becoming a Spanish citizen ~ all in one place, step by step.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-6">
              {[
                { value: `${totalLessons}`, label: "Lessons" },
                { value: "6", label: "Phases" },
                { value: `${freeLessons}`, label: "Free to access" },
                { value: "~2 hrs", label: "Total read time" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-bold text-white">{s.value}</p>
                  <p className="text-xs text-white/40 uppercase tracking-widest">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Docs Layout ────────────────────────────────────────── */}
        <div className="max-w-5xl mx-auto flex gap-0 lg:gap-8 px-0 lg:px-6 py-8">

          {/* ── Sidebar ──────────────────────────────────────────── */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 bg-[#3a3a3a] rounded-2xl overflow-hidden">
              <div className="px-4 py-4 border-b border-white/10">
                <p className="text-[10px] font-bold tracking-widest text-white/40 uppercase">
                  Course Navigation
                </p>
              </div>
              <nav className="py-2 max-h-[calc(100vh-12rem)] overflow-y-auto">
                {phases.map((phase) => {
                  const isExpanded = expandedPhases.includes(phase.id);
                  const isActive = activePhase === phase.id;
                  return (
                    <div key={phase.id}>
                      {/* Phase header */}
                      <button
                        onClick={() => {
                          togglePhase(phase.id);
                          scrollToPhase(phase.id);
                        }}
                        className={`w-full flex items-center justify-between px-4 py-2.5 transition-colors ${
                          isActive
                            ? "bg-white/10 text-white"
                            : "text-white/60 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className="text-base flex-shrink-0">{phase.emoji}</span>
                          <div className="text-left min-w-0">
                            <p className="text-[9px] font-bold tracking-widest uppercase text-white/30">
                              {phase.phase}
                            </p>
                            <p className="text-xs font-semibold leading-tight truncate">
                              {phase.title}
                            </p>
                          </div>
                        </div>
                        <ChevronDown
                          className={`w-3.5 h-3.5 flex-shrink-0 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                        />
                      </button>

                      {/* Lessons list */}
                      {isExpanded && (
                        <div className="ml-4 border-l border-white/10 py-1">
                          {phase.lessons.map((lesson) => (
                            <button
                              key={lesson.id}
                              onClick={() => {
                                if (lesson.free) {
                                  if (lesson.link) window.location.href = lesson.link;
                                } else {
                                  setShowModal(true);
                                }
                              }}
                              className="w-full flex items-center gap-2 pl-3 pr-2 py-1.5 text-left group"
                            >
                              {lesson.free ? (
                                <span className="w-3.5 h-3.5 rounded-full border border-[#8fa38d] bg-[#8fa38d]/20 flex-shrink-0" />
                              ) : (
                                <Lock className="w-3 h-3 text-white/20 flex-shrink-0" />
                              )}
                              <span className="text-[11px] text-white/40 group-hover:text-white/70 transition-colors leading-tight">
                                {lesson.number}. {lesson.title}
                              </span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>

              {/* Unlock CTA */}
              <div className="p-4 border-t border-white/10">
                <button
                  onClick={() => setShowModal(true)}
                  className="w-full py-2.5 rounded-xl bg-[#e3a99c] text-white text-xs font-bold hover:bg-[#d38b7b] transition-colors flex items-center justify-center gap-2"
                >
                  <Zap className="w-3.5 h-3.5" />
                  Unlock All {totalLessons} Lessons
                </button>
              </div>
            </div>
          </aside>

          {/* ── Main Content ─────────────────────────────────────── */}
          <main className="flex-1 min-w-0 px-4 lg:px-0 space-y-6">

            {/* Mobile phase tabs */}
            <div className="flex lg:hidden gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {phases.map((phase) => (
                <button
                  key={phase.id}
                  onClick={() => scrollToPhase(phase.id)}
                  className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                    activePhase === phase.id
                      ? "bg-[#3a3a3a] text-white"
                      : "bg-white border border-[#e7ddd3] text-[#6b6b6b] hover:border-[#e3a99c]"
                  }`}
                >
                  {phase.emoji} {phase.title}
                </button>
              ))}
            </div>

            {/* Free access banner */}
            <div className="bg-[#d4e0d3]/50 border border-[#8fa38d]/40 rounded-2xl px-5 py-4 flex items-start gap-3">
              <Unlock className="w-4 h-4 text-[#8fa38d] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-[#3a3a3a]">Phase 0 is free</p>
                <p className="text-xs text-[#6b6b6b] mt-0.5">
                  Start with the eligibility check and visa overview ~ no purchase needed. Unlock all {totalLessons - freeLessons} remaining lessons with Playbook Pro.
                </p>
              </div>
              <button
                onClick={() => setShowModal(true)}
                className="flex-shrink-0 text-[10px] font-bold uppercase tracking-widest text-[#e3a99c] hover:underline whitespace-nowrap"
              >
                Unlock →
              </button>
            </div>

            {/* ── Phases ─────────────────────────────────────────── */}
            {phases.map((phase, phaseIdx) => (
              <section key={phase.id} id={`phase-${phase.id}`}>
                {/* Phase header */}
                <div
                  className="rounded-2xl px-6 py-5 mb-4"
                  style={{ backgroundColor: phase.bg }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[9px] font-bold tracking-widest uppercase px-2 py-1 rounded-full bg-white/60 text-[#3a3a3a]">
                          {phase.phase}
                        </span>
                        <span className="text-[9px] font-bold tracking-widest uppercase text-[#6b6b6b]">
                          {phase.lessons.length} lessons
                        </span>
                      </div>
                      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#3a3a3a] mb-1">
                        {phase.emoji} {phase.title}
                      </h2>
                      <p className="text-sm text-[#6b6b6b]">{phase.description}</p>
                    </div>
                    {phaseIdx > 0 && (
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/60 flex items-center justify-center">
                        <Lock className="w-4 h-4 text-[#6b6b6b]" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Lesson cards */}
                <div className="space-y-3">
                  {phase.lessons.map((lesson) => (
                    <div
                      key={lesson.id}
                      className={`relative bg-white border rounded-2xl overflow-hidden transition-all duration-200 ${
                        lesson.free
                          ? "border-[#e7ddd3] hover:border-[#e3a99c] hover:shadow-md cursor-pointer"
                          : "border-[#e7ddd3] cursor-pointer"
                      }`}
                      onClick={() => handleLessonClick(lesson)}
                    >
                      <div className="p-5">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-start gap-4 flex-1 min-w-0">
                            {/* Lesson number */}
                            <div
                              className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold"
                              style={{
                                backgroundColor: lesson.free ? phase.bg : "#f0ebe6",
                                color: lesson.free ? phase.accent : "#aaaaaa",
                              }}
                            >
                              {lesson.number}
                            </div>

                            <div className="flex-1 min-w-0">
                              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                                <h3 className={`font-bold text-sm leading-snug ${lesson.free ? "text-[#3a3a3a]" : "text-[#3a3a3a]"}`}>
                                  {lesson.title}
                                </h3>
                                {lesson.free ? (
                                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#8fa38d] bg-[#d4e0d3] px-2 py-0.5 rounded-full flex-shrink-0">
                                    Free
                                  </span>
                                ) : (
                                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#e3a99c] bg-[#f2d6c9] px-2 py-0.5 rounded-full flex-shrink-0">
                                    Pro
                                  </span>
                                )}
                                <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full flex-shrink-0 ${tagStyle(lesson.tag)}`}>
                                  {lesson.tag}
                                </span>
                              </div>

                              <p className="text-xs text-[#6b6b6b] leading-relaxed mb-3">
                                {lesson.description}
                              </p>

                              {/* Bullet points */}
                              <ul className="space-y-1">
                                {lesson.bullets.map((bullet) => (
                                  <li key={bullet} className="flex items-start gap-2 text-xs text-[#6b6b6b]">
                                    <span
                                      className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0"
                                      style={{ backgroundColor: phase.accent }}
                                    />
                                    {bullet}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* Right side CTA */}
                          <div className="flex-shrink-0 flex flex-col items-end gap-2">
                            <div className="flex items-center gap-1 text-[10px] text-[#aaaaaa]">
                              <Clock className="w-3 h-3" />
                              {lesson.time}
                            </div>
                            {lesson.free ? (
                              lesson.link ? (
                                <Link
                                  href={lesson.link}
                                  onClick={(e) => e.stopPropagation()}
                                  className="flex items-center gap-1 text-[10px] font-bold text-[#8fa38d] hover:underline whitespace-nowrap"
                                >
                                  Open <ExternalLink className="w-3 h-3" />
                                </Link>
                              ) : null
                            ) : (
                              <div className="w-7 h-7 rounded-lg bg-[#f0ebe6] flex items-center justify-center">
                                <Lock className="w-3.5 h-3.5 text-[#aaaaaa]" />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Locked overlay bar */}
                      {!lesson.free && (
                        <div className="h-0.5 bg-gradient-to-r from-transparent via-[#e7ddd3] to-transparent" />
                      )}
                    </div>
                  ))}
                </div>

                {/* Phase transition ~ unlock nudge after phase 0 */}
                {phaseIdx === 0 && (
                  <div className="mt-4 border-2 border-dashed border-[#e3a99c]/40 rounded-2xl p-6 text-center bg-[#f2d6c9]/20">
                    <Lock className="w-5 h-5 text-[#e3a99c] mx-auto mb-3" />
                    <p className="font-bold text-[#3a3a3a] mb-1 text-sm">
                      Phases 1~5 are locked
                    </p>
                    <p className="text-xs text-[#6b6b6b] mb-4 max-w-sm mx-auto">
                      Unlock all {totalLessons - freeLessons} remaining lessons to continue from document prep to citizenship.
                    </p>
                    <button
                      onClick={() => setShowModal(true)}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#3a3a3a] text-white text-xs font-bold hover:bg-[#e3a99c] transition-colors"
                    >
                      <Zap className="w-3.5 h-3.5" />
                      Unlock Playbook Pro
                    </button>
                  </div>
                )}
              </section>
            ))}

            {/* ── Final CTA ──────────────────────────────────────── */}
            <div className="bg-[#3a3a3a] rounded-3xl p-8 md:p-10 text-center mt-8">
              <div className="w-12 h-12 rounded-2xl bg-[#e3a99c]/20 flex items-center justify-center mx-auto mb-5">
                <Trophy className="w-6 h-6 text-[#e3a99c]" />
              </div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-white mb-3">
                Application → Spanish Passport
              </h2>
              <p className="text-white/50 text-sm max-w-md mx-auto mb-7 leading-relaxed">
                {totalLessons} lessons. 6 phases. One complete system. Get everything from first document to citizenship ceremony.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => setShowModal(true)}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#e3a99c] text-white font-bold hover:bg-[#d38b7b] transition-colors"
                >
                  <Zap className="w-4 h-4" />
                  Unlock Playbook Pro
                </button>
                <Link
                  href="https://calendly.com/abie-gamao/spain-dnv"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-white/20 text-white/70 text-sm font-medium hover:border-white/40 hover:text-white transition-colors"
                >
                  Book a Strategy Call
                </Link>
              </div>
              <p className="text-white/20 text-xs mt-4">
                Paid consultation ~ book your session now.
              </p>
            </div>

          </main>
        </div>

        <Footer />
      </div>
    </>
  );
}
