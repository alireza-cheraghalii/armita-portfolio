'use client';

import React from 'react';
import { ChevronDown } from 'lucide-react';

const historyItems = [
    { id: 1, company: 'Sadad PSP', date: 'present - 2024', logoLetter: 'S', logoColor: 'text-blue-500' },
    { id: 2, company: 'Kadoona', date: 'Apr 2024-Nov 2024', logoLetter: 'K', logoColor: 'text-purple-500' },
    { id: 3, company: 'Asan Pardakht PSP', date: 'Des 2022-Nov 2024', logoLetter: 'A', logoColor: 'text-red-500' },
    { id: 4, company: 'Mobin one kish', date: 'Nov 2021-Dec 2022', logoLetter: 'M', logoColor: 'text-orange-500' },
    { id: 5, company: 'Negin Rayan Satrap', date: 'Des 2022-Nov 2024', logoLetter: 'N', logoColor: 'text-cyan-500' },
    { id: 6, company: 'Ben Ice', date: 'Apr 2024-Nov 2024', logoLetter: 'B', logoColor: 'text-green-500' },
];

// تنظیم دقیق موقعیت عمودی هر لوگو برای ایجاد موج طبیعی (بر اساس پیکسل)
const companyLogos = [
    { label: 'M', color: '#1e3a8a', yOffset: 'translate-y-0' },      // Middle
    { label: 'AP', color: '#dc2626', yOffset: 'translate-y-12' },     // Down
    { label: 'Sa', color: '#06b6d4', yOffset: '-translate-y-4' },     // Slight Up
    { label: 'X', color: '#ef4444', yOffset: 'translate-y-10' },      // Down
    { label: 'Ka', color: '#8b5cf6', yOffset: '-translate-y-8' },     // Up High
    { label: 'Mo', color: '#f97316', yOffset: 'translate-y-8' },      // Down
    { label: 'TD', color: '#2563eb', yOffset: '-translate-y-2' },     // Slight Up
    { label: 'Be', color: '#22c55e', yOffset: 'translate-y-12' },     // Down Low
    { label: 'No', color: '#f59e0b', yOffset: 'translate-y-0' },      // Middle
];

export default function EmploymentHistory() {
    return (
        <section className="py-24 px-4 overflow-hidden relative">
            <div className="max-w-[1000px] mx-auto relative z-10">

                {/* Title Badge */}
                <div className="flex justify-center mb-16">
          <span className="px-6 py-2 bg-[#1a1a1a] rounded-full text-gray-300 border border-white/5 text-sm font-medium shadow-2xl backdrop-blur-sm">
            Employment history
          </span>
                </div>

                {/* --- Floating Logos Row (Improved) --- */}
                <div className="relative w-full mb-32">
                    {/* Gradients to fade edges (Optional visual polish) */}
                    

                    {/* Scrollable Container */}
                    <div className="overflow-x-auto pb-10 hide-scrollbar flex justify-start md:justify-center">
                        <div className="flex flex-nowrap items-center gap-6 px-10 pt-10 pb-10">
                            {companyLogos.map((logo, index) => (
                                <div
                                    key={index}
                                    className={`
                    w-16 h-16 md:w-20 md:h-20 flex-shrink-0 bg-white rounded-[20px] 
                    flex items-center justify-center shadow-[0_10px_30px_rgba(255,255,255,0.05)]
                    hover:scale-110 transition-transform duration-300 cursor-pointer
                    ${logo.yOffset}
                  `}
                                >
                  <span
                      className="text-2xl md:text-3xl font-extrabold"
                      style={{ color: logo.color }}
                  >
                    {logo.label}
                  </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Job History List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {historyItems.map((item) => (
                        <JobCard key={item.id} item={item} />
                    ))}
                </div>

            </div>

            {/* CSS برای مخفی کردن اسکرول‌بار در حالی که هنوز قابل اسکرول است */}
            <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </section>
    );
}

function JobCard({ item }: { item: any }) {
    return (
        <div className="group bg-[#0f0f0f] border border-white/5 rounded-2xl p-4 md:p-5 flex items-center justify-between transition-all duration-300 hover:bg-[#161616] hover:border-white/10 hover:shadow-lg hover:shadow-indigo-500/5">

            <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                    <span className={`font-bold text-lg ${item.logoColor}`}>{item.logoLetter}</span>
                </div>
                <div>
                    <h3 className="text-gray-200 font-semibold text-sm md:text-base leading-tight group-hover:text-white transition-colors">{item.company}</h3>
                </div>
            </div>

            <div className="flex items-center gap-3">
        <span className="text-[#6366f1] text-xs font-medium whitespace-nowrap bg-[#6366f1]/10 px-2 py-1 rounded-md">
          {item.date}
        </span>
                <ChevronDown className="w-4 h-4 text-gray-600 group-hover:text-gray-300 transition-colors" />
            </div>

        </div>
    );
}
