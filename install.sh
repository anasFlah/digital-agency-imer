#!/bin/bash

echo "🚀 Setting up Rayo Next.js Project..."
echo "======================================"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    echo "   Please update Node.js to version 18 or higher."
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Check if npm is available
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not available. Please install npm."
    exit 1
fi

echo "✅ npm $(npm -v) detected"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
    echo ""
    echo "🎉 Setup complete! You can now run the project:"
    echo ""
    echo "   npm run dev    # Start development server"
    echo "   npm run build  # Build for production"
    echo "   npm run start  # Start production server"
    echo ""
    echo "🌐 Open http://localhost:3000 in your browser"
    echo ""
    echo "📚 Check README.md for more information"
else
    echo "❌ Failed to install dependencies. Please check the error messages above."
    exit 1
fi
