'use client';

import React from 'react';
import { Phone, Mail, LinkedinIcon, Send } from 'lucide-react';

export default function ContactSection() {
    return (
        <section className="py-20 px-4" id="contact">
            <div className="max-w-[1000px] mx-auto">

                {/* Main Card Container */}
                <div className="bg-[#202020] rounded-[40px] p-8 md:p-12 border border-white/5 shadow-2xl">

                    {/* Section Title */}
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-[#6366f1]">
                        Let’s discuss your Project
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                        {/* Left Side: Contact Info */}
                        <div className="md:col-span-1 flex flex-col gap-8">

                            {/* Phone Item */}
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 bg-[#5558e6] rounded-xl flex items-center justify-center flex-shrink-0 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <span className="text-gray-300 text-sm md:text-base font-medium tracking-wide">
                  +989123962608
                </span>
                            </div>

                            {/* Email Item */}
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 bg-[#5558e6] rounded-xl flex items-center justify-center flex-shrink-0 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <span className="text-gray-300 text-sm md:text-base font-medium tracking-wide">
                  armitafathi@gmail.com
                </span>
                            </div>

                            {/* LinkedIn Item */}
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 bg-[#5558e6] rounded-xl flex items-center justify-center flex-shrink-0 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <LinkedinIcon className="w-6 h-6" />
                                </div>
                                <a
                                    href="https://linkedin.com/in/armitafathi"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-gray-300 text-sm md:text-base font-medium tracking-wide hover:text-white transition-colors"
                                >
                                    in/armitafathi
                                </a>
                            </div>

                        </div>

                        {/* Right Side: Contact Form */}
                        <div className="md:col-span-2">
                            <form className="space-y-4">

                                {/* Row 1: Name & Email */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="w-full bg-white rounded-xl px-4 py-3.5 text-black placeholder:text-gray-500 focus:outline-none focus:ring-4 focus:ring-[#6366f1]/30 transition-shadow"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full bg-white rounded-xl px-4 py-3.5 text-black placeholder:text-gray-500 focus:outline-none focus:ring-4 focus:ring-[#6366f1]/30 transition-shadow"
                                    />
                                </div>

                                {/* Row 2: Phone & Location */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="tel"
                                        placeholder="Phone"
                                        className="w-full bg-white rounded-xl px-4 py-3.5 text-black placeholder:text-gray-500 focus:outline-none focus:ring-4 focus:ring-[#6366f1]/30 transition-shadow"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Location"
                                        className="w-full bg-white rounded-xl px-4 py-3.5 text-black placeholder:text-gray-500 focus:outline-none focus:ring-4 focus:ring-[#6366f1]/30 transition-shadow"
                                    />
                                </div>

                                {/* Row 3: Message */}
                                <textarea
                                    placeholder="Message"
                                    rows={4}
                                    className="w-full bg-white rounded-xl px-4 py-3.5 text-black placeholder:text-gray-500 focus:outline-none focus:ring-4 focus:ring-[#6366f1]/30 transition-shadow resize-none"
                                ></textarea>

                                {/* Submit Button (Added for functionality) */}
                                <div className="flex justify-end pt-2">
                                    <button
                                        type="button"
                                        className="flex items-center gap-2 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white px-8 py-3 rounded-full font-medium hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all transform hover:-translate-y-1"
                                    >
                                        <span>Send Message</span>
                                        <Send className="w-4 h-4" />
                                    </button>
                                </div>

                            </form>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
