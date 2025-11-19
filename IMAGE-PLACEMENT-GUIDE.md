# Image Placement Guide

This guide explains where to place your actual photo files to replace the placeholders.

## Image Mapping

Based on the photos you provided, here's where each should be placed:

### Home Page Sections

#### 1. **Hero Background** (Wide field landscape)
- **Save as**: `/public/images/field-wide.jpg`
- **Use**: The wide shot of the field at sunset (image #4 you provided)
- **Current usage**: Hero section background
- **Recommended dimensions**: 1920x1080px or larger

#### 2. **About Section Portrait** (Professional portrait with jacket)
- **Save as**: `/public/images/portrait-professional.jpg`
- **Use**: Portrait with beige blazer and green top (image #2 you provided)
- **Current usage**: About section main portrait
- **Recommended dimensions**: 800x1200px (portrait, 2:3 ratio)

#### 3. **About Section Background** (Field view from behind)
- **Save as**: `/public/images/field-back.jpg`
- **Use**: Back-view photo in field (image #5 you provided)
- **Current usage**: Subtle background for About section
- **Recommended dimensions**: 1920x1080px

#### 4. **Services Background** (Full body in field)
- **Save as**: `/public/images/portrait-standing.jpg`
- **Use**: Full-length standing photo (image #6 you provided)
- **Current usage**: Subtle background for Services section
- **Recommended dimensions**: 1920x1080px

#### 5. **Content Section Background** (Arms raised)
- **Save as**: `/public/images/portrait-arms.jpg`
- **Use**: Photo with arms raised in celebration (image #7 you provided)
- **Current usage**: Subtle background for Featured Content section
- **Recommended dimensions**: 1920x1080px

#### 6. **Contact Section Background** (Close-up portrait)
- **Save as**: `/public/images/portrait-1.jpg`
- **Use**: Close-up smiling portrait (image #1 you provided)
- **Current usage**: Contact CTA section background
- **Recommended dimensions**: 1920x1080px

### Additional Photos Available

You also provided these photos which could be used for:
- **portrait-2.jpg**: Image #3 (field perspective shot) - can be used for inner pages
- **portrait-3.jpg**: Could use for speaking/consulting page backgrounds

## Quick Start

1. **Rename your photos** to match the filenames above
2. **Move them** to the `/public/images/` directory
3. **Refresh** your browser - Next.js will automatically pick them up!

## Image Optimization Tips

- **Format**: Keep as JPG for photographs
- **Size**: Resize images to approximately 1920x1080px for backgrounds, 800x1200px for portraits
- **Quality**: Use 80-85% quality for web optimization
- **Tools**: Use tools like:
  - **Squoosh**: https://squoosh.app
  - **TinyJPG**: https://tinyjpg.com
  - **ImageOptim** (Mac)

## Current Status

✅ Code is ready and configured
⏳ Waiting for actual image files to replace placeholders
🎨 All glassmorphism effects and gradients are optimized for your photos

## After Adding Images

The site will automatically:
- Display your professional photos with glassmorphism overlays
- Maintain the warm, earthy color palette
- Apply the deep forest green tinting to create cohesion
- Optimize images using Next.js Image component

## Need Help?

If any images aren't displaying correctly:
1. Check the filename matches exactly (including extension)
2. Ensure the file is in `/public/images/` directory
3. Try a hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
4. Check browser console for any errors
