'use client';

import React from 'react';

export default function HeroActionButtons() {
    return (
        <div className="relative inline-flex items-center justify-center mt-12 mb-8">

            {/* --- Doodles (Absolute Positioned) --- */}

            {/* Star Doodle (Bottom Left) */}
            <div className="absolute -left-16 top-10 opacity-60">
                <svg width="40" height="40" viewBox="0 0 17 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12.9318 5.85088C11.3415 6.52683 9.86549 6.99596 9.61979 6.77996C9.41505 6.59995 8.56652 5.1626 7.73417 3.58585C6.90183 2.00909 5.9714 0.499741 5.64381 0.211733C4.62007 -0.688292 4.00496 1.3059 4.05558 5.72898L4.10999 9.92495L2.02929 10.9379C-0.750377 12.335 -0.696069 13.2277 2.3256 15.577L4.78636 17.51L5.13502 21.5037C5.6742 27.355 7.25786 27.9023 8.79754 22.8032C9.20888 21.3981 9.68593 20.2043 9.82496 20.1729C9.99256 20.0898 11.1182 20.6953 12.3257 21.3728C13.5332 22.0503 14.994 22.4896 15.6197 22.3483C16.5519 22.0925 16.6376 21.9374 16.2719 20.6173C16.0786 19.7559 15.2167 17.4618 14.351 15.3949L12.8044 11.8074L14.2908 9.88793C16.6962 6.85588 17.0552 6.09604 16.4733 5.27721C16.121 4.8138 14.7878 5.02442 12.9318 5.85088ZM6.96298 8.28505C6.82014 8.54356 6.59541 8.73007 6.51351 8.65807C6.39066 8.55007 6.32875 8.11155 6.34874 7.74504C6.39729 7.32682 6.59345 7.19201 6.7982 7.37202C7.0439 7.58802 7.13438 7.97484 6.96298 8.28505ZM8.9344 14.6273C7.93456 16.4369 7.04226 15.9597 6.8184 13.612C6.70218 12.2807 6.88976 11.8311 7.71538 11.3279C9.25613 10.3011 10.0771 12.5592 8.9344 14.6273ZM12.2341 16.9137C12.7427 17.9754 12.7351 18.4296 12.1951 18.4158C10.9638 18.3319 10.5048 17.6211 10.859 16.3193C11.2704 14.9142 11.2989 14.8625 12.2341 16.9137Z"
                        fill="#7E7E7E"/>
                </svg>

            </div>

            {/* Heart Doodle (Top Right) */}
            <div className="absolute -right-14 -top-10 opacity-60">
                <svg width="40" height="40" viewBox="0 0 27 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.380707 6.19102C-0.750388 12.3824 0.761083 23.1812 3.31309 27.2666C6.92924 33.111 7.26563 33.3833 9.78103 33.9231C14.6857 34.9005 20.4141 31.4577 23.9194 25.617C26.4898 21.2639 27.1098 17.1276 25.5702 14.086C25.0139 12.9625 24.3045 11.7898 23.9681 11.5175C22.6796 10.5495 18.6311 10.3398 15.4957 11.0188L12.1954 11.7888L10.8013 7.29409C9.71134 3.71875 9.05582 2.44009 7.75231 1.38505C5.56578 -0.384702 4.29029 -0.444554 2.71936 1.12668C1.05246 2.76987 0.959733 3.06886 0.380707 6.19102ZM5.63794 5.6584C6.10048 6.03277 6.87674 8.00763 7.33494 10.0243C8.95644 16.8725 9.56022 17.436 14.8768 16.2033C21.0903 14.7242 22.7896 15.3514 22.2019 18.8406C21.4622 23.3289 17.0491 27.6868 11.8048 29.1276L8.18968 30.1664L6.87001 27.9761C5.02743 25.0634 4.09054 21.5372 3.78547 16.6521C3.25834 8.81938 4.04009 4.36512 5.63794 5.6584Z"
                        fill="#7E7E7E"/>
                </svg>
            </div>


            {/* --- Main Capsule Container --- */}
            <div
                className="flex items-center p-2 bg-[#1A1A1A]/90 backdrop-blur-md border border-white/5 rounded-full shadow-2xl">

                {/* Portfolio Link/Button */}
                <a href="#portfolio"
                   className="px-8 py-3 text-2xl font-medium text-white/90 hover:text-white transition-colors">
                    Portfolio
                </a>

                {/* Hire Me Button */}
                <a href="#contact"
                   className="group flex items-center gap-3 px-8 py-3 bg-[#5B6CFF] hover:bg-[#4a5ae0] text-white rounded-full transition-all duration-300 shadow-lg shadow-indigo-500/20">
                    <span className="text-2xl font-medium">Hire me</span>

                    {/* Custom Icon: Rounded Square with Arrow & Curve */}
                    <div className="relative w-6 h-6">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-white stroke-[2]">
                            {/* Rounded Square */}
                            <rect x="3" y="3" width="18" height="18" rx="5" />
                            {/* Arrow Up-Right */}
                            <path d="M10 14L16 8M16 8H11M16 8V13" strokeLinecap="round" strokeLinejoin="round"/>
                            {/* Smile Curve at bottom */}
                            <path d="M9 17C9 17 10.5 18.5 12 18.5C13.5 18.5 15 17 15 17" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </a>

            </div>
        </div>
    );
}
