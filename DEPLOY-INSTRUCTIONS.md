# Deployment Instructions

## Quick Deploy Guide

Follow these steps to deploy your site to Digital Ocean:

### Step 1: SSH into Your Droplet

```bash
ssh root@178.62.83.119
```
Password: `D00rnHo@k9mm`

### Step 2: Upload and Run Deployment Scripts

**Option A: Copy scripts manually**

On your local machine, upload the scripts:
```bash
scp deploy.sh root@178.62.83.119:~/
scp setup-nginx.sh root@178.62.83.119:~/
scp setup-ssl.sh root@178.62.83.119:~/
scp setup-firewall.sh root@178.62.83.119:~/
```

Then on the server:
```bash
chmod +x deploy.sh setup-nginx.sh setup-ssl.sh setup-firewall.sh
./deploy.sh
./setup-nginx.sh
./setup-firewall.sh
# Wait for DNS to propagate, then:
./setup-ssl.sh
```

**Option B: Run commands directly**

Just copy and paste the commands from each script into your SSH session.

### Step 3: Manual Commands (If Scripts Don't Work)

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 and Nginx
sudo npm install -g pm2
sudo apt install nginx git -y

# Clone repository
cd ~
git clone https://github.com/ChrisMareeFS/EnrikeWeb.git
cd EnrikeWeb

# Install and build
npm install
npm run build

# Start with PM2
pm2 start npm --name "enrike-website" -- start
pm2 save
pm2 startup
# Follow the instructions it provides

# Configure Nginx (see setup-nginx.sh for config)
# Setup SSL (see setup-ssl.sh)
# Configure firewall (see setup-firewall.sh)
```

### Step 4: Verify Deployment

```bash
# Check PM2 status
pm2 status

# Check Nginx status
sudo systemctl status nginx

# View application logs
pm2 logs enrike-website

# Test your site
curl http://localhost:3000
```

### Step 5: Update DNS

Go to your domain registrar and add:
- **Type**: A
- **Name**: @
- **Value**: 178.62.83.119
- **TTL**: 3600

### Troubleshooting

**App not running:**
```bash
pm2 restart enrike-website
pm2 logs enrike-website
```

**Nginx not working:**
```bash
sudo nginx -t
sudo systemctl restart nginx
sudo tail -f /var/log/nginx/error.log
```

**Port already in use:**
```bash
sudo lsof -i :3000
pm2 stop enrike-website
pm2 start npm --name "enrike-website" -- start
```

**Out of memory (512MB is small):**
```bash
# Add swap space
sudo fallocate -l 1G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
```

