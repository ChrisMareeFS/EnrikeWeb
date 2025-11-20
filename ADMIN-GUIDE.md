# Admin Panel Guide

## Accessing the Admin Panel

1. Go to: `http://178.62.83.119/admin/login` (or `https://enrike.co.za/admin/login` once domain is set up)
2. Enter password: `EnrikEW3b`
3. Click "Login"

## Features

### Content Editing

The admin panel allows you to edit:

1. **Hero Section**
   - Title lines 1 & 2
   - Description text
   - Background image (upload or enter path)
   - Background position (e.g., "center 20%", "right center")
   - CTA button texts and links
   - Social media links

2. **About Section**
   - Title
   - Description text
   - Background image
   - Background position

3. **Services Section**
   - Title and subtitle
   - Background image
   - Individual service items (title, description)

4. **Featured Content Section**
   - Title and subtitle
   - Background image

### Image Upload

1. Click "Choose File" under any image field
2. Select an image from your computer
3. The image will be uploaded to `/public/images/`
4. The image path will be automatically filled in
5. You can also manually enter an image path (e.g., `/images/portrait-3.jpg`)

### Saving Changes

1. Make your edits in any section
2. Click "Save Changes" at the bottom
3. Wait for confirmation message
4. Refresh your website to see changes

## Background Position Format

Use CSS object-position format:
- `center 20%` - Centers horizontally, 20% from top
- `right center` - Right side, vertically centered
- `left 30%` - Left side, 30% from top
- `center center` - Fully centered

## Security

- Password is stored securely in cookies
- Session expires after 7 days
- Click "Logout" when done editing

## Troubleshooting

**Can't login:**
- Make sure you're using the correct password: `EnrikEW3b`
- Clear browser cookies and try again

**Changes not showing:**
- Make sure you clicked "Save Changes"
- Refresh the website page
- Check browser console for errors

**Image upload fails:**
- Make sure image is under 10MB
- Check file format (JPG, PNG, WebP supported)
- Ensure `/public/images/` directory exists and is writable

**Content not loading:**
- Check that `/data/content.json` exists
- Verify file permissions on server

## File Locations

- Content storage: `/data/content.json`
- Uploaded images: `/public/images/`
- Admin login: `/admin/login`
- Admin dashboard: `/admin`

