import { NextResponse } from "next/server";
import { Resend } from "resend";
import dns from "dns/promises";

// RFC-compliant email regex
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

// Disposable, burner, anonymous, and placeholder domains
const BLOCKED_DOMAINS = new Set([
  // mail.com & its alias domains (commonly used for disposable/unverified emails)
  "mail.com",
  "email.com",
  "usa.com",
  "myself.com",
  "post.com",
  "dr.com",
  "consultant.com",
  "asia.com",
  "europe.com",
  "iname.com",
  // Common burner & temporary email services
  "tempmail.com",
  "temp-mail.org",
  "10minutemail.com",
  "guerrillamail.com",
  "guerrillamail.net",
  "guerrillamail.org",
  "throwawaymail.com",
  "trashmail.com",
  "sharklasers.com",
  "dispostable.com",
  "yopmail.com",
  "yopmail.net",
  "yopmail.fr",
  "mailinator.com",
  "getnada.com",
  "fakemailgenerator.com",
  "crazymailing.com",
  "mohmal.com",
  "generator.email",
  "burnermail.io",
  "nada.ltd",
  // Dummy / placeholder domains
  "example.com",
  "test.com",
  "fake.com",
  "sample.com",
  "invalid.com",
]);

// Dummy / placeholder usernames commonly used in test or spam submissions
const BLOCKED_USERNAMES = new Set([
  "test",
  "testing",
  "fake",
  "dummy",
  "asdf",
  "qwert",
  "qwerty",
  "demo",
  "sample",
  "temp",
  "trash",
  "spam",
  "random",
  "anon",
  "anonymous",
  "nobody",
  "noreply",
  "no-reply",
  "admin",
  "root",
  "user",
]);

// Recognized major consumer webmail providers
const STANDARD_WEBMAIL_DOMAINS = new Set([
  "gmail.com",
  "googlemail.com",
  "outlook.com",
  "hotmail.com",
  "live.com",
  "msn.com",
  "icloud.com",
  "me.com",
  "mac.com",
  "yahoo.com",
  "yahoo.co.in",
  "yahoo.co.uk",
  "proton.me",
  "protonmail.com",
  "zoho.com",
  "aol.com",
  "gmx.com",
  "gmx.net",
]);

// In-memory rate limiting: 1 email per 20 seconds per IP
const ipRateLimitMap = new Map<string, number>();

function assessSenderTrust(email: string): {
  tag: string;
  badgeHtml: string;
  isWorkOrEdu: boolean;
} {
  const parts = email.toLowerCase().split("@");
  const domain = parts[1] || "";

  // Educational or Government institution
  if (
    domain.endsWith(".edu") ||
    domain.endsWith(".ac.in") ||
    domain.endsWith(".ac.uk") ||
    domain.endsWith(".edu.in") ||
    domain.endsWith(".gov") ||
    domain.endsWith(".gov.in")
  ) {
    return {
      tag: "Verified Institution",
      badgeHtml: `<span style="background: #ecfdf5; color: #047857; border: 1px solid #a7f3d0; padding: 2px 10px; border-radius: 9999px; font-weight: 600; font-size: 11px; font-family: monospace;">🟢 Educational / Institution Domain</span>`,
      isWorkOrEdu: true,
    };
  }

  // Standard major consumer webmail (Gmail, Outlook, etc.)
  if (STANDARD_WEBMAIL_DOMAINS.has(domain)) {
    return {
      tag: "Standard Webmail",
      badgeHtml: `<span style="background: #eff6ff; color: #1d4ed8; border: 1px solid #bfdbfe; padding: 2px 10px; border-radius: 9999px; font-weight: 600; font-size: 11px; font-family: monospace;">🔵 Standard Personal Webmail (${domain})</span>`,
      isWorkOrEdu: false,
    };
  }

  // Custom corporate / business domain (e.g., name@company.com)
  return {
    tag: "Work / Custom Domain",
    badgeHtml: `<span style="background: #f0fdf4; color: #15803d; border: 1px solid #bbf7d0; padding: 2px 10px; border-radius: 9999px; font-weight: 600; font-size: 11px; font-family: monospace;">🟢 Company / Custom Domain (@${domain})</span>`,
    isWorkOrEdu: true,
  };
}

