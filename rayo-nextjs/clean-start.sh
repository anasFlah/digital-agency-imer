#!/bin/bash

echo "🧹 Cleaning up build artifacts..."
echo "=================================="

# Remove build directories
rm -rf .next
rm -rf node_modules
rm -rf out

echo "✅ Build artifacts cleaned"

# Clear npm cache
echo "🗑️  Clearing npm cache..."
npm cache clean --force

echo "✅ NPM cache cleared"

# Reinstall dependencies
echo "📦 Reinstalling dependencies..."
npm install

echo "✅ Dependencies reinstalled"

# Start fresh
echo "🚀 Starting development server..."
npm run dev
