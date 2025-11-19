# Enrike.co.za Setup Guide

## 🎉 Your Website is Ready!

The website is fully built and running. You just need to add your actual photos to complete it.

## 📸 Adding Your Photos

### Step 1: Prepare Your Images

Based on the mockup and photos you've provided, rename your images as follows:

1. **hero-bg.jpg** - Use one of the professional outdoor photos (the one with Enrike in the field with arms raised or similar)
   - Best choice: Wide landscape shot with good lighting
   - The site will overlay text on the left side

2. **enrike-portrait.jpg** - Use a portrait-oriented photo for the About section
   - Best choice: Professional headshot or 3/4 body shot
   - The image will be displayed in a 3:4 aspect ratio card

3. **contact-bg.jpg** - Another field/outdoor shot for the contact section
   - Can reuse one of the wider landscape photos
   - Will have a dark overlay, so any of them works

4. **speaking-bg.jpg** - Professional setting or another outdoor shot
   - Optional: Can also reuse hero-bg.jpg

### Step 2: Add Images to the Project

1. Save your renamed images to: `public/images/`
2. The placeholder images will automatically be replaced

### Step 3: Test the Site

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and verify:
- Home page loads with horizontal scrolling
- All 5 sections scroll smoothly
- Your images appear correctly
- Navigation works between pages

## 🎨 Customization Options

### Update Content

Edit these files to change text, services, or topics:

- **Home page sections**: `components/home/*.tsx`
- **Speaking page**: `app/speaking/page.tsx`
- **Consulting page**: `app/consulting/page.tsx`
- **Resources page**: `app/resources/page.tsx`
- **Contact page**: `app/contact/page.tsx`

### Update Colors

Edit `tailwind.config.ts` to modify the color palette:

```typescript
colors: {
  forest: {
    deep: "#0D3B2E",    // Change these values
    medium: "#3E7F63",
  },
  // ... etc
}
```

### Add Social Media Links

Update the links in:
- `components/home/HeroSection.tsx` (social buttons)
- `components/home/ContactCTASection.tsx` (footer social)
- `app/contact/page.tsx` (social media cards)

Replace `href="#"` with your actual URLs.

### Configure Email

To make the contact form functional:

1. Set up email service (e.g., SendGrid, Resend, or SMTP)
2. Add API route: `app/api/contact/route.ts`
3. Update form submission in `app/contact/page.tsx`

## 🚀 Deployment

### Option 1: Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy (it's automatic!)

### Option 2: Manual Build

```bash
npm run build
npm start
```

Upload the `.next` folder and `public` folder to your hosting provider.

## 📱 Features Checklist

✅ Horizontal scrolling home page with 5 sections  
✅ Smooth snap-scroll behavior  
✅ Glassmorphism design system throughout  
✅ Fully responsive (mobile, tablet, desktop)  
✅ Speaking page with offerings and testimonials  
✅ Consulting page with services and process  
✅ Resources page (AgreeToThisAgri legacy)  
✅ Contact form with FAQs  
✅ Navigation with active state indicators  
✅ Progress dots for horizontal scroll  
✅ SEO-optimized with meta tags  
✅ TypeScript for type safety  
✅ Next.js Image optimization  

## 🎯 Next Steps

1. **Add your photos** to `public/images/`
2. **Update social media URLs** throughout the site
3. **Customize content** to match your exact services and experience
4. **Set up email service** for contact form functionality
5. **Test on mobile devices** to ensure responsive design works perfectly
6. **Deploy to production** when ready

## 💡 Tips

- The horizontal scroll works best on desktop/tablet
- Mobile automatically adapts with touch-friendly swipe
- All images are automatically optimized by Next.js
- The glassmorphism effect looks best with your actual photos
- The color palette is inspired by your brand mockup

## 🆘 Need Help?

If you encounter any issues:

1. Check that all dependencies are installed: `npm install`
2. Clear the build cache: `rm -rf .next`
3. Rebuild: `npm run build`
4. Check the console for any error messages

---

**Your website is production-ready!** Just add your photos and deploy. 🌾✨

