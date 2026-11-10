import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim();
    console.log(`[Audit Lead Captured] ${cleanEmail} at ${new Date().toISOString()}`);

    // Option 1: Send via Resend API
    if (process.env.RESEND_API_KEY) {
      try {
        const recipient = process.env.AUDIT_NOTIFICATION_EMAIL || "michaelbuensalido15@gmail.com";
        const sender = process.env.RESEND_FROM_EMAIL || "Alipato <onboarding@resend.dev>";

        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.RESEND_API_KEY.trim()}`,
          },
          body: JSON.stringify({
            from: sender,
            to: [recipient],
            reply_to: cleanEmail,
            subject: `🔥 New 30-Minute Audit Request: ${cleanEmail}`,
            html: `
              <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; padding: 24px; border: 1px solid #2A2139; border-radius: 8px; background-color: #0D0A12; color: #F8F5FA;">
                <h2 style="color: #FF5E1A; margin-top: 0; font-size: 22px;">🔥 New Audit Request</h2>
                <p style="color: #A59BB8; font-size: 14px; line-height: 1.6;">A visitor submitted their email for a 30-minute site and operations audit on <strong>Alipato</strong>.</p>
                <div style="margin: 20px 0; padding: 16px; background-color: #16111F; border-radius: 6px; border: 1px solid #2A2139;">
                  <p style="margin: 0 0 8px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #A59BB8;">Lead Email / Site</p>
                  <p style="margin: 0; font-size: 16px; font-weight: 600; color: #FF5E1A;">
                    <a href="mailto:${cleanEmail}" style="color: #FF5E1A; text-decoration: none;">${cleanEmail}</a>
                  </p>
                </div>
                <p style="font-size: 12px; color: #A59BB8; margin-bottom: 20px;">
                  Submitted on: ${new Date().toLocaleString("en-US", { timeZone: "Asia/Manila" })} (PHT)
                </p>
                <hr style="border: none; border-top: 1px solid #2A2139; margin: 20px 0;" />
                <p style="font-size: 13px; color: #A59BB8; margin: 0;">
                  💡 <strong>Tip:</strong> Simply hit <em>Reply</em> in your email client to email this lead directly.
                </p>
              </div>
            `,
          }),
        });

        if (!resendRes.ok) {
          const errData = await resendRes.json();
          console.error("Resend API error:", resendRes.status, errData);
        } else {
          console.log(`[Resend Success] Notification sent to ${recipient}`);
        }
      } catch (err) {
        console.error("Error sending via Resend:", err);
      }
    }

    // Option 2: Send via Web3Forms if access key is provided
    if (process.env.WEB3FORMS_ACCESS_KEY) {
      try {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: process.env.WEB3FORMS_ACCESS_KEY,
            subject: `🔥 New 30-Minute Audit Request: ${cleanEmail}`,
            from_name: "Alipato Lead Capture",
            email: cleanEmail,
            message: `New 30-minute audit request from: ${cleanEmail}`,
          }),
        });
      } catch (err) {
        console.error("Error sending via Web3Forms:", err);
      }
    }

    // Option 3: Webhook (e.g. n8n / Make / Zapier / Google Sheets) if configured
    if (process.env.AUDIT_WEBHOOK_URL) {
      try {
        await fetch(process.env.AUDIT_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: cleanEmail,
            timestamp: new Date().toISOString(),
            source: "alipato_website_audit_form",
          }),
        });
      } catch (err) {
        console.error("Error sending to webhook:", err);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! We've received your email and will reach out within 24 hours.",
    });
  } catch (error) {
    console.error("Audit API error:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again or reach out directly." },
      { status: 500 }
    );
  }
}
