# Contact Form Email Setup Guide

This guide will help you set up the contact form to send emails directly from the website using **Resend**.

## Why Resend?

- Free tier includes 3,000 emails/month (perfect for portfolio sites)
- No credit card required for free tier
- Simple API, perfect for Next.js
- Reliable delivery

---

## Step 1: Sign Up for Resend

1. Go to [resend.com](https://resend.com)
2. Click **"Sign Up"** (top right)
3. Sign up with GitHub, Google, or email

---

## Step 2: Get Your API Key

1. After signing in, you'll be taken to your dashboard
2. Click **"API Keys"** in the left sidebar
3. Click **"Create API Key"**
   - Name: `Portfolio Contact Form`
   - Permission: `Sending access` (default)
4. Click **"Add"**
5. **Copy the API key** (it starts with `re_...`)
   - ⚠️ **Important:** You can only see this once! Save it somewhere safe.

---

## Step 3: Add API Key to Your Project

### For Local Development:

1. Create a file named `.env.local` in your project root:

\`\`\`bash
touch .env.local
\`\`\`

2. Add your API key to `.env.local`:

\`\`\`
RESEND_API_KEY=re_your_actual_api_key_here
\`\`\`

3. Restart your development server:

\`\`\`bash
npm run dev
\`\`\`

### For Vercel (Production):

1. Go to your project on [vercel.com](https://vercel.com)
2. Click **"Settings"** → **"Environment Variables"**
3. Add a new variable:
   - **Key:** `RESEND_API_KEY`
   - **Value:** `re_your_actual_api_key_here`
   - **Environment:** Select all (Production, Preview, Development)
4. Click **"Save"**
5. Go to **"Deployments"** and redeploy your latest deployment

---

## Step 4: Configure Sender Email (Important!)

### Default (Works Immediately):

The form currently uses Resend's test email:
- **From:** `onboarding@resend.dev`
- ✅ Works for testing
- ❌ May be flagged as spam
- ❌ Less professional

### Recommended: Use Your Own Domain

To use your own domain email (e.g., `hello@yourdomain.com`):

1. **Add your domain in Resend:**
   - Go to [resend.com/domains](https://resend.com/domains)
   - Click **"Add Domain"**
   - Enter your domain (e.g., `yourdomain.com`)
   - Follow the DNS verification steps (add TXT and MX records)

2. **Update the code** in `app/api/contact/route.ts`:

\`\`\`typescript
// Change this line (around line 20):
from: 'Portfolio Contact <onboarding@resend.dev>',

// To:
from: 'Your Name <hello@yourdomain.com>',
\`\`\`

3. Save and deploy.

---

## Step 5: Test the Form

1. Go to your contact page: http://localhost:3000/contact
2. Fill out the form
3. Click **"Send Message"**
4. You should see: **"Message sent successfully!"**
5. Check your email at `mruduladhondalay@gmail.com`

### Troubleshooting:

**"Failed to send message" error:**
- Check that `RESEND_API_KEY` is set correctly in `.env.local`
- Restart your dev server after adding `.env.local`
- Check browser console for detailed error messages
- Verify your API key is valid at [resend.com/api-keys](https://resend.com/api-keys)

**Email not arriving:**
- Check your spam folder
- If using `onboarding@resend.dev`, some email providers may block it
- Consider setting up your own domain (Step 4)

**API Key not found:**
- Make sure `.env.local` exists in the project root (same folder as `package.json`)
- Make sure the file is named exactly `.env.local` (not `.env.txt` or `.env`)
- Restart your dev server

---

## Email Template Customization

The email template is in `app/api/contact/route.ts` around line 23-54.

You can customize:
- Colors
- Layout
- Logo (add an image URL)
- Footer text

---

## Monitoring Emails

View sent emails in your Resend dashboard:
1. Go to [resend.com/emails](https://resend.com/emails)
2. See delivery status, open rates, and more

---

## Security Notes

✅ **API Key is secure:**
- Next.js API routes run on the server only
- Your API key is never exposed to the browser
- Environment variables are not included in the client bundle

✅ **.env.local is gitignored:**
- Your API key will not be committed to Git
- Safe to use with public repositories

---

## Summary

1. ✅ Sign up at resend.com
2. ✅ Create API key
3. ✅ Add to `.env.local` and Vercel
4. ✅ Test the form
5. ⏳ (Optional) Add custom domain

**Questions?** Check the [Resend docs](https://resend.com/docs) or reach out!
