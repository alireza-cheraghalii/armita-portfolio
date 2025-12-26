'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

type Project = {
    id: number;
    title: string;
    category: string;
    type: 'App' | 'Website & Dashboard' | 'Graphic Design';
    image: string;
};

const projects: Project[] = [
    { id: 1, title: 'AP IPG', category: 'Payment Methode', type: 'Website & Dashboard', image: '/sample.png' },
    { id: 2, title: 'iva App', category: 'Payment Application', type: 'App', image: '/sample.png' },
    { id: 3, title: 'AP IPG', category: 'Payment Methode', type: 'Website & Dashboard', image: '/sample.png' },
    { id: 4, title: 'Kadoona', category: 'Website and Web Application', type: 'Website & Dashboard', image: '/sample.png' },
    { id: 5, title: 'AP App', category: 'Merchant Support System', type: 'App', image: '/sample.png' },
    { id: 6, title: 'Sadad', category: 'Design System', type: 'Graphic Design', image: '/sample.png' },
    { id: 7, title: 'Kadoona', category: 'Website and Web Application', type: 'Website & Dashboard', image: '/sample.png' },
    { id: 8, title: 'Sadad IPG', category: 'Payment Methode', type: 'Website & Dashboard', image: '/sample.png' },
    { id: 9, title: 'Shahin', category: 'Power BI', type: 'Website & Dashboard', image: '/sample.png' },
    { id: 10, title: 'Work Ap', category: 'Dashboard', type: 'Website & Dashboard', image: '/sample.png' },
    { id: 11, title: 'Goldom', category: 'Website Design', type: 'Website & Dashboard', image: '/sample.png' },
    { id: 12, title: 'Satrap', category: 'Design System', type: 'Graphic Design', image: '/sample.png' },
];

const tabs = ['All', 'App', 'Website & Dashboard', 'Graphic Design'];

export default function PortfolioSection() {
    const [activeTab, setActiveTab] = useState('All');

    const filteredProjects = activeTab === 'All'
        ? projects
        : projects.filter(project => project.type === activeTab);

    return (
        <section className="py-16 md:py-24 px-4 min-h-screen" id="portfolio">
            <div className="max-w-[1240px] mx-auto">

                {/* Header Section */}
                <div className="flex flex-col items-center mb-10 space-y-4 text-center">
                    <span className="px-6 py-2 bg-[#1a1a1a] rounded-full text-gray-300 border border-white/10 text-sm font-medium">
                        My Latest Work
                    </span>
                    <h2 className="text-2xl md:text-4xl font-bold text-indigo-400 leading-snug">
                        Perfect solution For <br className="md:hidden" /> Digital Experience
                    </h2>
                </div>

                {/* Filter Tabs */}
                {/* overflow-x-auto allows tabs to scroll on very small screens */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 px-2">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`
                                px-4 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 whitespace-nowrap
                                ${activeTab === tab
                                ? 'bg-[#6366f1] text-white shadow-[0_0_15px_rgba(99,102,241,0.4)] scale-105'
                                : 'bg-white text-black hover:bg-gray-200'}
                            `}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ProjectCard project={project} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

            </div>
        </section>
    );
}

// کامپوننت کارت پروژه (Updated for Next/Image)
function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="group relative bg-[#4f46e5] rounded-3xl overflow-hidden aspect-square flex flex-col cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(79,70,229,0.3)]">

            <div className="absolute inset-0 w-full h-full">
                {/* Use Next.js Image for better performance */}
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
            </div>

            {/* Optional Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white font-bold text-lg">{project.title}</h3>
                <p className="text-gray-200 text-sm">{project.category}</p>
            </div>

        </div>
    );
}
