"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function TopbarLinks() {
    const pathname = usePathname();

    // Check if the current route is exactly the home route
    const isHome = pathname === "/playbook/home" || pathname === "/playbook";
    // Check if current route is under guides
    const isGuides = pathname.includes("/playbook/whats-this-playbook-about");

    return (
        <div className="h-[48px] border-b border-[#EAE9E9] flex items-center justify-center px-4 md:px-6 bg-white shrink-0 overflow-x-auto">
            <div className="flex items-center w-full max-w-[1400px] mx-auto h-full">
                <nav className="flex items-center gap-6 h-full">
                    <Link
                        href="/playbook/home"
                        className={`text-[14px] font-medium transition-colors whitespace-nowrap h-full flex items-center ${isHome
                                ? "text-[#37352f] border-b-[3px] border-[#37352f]"
                                : "text-[#787774] hover:text-[#37352f] border-b-[3px] border-transparent"
                            }`}
                    >
                        Home
                    </Link>
                    <Link
                        href="/playbook/whats-this-playbook-about"
                        className={`text-[14px] font-medium transition-colors whitespace-nowrap h-full flex items-center ${isGuides
                                ? "text-[#37352f] border-b-[3px] border-[#37352f]"
                                : "text-[#787774] hover:text-[#37352f] border-b-[3px] border-transparent"
                            }`}
                    >
                        Guides
                    </Link>
                    <Link href="#" className="text-[14px] font-medium text-[#787774] hover:text-[#37352f] transition-colors whitespace-nowrap h-full flex items-center border-b-[3px] border-transparent">API Reference</Link>
                    <Link href="#" className="text-[14px] font-medium text-[#787774] hover:text-[#37352f] transition-colors whitespace-nowrap h-full flex items-center border-b-[3px] border-transparent">Changelog</Link>
                    <Link href="#" className="text-[14px] font-medium text-[#787774] hover:text-[#37352f] transition-colors whitespace-nowrap h-full flex items-center border-b-[3px] border-transparent">Examples</Link>
                </nav>
            </div>
        </div>
    );
}
