import Header from "@/app/Header";
import HeroSection from "@/app/HeroSection";

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
