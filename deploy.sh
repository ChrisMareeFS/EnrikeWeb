#!/bin/bash

# Digital Ocean Droplet Deployment Script
# Run this script on your droplet after SSH'ing in

echo "🚀 Starting deployment..."

# Update system
echo "📦 Updating system packages..."
sudo apt update && sudo apt upgrade -y

# Install Node.js 18
echo "📦 Installing Node.js 18..."
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify Node.js installation
echo "✅ Node.js version:"
node --version
npm --version

# Install PM2
echo "📦 Installing PM2..."
sudo npm install -g pm2

# Install Nginx and Git
echo "📦 Installing Nginx and Git..."
sudo apt install nginx git -y

# Clone repository
echo "📥 Cloning repository..."
cd ~
if [ -d "EnrikeWeb" ]; then
    echo "Repository exists, pulling latest changes..."
    cd EnrikeWeb
    git pull
else
    git clone https://github.com/ChrisMareeFS/EnrikeWeb.git
    cd EnrikeWeb
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build application
echo "🔨 Building application..."
npm run build

# Start with PM2
echo "🚀 Starting application with PM2..."
pm2 stop enrike-website 2>/dev/null || true
pm2 start npm --name "enrike-website" -- start
pm2 save

# Setup PM2 startup
echo "⚙️ Setting up PM2 startup..."
pm2 startup

echo "✅ Application is running!"
echo "📊 Check status with: pm2 status"
echo "📋 View logs with: pm2 logs enrike-website"

