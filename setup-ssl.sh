#!/bin/bash

# SSL Setup Script
# Run this after setup-nginx.sh

echo "🔒 Setting up SSL certificate..."

# Install Certbot
echo "📦 Installing Certbot..."
sudo apt install certbot python3-certbot-nginx -y

# Get SSL certificate
echo "📜 Getting SSL certificate..."
echo "⚠️  Make sure your domain DNS is pointing to 178.62.83.119 before running this!"
sudo certbot --nginx -d enrike.co.za -d www.enrike.co.za

# Test auto-renewal
echo "🧪 Testing certificate auto-renewal..."
sudo certbot renew --dry-run

echo "✅ SSL configured!"
echo "🌐 Your site should now be accessible at https://enrike.co.za"

