import React from "react";
import Image from "next/image";

export default function Courses() {
    return (
        <section className="py-12 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden relative" id="courses">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Badge */}
                <div className="flex justify-center mb-10 md:mb-16">
                    <span className="px-6 py-2 bg-[#1a1a1a] rounded-full text-gray-300 border border-white/5 text-sm lg:text-xl font-medium shadow-2xl backdrop-blur-sm">
                        courses
                    </span>
                </div>

                {/* Cards Container */}
                <div className="flex flex-col lg:flex-row justify-center items-center gap-8 md:gap-10">
                    {/* Card 1 */}
                    <div className="w-full max-w-[502px] flex flex-col gap-3 sm:gap-4">
                        <div className="w-full overflow-hidden rounded-2xl relative h-60 sm:h-72 md:h-[353px]">
                            <Image
                                src="/courses/ui.png"
                                alt="User Interface (UI) Design"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 502px"
                            />
                        </div>
                        <div className="flex flex-wrap justify-between items-center gap-2">
                            <span className="text-base sm:text-xl font-medium text-white">
                                User Interface (UI) Design
                            </span>
                            <span className="text-sm sm:text-base font-normal text-[#667AF8]">
                                Melina School
                            </span>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="w-full max-w-[502px] flex flex-col gap-3 sm:gap-4">
                        <div className="w-full overflow-hidden rounded-2xl relative h-60 sm:h-72 md:h-[353px]">
                            <Image
                                src="/courses/ux.png"
                                alt="User Experience (UX) Design"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 502px"
                            />
                        </div>
                        <div className="flex flex-wrap justify-between items-center gap-2">
                            <span className="text-base sm:text-xl font-medium text-white">
                                User Experience (UX) Design
                            </span>
                            <span className="text-sm sm:text-base font-normal text-[#667AF8]">
                                Melina School
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
