import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    // Check if user has added their real Resend API key
    if (!apiKey || apiKey === "re_your_resend_api_key_here") {
      return NextResponse.json(
        {
          error:
            "Resend API key is missing. Add your API key (starting with re_) to .env.local as RESEND_API_KEY=re_...",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const senderName = name?.trim() || "Portfolio Visitor";
    const senderEmail = email?.trim() || "No email provided";
    const emailSubject = subject?.trim() || "General Inquiry";
    const cleanMessage = message.trim();

    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["lalitbisht0105@gmail.com"],
      replyTo: email?.trim() || undefined,
      subject: `[Portfolio Inquiry] ${emailSubject} — ${senderName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f4f5; margin: 0; padding: 24px; color: #18181b; }
              .card { background-color: #ffffff; max-width: 580px; margin: 0 auto; border-radius: 16px; border: 1px solid #e4e4e7; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
              .header { background: linear-gradient(135deg, #09090b, #18181b); color: #ffffff; padding: 28px 24px; }
              .header h1 { margin: 0 0 6px 0; font-size: 20px; font-weight: 700; letter-spacing: -0.5px; }
              .header p { margin: 0; font-size: 13px; color: #a1a1aa; font-family: monospace; }
              .content { padding: 24px; }
              .meta-row { display: flex; margin-bottom: 12px; font-size: 13px; }
              .meta-label { width: 90px; color: #71717a; font-weight: 600; font-family: monospace; }
              .meta-value { color: #09090b; font-weight: 500; }
              .divider { height: 1px; background-color: #e4e4e7; margin: 18px 0; }
              .message-box { background-color: #fafafa; border: 1px solid #e4e4e7; border-radius: 10px; padding: 16px; font-size: 14px; line-height: 1.6; color: #27272a; white-space: pre-wrap; }
              .footer { padding: 16px 24px; background-color: #fafafa; border-top: 1px solid #e4e4e7; font-size: 12px; color: #a1a1aa; text-align: center; }
            </style>
          </head>
          <body>
            <div class="card">
              <div class="header">
                <h1>⚡ New Message from Lalit's Portfolio</h1>
                <p>Sent via macOS Mail window client</p>
              </div>
              <div class="content">
                <div class="meta-row">
                  <div class="meta-label">FROM:</div>
                  <div class="meta-value">${senderName}</div>
                </div>
                <div class="meta-row">
                  <div class="meta-label">EMAIL:</div>
                  <div class="meta-value">${senderEmail}</div>
                </div>
                <div class="meta-row">
                  <div class="meta-label">SUBJECT:</div>
                  <div class="meta-value">${emailSubject}</div>
                </div>
                <div class="divider"></div>
                <div class="meta-label" style="margin-bottom: 8px;">MESSAGE:</div>
                <div class="message-box">${cleanMessage}</div>
              </div>
              <div class="footer">
                Delivered instantly via Resend to lalitbisht0105@gmail.com
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (data.error) {
      return NextResponse.json(
        { error: data.error.message || "Failed to send email." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
      id: data.data?.id,
    });
  } catch (err: unknown) {
    const errorMessage =
      err instanceof Error ? err.message : "Internal server error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
