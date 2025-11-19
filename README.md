# Enrike.co.za - Agricultural Science Communicator

A modern, high-end website for Enrike Maree, featuring horizontal scrolling on the home page and glassmorphism design throughout.

## 🌾 About

This website showcases Enrike Maree's work as an agricultural science communicator, speaker, and consultant. Formerly known as AgreeToThisAgri, the platform continues to bridge the gap between complex agricultural research and practical farming solutions.

## 🎨 Design Features

- **Horizontal Scrolling Home Page**: Smooth, full-screen sections with snap behavior
- **Glassmorphism Design System**: Modern frosted-glass aesthetic throughout
- **Custom Color Palette**: Deep forest greens, warm beige, and charcoal
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Performance Optimized**: Next.js 14 with automatic image optimization

## 🛠 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Playfair Display (serif) + Inter (sans-serif)

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Adding Your Images

1. Place your photos in the `public/images/` directory
2. Use these exact filenames:
   - `hero-bg.jpg` - Main hero background
   - `enrike-portrait.jpg` - About section portrait
   - `contact-bg.jpg` - Contact section background
   - `speaking-bg.jpg` - Speaking page background

See `public/images/README.md` for detailed specifications.

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── page.tsx            # Home page (horizontal scroll)
│   ├── globals.css         # Global styles & utilities
│   ├── speaking/           # Speaking & media page
│   ├── consulting/         # Consulting services page
│   ├── resources/          # Content & resources page
│   └── contact/            # Contact form page
├── components/
│   ├── Navbar.tsx          # Main navigation
│   ├── GlassCard.tsx       # Reusable glassmorphism card
│   ├── Button.tsx          # Reusable button component
│   └── home/               # Home page sections
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── ServicesSection.tsx
│       ├── FeaturedContentSection.tsx
│       └── ContactCTASection.tsx
└── public/
    └── images/             # Image assets
```

## 🎯 Key Features

### Home Page (Horizontal Scroll)
- Hero with call-to-action
- About Enrike section
- Services overview
- Featured content
- Contact CTA

### Inner Pages (Vertical Scroll)
- **Speaking**: Services, topics, testimonials
- **Consulting**: Strategy, process, case studies
- **Resources**: Articles, videos, research, media
- **Contact**: Form, direct contact, FAQ

## 🎨 Color Palette

- **Deep Forest Green**: `#0D3B2E`
- **Medium Green**: `#3E7F63`
- **Warm Beige**: `#D6C9B2`
- **Soft White**: `#F4F3EF`
- **Charcoal**: `#0E0E0E`

## 📝 Customization

### Update Content
Edit the page files in `app/` to update copy, services, topics, etc.

### Modify Colors
Update `tailwind.config.ts` to change the color scheme.

### Add Pages
Create new folders in `app/` following Next.js 14 App Router conventions.

## 🔧 Development

This project uses:
- ESLint for code quality
- TypeScript for type safety
- Tailwind CSS for styling
- Next.js Image component for optimization

## 📄 License

© 2024 Enrike Maree. All rights reserved.

## 🤝 Contact

For technical questions about this website, or to book Enrike for speaking/consulting:

- Email: enrike@enrike.co.za
- Website: [enrike.co.za](https://enrike.co.za)

---

Built with ❤️ for agricultural science communication

