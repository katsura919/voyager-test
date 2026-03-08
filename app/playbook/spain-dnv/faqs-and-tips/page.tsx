"use client";

import { TopbarLinks } from "@/components/playbook/TopbarLinks";
import { 
  Banknote, 
  Clock, 
  Lightbulb, 
  AlertTriangle, 
  Target, 
  RefreshCcw, 
  ShieldAlert, 
  Link as LinkIcon,
  CheckCircle2,
  XCircle,
  HelpCircle,
  TrendingUp,
  MapPin,
  ExternalLink,
  MessageCircle,
  Youtube,
  Instagram,
  Facebook
} from "lucide-react";
import Link from "next/link";

export default function FaqsAndTipsPage() {
  return (
    <div className="min-h-screen bg-[#FBFBFA]">
      
      <main className="max-w-[1400px] mx-auto px-4 md:px-6 py-8 md:py-12">
        {/* Header */}
        <div className="max-w-[900px] mb-12">
          <h1 className="text-[40px] font-bold text-[#37352f] leading-tight mb-4">
            FAQs & Expert Tips
          </h1>
          <p className="text-[18px] text-[#787774] leading-relaxed">
            Everything else you need to know about the Spain Digital Nomad Visa. Costs, timelines, common pitfalls, and the path to permanent residency.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Costs Section */}
            <section id="costs" className="bg-white rounded-xl border border-[#EAE9E9] p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#F1F0EF] flex items-center justify-center">
                  <Banknote className="w-6 h-6 text-[#37352f]" />
                </div>
                <h2 className="text-[24px] font-bold text-[#37352f]">Total DIY Costs</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-[16px] font-semibold text-[#37352f] mb-4 uppercase tracking-wider">Document Preparation</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between text-[15px] text-[#37352f]">
                      <span className="text-[#787774]">Criminal Background Check</span>
                      <span className="font-medium">$20 – $50</span>
                    </li>
                    <li className="flex justify-between text-[15px] text-[#37352f]">
                      <span className="text-[#787774]">Apostille Fees (per doc)</span>
                      <span className="font-medium">$20 – $100</span>
                    </li>
                    <li className="flex justify-between text-[15px] text-[#37352f]">
                      <span className="text-[#787774]">Translation (per page)</span>
                      <span className="font-medium">€20 – €50</span>
                    </li>
                    <li className="flex justify-between text-[15px] text-[#37352f]">
                      <span className="text-[#787774]">Passport Photos</span>
                      <span className="font-medium">$10 – $20</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-[16px] font-semibold text-[#37352f] mb-4 uppercase tracking-wider">Application Fees</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between text-[15px] text-[#37352f]">
                      <span className="text-[#787774]">Visa Application Fee</span>
                      <span className="font-medium">€80</span>
                    </li>
                    <li className="flex justify-between text-[15px] text-[#37352f]">
                      <span className="text-[#787774]">NIE Application</span>
                      <span className="font-medium">€10 – €12</span>
                    </li>
                    <li className="flex justify-between text-[15px] text-[#37352f]">
                      <span className="text-[#787774]">TIE Card</span>
                      <span className="font-medium">€20</span>
                    </li>
                    <li className="flex justify-between text-[15px] text-[#37352f]">
                      <span className="text-[#787774]">Health Insurance (pm)</span>
                      <span className="font-medium">€50 – €150</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#F1F0EF] flex items-center justify-between">
                <div>
                  <p className="text-[14px] text-[#787774] italic">Estimate based on DIY submission with no shortcuts.</p>
                </div>
                <div className="text-right">
                  <p className="text-[14px] text-[#787774] font-medium uppercase tracking-wider mb-1">Estimated Total</p>
                  <p className="text-[32px] font-bold text-[#37352f]">€400 – €700</p>
                </div>
              </div>
            </section>

            {/* Timeline Section */}
            <section id="timeline" className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-[#F1F0EF] flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[#37352f]" />
                </div>
                <h2 className="text-[24px] font-bold text-[#37352f]">Timeline Expectations</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-[#EAE9E9] shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-5 h-5 text-[#787774]" />
                    <h3 className="font-bold text-[#37352f]">Consulate Route</h3>
                  </div>
                  <ul className="space-y-3 text-[15px]">
                    <li className="flex gap-3">
                      <span className="text-[#787774] font-medium">1-2m</span>
                      <span className="text-[#37352f]">Document preparation</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#787774] font-medium">20-60d</span>
                      <span className="text-[#37352f]">Consulate processing</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#787774] font-medium">1-3m</span>
                      <span className="text-[#37352f]">Travel and TIE application</span>
                    </li>
                    <li className="pt-3 border-t border-[#F1F0EF] font-bold text-[#37352f] flex justify-between">
                      <span>Total Time</span>
                      <span className="text-[#37352f]">3 – 4 Months</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#37352f] text-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center gap-2 mb-4 text-white/80">
                    <TrendingUp className="w-5 h-5" />
                    <h3 className="font-bold text-white">Within Spain (UGE)</h3>
                  </div>
                  <ul className="space-y-3 text-[15px]">
                    <li className="flex gap-3">
                      <span className="text-white/60 font-medium whitespace-nowrap">Prep Early</span>
                      <span className="text-white/90">Done before arrival</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-white/60 font-medium">1 Week</span>
                      <span className="text-white/90">Application submission</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-white/60 font-medium">20 Days</span>
                      <span className="text-white/90">UGE processing</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-white/60 font-medium">20-30d</span>
                      <span className="text-white/90">TIE issuance after approval</span>
                    </li>
                    <li className="pt-3 border-t border-white/10 font-bold flex justify-between">
                      <span>Total Time</span>
                      <span className="text-white">2 – 3 Months</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Success strategies */}
            <section id="strategies" className="space-y-8 text-[#37352f]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-[#F1F0EF] flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-[#37352f]" />
                </div>
                <h2 className="text-[24px] font-bold text-[#37352f]">Insider Knowledge</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Pros */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-[#059669]">
                    <CheckCircle2 className="w-5 h-5" />
                    <h3 className="font-bold">Application Success Tips</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="bg-white p-4 rounded-lg border border-[#EAE9E9] text-[14px]">
                      <strong>Start Early:</strong> Apostilles take the longest. Order background checks immediately.
                    </li>
                    <li className="bg-white p-4 rounded-lg border border-[#EAE9E9] text-[14px]">
                      <strong>Over-Document:</strong> It's better to provide too much proof than to leave gaps for a reviewer to question.
                    </li>
                    <li className="bg-white p-4 rounded-lg border border-[#EAE9E9] text-[14px]">
                      <strong>Methodical Organization:</strong> Use the folder numbering system we recommended in Guide 4.
                    </li>
                  </ul>
                </div>

                {/* Mistakes */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-[#DC2626]">
                    <AlertTriangle className="w-5 h-5" />
                    <h3 className="font-bold">Common Mistakes</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="bg-white p-4 rounded-lg border border-[#EAE9E9] text-[14px] flex gap-3">
                      <XCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span><strong>Expired Documents:</strong> Background checks older than 6 months are invalid.</span>
                    </li>
                    <li className="bg-white p-4 rounded-lg border border-[#EAE9E9] text-[14px] flex gap-3">
                      <XCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span><strong>Missing Apostilles:</strong> Every home-country government document MUST be stamped.</span>
                    </li>
                    <li className="bg-white p-4 rounded-lg border border-[#EAE9E9] text-[14px] flex gap-3">
                      <XCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span><strong>Uncertified Translators:</strong> Only Spanish "sworn" (jurado) translations are valid.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Tips Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="bg-[#F1F0EF] p-6 rounded-xl">
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <Banknote className="w-4 h-4" /> Money-Saving
                  </h4>
                  <ul className="space-y-2 text-[13px] text-[#787774]">
                    <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#37352f] shrink-0 mt-1.5"></div> Apply in Spain – yields better residency length for the cost.</li>
                    <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#37352f] shrink-0 mt-1.5"></div> Bundle translations – ask for family/multiple document discounts.</li>
                    <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#37352f] shrink-0 mt-1.5"></div> Choose online-only health insurance like Sanitas or DKV.</li>
                  </ul>
                </div>
                <div className="bg-[#F1F0EF] p-6 rounded-xl">
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <Target className="w-4 h-4" /> Lesser-Known Facts
                  </h4>
                  <ul className="space-y-2 text-[13px] text-[#787774]">
                    <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#37352f] shrink-0 mt-1.5"></div> <strong>US W2 Support:</strong> As of 2025, employees are eligible with a Certificate of Coverage.</li>
                    <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#37352f] shrink-0 mt-1.5"></div> <strong>Beckham Law:</strong> Employees pay flat 24% tax rate (not for Autonomo).</li>
                    <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#37352f] shrink-0 mt-1.5"></div> <strong>Schengen:</strong> Travel freely with your 3-year residency permit.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Renewal & Extensions */}
            <section id="renewal" className="bg-[#37352f] text-white rounded-xl p-8 shadow-md">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <RefreshCcw className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-[24px] font-bold">Visa Renewal & Extensions</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-white/60 text-[13px] uppercase tracking-wider mb-2 font-bold">Renewal Timeline</h3>
                    <div className="space-y-3">
                      <div className="flex gap-4">
                        <div className="text-[20px] font-bold">01</div>
                        <div>
                          <p className="font-medium">Initial Period</p>
                          <p className="text-white/60 text-[13px]">Consulate (1yr) vs UGE (3yrs)</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="text-[20px] font-bold">02</div>
                        <div>
                          <p className="font-medium">First Renewal</p>
                          <p className="text-white/60 text-[13px]">Extend for 2 more years</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="text-[20px] font-bold">03</div>
                        <div>
                          <p className="font-medium">Permanent Residence</p>
                          <p className="text-white/60 text-[13px]">Available after 5 continuous years</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                       <Banknote className="w-4 h-4" /> Spanish Citizenship
                    </h4>
                    <p className="text-[14px] text-white/80 leading-relaxed bg-white/5 p-4 rounded-lg border border-white/10 mb-4">
                      Spain is uniquely generous to certain nationalities regarding citizenship.
                    </p>
                    <ul className="space-y-3 text-[14px]">
                      <li className="flex gap-3 items-start">
                        <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-1" />
                        <span><strong>2 Years Only:</strong> For Filipinos and Latin American citizens.</span>
                      </li>
                      <li className="flex gap-3 items-start text-white/60">
                        <CheckCircle2 className="w-4 h-4 shrink-0 mt-1" />
                        <span><strong>10 Years:</strong> Standard requirement for all other nationalities.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

             {/* Troubleshooting Rejections */}
             <section id="troubleshooting" className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-[#FEE2E2] flex items-center justify-center">
                  <ShieldAlert className="w-6 h-6 text-[#DC2626]" />
                </div>
                <h2 className="text-[24px] font-bold text-[#37352f]">Troubleshooting Issues</h2>
              </div>

              <div className="bg-white border-2 border-[#FEE2E2] rounded-xl p-8 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FEE2E2]/20 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold text-[#37352f] mb-4">Common Rejection Reasons</h3>
                    <ul className="space-y-2 text-[14px] text-[#787774]">
                      <li className="flex gap-2">Insufficient proof of income (not being consistent)</li>
                      <li className="flex gap-2">Contracts looking like "Micromanaged Employment" instead of Autonomo</li>
                      <li className="flex gap-2">Criminal record certificate expired during review</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#37352f] mb-4">What to do if rejected?</h3>
                    <p className="text-[14px] text-[#787774] mb-4">Don't panic. You have options.</p>
                    <div className="space-y-3">
                      <div className="p-3 bg-white border border-[#EAE9E9] rounded-lg text-[13px] font-medium">
                        1. Request Subnación (Detailed Explanation)
                      </div>
                      <div className="p-3 bg-white border border-[#EAE9E9] rounded-lg text-[13px] font-medium">
                        2. Address specific issues and reapply immediately
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sticky Sidebar Links */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-8 space-y-6">
              
              {/* Useful Resources */}
              <div className="bg-white rounded-xl border border-[#EAE9E9] p-6 shadow-sm">
                <h3 className="text-[16px] font-bold text-[#37352f] mb-6 flex items-center gap-2">
                  <LinkIcon className="w-5 h-5" /> Useful Resources
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-[12px] font-bold text-[#787774] uppercase tracking-wider mb-3">Finance & Banks</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <a href="#" className="p-2 border border-[#F1F0EF] rounded-lg text-[13px] hover:bg-[#FBFBFA] transition-colors text-center">Santander</a>
                      <a href="#" className="p-2 border border-[#F1F0EF] rounded-lg text-[13px] hover:bg-[#FBFBFA] transition-colors text-center">Wise</a>
                      <a href="#" className="p-2 border border-[#F1F0EF] rounded-lg text-[13px] hover:bg-[#FBFBFA] transition-colors text-center">Revolut</a>
                      <a href="#" className="p-2 border border-[#F1F0EF] rounded-lg text-[13px] hover:bg-[#FBFBFA] transition-colors text-center">N26</a>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[12px] font-bold text-[#787774] uppercase tracking-wider mb-3">Government Portals</h4>
                    <ul className="space-y-2">
                      <li>
                        <a href="https://www.sede.fnmt.gob.es" target="_blank" className="flex items-center justify-between group">
                          <span className="text-[13px] text-[#37352f]">Digital Certificates</span>
                          <ExternalLink className="w-3.5 h-3.5 text-[#787774] group-hover:text-[#37352f]" />
                        </a>
                      </li>
                      <li>
                        <a href="https://sutramiteconsular.maec.es" target="_blank" className="flex items-center justify-between group">
                          <span className="text-[13px] text-[#37352f]">Consulate Tracking</span>
                          <ExternalLink className="w-3.5 h-3.5 text-[#787774] group-hover:text-[#37352f]" />
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[12px] font-bold text-[#787774] uppercase tracking-wider mb-3">Follow Abie's Socials</h4>
                    <div className="flex gap-4">
                      <a href="#" className="w-8 h-8 rounded-full bg-[#F1F0EF] flex items-center justify-center text-[#787774] hover:text-[#37352f] hover:bg-[#EAE9E9] transition-all"><Youtube className="w-4 h-4" /></a>
                      <a href="#" className="w-8 h-8 rounded-full bg-[#F1F0EF] flex items-center justify-center text-[#787774] hover:text-[#37352f] hover:bg-[#EAE9E9] transition-all"><Instagram className="w-4 h-4" /></a>
                      <a href="#" className="w-8 h-8 rounded-full bg-[#F1F0EF] flex items-center justify-center text-[#787774] hover:text-[#37352f] hover:bg-[#EAE9E9] transition-all"><Facebook className="w-4 h-4" /></a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Translation Callout */}
              <div className="bg-[#FEFCE8] border border-[#FEF08A] rounded-xl p-6">
                <h4 className="font-bold text-[#854D0E] mb-2 flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" /> Need Translation?
                </h4>
                <p className="text-[13px] text-[#854D0E] mb-4">
                  Spanish reviewers only accept <strong>Sworn Translations</strong>. Don't pay the standard €20-25 per page.
                </p>
                <div className="bg-white/80 rounded-lg p-3 text-center">
                  <p className="text-[12px] text-[#854D0E] font-medium mb-1">Our Partner Rate</p>
                  <p className="text-[20px] font-bold text-[#37352f]">€16 / page</p>
                </div>
                <button className="w-full mt-4 bg-[#854D0E] text-white py-2 rounded-lg text-[13px] font-bold hover:bg-[#713F12] transition-colors">
                  Contact Specialist
                </button>
              </div>

              {/* Support Callout */}
              <div className="p-6 bg-[#37352f] rounded-xl text-white text-center">
                <HelpCircle className="w-8 h-8 mx-auto mb-3 text-white/40" />
                <h3 className="font-bold mb-2">Still Unsure?</h3>
                <p className="text-[12px] text-white/60 mb-4">Join our community of over 500+ nomads who did it DIY.</p>
                <button className="w-full bg-white text-[#37352f] py-2 rounded-lg text-[13px] font-bold hover:bg-white/90 transition-colors">
                   Join Nomad Spanglish
                </button>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
