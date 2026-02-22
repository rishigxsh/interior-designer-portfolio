import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Temporary - will update with your domain
      to: 'mruduladhondalay@gmail.com',
      replyTo: email,
      subject: `Portfolio Inquiry from ${name}`,
      html: `
        <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1A1A1A; font-size: 24px; margin-bottom: 20px;">New Portfolio Inquiry</h2>
          
          <div style="background: #FAFAF8; border: 1px solid #E8E6E3; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
            <p style="margin: 0 0 10px 0; color: #6B6B6B; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">From</p>
            <p style="margin: 0 0 20px 0; color: #1A1A1A; font-size: 16px; font-weight: 500;">${name}</p>
            
            <p style="margin: 0 0 10px 0; color: #6B6B6B; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Email</p>
            <p style="margin: 0 0 20px 0; color: #1A1A1A; font-size: 16px;"><a href="mailto:${email}" style="color: #C9A05C; text-decoration: none;">${email}</a></p>
            
            <p style="margin: 0 0 10px 0; color: #6B6B6B; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
            <p style="margin: 0; color: #1A1A1A; font-size: 16px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          
          <p style="color: #6B6B6B; font-size: 12px; margin: 20px 0 0 0;">
            This email was sent from your portfolio contact form at 
            <a href="https://interior-designer-portfolio-one.vercel.app" style="color: #C9A05C; text-decoration: none;">interior-designer-portfolio-one.vercel.app</a>
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
