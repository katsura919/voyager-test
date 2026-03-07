"use client";

import {
  BarChart2,
  BookOpen,
  FileText,
  Newspaper,
  Users,
} from "lucide-react";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { guides } from "./data";

export default function GuidesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  // Determine active guide based on URL
  const activeGuideId =
    guides.find((g) => pathname.includes(`/guides/${g.id}`))?.id ||
    guides[0].id;

  const handleGuideClick = (guideId: string) => {
    router.push(`/playbook/spain-dnv/guides/${guideId}`);
  };

  return (
    <div className="flex w-full items-start">
      {/* ─── Left Sidebar: Guide List ─── */}
      <aside className="hidden md:flex w-[240px] flex-shrink-0 flex-col border-r border-[#EAE9E9] bg-white sticky top-[32px] max-h-[calc(100vh-140px)] overflow-y-auto w-[240px] z-10 relative">
        <div className="pt-2 pb-20">
          <div className="px-4 space-y-6">
            <div className="space-y-0.5">
              {[
                { label: "Status", icon: BarChart2 },
                { label: "Community", icon: Users },
                { label: "Blog", icon: Newspaper },
              ].map((item) => (
                <button
                  key={item.label}
                  className="flex items-center gap-2.5 w-full px-3 py-1.5 rounded-md text-left text-[#787774] hover:bg-[#f7f7f5] hover:text-[#37352f] transition-colors"
                >
                  <item.icon className="w-4 h-4 opacity-70" strokeWidth={2} />
                  <span className="text-[14px] font-medium">{item.label}</span>
                </button>
              ))}
            </div>

            <div>
              <div className="px-3 py-2 text-[12px] font-semibold text-[#37352f] mb-1">
                Get started
              </div>

              <div className="space-y-0.5">
                {guides.map((guide) => {
                  const isActive = activeGuideId === guide.id;
                  return (
                    <button
                      key={guide.id}
                      onClick={() => handleGuideClick(guide.id)}
                      className={`flex items-center gap-2.5 w-full px-3 py-1.5 rounded-md text-left transition-colors group ${
                        isActive
                          ? "bg-[#efefed] text-[#37352f] font-semibold"
                          : "text-[#787774] hover:bg-[#f7f7f5] hover:text-[#37352f] font-medium"
                      }`}
                    >
                      <span className="text-[14px] truncate leading-tight py-0.5">
                        {guide.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* ─── Main Content & Right Sidebar ─── */}
      {children}
    </div>
  );
}
