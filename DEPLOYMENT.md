# GJ Global Enterprises - Import/Export Business Website

Professional import/export business website with modern responsive design.

## Features

✅ **Responsive Design** - Mobile, tablet, and desktop optimized  
✅ **Modern UI** - Clean, professional interface with smooth animations  
✅ **Service Showcase** - Display all your import/export services  
✅ **Product Categories** - Organized product listings  
✅ **Contact Form** - Customer inquiry management  
✅ **Fast Loading** - Optimized performance  
✅ **SEO Ready** - Semantic HTML and meta tags  

## Files Structure

```
import-export-website/
├── index.html          # Home page
├── services.html       # Services + SCM + Logistics
├── trade.html          # Import & Export details
├── gallery.html        # Product gallery with modal
├── about.html          # Company info + accreditations
├── contact.html        # Contact form + business info
├── thank-you.html      # Form submission confirmation
├── style.css           # Shared stylesheet
├── script.js           # Shared scripts (nav, modal, form, etc.)
├── sitemap.xml         # Search engine sitemap
├── robots.txt          # Crawler directives
├── netlify.toml        # Netlify config
├── vercel.json         # Vercel config
├── DEPLOYMENT.md       # Deployment guides (this file)
├── QUICKSTART.md       # Fast deployment guide
└── README.md           # Project overview
```

> The site was previously a single-page layout. It is now multi-page with shared
> navbar/footer in each HTML file. Hosts that honor `netlify.toml` / `vercel.json`
> will serve clean URLs (`/services`, `/about`, etc.) — GitHub Pages will not, so
> use `.html` extensions there.

## Local Development

### Prerequisites
- Any modern web browser
- Basic text editor

### Run Locally

1. Extract the files to your computer
2. Double-click `index.html` to open in browser
3. OR run a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js
   npx http-server
   ```
4. Visit: `http://localhost:8000`

## 🚀 FREE Deployment Platforms

### 1. **Netlify** (Recommended)
- **Free Tier**: Perfect for static websites
- **Features**: Free SSL, custom domain, CI/CD
- **Link**: https://netlify.com

**Steps:**
1. Push code to GitHub
2. Connect GitHub repository to Netlify
3. Auto-deploy on every push
4. Get free domain: `yoursite.netlify.app`

### 2. **Vercel**
- **Free Tier**: Excellent for web apps
- **Features**: Serverless functions, edge network
- **Link**: https://vercel.com

**Steps:**
1. Push to GitHub
2. Import project to Vercel
3. Auto-deploys with each commit
4. Domain: `yoursite.vercel.app`

### 3. **GitHub Pages**
- **Free Tier**: Unlimited hosting
- **Features**: Built-in with GitHub
- **Link**: https://pages.github.com

**Steps:**
```bash
# In your repository
git branch gh-pages
git checkout gh-pages
git add .
git commit -m "Deploy"
git push origin gh-pages
```
Access at: `username.github.io/import-export-website`

### 4. **Firebase Hosting**
- **Free Tier**: 10GB storage, 1GB downloads/month
- **Features**: Real-time database, authentication
- **Link**: https://firebase.google.com

**Deploy:**
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

### 5. **Render.com**
- **Free Tier**: Suitable for static sites
- **Features**: GitHub integration, auto-deploy
- **Link**: https://render.com

### 6. **AWS Amplify**
- **Free Tier**: 15GB storage, 15GB bandwidth
- **Features**: Built-in CI/CD, monitoring
- **Link**: https://aws.amazon.com/amplify/

## ⚡ Quickest Setup (Netlify)

### Option A: Drag & Drop
1. Go to https://app.netlify.com/drop
2. Drag the folder into the browser
3. Done! You have a live website

### Option B: GitHub Integration
```bash
# 1. Create GitHub repository
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/import-export-website.git
git push -u origin main

# 2. Connect to Netlify
# - Go to netlify.com
# - Click "New site from Git"
# - Select GitHub and authorize
# - Choose your repository
# - Click Deploy
```

## 🌐 Domain Setup

### Free Options:
- **Freenom.com** - Free .tk, .ml, .ga domains
- **Register with free hosting** - Some platforms offer free domains

### Paid Options:
- **Namecheap** - $0.88/year
- **GoDaddy** - $2.99/year
- **Google Domains** - $12/year

### Connect Custom Domain:
1. Purchase domain
2. Go to your hosting provider (Netlify/Vercel)
3. Add domain in DNS settings
4. Update nameservers from domain provider
5. Wait 24-48 hours for propagation

## 📝 Customization

### Edit Business Information:
- Open `index.html`
- Update company name, phone, email, address
- Update service descriptions
- Update product categories

### Change Colors:
- Open `style.css`
- Edit CSS variables:
```css
--primary-color: #1e40af;
--secondary-color: #0ea5e9;
```

### Add More Sections:
- Copy a section from `index.html`
- Paste and modify
- Update CSS if needed

## 🔧 Backend Integration (Optional)

### Contact Form Backend:

**Using Formspree (Free):**
```html
<form action="https://formspree.io/f/YOUR_ID" method="POST">
    <input type="text" name="name" required>
    <input type="email" name="email" required>
    <textarea name="message" required></textarea>
    <button type="submit">Send</button>
</form>
```

**Using EmailJS (Free):**
```javascript
emailjs.init("YOUR_PUBLIC_KEY");
emailjs.send("service_id", "template_id", {
    to_email: "your@email.com",
    from_name: formData.name,
    message: formData.message
});
```

## 📊 SEO Optimization

Already included:
- Meta tags (viewport, charset, description)
- Semantic HTML tags
- Alt text for images
- Mobile-responsive design

To improve further:
1. Add `<meta name="description" content="...">`
2. Add schema.org structured data
3. Create `sitemap.xml`
4. Submit to Google Search Console
5. Build backlinks

## 🚀 Performance Optimization

Current optimizations:
- Minimized CSS
- Lazy loading images
- Smooth scrolling
- Efficient animations

To improve further:
1. Compress images (TinyPNG)
2. Minify CSS/JavaScript
3. Use CDN for assets
4. Enable Gzip compression

## 📱 Mobile Testing

Test on different devices:
- Chrome DevTools (F12)
- Firefox Responsive Design Mode
- Safari Responsive Design Mode
- Real devices

## 🔐 Security Considerations

- Update contact form backend
- Use HTTPS (automatic with Netlify/Vercel)
- Keep dependencies updated
- Validate form inputs

## 📞 Support & Next Steps

1. **Add more pages**: About, Services details, Products catalog
2. **Add ecommerce**: Integrate Shopify or WooCommerce
3. **Add CRM**: Integrate Zoho CRM for leads
4. **Add analytics**: Google Analytics or Hotjar
5. **Add booking**: Calendly or Acuity Scheduling

## License

Free to use and modify for your business.

---

**Deployed successfully on**: [Add your URL here after deployment]
