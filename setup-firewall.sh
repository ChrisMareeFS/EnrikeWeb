#!/bin/bash

# Firewall Configuration Script

echo "🔥 Configuring firewall..."

# Allow SSH, HTTP, and HTTPS
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw --force enable

# Show status
echo "📊 Firewall status:"
sudo ufw status

echo "✅ Firewall configured!"

