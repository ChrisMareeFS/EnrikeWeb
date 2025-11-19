# Deployment Guide for Digital Ocean

This guide will help you deploy your Next.js website to Digital Ocean.

## Prerequisites

- Digital Ocean account
- Git repository (GitHub, GitLab, or Bitbucket)
- Domain name configured (enrike.co.za)

## Recommended: Digital Ocean App Platform

Digital Ocean App Platform is the easiest way to deploy Next.js applications. It handles builds, deployments, and scaling automatically.

### Step 1: Push Code to Git Repository

1. **Initialize Git (if not already done)**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Push to GitHub/GitLab/Bitbucket**
   ```bash
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

### Step 2: Create App on Digital Ocean

1. **Log in to Digital Ocean**
   - Go to https://cloud.digitalocean.com
   - Navigate to "Apps" → "Create App"

2. **Connect Your Repository**
   - Choose your Git provider (GitHub, GitLab, or Bitbucket)
   - Select your repository
   - Authorize Digital Ocean to access your repository

3. **Configure Build Settings**
   - **Build Command**: `npm run build`
   - **Run Command**: `npm start`
   - **Environment**: Node.js
   - **Node Version**: 18.x or higher (auto-detected)

4. **Configure App Settings**
   - **App Name**: `enrike-website` (or your preferred name)
   - **Region**: Choose closest to your users (e.g., Amsterdam, Frankfurt, or New York)
   - **Plan**: Start with Basic plan ($5/month) - can upgrade later

5. **Review and Create**
   - Review all settings
   - Click "Create Resources"

### Step 3: Configure Domain

1. **Add Custom Domain**
   - In your app settings, go to "Settings" → "Domains"
   - Click "Add Domain"
   - Enter: `enrike.co.za`
   - Follow DNS configuration instructions

2. **Update DNS Records**
   - Go to your domain registrar (where you bought enrike.co.za)
   - Add a CNAME record:
     - **Type**: CNAME
     - **Name**: @ (or www)
     - **Value**: [provided by Digital Ocean]
   - Or add an A record if Digital Ocean provides an IP

3. **SSL Certificate**
   - Digital Ocean automatically provisions SSL certificates via Let's Encrypt
   - Wait for DNS propagation (can take up to 48 hours)
   - SSL will activate automatically once DNS is verified

### Step 4: Environment Variables (if needed)

If you need environment variables:
1. Go to "Settings" → "App-Level Environment Variables"
2. Add any required variables
3. App will rebuild automatically

### Step 5: Deploy

- Digital Ocean will automatically build and deploy your app
- You can monitor the build process in the "Activity" tab
- Once deployed, your app will be live at the provided URL

## Alternative: Digital Ocean Droplet (VPS)

If you prefer more control, you can deploy to a Droplet:

### Step 1: Create Droplet

1. **Create New Droplet**
   - Choose Ubuntu 22.04 LTS
   - Select plan (minimum 1GB RAM recommended)
   - Choose datacenter region
   - Add SSH keys or create root password

### Step 2: Server Setup

1. **SSH into Droplet**
   ```bash
   ssh root@your-droplet-ip
   ```

2. **Install Node.js**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

3. **Install PM2 (Process Manager)**
   ```bash
   sudo npm install -g pm2
   ```

4. **Install Nginx (Reverse Proxy)**
   ```bash
   sudo apt update
   sudo apt install nginx
   ```

### Step 3: Deploy Application

1. **Clone Repository**
   ```bash
   git clone <your-repo-url>
   cd enrike-website
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Build Application**
   ```bash
   npm run build
   ```

4. **Start with PM2**
   ```bash
   pm2 start npm --name "enrike-website" -- start
   pm2 save
   pm2 startup
   ```

### Step 4: Configure Nginx

1. **Create Nginx Config**
   ```bash
   sudo nano /etc/nginx/sites-available/enrike.co.za
   ```

2. **Add Configuration**
   ```nginx
   server {
       listen 80;
       server_name enrike.co.za www.enrike.co.za;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

3. **Enable Site**
   ```bash
   sudo ln -s /etc/nginx/sites-available/enrike.co.za /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

### Step 5: SSL with Let's Encrypt

1. **Install Certbot**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   ```

2. **Get SSL Certificate**
   ```bash
   sudo certbot --nginx -d enrike.co.za -d www.enrike.co.za
   ```

3. **Auto-renewal** (already configured)
   ```bash
   sudo certbot renew --dry-run
   ```

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify images are loading
- [ ] Check mobile responsiveness
- [ ] Test navigation links
- [ ] Verify SSL certificate is active (HTTPS)
- [ ] Test form submissions (if applicable)
- [ ] Check page load speeds
- [ ] Verify domain is working (enrike.co.za)
- [ ] Test horizontal scroll on home page
- [ ] Verify all inner pages work

## Troubleshooting

### Build Failures
- Check build logs in Digital Ocean dashboard
- Ensure Node.js version is 18.x or higher
- Verify all dependencies are in package.json

### Images Not Loading
- Ensure all images in `/public/images/` are committed to Git
- Check image paths are correct
- Verify Next.js Image component configuration

### 404 Errors on Inner Pages
- Ensure you're using App Platform (handles routing automatically)
- If using Droplet, check Nginx configuration includes proper proxy settings

### Performance Issues
- Enable Next.js Image Optimization (already configured)
- Check image sizes and optimize if needed
- Consider upgrading App Platform plan if needed

## Recommended Settings for App Platform

- **Build Command**: `npm run build`
- **Run Command**: `npm start`
- **HTTP Port**: 3000 (default)
- **Health Check Path**: `/` (default)
- **Instance Size**: Basic ($5/month) is sufficient to start
- **Auto-scaling**: Can enable if traffic increases

## Continuous Deployment

Digital Ocean App Platform automatically deploys when you push to your main branch:
1. Push changes to Git
2. Digital Ocean detects changes
3. Builds automatically
4. Deploys new version
5. Zero downtime deployment

## Cost Estimate

- **App Platform Basic**: ~$5/month
- **Droplet (1GB RAM)**: ~$6/month
- **Domain**: Already owned (enrike.co.za)
- **SSL**: Free (Let's Encrypt)

## Support

- Digital Ocean Documentation: https://docs.digitalocean.com
- Next.js Deployment Docs: https://nextjs.org/docs/deployment
- Digital Ocean Community: https://www.digitalocean.com/community
