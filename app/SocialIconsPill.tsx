'use client';

import React from 'react';
import Image from "next/image";

export default function SocialIconsPill() {
    return (
        /* Social Media Capsule */
        <div className="flex items-center gap-4 bg-[#1A1A1A] border border-white/10 rounded-full px-4 py-2 shadow-inner">

            {/* Dribbble Icon */}
            <a href="https://dribbble.com/armitafathi" className="group">
                <Image src={"/social/dribble.png"} alt={"dribble"} width={24} height={24}/>
            </a>

            {/* Instagram Icon */}
            <a href="#" className="group">
                <Image src={"/social/instagram.png"} alt={"instagram"} width={24} height={24}/>
            </a>


            {/* LinkedIn Icon (Solid fill style to match image) */}
            <a href="https://www.linkedin.com/in/armitafathi?utm_source=share_via&utm_content=profile&utm_medium=member_ios" className="group">
                <Image src={"/social/linkedin.png"} alt={"linkedin"} width={24} height={24}/>
            </a>

        </div>
    );
}
