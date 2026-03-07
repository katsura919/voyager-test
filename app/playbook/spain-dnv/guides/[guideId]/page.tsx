"use client";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { guides } from "../data";
import { use } from "react";

export default function GuidePage(props: { params: Promise<{ guideId: string }> }) {
  const params = use(props.params);
  const guideId = params.guideId;
  const activeGuide = guides.find((g) => g.id === guideId) || guides[0];

  const [activeSection, setActiveSection] = useState<string>("");
  const [completedItems, setCompletedItems] = useState<Record<string, boolean>>({});

  // Intersection observer for TOC highlighting
  useEffect(() => {
    if (!activeGuide.sections.length) return;
    setActiveSection(activeGuide.sections[0]?.id || "");

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "0px 0px -80% 0px" }
    );

    activeGuide.sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activeGuide]);

  // Load checklist progress
  useEffect(() => {
    const saved = localStorage.getItem(`playbook_guide_progress_${guideId}`);
    if (saved) {
      try {
        setCompletedItems(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse guide progress", e);
      }
    } else {
      setCompletedItems({});
    }
  }, [guideId]);

  const toggleItem = (itemText: string) => {
    const updated = {
      ...completedItems,
      [itemText]: !completedItems[itemText],
    };
    setCompletedItems(updated);
    localStorage.setItem(
      `playbook_guide_progress_${guideId}`,
      JSON.stringify(updated)
    );
  };

  return (
    <>
      {/* ─── Main Content ─── */}
      <div className="flex-1 min-w-0">
        <div className="px-6 lg:px-12 py-0">
          <div className="max-w-[720px] mx-auto">
            {/* Subtitle */}
            <div className="text-[#37352f] font-semibold text-[14px] mb-3">
              {activeGuide.subtitle}
            </div>

            {/* Title */}
            <h1 className="text-[32px] lg:text-[36px] leading-[1.1] font-bold text-[#37352f] tracking-tight mb-3">
              {activeGuide.title}
            </h1>

            {/* Mobile guide selector removed in favor of layout level or separate mobile menu, 
                assuming layout sidebar handles navigation */}

            {/* Sections */}
            <div className="space-y-8 mt-8">
              {activeGuide.sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-24">
                  <h2 className="text-2xl font-semibold text-[#37352f] mb-4 mt-8 tracking-tight">
                    {section.title}
                  </h2>

                  <div className="space-y-4">
                    {section.content.map((block, bIdx) => {
                      if (block.type === "intro") {
                        return (
                          <p
                            key={bIdx}
                            className="text-[#37352f] text-base leading-relaxed"
                          >
                            {block.text}
                          </p>
                        );
                      }

                      if (block.type === "callout") {
                        return (
                          <div
                            key={bIdx}
                            className={`flex items-start gap-3 p-4 rounded ${
                              block.bgClass || "bg-[#f1f1ef]"
                            } border ${
                              block.borderClass || "border-transparent"
                            } my-4`}
                          >
                            <span className="text-xl leading-none flex-shrink-0 mt-0.5">
                              {block.icon}
                            </span>
                            <div className="text-[#37352f] text-[15px] leading-relaxed whitespace-pre-wrap">
                              {block.text}
                            </div>
                          </div>
                        );
                      }

                      if (block.type === "highlight") {
                        return (
                          <div key={bIdx} className="my-4">
                            {block.label && (
                              <h3 className="font-semibold text-[#37352f] text-base mb-2">
                                {block.label}
                              </h3>
                            )}
                            <ul className="list-disc pl-6 space-y-1">
                              {block.items.map((item, i) => (
                                <li
                                  key={i}
                                  className="text-[15px] text-[#37352f] leading-relaxed pl-1"
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      }

                      if (block.type === "checklist") {
                        return (
                          <div key={bIdx} className="my-4">
                            {block.label && (
                              <h3 className="font-semibold text-[#37352f] text-base mb-2">
                                {block.label}
                              </h3>
                            )}
                            <div className="space-y-1.5">
                              {block.items.map((item, i) => {
                                const isChecked = completedItems[item] || false;
                                return (
                                  <label
                                    key={i}
                                    className="flex items-start gap-2.5 cursor-pointer group hover:bg-[#efefed] rounded p-1 -ml-1 transition-colors"
                                  >
                                    <div className="mt-[3px] relative cursor-pointer">
                                      <input
                                        type="checkbox"
                                        className="peer sr-only"
                                        checked={isChecked}
                                        onChange={() => toggleItem(item)}
                                      />
                                      <div className="w-[15px] h-[15px] rounded-[3px] border border-[#d3d1cb] bg-white transition-colors peer-checked:bg-[#2383e2] peer-checked:border-[#2383e2] flex items-center justify-center">
                                        {isChecked && (
                                          <svg
                                            viewBox="0 0 14 14"
                                            className="w-3 h-3 text-white fill-current"
                                          >
                                            <polygon points="5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039" />
                                          </svg>
                                        )}
                                      </div>
                                    </div>
                                    <span
                                      className={`text-[15px] leading-relaxed select-text ${
                                        isChecked
                                          ? "text-[#787774] line-through opacity-70"
                                          : "text-[#37352f]"
                                      }`}
                                    >
                                      {item}
                                    </span>
                                  </label>
                                );
                              })}
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
          </div>
        </div>
      </div>

      {/* ─── Right Sidebar: On This Page (Sticky) ─── */}
      <aside className="hidden lg:flex w-[240px] flex-shrink-0 flex-col sticky top-[32px] max-h-[calc(100vh-140px)] overflow-y-auto">
        <div className="pt-0 pr-6 pl-4">
          <div className="text-[13px] font-semibold text-[#787774] mb-3 flex items-center gap-2">
            <Menu className="w-3.5 h-3.5" strokeWidth={2.5} />
            On this page
          </div>
          <nav className="flex flex-col relative ml-1">
            <div className="absolute left-0 top-1 bottom-1 w-[1px] bg-[#EAE9E9] z-0" />
            {activeGuide.sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(section.id)?.scrollIntoView({
                    behavior: "smooth",
                  });
                  window.history.pushState(null, "", `#${section.id}`);
                }}
                className={`text-[13px] leading-[1.4] py-1.5 pl-4 relative z-10 border-l-[2px] transition-colors ${
                  activeSection === section.id
                    ? "text-[#37352f] font-medium border-[#37352f]"
                    : "text-[#787774] hover:text-[#37352f] border-transparent"
                }`}
              >
                {section.title}
              </a>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}
