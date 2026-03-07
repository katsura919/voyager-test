import { CheckCircle, Globe, Instagram, Youtube, Facebook, Linkedin, Mail } from "lucide-react";

export default function PlaybookHome() {
    return (
        <div className="flex w-full h-full bg-white text-[#37352f] font-sans">
            <div className="flex-1 px-[calc(min(64px,5vw))] lg:px-12 py-6">
                <div className="max-w-[840px] pl-0 lg:pl-10 mx-auto w-full pb-24">

                    {/* Main Title Section */}
                    <div className="mb-10 border-b border-[#EAE9E9] pb-8">
                        <h1 className="text-[40px] leading-[1.1] font-bold text-[#37352f] tracking-tight mb-4">
                            Start Here
                        </h1>
                        <p className="text-[20px] leading-[1.5] text-[#787774] font-medium">
                            A clear, systemised path to getting approved~ without hiring a lawyer, spiraling through forums, or guessing your way through Spain’s immigration process.
                        </p>
                    </div>

                    {/* Author Section */}
                    <div className="mb-12 flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                        <div className="w-16 h-16 rounded-full bg-[#f1f1ef] flex-shrink-0 relative overflow-hidden flex items-center justify-center border border-[#EAE9E9]">
                            {/* Wait for actual headshot image, handle fallback gracefully */}
                            <span className="text-xl font-medium text-[#787774]">AG</span>
                        </div>
                        <div>
                            <h2 className="text-[24px] font-semibold text-[#37352f] mb-1">
                                Abie Maxey Gamao (Abz)
                            </h2>
                            <p className="text-[16px] text-[#37352f] mb-4">
                                👋 Hola, I’m Abie :)
                            </p>

                            <div className="text-[16px] leading-[1.6] text-[#37352f] space-y-4">
                                <p>
                                    I’ve been traveling the world for over two years while working remotely as a systems engineer and content creator.
                                </p>
                                <p>
                                    I loved the freedom but eventually, constant movement started feeling inefficient and unfulfilling.<br />
                                    I didn’t want another short-term visa.<br />
                                    I wanted a solid European base, one that would:
                                </p>

                                <ul className="list-disc pl-6 space-y-1 block mt-2">
                                    <li>Accept me as a non-EU passport holder</li>
                                    <li>Offer long-term options</li>
                                    <li>Plug me into real systems (healthcare, markets, protections)</li>
                                </ul>

                                <p className="mt-4">
                                    So I did what I always do:<br />
                                    <strong>I studied the rules.</strong><br />
                                    <strong>I mapped the process.</strong><br />
                                    <strong>I built a system.</strong><br />
                                    And I applied without a lawyer.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-16 text-[#787774] items-center">
                        <div className="flex items-center gap-4 flex-wrap">
                            <Globe className="w-5 h-5 cursor-pointer hover:text-[#37352f] transition-colors" />
                            <Instagram className="w-5 h-5 cursor-pointer hover:text-[#37352f] transition-colors" />
                            <Youtube className="w-5 h-5 cursor-pointer hover:text-[#37352f] transition-colors" />
                            <Facebook className="w-5 h-5 cursor-pointer hover:text-[#37352f] transition-colors" />
                            <span className="cursor-pointer hover:text-[#37352f] transition-colors font-medium text-sm">Threads</span>
                            <span className="cursor-pointer hover:text-[#37352f] transition-colors font-medium text-sm">TikTok</span>
                            <Linkedin className="w-5 h-5 cursor-pointer hover:text-[#37352f] transition-colors" />
                        </div>
                        <div className="hidden sm:block h-4 w-px bg-[#EAE9E9] mx-2"></div>
                        <div className="flex items-center gap-4 flex-wrap w-full sm:w-auto mt-2 sm:mt-0">
                            <span className="cursor-pointer hover:text-[#37352f] transition-colors font-medium text-sm underline underline-offset-2">abiemaxey.com</span>
                            <span className="cursor-pointer hover:text-[#37352f] transition-colors font-medium text-sm underline underline-offset-2">happyvoyager.com</span>
                        </div>
                        <button className="sm:ml-auto w-full sm:w-auto mt-4 sm:mt-0 px-4 py-2 sm:py-1.5 bg-[#f7f7f5] hover:bg-[#efefed] rounded text-[14px] font-medium text-[#37352f] transition-colors border border-[#EAE9E9]">
                            Book Consultation
                        </button>
                    </div>

                    <div className="bg-[#f7f7f5] rounded-xl p-8 border border-[#EAE9E9] mb-12">
                        <h3 className="text-[20px] font-semibold text-[#37352f] mb-4">
                            This DNV playbook answers:
                        </h3>
                        <ul className="space-y-3 text-[16px] text-[#37352f] mb-8 font-medium">
                            <li className="flex items-start gap-2">
                                <span className="text-[#787774] mt-0.5">•</span>
                                What&apos;s this visa about and do I qualify?
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#787774] mt-0.5">•</span>
                                How do I submit my application?
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#787774] mt-0.5">•</span>
                                How do I apply via UGE?
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#787774] mt-0.5">•</span>
                                and ... How do I track my application?
                            </li>
                        </ul>

                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-[#2383e2] mt-0.5 shrink-0" />
                                <span className="text-[16px] text-[#37352f]">Avoid common rejection mistakes</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-[#2383e2] mt-0.5 shrink-0" />
                                <span className="text-[16px] text-[#37352f]">Move from confusion → submission with confidence</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-[#2383e2] mt-0.5 shrink-0" />
                                <span className="text-[16px] text-[#37352f]">Show you the right UGE Links so you know where to accomplish the next steps. <span className="text-[#787774] italic">(PS. Spain is notorious for broken links)</span></span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
