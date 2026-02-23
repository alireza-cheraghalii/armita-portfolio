'use client';

import React, {useState} from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';


const historyItems = [
    { id: 1, company: 'Sadad PSP', date: 'present - 2024', logo: '/company/Sadad.png'},
    { id: 2, company: 'Kadoona', date: 'Apr 2024-Nov 2024', logo: '/company/kadona.png'},
    { id: 3, company: 'Asan Pardakht PSP', date: 'Des 2022-Nov 2024', logo: '/company/ap.png'},
    { id: 4, company: 'Mobin one kish', date: 'Nov 2021-Dec 2022', logo: '/company/mobin-one.png'},
    { id: 5, company: 'Negin Rayan Satrap',description:"Product Design:Designed user interfaces for order kiosk software, POS web application, and Android POS application, ensuring smooth user experience across platforms.Increase website traffic, sales, and engagement with target marketCreated digital menus and websites that effectively communicate product offerings and enhance customer engagement.Designed visually appealing catalogs, brochures, and software tutorial videos to effectively communicate information and enhance user experience.Reduce training costs through software tutorial videos", date: 'Des 2022-Nov 2024', logo: 'company/satrap.png' },
    { id: 6, company: 'Ben Ice',description:"", date: 'Apr 2024-Nov 2024', logo: '/company/ben_ice.png'},
];

const companyLogos = [
    { icon: 'ap.png', color: '#dc2626', yOffset: '-translate-y-2' },
    { icon: 'Sadad.svg', color: '#2563eb', yOffset: 'translate-y-8 md:translate-y-12' },
    { icon: '195.svg', color: '#f59e0b', yOffset: '-translate-y-2' },
    { icon: 'aptel.png', color: '#ef4444', yOffset: 'translate-y-8 md:translate-y-12' },
    { icon: 'river.svg', color: '#1e3a8a', yOffset: '-translate-y-2' },
    { icon: 'ben_ice.png', color: '#22c55e', yOffset: 'translate-y-8 md:translate-y-12' },
    { icon: 'kadona.png', color: '#8b5cf6', yOffset: '-translate-y-2' },
    { icon: 'novin-travel.png', color: '#f59e0b', yOffset: 'translate-y-8 md:translate-y-12' },
    { icon: 'satrap.png', color: '#06b6d4', yOffset: '-translate-y-2' },
    { icon: 'tiran.svg', color: '#f59e0b', yOffset: 'translate-y-8 md:translate-y-12' },
    { icon: 'zarine.svg', color: '#f59e0b', yOffset: '-translate-y-2' },
    { icon: 'mobin-one.png', color: '#f97316', yOffset: 'translate-y-4 md:translate-y-8' },
];

export default function EmploymentHistory() {
    return (
        <section className="py-20 md:py-24 px-4 overflow-hidden relative" id="history">
            <div className="mx-auto relative z-10">

                {/* Title Badge */}
                <div className="flex justify-center mb-16">
                    <span className="px-6 py-2 bg-[#1a1a1a] rounded-full text-gray-300 border border-white/5 text-sm lg:text-xl font-medium shadow-2xl backdrop-blur-sm">
                        Employment history
                    </span>
                </div>

                {/* --- Floating Logos Row --- */}
                <div className="relative w-full mb-20 md:mb-32">
                    {/* اسکرول افقی برای موبایل با پدینگ مناسب در ابتدا و انتها */}
                    <div className="overflow-x-auto pb-6 hide-scrollbar w-full">
                        <div className="flex flex-nowrap items-center justify-start md:justify-center gap-5  px-4 md:px-10 py-10 min-w-max mx-auto">
                            {companyLogos.map((logo, index) => (
                                <div
                                    key={index}
                                    className={`
                                        w-16 h-16 md:w-20 md:h-20 flex-shrink-0 bg-white rounded-[15px] 
                                        flex items-center justify-center shadow-[0_10px_30px_rgba(255,255,255,0.05)]
                                        hover:scale-110 transition-transform duration-300 cursor-pointer overflow-hidden
                                        
                                        ${logo.yOffset}
                                    `}
                                >
                                    <img
                                        src={`/company/${logo.icon}`}
                                        alt={`Logo-${index}`}
                                        width={"64px"}
                                        height={"64px"}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Job History List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 items-start">
                    {historyItems.map((item) => (
                        <JobCard key={item.id} item={item} />
                    ))}
                </div>

            </div>

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
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`
                group border rounded-2xl overflow-hidden transition-all duration-300
                ${isOpen ? 'border-[#6366f1]/50 shadow-lg shadow-indigo-500/10' : 'border-white/9 hover:border-white/10 hover:shadow-lg hover:shadow-indigo-500/5'}
            `}
        >
            {/* Header - Clickable Area */}
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="p-4 flex items-center justify-between cursor-pointer bg-[#202020] relative z-10"
            >
                <div className="flex items-center gap-3 md:gap-4 overflow-hidden">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm overflow-hidden">
                        <img src={item.logo} alt={item.company}  width={"36px"} height={"36px"}/>
                    </div>
                    <div className="min-w-0">
                        <h3 className="text-gray-200 font-semibold text-sm md:text-base leading-tight group-hover:text-white transition-colors truncate">
                            {item.company}
                        </h3>
                        {/* نمایش نقش (Role) زیر نام کمپانی */}
                        <p className="text-xs text-gray-500 truncate mt-0.5">{item.role}</p>
                    </div>
                </div>

                <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
                    <span className="text-[#6366f1] text-[10px] md:text-xs font-medium whitespace-nowrap bg-[#6366f1]/10 px-2 py-1 rounded-md">
                        {item.date}
                    </span>
                    {/* آیکون با قابلیت چرخش */}
                    <ChevronDown
                        className={`w-4 h-4 text-gray-600 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#6366f1]' : 'group-hover:text-gray-300'}`}
                    />
                </div>
            </div>

            {/* Accordion Content - Description */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden bg-[#202020]"
                    >
                        <div className="px-4 pb-5 pt-0">
                            <div className="pt-4">
                                <p className="text-gray-400 text-sm leading-relaxed text-justify">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
