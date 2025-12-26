import Header from "@/app/Header";
import HeroSection from "@/app/HeroSection";
import SkillsSection from "@/app/SkillsSection";
import EmploymentHistory from "@/app/EmploymentHistory";
import ContactSection from "@/app/ContactSection";
import Footer from "@/app/Footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-[#101010] text-white font-poppins selection:bg-indigo-500 selection:text-white max-w-full overflow-x-hidden">
            {/* هدر فیکس شده در بالای صفحه */}
            <Header/>

            {/* بخش‌های اصلی صفحه */}
            <div className="flex flex-col w-full">
                <HeroSection/>

            </div>
        </main>
    );
}
