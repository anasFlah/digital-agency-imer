# Rayo - Next.js Dynamic Website

This is a dynamic Next.js version of the original Rayo static HTML template, preserving all the design elements, animations, and visual effects while adding modern React functionality.

## 🚀 Features

- **100% Design Preservation**: All original CSS, animations, and visual effects are maintained
- **Modern React Architecture**: Built with Next.js 14, TypeScript, and modern React patterns
- **Responsive Design**: Maintains the original responsive design across all devices
- **Performance Optimized**: Uses Next.js Image optimization and modern loading strategies
- **SEO Ready**: Built-in SEO optimization with Next.js metadata API
- **Animation Preserved**: All original GSAP animations and transitions are maintained

## 📁 Project Structure

```
rayo-nextjs/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata and global styles
│   │   ├── page.tsx            # Main homepage
│   │   └── globals.css         # Global CSS with Tailwind integration
│   ├── components/
│   │   ├── Loader.tsx          # Loading screen component
│   │   ├── Navigation.tsx      # Navigation menu component
│   │   ├── Header.tsx          # Header with logo and controls
│   │   ├── Hero.tsx            # Hero section component
│   │   ├── ProjectsStack.tsx   # Projects stacking cards
│   │   ├── MarqueeText.tsx     # Scrolling text animation
│   │   ├── About.tsx           # About section component
│   │   └── Services.tsx        # Services grid component
│   └── lib/                    # Utility functions and helpers
├── public/
│   ├── css/                    # Original CSS files (preserved)
│   ├── js/                     # Original JavaScript files (preserved)
│   ├── img/                    # All images and assets
│   ├── fonts/                  # Custom fonts
│   └── video/                  # Video assets
├── package.json                 # Dependencies and scripts
├── next.config.js              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
└── tsconfig.json               # TypeScript configuration
```

## 🛠️ Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **React 18**: Latest React features and hooks
- **Framer Motion**: Animation library (ready for enhancement)
- **GSAP**: Animation library (preserved from original)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (recommended: Node.js 20+)
- npm, yarn, or pnpm

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd rayo-nextjs
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Design System

The project maintains the original Rayo design system:

- **Color Palette**: Primary (#161616), Secondary (#FAF7F6), Accent (#6366f1)
- **Typography**: Custom font stack with Phosphor icons
- **Animations**: GSAP-powered animations and transitions
- **Layout**: Responsive grid system and spacing
- **Components**: Reusable UI components with consistent styling

## 🔧 Customization

### Adding New Pages

1. Create a new file in `src/app/` (e.g., `about-me/page.tsx`)
2. Import and use existing components
3. Add navigation links in the Navigation component

### Modifying Styles

- **Global styles**: Edit `src/app/globals.css`
- **Component styles**: Modify the original CSS files in `public/css/`
- **Tailwind utilities**: Use `tailwind.config.ts` for custom utilities

### Adding New Components

1. Create a new component in `src/components/`
2. Follow the existing component patterns
3. Import and use in your pages

## 📱 Responsive Design

The website maintains full responsiveness across all devices:
- **Desktop**: Full layout with all animations
- **Tablet**: Optimized for medium screens
- **Mobile**: Mobile-first responsive design

## 🎭 Animations

All original animations are preserved:
- **GSAP Animations**: Smooth scrolling, parallax effects
- **CSS Transitions**: Hover effects, loading animations
- **Scroll Triggers**: Intersection Observer animations
- **Custom Loaders**: Percentage-based loading screen

## 🚀 Performance Features

- **Image Optimization**: Next.js Image component with WebP support
- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Images and components load as needed
- **CSS Optimization**: Minified CSS with critical path optimization

## 🔍 SEO Features

- **Metadata API**: Dynamic meta tags and Open Graph
- **Structured Data**: Ready for schema markup
- **Performance**: Core Web Vitals optimization
- **Accessibility**: ARIA labels and semantic HTML

## 🌐 Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile Browsers**: iOS Safari 14+, Chrome Mobile 90+
- **Progressive Enhancement**: Graceful degradation for older browsers

## 📚 Additional Resources

- **Original Template**: [Rayo HTML Template](https://mixdesign.dev/themeforest/rayo)
- **Next.js Documentation**: [nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind CSS**: [tailwindcss.com](https://tailwindcss.com)
- **GSAP**: [greensock.com](https://greensock.com)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is based on the Rayo HTML template. Please refer to the original template's license for usage rights.

## 🆘 Support

For issues or questions:
1. Check the existing documentation
2. Review the original template documentation
3. Create an issue in the repository

---

**Built with ❤️ using Next.js and modern web technologies**
