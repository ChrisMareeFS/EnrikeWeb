#!/bin/bash

echo "🔧 Fixing deployment issues..."

# Add swap space (512MB RAM is too small)
echo "💾 Adding swap space..."
if [ ! -f /swapfile ]; then
    sudo fallocate -l 1G /swapfile
    sudo chmod 600 /swapfile
    sudo mkswap /swapfile
    sudo swapon /swapfile
    echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
    echo "✅ Swap space added"
else
    echo "✅ Swap file already exists"
fi

# Show memory
free -h

# Stop the app
echo "🛑 Stopping app..."
pm2 stop enrike-website
pm2 delete enrike-website

# Clean up
echo "🧹 Cleaning up..."
rm -rf .next
rm -rf node_modules/.cache

# Rebuild
echo "🔨 Rebuilding..."
npm run build

# Check if build succeeded
if [ ! -d ".next" ]; then
    echo "❌ Build failed! Check errors above."
    exit 1
fi

# Start with limited memory
echo "🚀 Starting app with memory limit..."
NODE_OPTIONS="--max-old-space-size=256" pm2 start npm --name "enrike-website" -- start
pm2 save

# Wait a moment
sleep 5

# Check status
echo "📊 PM2 Status:"
pm2 status

# Check logs
echo "📋 Recent logs:"
pm2 logs enrike-website --lines 10 --nostream

# Test localhost
echo "🧪 Testing localhost:3000..."
curl -s http://localhost:3000 | head -5

echo "✅ Fix complete! Check the output above."

