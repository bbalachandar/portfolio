# Balachandar B - Full Stack Engineer Portfolio

A modern, responsive portfolio website showcasing 4+ years of enterprise application development experience. Built with vanilla HTML, CSS, and JavaScript-zero dependencies, zero build step.

## 🎯 About Me

Full Stack Software Engineer based in Chennai, India. Specialized in:
- **Frontend Architecture**: Angular 18, RxJS, NgRx, Module Federation, Web Components
- **Enterprise Modernization**: UI redesigns, performance optimization, incremental feature delivery
- **Accessibility & Performance**: A11y-first development, performance tuning, 100%+ test coverage
- **Full-Stack Delivery**: End-to-end ownership from REST APIs to CI/CD pipelines

**Experience**: Alight Solutions (Dec 2024–Present), Akiko Sherman Infotech, SISL Infotech

## 🚀 Quick Start

1. Clone the repository
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. Open in a browser
   ```bash
   open index.html
   # or
   start index.html
   ```

3. No build step, no dependencies-it just works.

## 📋 Features

- ✨ **Dark/Light Theme Toggle** - Persisted theme preference with system preference fallback
- 📱 **Fully Responsive** - Works seamlessly from 360px mobile to 4K desktop
- ♿ **Accessible** - WCAG AA compliant, semantic HTML, keyboard navigation, focus states
- 🎬 **Scroll Reveals** - Smooth entrance animations using IntersectionObserver
- 🔍 **SEO Optimized** - Meta tags, Open Graph, structured content
- 🎨 **Modern Design** - Navy + Cyan color system, deliberate typography hierarchy

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3 (CSS custom properties), Vanilla JavaScript (ES6+)
- **APIs**: Web3Forms for contact form submissions
- **Hosting**: Static site (deploy anywhere-GitHub Pages, Netlify, Vercel, etc.)

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML (semantic structure)
├── style.css           # CSS with theme system & responsive design
├── script.js           # Vanilla JS (theme toggle, navigation, scroll reveals)
├── README.md           # This file
├── images/
│   └── profile-1.jpeg  # Your headshot
└── files/
    └── cv.pdf          # Your résumé
```

## 🎨 Design System

**Colors**:
- Navy: `#0F172A` (primary)
- Cyan: `#06B6D4` (accent)
- Emerald: `#10B981` (secondary accent)
- Light/Dark neutral scales

**Typography**:
- System font stack (zero external fonts)
- Deliberate weight/spacing hierarchy
- Responsive font sizing (clamp)

**Spacing**:
- CSS custom properties for consistent spacing
- Mobile-first responsive approach

## 📝 Customization

### Update Your Contact Info

Edit `index.html` and search for:
- **Phone**: Line ~413 (or search for `+91 6381311936`)
- **LinkedIn**: Line ~417 (or search for `linkedin.com/in/balachandar-b-a0a18115b`)
- **GitHub**: Optional, currently commented

### Update Your Résumé & Photo

- **Photo**: Replace `images/profile-1.jpeg` with your headshot
- **Résumé**: Replace `files/cv.pdf` with your updated CV

### Customize Theme Colors

Open `style.css` and update the CSS custom properties in `:root`:
```css
:root {
    --color-navy: #0F172A;
    --color-cyan: #06B6D4;
    --color-emerald: #10B981;
    /* ... more variables ... */
}
```

## 🔗 Deploy

### GitHub Pages
```bash
git push origin main
# Enable Pages in repository settings → set source to main branch
```

### Netlify
```bash
# Drag & drop the entire folder, or:
netlify deploy --prod --dir=.
```

### Vercel
```bash
vercel --prod
```

## ♿ Accessibility Checklist

- ✅ Semantic HTML5 landmarks
- ✅ ARIA labels on interactive elements
- ✅ Focus-visible states on all interactive elements
- ✅ `prefers-reduced-motion` respected
- ✅ High contrast colors (WCAG AA)
- ✅ Proper heading hierarchy
- ✅ Alt text on images
- ✅ Keyboard navigation support

## 📊 Performance

- **Size**: ~50KB total (HTML + CSS + JS, uncompressed)
- **Load Time**: <1s on typical broadband
- **No external dependencies** → No dependency vulnerabilities
- **No build step** → No build complexity

## 📄 License

This portfolio is open source. Feel free to use it as inspiration for your own site.

---

**Built with ❤️ and vanilla JS by Balachandar B**

Last updated: 2026-08-30
