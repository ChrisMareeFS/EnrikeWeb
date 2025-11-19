#!/bin/bash

# Nginx Configuration Script
# Run this after deploy.sh

echo "⚙️ Configuring Nginx..."

# Create Nginx config file
sudo tee /etc/nginx/sites-available/enrike.co.za > /dev/null <<EOF
server {
    listen 80;
    server_name enrike.co.za www.enrike.co.za 178.62.83.119;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF

# Enable site
echo "🔗 Enabling Nginx site..."
sudo ln -sf /etc/nginx/sites-available/enrike.co.za /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# Test Nginx config
echo "🧪 Testing Nginx configuration..."
sudo nginx -t

# Restart Nginx
echo "🔄 Restarting Nginx..."
sudo systemctl restart nginx

echo "✅ Nginx configured!"
echo "🔒 Next step: Run setup-ssl.sh to configure SSL"

