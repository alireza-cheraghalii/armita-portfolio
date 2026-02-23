import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_cF8ttEQS_QEWfEPhPVHmaciBHbT3DcV21");

// Optional: simple email text generator
function buildText({ name, email, phone, location, message }: any) {
    return [
        "New contact submission:",
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : undefined,
        location ? `Location: ${location}` : undefined,
        "",
        "Message:",
        message,
    ]
        .filter(Boolean)
        .join("\n");
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, phone, location, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { ok: false, message: "Missing required fields." },
                { status: 400 }
            );
        }

        // Use a verified domain/sender if you have one; onboarding@resend.dev works for dev/testing
        const sendResult = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: ["armitafathi@gmail.com"],
            replyTo: email,
            subject: "New Contact Submission",
            text: buildText({ name, email, phone, location, message }),
        });

        if (sendResult?.error) {
            console.error(sendResult.error);
            return NextResponse.json(
                { ok: false, message: "Failed to send via Resend." },
                { status: 500 }
            );
        }

        return NextResponse.json({ ok: true, message: "Message sent!" });
    } catch (err) {
        console.error(err);
        return NextResponse.json(
            { ok: false, message: "Server error while sending." },
            { status: 500 }
        );
    }
}
