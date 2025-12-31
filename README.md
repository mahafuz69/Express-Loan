# Express Capital Microfinance Website

A modern, fully responsive microfinance website built with HTML, CSS, and JavaScript.

## 📁 File Structure

```
express-capital-microfinance/
│
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
└── README.md          # This file
```

## 🚀 Quick Start

### Option 1: Local Setup (No Server Required)

1. **Create a new folder** on your computer (e.g., `express-capital-website`)

2. **Create three files** in this folder:
   - `index.html`
   - `styles.css`
   - `script.js`

3. **Copy and paste** the respective code into each file

4. **Open `index.html`** in your web browser by:
   - Double-clicking the file, OR
   - Right-click → Open with → Your preferred browser

5. **Done!** Your website is now running locally.

### Option 2: Using Live Server (VS Code)

1. Install [Visual Studio Code](https://code.visualstudio.com/)
2. Install the "Live Server" extension
3. Open the folder in VS Code
4. Right-click on `index.html` and select "Open with Live Server"
5. The website will open in your browser with live reload

### Option 3: Deploy to Web Hosting

You can host this website on any of these platforms (all are FREE):

#### **Netlify** (Recommended - Easiest)
1. Go to [netlify.com](https://www.netlify.com/)
2. Drag and drop your folder or connect to GitHub
3. Your site will be live in seconds!

#### **GitHub Pages**
1. Create a GitHub repository
2. Upload your files
3. Go to Settings → Pages
4. Select main branch and save
5. Your site will be live at `username.github.io/repository-name`

#### **Vercel**
1. Go to [vercel.com](https://vercel.com/)
2. Import your project from GitHub or upload files
3. Deploy with one click

#### **000webhost** (Traditional Hosting)
1. Sign up at [000webhost.com](https://www.000webhost.com/)
2. Upload your files via FTP or File Manager
3. Your site will be live

## 📋 Features

✅ **Fully Responsive** - Works on desktop, tablet, and mobile
✅ **Smooth Scrolling** - Navigate sections seamlessly
✅ **Mobile Menu** - Hamburger menu for mobile devices
✅ **Working Forms** - Contact/application form with validation
✅ **Animations** - Smooth animations on scroll
✅ **Statistics Counter** - Animated counting numbers
✅ **Image Integration** - Uses online images (Unsplash CDN)

## 🎨 Customization Guide

### Change Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary: #1e3c72;      /* Main blue color */
    --secondary: #2a5298;    /* Secondary blue */
    --accent: #f0a500;       /* Orange/gold accent */
}
```

### Change Text Content

Simply edit the text in `index.html` file:

```html
<h1>Your Trusted Partner in Microfinance</h1>
<p>Your custom text here...</p>
```

### Change Images

Replace image URLs in `index.html`:

```html
<img src="YOUR_IMAGE_URL_HERE" alt="Description">
```

**Free Stock Image Sources:**
- [Unsplash](https://unsplash.com/) - High quality, free images
- [Pexels](https://pexels.com/) - Free stock photos
- [Pixabay](https://pixabay.com/) - Free images and videos

### Add/Remove Sections

To add a new section, copy an existing section structure and modify:

```html
<section class="your-section" id="your-id">
    <div class="container">
        <!-- Your content here -->
    </div>
</section>
```

## 🔧 How Components Work

### 1. Navigation Tabs
The navigation automatically:
- Scrolls smoothly to sections when clicked
- Highlights active section while scrolling
- Closes mobile menu after selection
- Works with anchor links (#home, #services, etc.)

### 2. Mobile Menu
- Hamburger icon appears on screens < 768px
- Click to open/close menu
- Automatically closes when clicking outside or on a link

### 3. Contact Form
The form includes:
- Required field validation
- Email format validation
- Phone number formatting
- Success message display
- Console logging (for testing)

**To connect to a backend:**
Uncomment the fetch code in `script.js` (line 52-71) and replace with your API endpoint.

### 4. Scroll Animations
Elements fade in as you scroll down using Intersection Observer API.

## 📱 Browser Compatibility

✅ Chrome (recommended)
✅ Firefox
✅ Safari
✅ Edge
✅ Opera
✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🛠️ Backend Integration (Optional)

To make the contact form functional with a backend:

### Option 1: Using Formspree (No Code)
1. Go to [formspree.io](https://formspree.io/)
2. Get your form endpoint
3. Replace the form submission code in `script.js`

### Option 2: Using Node.js/Express
```javascript
// Example backend endpoint
app.post('/api/submit-application', (req, res) => {
    const { name, email, phone, loanType, message } = req.body;
    
    // Process the data (save to database, send email, etc.)
    
    res.json({ success: true, message: 'Application received!' });
});
```

### Option 3: Using PHP
Create a `submit.php` file:
```php
<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];

// Process data and send email
mail('info@expresscapital.com', 'New Application', $message);

echo json_encode(['success' => true]);
?>
```

## 📊 Performance Optimization

The website is optimized for:
- **Fast Loading** - Minimal external dependencies
- **SEO Friendly** - Proper meta tags and semantic HTML
- **Accessibility** - Screen reader compatible
- **Mobile First** - Optimized for mobile devices

## 🎯 SEO Best Practices

The website includes:
- Proper heading hierarchy (H1, H2, H3)
- Meta description
- Alt text for images
- Semantic HTML5 elements
- Mobile-responsive design

## 🔒 Security Notes

For production deployment:
1. Use HTTPS (SSL certificate) - Free with most hosting providers
2. Implement CAPTCHA on forms to prevent spam
3. Sanitize all user inputs on the backend
4. Use environment variables for sensitive data

## 📞 Support

For questions or issues:
- Email: info@expresscapital.com
- Review the code comments in each file
- Check browser console for errors (F12)

## 📄 License

This website template is free to use and modify for your projects.

## 🎉 Credits

- **Fonts**: Google Fonts (Outfit)
- **Images**: Unsplash
- **Icons**: Unicode Emoji
- **Design**: Modern microfinance industry standards

---

**Built with ❤️ for Express Capital Microfinance**

Last Updated: December 2024