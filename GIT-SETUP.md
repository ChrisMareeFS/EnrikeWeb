# Git Setup & Deployment Guide

Your code is now committed locally. Follow these steps to push to GitHub and deploy:

## Step 1: Create GitHub Repository

1. Go to https://github.com and sign in (or create an account)
2. Click the "+" icon in the top right → "New repository"
3. Repository name: `enrike-website` (or your preferred name)
4. Description: "Website for Enrike Maree - Science Communicator"
5. Choose: **Public** or **Private**
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click "Create repository"

## Step 2: Push Code to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add your GitHub repository as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/enrike-website.git

# Rename branch to main (if needed)
git branch -M main

# Push your code
git push -u origin main
```

You'll be prompted for your GitHub username and password (or use a Personal Access Token).

## Step 3: Deploy to Digital Ocean Droplet

Once your code is on GitHub, SSH into your droplet:

```bash
ssh root@178.62.83.119
```

Then run these commands on the server:

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 and Nginx
sudo npm install -g pm2
sudo apt install nginx git -y

# Clone your repository (replace with your actual GitHub URL)
cd ~
git clone https://github.com/YOUR_USERNAME/enrike-website.git
cd enrike-website

# Install dependencies
npm install

# Build the application
npm run build

# Start with PM2
pm2 start npm --name "enrike-website" -- start
pm2 save
pm2 startup
# Follow the instructions it provides (usually run a sudo command)

# Configure Nginx
sudo nano /etc/nginx/sites-available/enrike.co.za
```

Paste this Nginx configuration:

```nginx
server {
    listen 80;
    server_name enrike.co.za www.enrike.co.za 178.62.83.119;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Save and exit (Ctrl+X, then Y, then Enter), then:

```bash
# Enable the site
sudo ln -s /etc/nginx/sites-available/enrike.co.za /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl restart nginx

# Setup SSL
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d enrike.co.za -d www.enrike.co.za

# Configure firewall
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
```

## Step 4: Update DNS

Go to your domain registrar and add an A record:
- **Type**: A
- **Name**: @
- **Value**: 178.62.83.119
- **TTL**: 3600

## Step 5: Future Updates

When you make changes to your code:

```bash
# On your local machine
git add .
git commit -m "Your commit message"
git push

# On the server (SSH in)
cd ~/enrike-website
git pull
npm install
npm run build
pm2 restart enrike-website
```

## Troubleshooting

### GitHub Authentication
If you get authentication errors, use a Personal Access Token:
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token with `repo` permissions
3. Use the token as your password when pushing

### Server Issues
- Check PM2: `pm2 status`
- Check logs: `pm2 logs enrike-website`
- Check Nginx: `sudo systemctl status nginx`
- Check firewall: `sudo ufw status`

