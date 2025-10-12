# Email Setup Instructions

To enable direct email sending from your contact form, follow these steps:

## 1. Enable Gmail App Password
1. Go to your Google Account settings: https://myaccount.google.com/
2. Click on "Security" in the left sidebar
3. Under "Signing in to Google", click on "2-Step Verification" (enable if not already enabled)
4. Scroll down and click on "App passwords"
5. Select "Mail" and "Other (Custom name)"
6. Enter "Portfolio Website" as the name
7. Click "Generate"
8. Copy the 16-character app password (e.g., "abcd efgh ijkl mnop")

## 2. Update Environment Variables
1. Open `.env.local` file in your project root
2. Replace `your_gmail_app_password_here` with the app password you generated
3. Save the file

Example:
```
EMAIL_USER=khushi.patade@gmail.com
EMAIL_PASS=abcd efgh ijkl mnop
```

## 3. Test the Contact Form
1. Run your development server: `npm run dev`
2. Go to the contact section
3. Fill out and submit the form
4. Check khushi.patade@gmail.com for the email

## How It Works
- User fills out the contact form on your website
- Form data is sent to your Next.js API route
- API route uses Nodemailer to send email via Gmail SMTP
- Email is delivered directly to khushi.patade@gmail.com
- No third-party services required!

## Security Notes
- App passwords are safer than using your main Gmail password
- Environment variables keep your credentials secure
- The API route runs on your server, not in the browser

## Email Format
You'll receive professional HTML emails with:
- Sender's name and email
- Subject line
- Formatted message content
- Reply-to functionality (you can reply directly)

## Troubleshooting
- Make sure 2-Step Verification is enabled on your Gmail account
- Use the exact app password without spaces
- Restart your development server after updating .env.local