# EmailJS Setup Instructions

To enable the contact form to send emails to khushi.patade@gmail.com, follow these steps:

## 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" as your email service
4. Connect your Gmail account (khushi.patade@gmail.com)
5. Note down the **Service ID** (e.g., "service_abc123")

## 3. Create Email Template
1. Go to "Email Templates" in EmailJS dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact Form Message: {{subject}}

**Body:**
```
You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio website.
```

4. Note down the **Template ID** (e.g., "template_xyz789")

## 4. Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (e.g., "user_abcdef123456")

## 5. Update Contact Form
Replace the placeholder values in `components/contact.tsx`:

```typescript
// Line ~52: Replace with your actual EmailJS public key
emailjs.init('YOUR_PUBLIC_KEY') // Replace with your public key

// Line ~62-64: Replace with your actual service and template IDs
await emailjs.send(
  'YOUR_SERVICE_ID', // Replace with your service ID
  'YOUR_TEMPLATE_ID', // Replace with your template ID
  templateParams
)
```

## 6. Test the Contact Form
1. Run your development server: `npm run dev`
2. Go to the contact section
3. Fill out and submit the form
4. Check khushi.patade@gmail.com for the email

## Free Plan Limits
- 200 emails per month
- EmailJS branding in emails
- Perfect for portfolio contact forms

## Security Note
The public key is safe to use in client-side code. EmailJS handles the secure email sending on their servers.