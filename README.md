# 🏍️ Bikers Corner - Pakistan Mountain Motorbike Tours

A modern, responsive, and visually stunning website for mountain motorbike adventure tours across Pakistan's breathtaking Northern Areas. Built with React, Vite, Tailwind CSS, and Framer Motion.

![Bikers Corner](https://images.unsplash.com/photo-1558981852-426c6c22a060?q=80&w=1200)

## 🌟 Features

### 🎨 Modern Design
- **Sleek UI/UX**: Contemporary design with smooth animations and transitions
- **Glassmorphism Effects**: Beautiful glass-like cards and overlays
- **Gradient Themes**: Eye-catching orange and amber gradient color schemes
- **Dark Theme**: Professional dark background throughout the site
- **Responsive Design**: Perfectly optimized for mobile, tablet, and desktop

### 🚀 Performance
- **React 19**: Latest React features and optimizations
- **Vite**: Lightning-fast build tool and dev server
- **Code Splitting**: Optimized bundle sizes for faster loading
- **Lazy Loading**: Images and components load on demand

### ✨ Animations
- **Framer Motion**: Smooth, professional animations throughout
- **Hover Effects**: Interactive button and card animations
- **Scroll Animations**: Elements animate as you scroll
- **Loading States**: Elegant loading and transition effects

### 📱 Sections
- **Hero Section**: Eye-catching landing with animated background
- **About Us**: Company story and mission
- **Tours**: Featured motorcycle tours across Pakistan
  - Hunza Valley Adventure
  - Skardu Explorer
  - K2 Base Camp Expedition
  - Naran Kaghan Circuit
  - And more...
- **Services**: Comprehensive tour services
  - Bike Rentals (Heavy bikes, Adventure bikes, Touring bikes)
  - Guided Tours
  - Safety Equipment
  - Accommodation
  - Custom Packages
- **Testimonials**: Real customer reviews with ratings
- **Contact**: Easy booking and inquiry form
- **Footer**: Complete site navigation and social links

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter & Poppins (Google Fonts)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## 🚀 Getting Started

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/TahaHuzaifa141/BikerWeb.git
cd BikerWeb/bikers-corner-landing
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start the development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open your browser**
Navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
# or
yarn build
```

The optimized production files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 📁 Project Structure

```
bikers-corner-landing/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── Header.jsx    # Navigation header
│   │   ├── Hero.jsx      # Landing section
│   │   ├── About.jsx     # About section
│   │   ├── Services.jsx  # Services section
│   │   ├── Tours.jsx     # Tours catalog
│   │   ├── Testimonials.jsx # Customer reviews
│   │   ├── Contact.jsx   # Contact form
│   │   └── Footer.jsx    # Site footer
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   ├── index.css         # Global styles
│   └── App.css           # App styles
├── index.html            # HTML template
├── package.json          # Dependencies
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind configuration
└── README.md            # This file
```

## 🎨 Customization

### Colors
The color scheme is defined in `tailwind.config.js` and uses orange/amber gradients. To customize:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      }
    }
  }
}
```

### Content
Update tour packages, services, and testimonials directly in the component files under `src/components/`.

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Deploy with one click

### Netlify
1. Push your code to GitHub
2. Import your repository in [Netlify](https://www.netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

### Manual Deployment
```bash
npm run build
# Upload the contents of the 'dist' folder to your hosting provider
```

## 🔧 Configuration

### Vite Config
Located in `vite.config.js`:
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

### Tailwind Config
Located in `tailwind.config.js` - customize your design system here.

## 📧 Contact

- **Email**: huzaifataha482@gmail.com
- **GitHub**: [@TahaHuzaifa141](https://github.com/TahaHuzaifa141)
- **Repository**: [BikerWeb](https://github.com/TahaHuzaifa141/BikerWeb)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Images from [Unsplash](https://unsplash.com)
- Icons from [Lucide](https://lucide.dev)
- Fonts from [Google Fonts](https://fonts.google.com)
- Built with [React](https://react.dev) and [Vite](https://vitejs.dev)

## 🗺️ Popular Tour Destinations

- 🏔️ **Hunza Valley** - Cherry blossom trails and ancient forts
- 🏔️ **Skardu** - Gateway to K2 and Baltistan
- 🏔️ **K2 Base Camp** - World's second highest peak
- 🏔️ **Naran Kaghan** - Lush green valleys and lakes
- 🏔️ **Fairy Meadows** - Nanga Parbat's stunning basecamp
- 🏔️ **Swat Valley** - Switzerland of Pakistan
- 🏔️ **Gilgit** - Cultural hub of Northern Areas
- 🏔️ **Naltar Valley** - Famous for colorful lakes

## 📊 Website Stats

- **1000+** Successful Tours Completed
- **25+** Mountain Routes Available
- **3500+** Happy Riders
- **10+** Years of Excellence

---

Made with ❤️ by [Taha Huzaifa](https://github.com/TahaHuzaifa141)

🏍️ **Ready to Conquer Pakistan's Epic Mountains?** Book your adventure today!
