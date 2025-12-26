import type { Metadata } from "next";
import localFont from "next/font/local"; // ایمپورت فونت لوکال
import "./globals.css";

// تنظیمات فونت لوکال (پوپینز)
// نکته: مطمئن شوید فایل‌های فونت در پوشه public/fonts موجود هستند
const poppins = localFont({
    src: [
        {
            path: "../public/fonts/Poppins-Regular.ttf", // مسیر فایل فونت
            weight: "400",
            style: "normal",
        },
        {
            path: "../public/fonts/Poppins-Medium.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../public/fonts/Poppins-Bold.ttf",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-poppins", // متغیر CSS برای استفاده در تایلویند
    display: "swap",
});

export const metadata: Metadata = {
    title: "Armita Fathi - Portfolio",
    description: "Senior UI/UX Designer Portfolio showcasing App & Web Designs.",
    icons: {
        icon: "/favicon.ico", // مطمئن شوید فایل آیکون دارید
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
        <body
            className={`${poppins.variable} font-poppins antialiased bg-[#101010] text-white overflow-x-hidden`}
        >
        {children}
        </body>
        </html>
    );
}
