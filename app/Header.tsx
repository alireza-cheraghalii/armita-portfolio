'use client';

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import SocialIconsPill from "@/app/SocialIconsPill";

export default function Header() {
    // استیت برای ذخیره نام سکشن فعال
    const [activeSection, setActiveSection] = useState('');

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About Me', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Works', href: '#works' },
        { name: 'Employment history', href: '#history' },
        { name: 'Contact', href: '#contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            let current = '';

            navLinks.forEach((link) => {
                const sectionId = link.href.substring(1);
                const sectionElement = document.getElementById(sectionId);


                if (sectionElement) {
                    const sectionTop = sectionElement.offsetTop - 150;
                    const sectionHeight = sectionElement.offsetHeight;

                    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                        current = sectionId;
                    }
                }
            });

            setActiveSection(current);
        };


        window.addEventListener('scroll', handleScroll);


        handleScroll();


        return () => window.removeEventListener('scroll', handleScroll);
    }, [navLinks]); // وابستگی به navLinks

    return (
        <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 w-full">
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
                <div className="flex items-center gap-8 md:gap-12">
                    <a href="#" className="flex items-center">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={40}
                            height={40}
                            className="w-8 h-8 md:w-10 md:h-10 object-contain"
                        />
                    </a>

                    <ul className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => {
                            // بررسی اینکه آیا این لینک فعال است یا خیر
                            const isActive = activeSection === link.href.substring(1);

                            return (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className={`
                                            text-sm font-medium transition-colors duration-200
                                            ${isActive
                                            ? 'text-[#5B6CFF]' // رنگ آبی (همرنگ دکمه) اگر فعال بود
                                            : 'text-gray-400 hover:text-white' // رنگ پیش‌فرض خاکستری
                                        }
                                        `}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className="flex items-center gap-3 md:gap-4">
                    <div className="hidden md:block">
                        <SocialIconsPill />
                    </div>

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
