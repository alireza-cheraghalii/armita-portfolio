'use client';

import React from 'react';
import Image from "next/image";
import SocialIconsPill from "@/app/SocialIconsPill";

export default function Header() {
    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'About Me', href: '#' },
        { name: 'Skills', href: '#' },
        { name: 'Works', href: '#' },
        { name: 'Employment history', href: '#' },
        { name: 'Contact', href: '#' },
    ];

    return (
        // تغییر 1: حذف bg-[#101010] از اینجا برای ایجاد حالت شناور واقعی
        <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 w-full">

            {/* Container اصلی - کپسول شناور */}
            <nav className="
                flex items-center justify-between
                w-full md:max-w-[1240px]
                bg-[#1A1A1A]
                backdrop-blur-md
                border border-white/10
                rounded-full
                p-2 pl-6 md:pl-8
                shadow-2xl
            ">

                {/* بخش چپ: لوگو و منوها */}
                <div className="flex items-center gap-8 md:gap-12">
                    {/* Logo */}
                    <a href="#" className="flex items-center">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={40}
                            height={40}
                            className="w-8 h-8 md:w-10 md:h-10 object-contain"
                        />
                    </a>

                    {/* Navigation Links - نمایش فقط در دسکتاپ */}
                    <ul className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* بخش راست: آیکون‌های اجتماعی و دکمه */}
                <div className="flex items-center gap-3 md:gap-4">

                    {/* Social Icons Container - مخفی در موبایل برای جلوگیری از شلوغی */}
                    <div className="hidden md:block">
                        <SocialIconsPill />
                    </div>

                    {/* CTA Button */}
                    <a
                        href="/cv.pdf"
                        className="
                            bg-[#5B6CFF] hover:bg-[#4a5ae0]
                            text-white text-sm font-medium
                            px-6 py-2.5 md:px-8 md:py-3
                            rounded-full
                            transition-all duration-300
                            shadow-[0_0_15px_rgba(91,108,255,0.3)]
                            hover:shadow-[0_0_25px_rgba(91,108,255,0.5)]
                            hover:-translate-y-0.5
                            whitespace-nowrap
                        "
                    >
                        Download CV
                    </a>
                </div>

            </nav>
        </header>
    );
}
