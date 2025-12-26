'use client';

import React from 'react';

export default function HeroTitle() {
    return (
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 mt-4 mb-6">

            {/* Main Heading */}
            <h1 className="font-poppins font-semibold text-3xl sm:text-5xl md:text-[56px] leading-[1.2] md:leading-[1.1] tracking-tight text-white">

                {/* Line 1: I'm Armita Fathi */}
                <span className="inline-block mb-2 sm:mb-4">
                  I&apos;m <span className="text-[#5B6CFF]">Armita Fathi</span>,
                </span>

                <br className="hidden sm:block"/>

                {/* Line 2: UI & UX Designer + Doodle */}
                <span className="relative inline-block mt-1 sm:mt-0">

                    {/* Doodle: مخفی شده در موبایل‌های خیلی کوچک، نمایش در تبلت به بالا */}
                    <div className="hidden sm:block absolute -left-12 -bottom-10 sm:-left-10 sm:top-11 w-10 sm:w-14 opacity-90">
                        <svg width="44" height="50" viewBox="0 0 44 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M41.7 21.2146C40.7085 25.7291 34.211 33.7667 35.751 48.3018M31.5705 13.4689C23.6724 18.3069 6.98037 30.6255 3.39687 41.1959M29.3695 1.94347C25.3566 1.06212 14.1593 0.81131 1.47365 6.8588"
                                stroke="#F5F5F5" strokeWidth="2.94682" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>

                    {/* Text content */}
                    UI & UX Designer
                </span>

            </h1>

        </div>
    );
}
