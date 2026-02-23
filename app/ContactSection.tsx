'use client';

import React, { useState } from 'react';
import { Phone, Mail, LinkedinIcon, Send } from 'lucide-react';

type FormState = {
    name: string;
    email: string;
    phone?: string;
    location?: string;
    message: string;
};

export default function ContactSection() {
    const [status, setStatus] = useState<null | { ok: boolean; msg: string }>(null);
    const [loading, setLoading] = useState<boolean>(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        // جلوگیری از رفرش شدن صفحه هنگام سابمیت فرم
        e.preventDefault();
        setStatus(null);

        // دریافت اطلاعات فرم
        const formData = new FormData(e.currentTarget);

        // ساخت آبجکت نهایی با حذف فاصله‌های اضافی (trim)
        const payload: FormState = {
            name: String(formData.get("name") || "").trim(),
            email: String(formData.get("email") || "").trim(),
            phone: String(formData.get("phone") || "").trim(),
            location: String(formData.get("location") || "").trim(),
            message: String(formData.get("message") || "").trim(),
        };

        // اعتبارسنجی مقادیر ضروری
        if (!payload.name || !payload.email || !payload.message) {
            setStatus({ ok: false, msg: "Please fill in required fields." });
            return;
        }

        setLoading(true);

        try {
            // ارسال مستقیم اطلاعات به سرور
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            // بررسی موفقیت‌آمیز بودن پاسخ
            if (data.ok || res.ok) {
                setStatus({ ok: true, msg: "Email sent successfully!" });
                // پاک کردن فیلدهای فرم بعد از ارسال موفق
                e.currentTarget.reset();
            } else {
                setStatus({ ok: false, msg: data.message || "Failed to send email." });
            }
        } catch (error) {
            setStatus({ ok: false, msg: "Network error. Please try again." });
        } finally {
            // پایان وضعیت در حال بارگذاری
            setLoading(false);
        }
    }

    return (
        <section className="py-12 md:py-20 px-4" id="contact">
            <div className="max-w-[1000px] mx-auto">

                {/* Main Card Container */}
                <div className="bg-[#202020] rounded-3xl md:rounded-[40px] p-6 md:p-12 border border-white/5 shadow-2xl">

                    {/* Section Title */}
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-[#6366f1]">
                        Let’s discuss your Project
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

                        {/* Left Side: Contact Info */}
                        <div className="md:col-span-1 flex flex-col gap-6 md:gap-8">

                            {/* Phone Item */}
                            <div className="flex items-center gap-4 group">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#5558e6] rounded-xl flex items-center justify-center flex-shrink-0 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <Phone className="w-5 h-5 md:w-6 md:h-6" />
                                </div>
                                <span className="text-gray-300 text-sm md:text-base font-medium tracking-wide">
                                    +989123962608
                                </span>
                            </div>

                            {/* Email Item */}
                            <div className="flex items-center gap-4 group">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#5558e6] rounded-xl flex items-center justify-center flex-shrink-0 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <Mail className="w-5 h-5 md:w-6 md:h-6" />
                                </div>
                                <span className="text-gray-300 text-sm md:text-base font-medium tracking-wide break-all">
                                    armitafathi@gmail.com
                                </span>
                            </div>

                            {/* LinkedIn Item */}
                            <div className="flex items-center gap-4 group">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#5558e6] rounded-xl flex items-center justify-center flex-shrink-0 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <LinkedinIcon className="w-5 h-5 md:w-6 md:h-6" />
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
                            <form onSubmit={handleSubmit} className="space-y-4">

                                {/* Row 1: Name & Email */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <input
                                        name="name"
                                        id="name"
                                        type="text"
                                        placeholder="Name"
                                        required
                                        className="w-full bg-white rounded-xl px-4 py-3 text-sm md:text-base text-black placeholder:text-gray-500 focus:outline-none focus:ring-4 focus:ring-[#6366f1]/30 transition-shadow"
                                    />
                                    <input
                                        name="email"
                                        id="email"
                                        type="email"
                                        placeholder="Email"
                                        required
                                        className="w-full bg-white rounded-xl px-4 py-3 text-sm md:text-base text-black placeholder:text-gray-500 focus:outline-none focus:ring-4 focus:ring-[#6366f1]/30 transition-shadow"
                                    />
                                </div>

                                {/* Row 2: Phone & Location */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <input
                                        name="phone"
                                        id="phone"
                                        type="tel"
                                        placeholder="Phone"
                                        className="w-full bg-white rounded-xl px-4 py-3 text-sm md:text-base text-black placeholder:text-gray-500 focus:outline-none focus:ring-4 focus:ring-[#6366f1]/30 transition-shadow"
                                    />
                                    <input
                                        name="location"
                                        id="location"
                                        type="text"
                                        placeholder="Location"
                                        className="w-full bg-white rounded-xl px-4 py-3 text-sm md:text-base text-black placeholder:text-gray-500 focus:outline-none focus:ring-4 focus:ring-[#6366f1]/30 transition-shadow"
                                    />
                                </div>

                                {/* Row 3: Message */}
                                <textarea
                                    name="message"
                                    id="message"
                                    placeholder="Message"
                                    rows={4}
                                    required
                                    className="w-full bg-white rounded-xl px-4 py-3 text-sm md:text-base text-black placeholder:text-gray-500 focus:outline-none focus:ring-4 focus:ring-[#6366f1]/30 transition-shadow resize-none"
                                ></textarea>

                                {/* نمایش پیغام نتیجه ارسال */}
                                {status && (
                                    <div className={`p-3 rounded-xl text-sm font-medium ${status.ok ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
                                        {status.msg}
                                    </div>
                                )}

                                {/* Submit Button */}
                                <div className="flex justify-end pt-2">
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white px-8 py-3 rounded-full font-medium hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none"
                                    >
                                        <span>{loading ? "Sending..." : "Send Message"}</span>
                                        {!loading && <Send className="w-4 h-4" />}
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