async function verifyEmailDomain(
  domain: string
): Promise<{ valid: boolean; error?: string }> {
  const cleanDomain = domain.toLowerCase().trim();

  // 1. Check known dummy / disposable domains
  if (BLOCKED_DOMAINS.has(cleanDomain)) {
    return {
      valid: false,
      error: `Emails from disposable or anonymous services (@${cleanDomain}) are not accepted. Please use your standard personal or work email.`,
    };
  }

  // 2. Verify domain has active mail servers (MX records) via DNS
  try {
    const resolvePromise = dns.resolveMx(cleanDomain);
    const timeoutPromise = new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error("DNS_TIMEOUT")), 2500)
    );

    const mxRecords = await Promise.race([resolvePromise, timeoutPromise]);

    if (!mxRecords || mxRecords.length === 0) {
      return {
        valid: false,
        error: `The domain '@${cleanDomain}' has no active mail servers (MX records).`,
      };
    }

    return { valid: true };
  } catch (err: unknown) {
    const errorObj = err as { code?: string; message?: string };
    if (
      errorObj?.code === "ENOTFOUND" ||
      errorObj?.code === "ENODATA" ||
      errorObj?.code === "EREFUSED"
    ) {
      return {
        valid: false,
        error: `The email domain '@${cleanDomain}' does not exist. Please check for typos.`,
      };
    }
    // If DNS timeout or sandbox network restriction occurs, allow through to avoid false rejections
    return { valid: true };
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message, _gotcha } = body;

    // 1. Honeypot check: Bots fill hidden fields; humans do not
    if (_gotcha && String(_gotcha).trim().length > 0) {
      // Silently return success to waste bot resources without sending email
      return NextResponse.json({
        success: true,
        message: "Message received!",
      });
    }

    // 2. Rate limiting check (1 message per 20s per IP)
    const clientIp =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown-ip";

    const now = Date.now();
    const lastSent = ipRateLimitMap.get(clientIp);
    if (lastSent && now - lastSent < 20000) {
      const waitSec = Math.ceil((20000 - (now - lastSent)) / 1000);
      return NextResponse.json(
        { error: `Please wait ${waitSec}s before sending another message.` },
        { status: 429 }
      );
    }

    // 3. Message validation
    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    // 4. Email format & syntax validation
    const cleanEmail = typeof email === "string" ? email.trim() : "";
    if (!cleanEmail) {
      return NextResponse.json(
        { error: "Please provide your email address so I can reply back." },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(cleanEmail)) {
      return NextResponse.json(
        { error: "Please enter a valid email address (e.g. name@domain.com)." },
        { status: 400 }
      );
    }

    // 5. Username quality checks (username before @)
    const [username, domain] = cleanEmail.split("@");
    const cleanUsername = username.toLowerCase().trim();

    if (cleanUsername.length < 3) {
      return NextResponse.json(
        {
          error:
            "Email username is too short. Please provide a legitimate email address.",
        },
        { status: 400 }
      );
    }

    if (BLOCKED_USERNAMES.has(cleanUsername)) {
      return NextResponse.json(
        {
          error: `Placeholder username '${cleanUsername}@' is not accepted. Please provide your real email.`,
        },
        { status: 400 }
      );
    }

    // 6. Domain verification (MX records + disposable domain blocklist)
    const domainCheck = await verifyEmailDomain(domain);
    if (!domainCheck.valid) {
      return NextResponse.json(
        { error: domainCheck.error || "Invalid email domain." },
        { status: 400 }
      );
    }

    // 7. Check Resend API key
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey || apiKey === "re_your_resend_api_key_here") {
      return NextResponse.json(
        {
          error:
            "Resend API key is missing. Add your API key (starting with re_) to .env.local as RESEND_API_KEY=re_...",
        },
        { status: 500 }
      );
    }

    // Update IP rate limit timestamp
    ipRateLimitMap.set(clientIp, now);

    // Assess sender trust category
    const trust = assessSenderTrust(cleanEmail);

    const resend = new Resend(apiKey);
    const senderName = name?.trim() || "Portfolio Visitor";
    const emailSubject = subject?.trim() || "General Inquiry";
    const cleanMessage = message.trim();

    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["lalitbisht0105@gmail.com"],
      replyTo: cleanEmail,
      subject: `[Portfolio] ${emailSubject} — ${senderName} [${trust.tag}]`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f4f5; margin: 0; padding: 24px; color: #18181b; }
              .card { background-color: #ffffff; max-width: 600px; margin: 0 auto; border-radius: 16px; border: 1px solid #e4e4e7; overflow: hidden; box-shadow: 0 4px 14px rgba(0,0,0,0.06); }
              .header { background: linear-gradient(135deg, #09090b, #18181b); color: #ffffff; padding: 28px 24px; }
              .header h1 { margin: 0 0 6px 0; font-size: 20px; font-weight: 700; letter-spacing: -0.5px; }
              .header p { margin: 0; font-size: 13px; color: #a1a1aa; font-family: monospace; }
              .content { padding: 24px; }
              .meta-row { display: flex; align-items: center; margin-bottom: 12px; font-size: 13px; }
              .meta-label { width: 95px; color: #71717a; font-weight: 600; font-family: monospace; font-size: 11.5px; }
              .meta-value { color: #09090b; font-weight: 500; }
              .divider { height: 1px; background-color: #e4e4e7; margin: 18px 0; }
              .message-box { background-color: #fafafa; border: 1px solid #e4e4e7; border-radius: 10px; padding: 18px; font-size: 14px; line-height: 1.6; color: #27272a; white-space: pre-wrap; }
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
                  <div class="meta-value">
                    <a href="mailto:${cleanEmail}" style="color: #2563eb; text-decoration: none; font-weight: 600;">${cleanEmail}</a>
                  </div>
                </div>
                <div class="meta-row">
                  <div class="meta-label">TRUST LEVEL:</div>
                  <div class="meta-value">${trust.badgeHtml}</div>
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
                Delivered instantly via Resend to lalitbisht0105@gmail.com • Direct reply is pre-configured
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
