"use client";

import { CheckCircle, Globe, Instagram, Youtube, Linkedin, Clock, ArrowRight, Sparkles, Mail, CalendarDays, Flag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { phases, playbookMeta, totalLessons } from "../data";
import { useEffect, useState } from "react";

export default function PlaybookHome() {
  const [name, setName] = useState("");
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  useEffect(() => {
    const storedName = sessionStorage.getItem("playbook_name") || "";
    setName(storedName);

    // Check if they've completed any lessons yet
    const progress = localStorage.getItem("playbook_lesson_progress");
    const hasProgress = progress && Object.keys(JSON.parse(progress)).length > 0;
    setIsFirstVisit(!hasProgress);
  }, []);

  return (
    <div className="flex w-full h-full bg-[#f9f5f2] text-[#3a3a3a] font-sans">
      <div className="flex-1 px-[calc(min(64px,5vw))] lg:px-12 py-6">
        <div className="max-w-[840px] pl-0 lg:pl-10 mx-auto w-full pb-24">

          {/* Personalized welcome banner */}
          {name && (
            <div className="mb-8 flex items-start gap-3 px-5 py-4 rounded-xl border border-[#e7ddd3] bg-white">
              <Sparkles className="w-4 h-4 text-[#e3a99c] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-[14px] font-semibold text-[#3a3a3a]">
                  Welcome back, {name}!
                </p>
                <p className="text-[13px] text-[#787774] mt-0.5">
                  Pick up where you left off or jump into any phase below.
                </p>
              </div>
            </div>
          )}

          {/* Start Here — first-time visitor callout */}
          {isFirstVisit && (
            <div
              className="mb-8 flex items-center justify-between gap-4 px-5 py-4 rounded-xl border"
              style={{
                background: "linear-gradient(135deg, #f2d6c9 0%, #e7ddd3 100%)",
                borderColor: "#e3a99c",
              }}
            >
              <div className="flex items-center gap-3">
                <Flag className="w-4 h-4 text-[#d69586] flex-shrink-0" />
                <p className="text-[14px] text-[#3a3a3a]">
                  <span className="font-semibold">New here?</span> Start with Lesson 1 — check your eligibility in 2 minutes.
                </p>
              </div>
              <Link
                href="/playbook/spain-dnv/lessons/lesson-1"
                className="flex items-center gap-1.5 text-[13px] font-semibold text-[#d69586] hover:text-[#c4806e] flex-shrink-0 transition-colors"
              >
                Start here
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          )}

          {/* Cover Image */}
          <div className="rounded-xl overflow-hidden border border-[#e7ddd3] mb-10">
            <Image
              src="https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773164761/AbieMaxey_s_Website_Spain_Digital_hoaw2f.png"
              alt="Spain Digital Nomad Visa Playbook"
              width={840}
              height={400}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          {/* Hero */}
          <div className="mb-10 border-b border-[#e7ddd3] pb-8">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="px-2.5 py-1 text-[12px] font-semibold rounded-full"
                style={{
                  background: "linear-gradient(135deg, #e3a99c 0%, #d69586 100%)",
                  color: "#3a3a3a",
                }}
              >
                {playbookMeta.badge}
              </span>
              <span className="text-[12px] text-[#787774] font-medium">
                {playbookMeta.updatedLabel}
              </span>
            </div>
            <h1 className="text-[40px] leading-[1.1] font-bold text-[#3a3a3a] tracking-tight mb-4">
              {playbookMeta.heroTitle}
            </h1>
            <p className="text-[18px] leading-[1.6] text-[#787774] font-medium">
              {playbookMeta.heroDescription}
            </p>
            <div className="flex items-center gap-4 mt-5 text-[14px] text-[#787774]">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#e3a99c]" />
                {playbookMeta.totalTime} total
              </span>
              <span>{totalLessons} lessons</span>
              <span>{phases.length} phases</span>
            </div>
          </div>

          {/* How long will this take? */}
          <div className="mb-12 rounded-xl border border-[#e7ddd3] overflow-hidden">
            <div className="px-6 py-4 border-b border-[#e7ddd3] bg-white">
              <h3 className="text-[15px] font-semibold text-[#3a3a3a]">How long will this take?</h3>
            </div>
            <div className="grid grid-cols-3 divide-x divide-[#e7ddd3] bg-white">
              {[
                { label: "Read-only", time: "2–3 hours", note: "Just learning the path" },
                { label: "Active research", time: "1–2 weeks", note: "Gathering documents" },
                { label: "Full application", time: "4–6 weeks", note: "Start to submitted" },
              ].map((item) => (
                <div key={item.label} className="px-4 py-4 text-center">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#b0a89e] mb-1">{item.label}</p>
                  <p className="text-[18px] font-bold text-[#3a3a3a] leading-tight">{item.time}</p>
                  <p className="text-[11px] text-[#b0a89e] mt-0.5">{item.note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Author */}
          <div className="mb-12 flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
            <div className="w-16 h-16 rounded-full flex-shrink-0 overflow-hidden border-2 border-[#e7ddd3]">
              <Image
                src="https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773164922/avatar_v3grgg.png"
                alt="Abie Maxey Gamao"
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-[22px] font-semibold text-[#3a3a3a] mb-1">
                Abie Maxey Gamao (Abz)
              </h2>
              <p className="text-[15px] text-[#787774] mb-3">
                Systems engineer, content creator, and DNV holder based in Spain.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="https://happyvoyager.com" target="_blank" rel="noopener noreferrer" aria-label="Website">
                  <Globe className="w-4 h-4 text-[#b0a89e] hover:text-[#e3a99c] transition-colors" />
                </Link>
                <Link href="https://instagram.com/happyvoyager" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="w-4 h-4 text-[#b0a89e] hover:text-[#e3a99c] transition-colors" />
                </Link>
                <Link href="https://youtube.com/@happyvoyager" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <Youtube className="w-4 h-4 text-[#b0a89e] hover:text-[#e3a99c] transition-colors" />
                </Link>
                <Link href="https://linkedin.com/in/abiemaxey" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4 text-[#b0a89e] hover:text-[#e3a99c] transition-colors" />
                </Link>
              </div>
            </div>
          </div>

          {/* What this playbook covers */}
          <div className="bg-white rounded-xl p-8 border border-[#e7ddd3] mb-12">
            <h3 className="text-[18px] font-semibold text-[#3a3a3a] mb-4">
              What this playbook covers
            </h3>
            <ul className="space-y-2.5">
              {playbookMeta.modalFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#e3a99c] mt-0.5 shrink-0" />
                  <span className="text-[15px] text-[#3a3a3a]">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Phases overview */}
          <div className="space-y-4">
            <div className="mb-2">
              <h2 className="text-[28px] font-bold text-[#3a3a3a] tracking-tight">
                Playbook Roadmap
              </h2>
              <p className="text-[14px] text-[#787774] mt-1">
                Follow the phases in order for the best results.
              </p>
            </div>

            {phases.map((phase) => {
              const firstLesson = parseInt(phase.lessons[0]?.number ?? "1");
              return (
                <div
                  key={phase.id}
                  className="rounded-xl border border-[#e7ddd3] overflow-hidden bg-white transition-shadow hover:shadow-sm"
                  style={{ borderLeft: `4px solid ${phase.accent}` }}
                >
                  <div className="p-6 flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <span
                          className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded"
                          style={{ color: phase.accent, backgroundColor: phase.bg }}
                        >
                          {phase.phase}
                        </span>
                        <span className="text-[12px] text-[#787774]">
                          {phase.lessons.length} lessons
                        </span>
                      </div>
                      <h3 className="text-[18px] font-bold text-[#3a3a3a] mb-1">
                        {phase.title}
                      </h3>
                      <p className="text-[14px] text-[#787774] leading-relaxed mb-2">
                        {phase.description}
                      </p>
                      <p className="text-[12px] text-[#b0a89e] italic">
                        {phase.milestone}
                      </p>
                    </div>
                    <Link
                      href={`/playbook/spain-dnv/lessons/lesson-${firstLesson}`}
                      className="flex items-center gap-1.5 text-[13px] font-medium flex-shrink-0 transition-colors mt-1"
                      style={{ color: phase.accent }}
                    >
                      Start
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Final CTA */}
          <div
            className="mt-16 rounded-xl p-8 text-center"
            style={{
              background: "linear-gradient(135deg, #e3a99c 0%, #d69586 100%)",
            }}
          >
            <h3 className="text-[22px] font-bold text-[#3a3a3a] mb-2">
              {playbookMeta.finalCtaTitle}
            </h3>
            <p className="text-[15px] text-[#3a3a3a]/70 mb-6">
              {playbookMeta.finalCtaDescription}
            </p>
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#3a3a3a] rounded-lg text-[14px] font-semibold hover:bg-[#f9f5f2] transition-colors shadow-sm"
            >
              Book a Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Need help footer strip */}
          <div className="mt-8 rounded-xl border border-[#e7ddd3] bg-white px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-[14px] font-semibold text-[#3a3a3a]">Need help?</p>
              <p className="text-[13px] text-[#787774] mt-0.5">
                Questions about your application or the playbook content?
              </p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <Link
                href="mailto:hello@happyvoyager.com"
                className="flex items-center gap-1.5 text-[13px] font-medium text-[#787774] hover:text-[#e3a99c] transition-colors"
              >
                <Mail className="w-4 h-4" />
                Email us
              </Link>
              <span className="text-[#e7ddd3]">·</span>
              <Link
                href="/booking"
                className="flex items-center gap-1.5 text-[13px] font-medium text-[#787774] hover:text-[#e3a99c] transition-colors"
              >
                <CalendarDays className="w-4 h-4" />
                Book a consult
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
