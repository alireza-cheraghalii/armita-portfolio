'use client';

import React from 'react';
import Image from "next/image";
import SocialIconsPill from "@/app/SocialIconsPill";

export default function Header() {
    const navLinks = [
        {name: 'Home', href: '#'},
        {name: 'About Me', href: '#'},
        {name: 'Skills', href: '#'},
        {name: 'Works', href: '#'},
        {name: 'Employment history', href: '#'},
        {name: 'Contact', href: '#'},
    ];

    return (
        <header className="fixed top-0 pt-6 left-0 right-0 z-50 flex justify-center px-4 bg-[#101010] w-full">
            {/* Container اصلی - حالت کپسولی و شناور */}
            <nav className="
        flex items-center justify-between
        w-full max-w-[1240px]
        bg-[#101010]
        rounded-full
        p-1.5 pl-6

      ">

                {/* بخش چپ: لوگو و منوها */}
                <div className="flex items-center gap-2 md:gap-3">
                    {/* Logo */}
                    <a href="#" className="text-2xl font-bold tracking-tighter text-white flex items-end leading-none">
                        <Image src={"/logo.png"} alt={"Logo"} width={40} height={40}/>
                    </a>

                    {/* Navigation Links - مخفی در موبایل، نمایش در دسکتاپ */}
                    <ul className="hidden lg:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="text font-normal text-gray-400 hover:text-white transition-colors"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* بخش راست: آیکون‌های اجتماعی و دکمه */}
                <div className="flex items-center gap-3">

                    {/* Social Icons Container - کپسول داخلی */}
                    <SocialIconsPill/>

                    {/* CTA Button */}
                    <a
                        href="/cv.pdf"
                        className="
              bg-gradient-to-r from-[#6366f1] to-[#8b5cf6]
              hover:from-[#5558e6] hover:to-[#7c4dff]
              text-white text font-normal
              px-9 py-2
              rounded-full
              transition-all duration-300
              shadow-[0_0_20px_rgba(139,92,246,0.3)]
              hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]
            "
                    >
                        Download CV
                    </a>
                </div>

            </nav>
        </header>
    );
}
