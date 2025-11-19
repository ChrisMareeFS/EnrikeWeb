# Droplet Deployment Guide

## Your Droplet Details
- **Hostname**: ubuntu-s-1vcpu-512mb-10gb-lon1-01
- **Public IP**: 178.62.83.119
- **Password**: D00rnHo@k9mm

## Step 2: SSH into Your Droplet

**On Windows (PowerShell or Command Prompt):**
```bash
ssh root@178.62.83.119
```

When prompted, enter password: `D00rnHo@k9mm`

**Or use PuTTY (if you prefer GUI):**
- Host: 178.62.83.119
- Port: 22
- Username: root
- Password: D00rnHo@k9mm

## Step 3: Initial Server Setup

Once connected, run these commands:

```bash
# Update system packages
sudo apt update && sudo apt upgrade -y

# Install Node.js 18.x
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify Node.js installation
node --version
npm --version

# Install PM2 (Process Manager)
sudo npm install -g pm2

# Install Nginx (Web Server)
sudo apt install nginx -y

# Install Git
sudo apt install git -y
```

## Step 4: Clone Your Repository

```bash
# Navigate to home directory
cd ~

# Clone your repository (replace with your actual repo URL)
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Or if you haven't pushed to Git yet, you can upload files via SCP
# (See alternative method below)

# Navigate into project directory
cd YOUR_REPO_NAME
```

## Step 5: Install Dependencies and Build

```bash
# Install project dependencies
npm install

# Build the Next.js application
npm run build

# Test the build works
npm start
```

Press `Ctrl+C` to stop the test server.

## Step 6: Start Application with PM2

```bash
# Start the app with PM2
pm2 start npm --name "enrike-website" -- start

# Save PM2 configuration
pm2 save

# Setup PM2 to start on boot
pm2 startup
# Follow the instructions it provides (usually run a sudo command)
```

## Step 7: Configure Nginx

```bash
# Create Nginx configuration file
sudo nano /etc/nginx/sites-available/enrike.co.za
```

Add this configuration (replace YOUR_PUBLIC_IP with your actual public IP):

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

Save and exit (Ctrl+X, then Y, then Enter)

```bash
# Enable the site
sudo ln -s /etc/nginx/sites-available/enrike.co.za /etc/nginx/sites-enabled/

# Remove default site (optional)
sudo rm /etc/nginx/sites-enabled/default

# Test Nginx configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
```

## Step 8: Setup SSL with Let's Encrypt

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Get SSL certificate (replace with your actual domain)
sudo certbot --nginx -d enrike.co.za -d www.enrike.co.za

# Follow the prompts:
# - Enter your email
# - Agree to terms
# - Choose whether to redirect HTTP to HTTPS (recommended: Yes)
```

SSL certificate will auto-renew. Test renewal:
```bash
sudo certbot renew --dry-run
```

## Step 9: Configure Firewall

```bash
# Allow SSH, HTTP, and HTTPS
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
sudo ufw status
```

## Step 10: Update DNS Records

Go to your domain registrar (where you bought enrike.co.za) and add:

**Option 1: A Record**
- Type: A
- Name: @
- Value: 178.62.83.119
- TTL: 3600

**Option 2: CNAME (if using www)**
- Type: CNAME
- Name: www
- Value: enrike.co.za
- TTL: 3600

## Alternative: Upload Files via SCP (If Not Using Git)

If you haven't pushed to Git, you can upload files directly:

**On Windows (PowerShell):**
```powershell
# Navigate to your project folder
cd "C:\Users\chris\OneDrive\Documents\Enrike website"

# Upload files (excluding node_modules)
scp -r * root@178.62.83.119:/root/enrike-website/
```

Then SSH in and:
```bash
cd /root/enrike-website
npm install
npm run build
pm2 start npm --name "enrike-website" -- start
pm2 save
```

## Useful Commands

**Check if app is running:**
```bash
pm2 status
pm2 logs enrike-website
```

**Restart app:**
```bash
pm2 restart enrike-website
```

**Stop app:**
```bash
pm2 stop enrike-website
```

**Update application:**
```bash
cd ~/YOUR_REPO_NAME
git pull
npm install
npm run build
pm2 restart enrike-website
```

**Check Nginx status:**
```bash
sudo systemctl status nginx
```

**View Nginx logs:**
```bash
sudo tail -f /var/log/nginx/error.log
```

## Troubleshooting

### Can't SSH into Droplet
- Use the public IP: 178.62.83.119
- Verify firewall allows SSH (port 22)

### App Not Accessible
- Check PM2 is running: `pm2 status`
- Check Nginx is running: `sudo systemctl status nginx`
- Verify Nginx config: `sudo nginx -t`
- Check firewall: `sudo ufw status`

### Port Already in Use
```bash
# Check what's using port 3000
sudo lsof -i :3000

# Kill the process if needed
pm2 stop enrike-website
```

### Out of Memory (512MB is small)
Your droplet has 512MB RAM which is minimal for Next.js. If you encounter memory issues:

1. Add swap space:
```bash
sudo fallocate -l 1G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
```

2. Or upgrade your droplet to 1GB RAM ($6/month)

## Next Steps After Deployment

1. Test your site: http://178.62.83.119
2. Test with domain: http://enrike.co.za (after DNS propagates)
3. Test HTTPS: https://enrike.co.za (after SSL is set up)
4. Monitor with PM2: `pm2 monit`

