# 🚀 Quick Start Guide

Get your Rayo Next.js website running in minutes!

## ⚡ Super Quick Setup

1. **Install Node.js** (if you haven't already)
   - Download from [nodejs.org](https://nodejs.org/)
   - Version 18+ required

2. **Run the setup script**
   ```bash
   ./install.sh
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - 🎉 You're done!

## 🔧 Manual Setup (Alternative)

If the script doesn't work:

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

## 📱 What You'll See

- **Homepage**: Full Rayo website with all components
- **Demo Page**: Component showcase at `/demo`
- **Navigation**: Click hamburger menu to see full navigation
- **Animations**: All original GSAP animations working
- **Responsive**: Works on all devices

## 🎯 Key Features Working

✅ **Loader**: Percentage-based loading screen  
✅ **Navigation**: Full-screen menu with animations  
✅ **Header**: Logo and color switcher  
✅ **Hero**: Main hero section with video  
✅ **Projects**: Stacking cards layout  
✅ **Marquee**: Scrolling text animation  
✅ **About**: About section with links  
✅ **Services**: Services grid layout  

## 🚨 Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

**Dependencies won't install?**
```bash
npm cache clean --force
npm install
```

**Images not loading?**
- Check that all files were copied to `public/` folder
- Ensure file paths are correct

## 📚 Next Steps

1. **Customize content** in the component files
2. **Add new pages** in `src/app/`
3. **Modify styles** in `public/css/` or `src/app/globals.css`
4. **Build for production** with `npm run build`

## 🆘 Need Help?

- Check the main [README.md](README.md) for detailed documentation
- Review the original Rayo template for design reference
- All original CSS and JS files are preserved in `public/` folder

---

**Happy coding! 🎨✨**
