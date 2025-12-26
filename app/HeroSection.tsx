'use client';

import React from 'react';
import SkillsSection from "@/app/Skils";
import PortfolioSection from "@/app/Projects";
import EmploymentHistory from "@/app/HistoryItems";
import ContactSection from "@/app/ContactSection";
import Footer from "@/app/Footer";
import HeroActionButtons from "@/app/HeroActionButtons";
import HeroTitle from "@/app/HeroTitle";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="bg-[#101010] min-h-screen pt-90 px-4 flex justify-center ">
            <div
                className="mx-40 relative w-full max-w-[100%] bg-[#171717] rounded-t-[100px] md:rounded-t-[250px] pt-16 pb-12 px-6 md:px-16 text-center">
                <div className="relative z-10 flex flex-col items-center -mt-76">
                    <div className="relative w-40 h-40 md:w-144 md:h-100 rounded-full ">
                        <img
                            src="/profile.png"
                            alt="Profile"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        />
                    </div>

                    <span
                        className="mt-6 px-4 py-1.5 bg-[#1a1a1a] rounded-full text-normal font-medium text-[#F5F5F5] border border-white/5">
            Hello
          </span>
                </div>

                {/* Main Headline */}
                <HeroTitle/>

                {/* Portfolio / Hire Me Toggle */}
                <HeroActionButtons/>

                {/* About Section Container */}
                <div className="relative z-10  mx-auto mt-28">
                    {/* About Label */}
                    <div className="flex justify-center mb-6">
            <span className="px-12 py-2 bg-[#1a1a1a] rounded-full text-xl font-medium text-gray-300 border border-white/5">
              About Me
            </span>
                    </div>

                    {/* Info Stats */}
                    <div
                        className="flex flex-wrap justify-center gap-3 md:gap-6 text-xl text-[#F5F5F5] mb-12 font-normal">
                        <span>April 1996</span>
                        <span className="text-[#667AF8]">|</span>
                        <span>Tehran, Iran</span>
                        <span className="text-[#667AF8]">|</span>
                        <span>Metallurgy Engineering</span>
                        <span className="text-[#667AF8]">|</span>
                        <span >+4 Years Experience</span>
                    </div>

                    {/* Sub-headline */}
                    <h2 className="text-xl md:text-2xl font-bold text-indigo-400 mb-6">
                        Why Hire Me For Your Next Project?
                    </h2>

                    {/* Description Text */}
                    <p className="text-[#F5F5F5] leading-relaxed mb-12 text-sm md:text-xl max-w-4xl mx-auto font-normal">
                        Highly motivated and results-oriented graphic designer and UI/UX designer with a strong work
                        ethic and a commitment to continuous learning. Currently expanding my skillset through ongoing
                        educational pursuits.
                    </p>

                    {/* Skills / Services Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        <ServiceCard icon={<Image src={"/services/web-design.png"} width={40} height={40} alt={"web"}/>} title="Web Design"/>
                        <ServiceCard icon={<Image src={"/services/mobile-app.png"} width={40} height={40} alt={"mobile-app"}/>} title="App Design"/>
                        <ServiceCard icon={<Image src={"/services/dashboard.png"} width={40} height={40} alt={"dashboard"}/>} title="Dashboard & SaaS"/>
                        <ServiceCard icon={<Image src={"/services/graphic-design.png"} width={40} height={40} alt={"graphic-design"}/>} title="Graphic Design"/>
                    </div>
                </div>
                <SkillsSection/>
                <PortfolioSection/>
                <EmploymentHistory/>
                <ContactSection/>
                <Footer/>
            </div>
        </section>
    );
}

// کامپوننت کمکی برای کارت‌های پایین صفحه
function ServiceCard({icon, title}: { icon: React.ReactNode, title: string }) {
    return (
        <div
            className="group flex items-center gap-3 bg-[#151515] border border-white/5 hover:border-indigo-500/30 px-6 py-4 rounded-full transition-all duration-300 cursor-default">
            <div className="text-gray-400 group-hover:text-indigo-400 transition-colors">
                {icon}
            </div>
            <span className="text-base font-medium text-[#FFFFFF] group-hover:text-indigo-400 whitespace-nowrap">
        {title}
      </span>
        </div>
    );
}
