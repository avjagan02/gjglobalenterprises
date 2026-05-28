# Integration Guides

## 📧 Contact Form Backend Options

### Option 1: Formspree (Easiest - Free)
No backend needed. Completely free.

**Setup:**
1. Go to https://formspree.io
2. Sign up with email
3. Create new project: "GJ Global"
4. Copy your form ID (looks like: `abcd1234`)
5. Edit `index.html` - Find the contact form
6. Change line with `id="contactForm"` to:
```html
<form method="POST" action="https://formspree.io/f/YOUR_FORM_ID">
```

**That's it!** Emails go to your inbox.

---

### Option 2: EmailJS (Free - 200 emails/month)
Works directly from JavaScript, no server needed.

**Setup:**
1. Go to https://www.emailjs.com
2. Sign up → Copy **Public Key**
3. Create email service:
   - Select Gmail
   - Connect your email
   - Note the **Service ID**
4. Create email template:
   - From: `{{from_email}}`
   - Message: `{{message}}`
   - Note the **Template ID**
5. Edit `script.js` and replace contact form handler:

```javascript
emailjs.init("YOUR_PUBLIC_KEY");

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    emailjs.send("SERVICE_ID", "TEMPLATE_ID", {
        from_email: formData.get('email'),
        from_name: formData.get('name'),
        message: formData.get('message'),
        to_email: "your@email.com"
    }).then(() => {
        alert('Message sent!');
        contactForm.reset();
    });
});
```

---

### Option 3: Google Sheets (Free & Simple)
Store form submissions in Google Sheets.

**Setup:**
1. Go to https://www.mailmodo.com
2. Create form
3. Connect to Google Sheets
4. Mailmodo generates embed code
5. Add to your website

---

## 📊 Analytics

### Google Analytics (Free)
1. Go to https://analytics.google.com
2. Create account
3. Copy tracking ID (looks like: `G-XXXXXXXXXX`)
4. Add to HTML `<head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Hotjar (Free - 35,000 sessions/month)
1. Go to https://www.hotjar.com
2. Create account
3. Add tracking code to your site
4. Track user behavior, heatmaps

---

## 🛒 Ecommerce Integration

### Add Products for Sale:

#### Option 1: Shopify Buy Button (Easy)
1. Create Shopify store
2. Add products
3. Use Buy Button to embed on your site

#### Option 2: Snipcart (Free tier)
1. Go to https://snipcart.com
2. Sign up
3. Add products with data attributes
4. Snipcart handles checkout

---

## 💬 Live Chat Support

### Crisp Chat (Free)
1. Go to https://crisp.chat
2. Sign up
3. Copy embed code
4. Add to your site
5. Answer customer messages in real-time

---

## 📱 CRM Integration

### Zoho CRM Integration:
1. Connect contact form to Zoho CRM
2. Auto-create leads
3. Use Zoho webhook:

```javascript
fetch('https://www.zohoapis.com/crm/v2/Leads', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_TOKEN'
    },
    body: JSON.stringify({
        data: [{
            Last_Name: formData.name,
            Email: formData.email,
            Description: formData.message
        }]
    })
});
```

---

## 🔔 Email Notifications

### SendGrid (Free - 100 emails/day)
1. Go to https://sendgrid.com
2. Create account
3. Verify email
4. Get API key
5. Use for transactional emails

---

## 💾 Database Options (Free Tier)

### Firebase Realtime Database
- 100 simultaneous connections (free)
- No server needed
- Real-time updates

### MongoDB Atlas
- 512MB storage (free)
- Cloud hosted
- Perfect for product catalog

### Supabase (PostgreSQL Free)
- 500MB storage
- Real-time capabilities
- Open source Firebase alternative

---

## 📝 Blog Integration

### Webflow (Free Plan)
- Visual editor
- Host blog
- CMS included

### Ghost (Self-hosted)
- Open source
- Markdown blog
- Deploy on free tier hosting

---

## 🔐 Security

### SSL Certificate (Free)
- Netlify/Vercel: Automatic
- Let's Encrypt: Free forever

### Security Headers:
Already configured in `netlify.toml` and `vercel.json`

---

## 🚀 Next Steps for Advanced Features

1. **Add payment processing**: Stripe, PayPal
2. **Add booking system**: Calendly API, Acuity
3. **Add inventory tracking**: Custom database
4. **Add user authentication**: Firebase Auth, Auth0
5. **Add API**: Node.js + Express on Render.com

---

Need help? Check the specific service documentation!
