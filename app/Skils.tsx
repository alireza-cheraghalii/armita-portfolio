'use client';

import React from 'react';
import Image from "next/image";

// کامپوننت داخلی برای نمایش لوگوی نرم‌افزارها
// این کامپوننت لوگوهای ادوبی را با متن و بقیه را با SVG می‌سازد تا نیازی به فایل عکس نباشد
const SkillIcon = ({ color, label, className }: { type: 'adobe' | 'svg'; color: string; label?: string; className?: string }) => {
    return (
        <div className={`flex items-center justify-center w-14 h-14 rounded-xl bg-[#202020] backdrop-blur-md border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.5)] `}>

                <div className="w-9 h-9" style={{ color: color }}>
                    {label === 'figma' && (
                        <Image src={"/skills/figma.png"} alt={"figma"} width={35.28} height={35.28}/>
                    )}
                    {label === 'html' && (
                        <Image src={"/skills/html.png"} alt={"html"} width={35.28} height={35.28}/>
                    )}
                    {label === 'css' && (
                        <Image src={"/skills/css.png"} alt={"css"} width={35.28} height={35.28}/>
                    )}
                    {label === 'ai' && (
                        <Image src={"/skills/Ai.png"} alt={"Ai"} width={35.28} height={35.28}  className={"rounded-lg"}/>
                    )}
                    {label === 'ae' && (
                        <Image src={"/skills/Ae.png"} alt={"Ae"} width={35.28} height={35.28}/>
                    )}
                    {label === 'pr' && (
                        <Image src={"/skills/pr.png"} alt={"pr"} width={35.28} height={35.28}/>
                    )}
                    {label === 'ps' && (
                        <Image src={"/skills/ps.png"} alt={"ps"} width={35.28} height={35.28}/>
                    )}
                </div>
        </div>
    );
};

// کامپوننت نوار پیشرفت تکی
const ProgressBar = ({ title, percentage }: { title: string; percentage: number }) => {
    return (
        <div className="mb-6">
            <div className="flex justify-between items-end mb-2">
                <span className="text-white font-medium text-lg">{title}</span>
                <span className="text-gray-400 text-sm">{percentage}%</span>
            </div>
            <div className="w-full bg-[#1c1c1c] rounded-full h-4 border border-[#2A2A2A] p-1">
                <div
                    className="bg-[#5B6CFF] h-1.5 rounded-full"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
};

export default function SkillsSection() {
    return (
        <section className="relative w-full py-20 px-4 md:px-0  text-white overflow-hidden">
            <div className="container mx-auto max-w-6xl">

                {/* Title */}
                <span
                    className="px-18 py-2 bg-[#202020] rounded-full text-gray-300 border border-white/10 text-xl font-medium ">
            Skills
          </span>

                {/* Floating Icons Area */}
                {/* ما اینجا از پوزیشن‌های دستی استفاده می‌کنیم تا دقیقاً شکل موج‌دار تصویر را بازسازی کنیم */}
                <div className="relative h-40 w-full my-10 hidden md:block">
                    {/* Figma - Left */}
                    <div className="absolute left-10 top-10">
                        <SkillIcon type="svg" label="figma" color="" className="opacity-80 blur-[1px]" />
                    </div>

                    {/* Ai - Orange */}
                    <div className="absolute left-[20%] top-20">
                        <SkillIcon type="adobe" label="ai" color="#ff9a00" />
                    </div>

                    {/* Ae - Purple */}
                    <div className="absolute left-[35%] top-5">
                        <SkillIcon type="adobe" label="ae" color="#dcb6fa" />
                    </div>

                    {/* Pr - Dark Purple/Blue */}
                    <div className="absolute left-[50%] top-24">
                        <SkillIcon type="adobe" label="pr" color="#9999ff" />
                    </div>

                    {/* Ps - Blue */}
                    <div className="absolute left-[65%] top-8">
                        <SkillIcon type="adobe" label="ps" color="#31a8ff" />
                    </div>

                    {/* HTML - Orange Shield */}
                    <div className="absolute left-[80%] top-20">
                        <SkillIcon type="svg" label="html" color="" />
                    </div>

                    {/* CSS - Blue Shield */}
                    <div className="absolute right-10 top-5">
                        <SkillIcon type="svg" label="css" color="" />
                    </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">

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
