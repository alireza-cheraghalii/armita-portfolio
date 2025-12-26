'use client';

import React from 'react';
import Image from "next/image";
import ContactSection from "@/app/ContactSection"; // اطمینان از مسیر صحیح
import Footer from "@/app/Footer"; // اطمینان از مسیر صحیح
import HeroActionButtons from "@/app/HeroActionButtons";
import HeroTitle from "@/app/HeroTitle";
import SkillsSection from "@/app/Skils";
import PortfolioSection from "@/app/Projects";
import EmploymentHistory from "@/app/HistoryItems";

export default function HeroSection() {
    return (
        // این بخش فاصله از هدر را تنظیم می‌کند
        <section className="bg-[#101010] min-h-screen pt-64 md:pt-96 px-2 md:px-4 flex justify-center overflow-x-hidden">

            {/* کانتینر اصلی خاکستری رنگ با گوشه‌های گرد */}
            <div className="relative w-full max-w-[1400px] bg-[#171717] rounded-t-[60px] md:rounded-t-[600px] lg:rounded-t-[500px] pt-0 pb-12 px-4 md:px-10 text-center shadow-2xl border-t border-white/5">

                {/* بخش تصویر پروفایل و Hello - با مارجین منفی به بالا کشیده شده */}
                <div className="relative z-10 flex flex-col items-center -mt-20 md:-mt-60 mb-8">
                    {/* قاب عکس */}
                    <div
                        className="relative w-40 h-40 md:w-144 md:h-100 rounded-full  ">
                        <Image
                            src="/profile.png"
                            alt="Profile"
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-500 w-full h-full"
                            priority
                        />
                    </div>

                    {/* بج Hello */}
                    <span
                        className="mt-6 px-6 py-2 bg-[#1a1a1a] rounded-full text-base font-medium text-[#F5F5F5] border border-white/10 shadow-lg">
                        Hello
                    </span>
                </div>

                {/* Main Headline (UI Designer Text) */}
                <HeroTitle/>

                {/* Portfolio / Hire Me Buttons */}
                <HeroActionButtons/>

                {/* About Section Container */}
                <div className="relative z-10 mx-auto mt-20 md:mt-28 max-w-6xl">

                    {/* About Label */}
                    <div className="flex justify-center mb-8">
                        <span className="px-10 py-2 bg-[#1a1a1a] rounded-full text-lg md:text-xl font-medium text-gray-300 border border-white/5">
                          About Me
                        </span>
                    </div>

                    {/* Info Stats (Date, Location, etc) */}
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:gap-6 text-sm md:text-xl text-[#F5F5F5] mb-12 font-normal opacity-80">
                        <span>April 1996</span>
                        <span className="text-[#5B6CFF]">|</span>
                        <span>Tehran, Iran</span>
                        <span className="text-[#5B6CFF]">|</span>
                        <span>Metallurgy Engineering</span>
                        <span className="text-[#5B6CFF] hidden md:inline">|</span>
                        <span className="w-full md:w-auto mt-2 md:mt-0">+4 Years Experience</span>
                    </div>

                    {/* Sub-headline */}
                    <h2 className="text-xl md:text-3xl font-bold text-[#5B6CFF] mb-6">
                        Why Hire Me For Your Next Project?
                    </h2>

                    {/* Description Text */}
                    <p className="text-[#b3b3b3] leading-relaxed mb-16 text-sm md:text-lg max-w-4xl mx-auto font-normal px-4">
                        Highly motivated and results-oriented graphic designer and UI/UX designer with a strong work
                        ethic and a commitment to continuous learning. Currently expanding my skillset through ongoing
                        educational pursuits.
                    </p>

                    {/* Services Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20">
                        <ServiceCard
                            icon={<Image src="/services/web-design.png" width={32} height={32} alt="web" className="w-8 h-8"/>}
                            title="Web Design"
                        />
                        <ServiceCard
                            icon={<Image src="/services/mobile-app.png" width={32} height={32} alt="mobile" className="w-8 h-8"/>}
                            title="App Design"
                        />
                        <ServiceCard
                            icon={<Image src="/services/dashboard.png" width={32} height={32} alt="dashboard" className="w-8 h-8"/>}
                            title="Dashboard & SaaS"
                        />
                        <ServiceCard
                            icon={<Image src="/services/graphic-design.png" width={32} height={32} alt="graphic" className="w-8 h-8"/>}
                            title="Graphic Design"
                        />
                    </div>
                </div>

                {/* سایر بخش‌ها داخل همین کانتینر خاکستری رندر می‌شوند */}
                <div className="w-full border-t border-white/5 pt-10">
                    <SkillsSection/>
                    <PortfolioSection/>
                    <EmploymentHistory/>
                    <ContactSection/>
                    <Footer/>
                </div>
            </div>
        </section>
    );
}

// کامپوننت کمکی برای کارت‌های سرویس
function ServiceCard({icon, title}: { icon: React.ReactNode, title: string }) {
    return (
        <div className="group flex items-center justify-center md:justify-start gap-4 bg-[#202020] border border-white/5 hover:border-[#5B6CFF]/50 px-6 py-5 rounded-2xl transition-all duration-300 cursor-default hover:bg-[#252525] hover:-translate-y-1 hover:shadow-lg shadow-black/20">
            <div className="opacity-70 group-hover:opacity-100 transition-opacity filter grayscale group-hover:grayscale-0">
                {icon}
            </div>
            <span className="text-base font-medium text-gray-300 group-hover:text-white transition-colors whitespace-nowrap">
                {title}
            </span>
        </div>
    );
}
