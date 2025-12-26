'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // برای انیمیشن تغییر تب‌ها (اختیاری ولی زیبا)

// نوع داده‌های پروژه
type Project = {
    id: number;
    title: string;
    category: string;
    type: 'App' | 'Website & Dashboard' | 'Graphic Design';
    image: string; // مسیر تصویر
};

// لیست پروژه‌ها طبق تصویر
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

    // فیلتر کردن پروژه‌ها بر اساس تب انتخاب شده
    const filteredProjects = activeTab === 'All'
        ? projects
        : projects.filter(project => project.type === activeTab);

    return (
        <section className=" py-20 px-4 min-h-screen">
            <div className="max-w-[1240px] mx-auto">

                {/* Header Section */}
                <div className="flex flex-col items-center mb-12 space-y-4">
          <span className="px-6 py-2 bg-[#1a1a1a] rounded-full text-gray-300 border border-white/10 text-sm font-medium">
            My Latest Work
          </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-indigo-400 text-center">
                        Perfect solution For Digital Experience
                    </h2>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`
                px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300
                ${activeTab === tab
                                ? 'bg-[#6366f1] text-white shadow-[0_0_15px_rgba(99,102,241,0.4)]'
                                : 'bg-white text-black hover:bg-gray-200'}
              `}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
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
                </div>

            </div>
        </section>
    );
}

// کامپوننت کارت پروژه
function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="group relative bg-[#4f46e5] rounded-3xl overflow-hidden aspect-square flex flex-col cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(79,70,229,0.3)]">

            <div className="absolute inset-0  flex items-end justify-center  overflow-hidden">



        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto object-cover object-top rounded-t-lg transform  transition-transform duration-500 shadow-2xl"
        />

            </div>

        </div>
    );
}
