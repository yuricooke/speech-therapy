import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check if SMTP is configured
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      // Log in development, but still return success
      console.log('Contact Form Submission (SMTP not configured):', {
        name,
        email,
        message,
        timestamp: new Date().toISOString()
      });
      
      // In production, you should configure SMTP or use a service like Resend
      return NextResponse.json(
        { 
          success: true,
          message: 'Message received (SMTP not configured - check server logs)' 
        },
        { status: 200 }
      );
    }
    
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM || `"${name}" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: 'yuricooke@gmail.com',
      subject: `Contact Form: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });
    
    return NextResponse.json(
      { 
        success: true,
        message: 'Message sent successfully' 
      },
      { status: 200 }
    );

  } catch (error: unknown) {
    console.error('Error processing contact form:', error);
    
    // Provide more helpful error messages
    let errorMessage = 'Failed to send message. Please try again later.';
    if (error && typeof error === 'object' && 'code' in error) {
      const err = error as { code?: string };
      if (err.code === 'EAUTH') {
        errorMessage = 'Email authentication failed. Please check your SMTP credentials.';
      } else if (err.code === 'ECONNECTION') {
        errorMessage = 'Could not connect to email server. Please check your SMTP settings.';
      }
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}

