'use client';

import React from 'react';
import Image from "next/image";

export default function SocialIconsPill() {
    return (
        /* Social Media Capsule */
        <div className="flex items-center gap-4 bg-[#1A1A1A] border border-white/10 rounded-full px-6 py-2 shadow-inner">

            {/* Dribbble Icon */}
            <a href="#" className="group">
                <Image src={"/social/dribble.png"} alt={"dribble"} width={24} height={24}/>
            </a>

            {/* Instagram Icon */}
            <a href="#" className="group">
                <Image src={"/social/instagram.png"} alt={"instagram"} width={24} height={24}/>
            </a>

            {/* Behance Icon (Custom Path for 'Be') */}
            <a href="#" className="group">
                <Image src={"/social/be.png"} alt={"be"} width={24} height={24}/>
            </a>

            {/* LinkedIn Icon (Solid fill style to match image) */}
            <a href="#" className="group">
                <Image src={"/social/linkedin.png"} alt={"linkedin"} width={24} height={24}/>
            </a>

        </div>
    );
}
