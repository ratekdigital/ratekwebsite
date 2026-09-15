import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = body.name?.trim();
    const email = body.email?.trim();
    const message = body.message?.trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 },
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Ratek Digital Website <hello@ratekdigital.com>",
      to: ["hello@ratekdigital.com"],
      replyTo: email,
      subject: `New website enquiry from ${name}`,
      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; line-height: 1.6; color: #0F172A;">
          <h2>New Ratek Digital Website Enquiry</h2>

          <p><strong>Name:</strong> ${name}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Message:</strong></p>

          <p style="white-space: pre-line;">
            ${message}
          </p>

          <hr />

          <p style="font-size: 12px; color: #64748B;">
            Sent through the contact form on ratekdigital.com
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "Unable to send your message." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true, id: data?.id }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
