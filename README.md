# Touch Panel Switch Board - Product Showcase

A premium 3D interactive product showcase website for the Touch Panel Switch Board, featuring real-time 3D visualization, detailed specifications, and comprehensive product documentation.

## 🚀 Live Demo

Visit the live site: [GitHub Pages URL will be here after deployment]

## ✨ Features

- **Interactive 3D Model Viewer** - Fully interactive 3D model with auto-rotation and manual controls
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Premium UI/UX** - Dark theme with elegant animations and smooth transitions
- **Product Specifications** - Comprehensive technical details and features
- **Material Showcase** - Detailed breakdown of construction materials and finishes
- **Dimension Diagrams** - Technical drawings with precise measurements
- **IoT Integration Details** - Smart home connectivity and automation features
- **Image Gallery** - High-quality product photography

## 🛠️ Technology Stack

- **React 18** - Modern UI framework
- **Three.js** - 3D graphics rendering
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for React Three Fiber
- **Vite** - Next generation frontend tooling
- **CSS3** - Modern styling with animations

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Local Development

1. Clone the repository:
```bash
git clone <your-repo-url>
cd touch-panel-switch-board
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

## 🏗️ Build for Production

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## 🚢 Deployment to GitHub Pages

### Automatic Deployment (Recommended)

This repository is configured with GitHub Actions for automatic deployment.

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. Enable GitHub Pages:
   - Go to your repository Settings
   - Navigate to "Pages" section
   - Under "Build and deployment", select "GitHub Actions" as the source
   - The site will automatically deploy on every push to main branch

3. Access your deployed site at:
```
https://<your-username>.github.io/<repository-name>/
```

### Manual Deployment

If you prefer manual deployment:

```bash
npm run build
# Then upload the 'dist' folder to your hosting provider
```

## 📁 Project Structure

```
touch-panel-switch-board/
├── public/                      # Static assets
│   ├── Touch panel board copied.obj   # 3D model file
│   ├── Touch panel board copied.mtl   # Material file
│   ├── dimension_front.svg            # Technical drawings
│   ├── dimension_side.svg
│   └── *.png                          # Product images
├── src/
│   ├── components/              # React components
│   │   ├── Hero.jsx            # Hero section with 3D model
│   │   ├── Scene3D.jsx         # Three.js scene setup
│   │   ├── Model.jsx           # 3D model loader
│   │   ├── DesignFeatures.jsx  # Product features
│   │   ├── MaterialsGrid.jsx   # Materials showcase
│   │   ├── DimensionDiagram.jsx # Technical diagrams
│   │   ├── IoTFeatures.jsx     # Smart features
│   │   ├── Specifications.jsx  # Technical specs
│   │   ├── Gallery.jsx         # Image gallery
│   │   └── Footer.jsx          # Footer section
│   ├── App.jsx                 # Main app component
│   ├── App.css                 # Global styles
│   └── main.jsx                # Entry point
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── index.html                  # HTML template
├── vite.config.js             # Vite configuration
├── package.json               # Dependencies
└── README.md                  # Documentation
```

## 🎨 Customization

### Changing 3D Model

Replace the following files in the `public` folder:
- `Touch panel board copied.obj` - Your 3D model in OBJ format
- `Touch panel board copied.mtl` - Material definitions

Update colors in `src/components/Model.jsx`:
```javascript
const MATERIAL_COLORS = {
  grey: '#b3b3b3',    // Housing body
  glass: '#f6f6f3',   // Glass panel  
  brass: '#f3cb7c',   // Brass buttons
  steel: '#a0a0a0'    // Steel parts
}
```

### Updating Product Information

Edit the respective component files:
- **Specifications**: `src/components/Specifications.jsx`
- **Features**: `src/components/DesignFeatures.jsx`
- **Materials**: `src/components/MaterialsGrid.jsx`
- **IoT Features**: `src/components/IoTFeatures.jsx`

### Changing Images

Replace images in the `public` folder and update references in:
- `src/components/Gallery.jsx`
- `src/components/DimensionDiagram.jsx`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

**Note**: WebGL support is required for 3D model visualization.

## 🤝 For Company Reference

This project serves as a reference template for product showcase websites. It demonstrates:

✅ Modern web technologies and best practices  
✅ 3D model integration in web applications  
✅ Responsive design patterns  
✅ Performance optimization  
✅ Automated deployment workflow  
✅ Clean, maintainable code structure  

### Use Cases:
- Product launches and marketing
- Technical documentation
- Sales presentations
- Trade show displays
- Client demonstrations

## 📄 License

[Add your company's license here]

## 👥 Contact

[Add your company contact information]

---

**Built with ❤️ for premium product experiences**
