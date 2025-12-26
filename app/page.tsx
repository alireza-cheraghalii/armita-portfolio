'use client';

import {Code, Github, Linkedin, Mail, Monitor, Palette, Send, Smartphone} from 'lucide-react';
import Header from "@/app/Header";
import HeroSection from "@/app/HeroSection";

// --- DATA MOCKS (برای پر کردن محتوا) ---
const skills = [
    {name: 'Figma', icon: '🎨'},
    {name: 'Adobe XD', icon: '💎'},
    {name: 'Photoshop', icon: '🖼️'},
    {name: 'Illustrator', icon: '🖌️'},
    {name: 'Sketch', icon: '🔶'},
];

const technicalStats = [
    {label: 'Figma', value: 95},
    {label: 'Wireframing', value: 90},
    {label: 'User Research', value: 85},
    {label: 'Prototyping', value: 88},
];

const projects = [
    {id: 1, title: 'NFT Mobile App', category: 'Mobile App', image: '/placeholder-project.jpg'},
    {id: 2, title: 'Finance Dashboard', category: 'Web Design', image: '/placeholder-project.jpg'},
    {id: 3, title: 'Travel Booking', category: 'Mobile App', image: '/placeholder-project.jpg'},
    {id: 4, title: 'E-commerce Shop', category: 'Web Design', image: '/placeholder-project.jpg'},
    {id: 5, title: 'Health Tracker', category: 'Mobile App', image: '/placeholder-project.jpg'},
    {id: 6, title: 'Crypto Wallet', category: 'Web Design', image: '/placeholder-project.jpg'},
];

const employmentHistory = [
    {id: 1, company: 'ProductM', role: 'Senior UI/UX Designer', date: '2021 - Present'},
    {id: 2, company: 'Green Tech', role: 'Product Designer', date: '2019 - 2021'},
    {id: 3, company: 'Design Agency', role: 'UI Designer', date: '2017 - 2019'},
    {id: 4, company: 'StartUp Inc', role: 'Junior Designer', date: '2016 - 2017'},
];

export default function Portfolio() {
    return (
        <main className="min-h-screen bg-[#101010] text-white font-sans selection:bg-indigo-500 selection:text-white">
            <Header/>

            <HeroSection/>


        </main>
    );
}
