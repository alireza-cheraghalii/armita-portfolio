'use client';

import React from 'react';
import Image from "next/image";

// کامپوننت داخلی آیکون
const SkillIcon = ({ label, color, className }: { type: 'adobe' | 'svg'; color?: string; label?: string; className?: string }) => {
    return (
        <div className={`flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#202020] backdrop-blur-md border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-110 ${className}`}>
            <div className="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center" style={{ color: color }}>
                {/* اطمینان از وجود فایل‌ها در پوشه public/skills/ */}
                {label === 'figma' && <Image src="/skills/figma.png" alt="figma" fill className="object-contain" />}
                {label === 'html' && <Image src="/skills/html.png" alt="html" fill className="object-contain" />}
                {label === 'css' && <Image src="/skills/css.png" alt="css" fill className="object-contain" />}
                {label === 'ai' && <Image src="/skills/Ai.png" alt="Ai" fill className="object-contain rounded-md" />}
                {label === 'ae' && <Image src="/skills/Ae.png" alt="Ae" fill className="object-contain" />}
                {label === 'pr' && <Image src="/skills/pr.png" alt="pr" fill className="object-contain" />}
                {label === 'ps' && <Image src="/skills/ps.png" alt="ps" fill className="object-contain" />}
            </div>
        </div>
    );
};

// کامپوننت نوار پیشرفت
const ProgressBar = ({ title, percentage }: { title: string; percentage: number }) => {
    return (
        <div className="mb-6 w-full">
            <div className="flex justify-between items-end mb-2 px-1">
                <span className="text-white font-medium text-sm md:text-base tracking-wide">{title}</span>
                <span className="text-gray-400 text-xs md:text-sm font-mono">{percentage}%</span>
            </div>
            <div className="w-full bg-[#1c1c1c] rounded-full h-3 border border-[#2A2A2A] p-[2px]">
                <div
                    className="bg-[#5B6CFF] h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(91,108,255,0.4)]"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
};

export default function SkillsSection() {
    return (
        <section className="relative w-full py-16 md:py-24 px-4 md:px-6 text-white overflow-hidden" id="skills">
            <div className="container mx-auto max-w-6xl">

                {/* Title Container */}
                <div className="flex justify-center w-full mb-12 md:mb-20">
                    <span className="px-8 py-2 bg-[#202020] rounded-full text-gray-300 border border-white/10 text-base md:text-lg font-medium shadow-lg backdrop-blur-sm">
                        Skills
                    </span>
                </div>

                {/* ================= MOBILE ICONS (Grid Layout) ================= */}
                {/* در موبایل آیکون‌ها به صورت یک شبکه منظم نمایش داده می‌شوند */}
                <div className="md:hidden flex flex-wrap justify-center gap-4 mb-12">
                    <SkillIcon type="svg" label="figma" />
                    <SkillIcon type="adobe" label="ai" />
                    <SkillIcon type="adobe" label="ae" />
                    <SkillIcon type="adobe" label="pr" />
                    <SkillIcon type="adobe" label="ps" />
                    <SkillIcon type="svg" label="html" />
                    <SkillIcon type="svg" label="css" />
                </div>

                {/* ================= DESKTOP ICONS (Wave Layout) ================= */}
                {/* این بخش فقط در دسکتاپ نمایش داده می‌شود تا چیدمان موجی خراب نشود */}
                <div className="relative h-48 w-full mb-16 hidden md:block select-none">
                    {/* استفاده از درصد برای پوزیشن‌ها جهت ریسپانسیو بودن در سایزهای مختلف مانیتور */}
                    <div className="absolute left-[2%] top-10 hover:-translate-y-2 transition-transform duration-300">
                        <SkillIcon type="svg" label="figma" className="opacity-80 blur-[0.5px]" />
                    </div>
                    <div className="absolute left-[16%] top-24 hover:-translate-y-2 transition-transform duration-300">
                        <SkillIcon type="adobe" label="ai" color="#ff9a00" />
                    </div>
                    <div className="absolute left-[30%] top-5 hover:-translate-y-2 transition-transform duration-300">
                        <SkillIcon type="adobe" label="ae" color="#dcb6fa" />
                    </div>
                    <div className="absolute left-[45%] top-28 hover:-translate-y-2 transition-transform duration-300">
                        <SkillIcon type="adobe" label="pr" color="#9999ff" />
                    </div>
                    <div className="absolute left-[60%] top-8 hover:-translate-y-2 transition-transform duration-300">
                        <SkillIcon type="adobe" label="ps" color="#31a8ff" />
                    </div>
                    <div className="absolute left-[75%] top-24 hover:-translate-y-2 transition-transform duration-300">
                        <SkillIcon type="svg" label="html" />
                    </div>
                    <div className="absolute right-[2%] top-5 hover:-translate-y-2 transition-transform duration-300">
                        <SkillIcon type="svg" label="css" />
                    </div>
                </div>

                {/* ================= SKILLS PROGRESS BARS ================= */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-2 md:gap-y-6 w-full max-w-5xl mx-auto">
                    {/* Left Column */}
                    <div>
                        <ProgressBar title="Figma" percentage={90} />
                        <ProgressBar title="Wireframing" percentage={100} />
                        <ProgressBar title="Design system creation" percentage={100} />
                        <ProgressBar title="CSS/HTML" percentage={80} />
                    </div>

                    {/* Right Column */}
                    <div>
                        <ProgressBar title="Adobe illustrator" percentage={90} />
                        <ProgressBar title="Adobe after effects" percentage={70} />
                        <ProgressBar title="Adobe photoshop" percentage={70} />
                        <ProgressBar title="Adobe premiere" percentage={70} />
                    </div>
                </div>

            </div>
        </section>
    );
}
