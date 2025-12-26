'use client';

import React from 'react';
import Link from 'next/link';
import { Instagram, Linkedin, Dribbble, ChevronUp } from 'lucide-react';
import Image from "next/image";

// Behance Icon (Custom SVG since it's not in standard Lucide sets sometimes)
const BehanceIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M22 7H18V9H22V7Z" />
        <path fillRule="evenodd" clipRule="evenodd" d="M12.79 12.55C13.25 12.08 13.59 11.59 13.79 11.08C13.99 10.57 14.1 10.03 14.1 9.48C14.1 8.35 13.78 7.42 13.14 6.7C12.5 5.98 11.59 5.62 10.4 5.62H2V18.38H10.83C12.06 18.38 13.04 18.02 13.76 17.31C14.48 16.6 14.84 15.65 14.84 14.46C14.84 13.84 14.71 13.29 14.46 12.82C14.21 12.35 13.9 11.97 13.52 11.68C13.31 12.01 13.07 12.3 12.79 12.55ZM5.6 8.32H9.86C10.36 8.32 10.74 8.44 11 8.68C11.26 8.92 11.39 9.25 11.39 9.68C11.39 10.12 11.26 10.46 11 10.71C10.74 10.96 10.36 11.08 9.86 11.08H5.6V8.32ZM5.6 15.68V13.34H10.19C10.82 13.34 11.3 13.48 11.62 13.75C11.94 14.02 12.1 14.4 12.1 14.88C12.1 15.17 12.03 15.43 11.89 15.66C11.75 15.89 11.55 16.08 11.29 16.21C11.03 16.34 10.7 16.4 10.31 16.4H5.6V15.68Z" />
    </svg>
);

const navLinks = [
    { name: 'Home', href: '#home', active: true },
    { name: 'About Me', href: '#about', active: false },
    { name: 'Skills', href: '#skills', active: false },
    { name: 'Works', href: '#works', active: false },
    { name: 'Employment history', href: '#history', active: false },
    { name: 'Contact', href: '#contact', active: false },
];

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="w-full  py-10 flex flex-col items-center justify-center px-4 relative">

            {/* Footer Container - The Capsule */}
            <div className="relative w-full max-w-[1240px] bg-[#101010] rounded-3xl px-24 py-10 flex items-center justify-between">


                {/* Left: Logo */}
                <div className="flex items-center">
                    <Link href="/" className="flex items-center">
                        <Image src={"/logo.png"} alt={"Logo"} width={40} height={40}/>
                    </Link>
                </div>

                {/* Center: Navigation Links (Hidden on mobile for space, visible on md+) */}
                <nav className="hidden md:flex items-center gap-6 lg:gap-8 flex-1 px-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium transition-colors duration-300 ${
                                link.active ? 'text-[#6366f1]' : 'text-gray-400 hover:text-white'
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Right: Social Icons Pill */}
                <div className="bg-[#1C1C1C] rounded-full px-5 py-2.5 flex items-center gap-5">
                    <a href="#" className="text-white hover:text-[#6366f1] transition-colors">
                        <Dribbble size={18} />
                    </a>
                    <a href="#" className="text-white hover:text-[#6366f1] transition-colors">
                        <Instagram size={18} />
                    </a>
                    <a href="#" className="text-white hover:text-[#6366f1] transition-colors">
                        <BehanceIcon className="w-[18px] h-[18px]" />
                    </a>
                    <a href="#" className="text-white hover:text-[#6366f1] transition-colors">
                        <Linkedin size={18} />
                    </a>
                </div>

            </div>

            {/* Mobile Disclaimer (Optional) */}
            <div className="md:hidden mt-6 text-gray-500 text-xs text-center">
                © 2025 All rights reserved.
            </div>
        </footer>
    );
}
