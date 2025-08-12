# Digital Agency React Application

A modern React.js application converted from the original HTML digital agency template, preserving the exact design and functionality.

## 🚀 Features

- **Modern React Architecture**: Built with React 18, TypeScript, and modern hooks
- **Responsive Design**: Fully responsive design that works on all devices
- **Interactive Components**: Interactive navigation, forms, and animations
- **Performance Optimized**: Efficient rendering and smooth animations
- **Design Preservation**: Exact visual design maintained from the original HTML

## 🛠️ Technology Stack

- **Frontend**: React 18, TypeScript, CSS3
- **Build Tool**: Create React App
- **Styling**: Custom CSS with animations
- **Icons**: Phosphor Icons
- **Responsive**: Mobile-first approach

## 📁 Project Structure

```
digital-agency-react/
├── public/
│   ├── css/           # Original CSS files
│   ├── img/           # Images and assets
│   ├── fonts/         # Font files
│   ├── video/         # Video files
│   ├── js/            # JavaScript libraries
│   └── index.html     # Main HTML file
├── src/
│   ├── components/    # React components
│   │   ├── Loader.tsx
│   │   ├── Navigation.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── ProjectsStack.tsx
│   │   ├── MarqueeText.tsx
│   │   ├── Footer.tsx
│   │   └── ToTopButton.tsx
│   ├── App.tsx        # Main App component
│   ├── index.tsx      # Entry point
│   ├── App.css        # Component styles
│   └── index.css      # Global styles
├── package.json       # Dependencies and scripts
└── tsconfig.json      # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd digital-agency-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## 🎨 Components Overview

### Loader
- Animated loading screen with percentage counter
- Smooth fade-in animation

### Navigation
- Hamburger menu with full-screen overlay
- Animated navigation items
- Responsive design

### Header
- Logo with SVG graphics
- Color mode switcher (light/dark)
- Contact button

### Hero
- Main hero section with rotating image
- Video background with play button
- Animated text and elements

### ProjectsStack
- Stacking project cards
- Hover effects and animations
- Responsive image handling

### MarqueeText
- Scrolling text animation
- SVG icon integration
- Smooth infinite loop

### Footer
- Multi-column layout
- Newsletter subscription form
- Social media links
- Contact information

### ToTopButton
- Scroll-to-top functionality
- Smooth scrolling animation
- Conditional visibility

## 🎯 Key Features Implemented

1. **Responsive Navigation**: Mobile-friendly hamburger menu
2. **Interactive Forms**: Newsletter subscription with validation
3. **Smooth Animations**: CSS transitions and keyframe animations
4. **Video Integration**: Background videos with fallbacks
5. **Image Optimization**: Responsive images for different screen sizes
6. **Accessibility**: ARIA labels and semantic HTML
7. **Performance**: Optimized rendering and lazy loading

## 🔧 Customization

### Colors and Themes
- Modify CSS variables in `App.css`
- Update color scheme in component styles
- Implement dark/light mode toggle

### Content
- Update text content in component files
- Replace images in the `public/img/` directory
- Modify project data in `ProjectsStack.tsx`

### Styling
- Customize animations in `App.css`
- Update responsive breakpoints
- Modify component-specific styles

## 📱 Responsive Design

The application is fully responsive with:
- Mobile-first approach
- Flexible grid layouts
- Adaptive typography
- Touch-friendly interactions
- Optimized images for different screen sizes

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Build the project
2. Drag the `build` folder to Netlify
3. Configure custom domain if needed

### Deploy to Vercel
1. Connect your GitHub repository
2. Vercel will automatically build and deploy
3. Configure environment variables if needed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Original HTML template design
- React community for excellent documentation
- Create React App team for the build tool

## 📞 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

---

**Note**: This is the first phase of the conversion (HTML to React). The backend and admin dashboard will be implemented in subsequent phases.
