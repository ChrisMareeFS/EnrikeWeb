#!/bin/bash

echo "🔍 Diagnosing deployment issues..."
echo ""

echo "1️⃣ Checking PM2 status..."
pm2 status
echo ""

echo "2️⃣ Checking PM2 logs (last 30 lines)..."
pm2 logs enrike-website --lines 30 --nostream
echo ""

echo "3️⃣ Testing localhost:3000..."
curl -s http://localhost:3000 | head -20
echo ""

echo "4️⃣ Checking memory usage..."
free -h
echo ""

echo "5️⃣ Checking if port 3000 is in use..."
sudo lsof -i :3000 || echo "Port 3000 not found"
echo ""

echo "6️⃣ Checking disk space..."
df -h
echo ""

echo "7️⃣ Checking Node.js version..."
node --version
npm --version
echo ""

echo "8️⃣ Checking if .next directory exists..."
ls -la .next/ 2>/dev/null || echo "❌ .next directory not found - build may have failed"
echo ""

echo "9️⃣ Checking package.json scripts..."
cat package.json | grep -A 5 '"scripts"'
echo ""

echo "✅ Diagnosis complete!"

