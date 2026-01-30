# LaundryCity - Professional Laundry Management System

A modern, responsive laundry service website built with React.js featuring a beautiful UI, dark mode support, and comprehensive service management for LaundryCity Islamabad.

![LaundryCity](https://img.shields.io/badge/React-19.2.4-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## 🌟 Features

- **Responsive Design** - Fully optimized for mobile, tablet, and desktop screens
- **Interactive Hero Carousel** - Auto-rotating image slider with 5 high-quality images (2-second intervals)
- **Dark Mode Toggle** - Seamless light/dark theme switching with Context API
- **Smooth Navigation** - Sticky navbar with smooth scroll to sections
- **Service Showcase** - Four featured services with detailed information
- **Interactive Pricing** - Modern pricing cards with hover effects and "Book Now" buttons
- **Testimonials Carousel** - Customer reviews with navigation controls
- **Blog Section** - Latest laundry tips and articles
- **Newsletter Subscription** - Email signup with social media integration
- **Mobile App Promotion** - App Store and Google Play download sections

## 🚀 Live Demo

Deploy to Vercel: [LaundryCity Islamabad](https://your-vercel-url.vercel.app)

## 📋 Services Offered

- **Wash & Fold** - Starting at $1.50/shirt - Professional washing, drying, and folding services
- **Dry Cleaning** - Starting at $2/item - Eco-friendly dry cleaning for delicate fabrics
- **Commercial Laundry** - Starting at $2.50/pound - Bulk laundry solutions for businesses
- **Corporate Laundry** - Starting at $1.99/suit - Special rates for corporate clients
- **Self-Service Laundromat** - Modern facility available at H-9, Islamabad

## 🛠️ Technologies Used

- **React.js** (v19.2.4)
- **CSS3** with modern layouts (Grid & Flexbox)
- **React Context API** for state management
- **React Hooks** (useState, useEffect)
- **Responsive Design** with mobile-first approach
- **Smooth Scroll** behavior
- **CSS Animations** and transitions

## Components

- `Header` - Sticky navigation bar with logo, menu, contact info, and dark mode toggle
- `Hero` - Interactive 5-image carousel with auto-rotation and manual controls
- `FeaturedServices` - Four service cards with icons and descriptions
- `ServicesYouLove` - Additional services highlight with icons
- `HowItWorks` - 4-step process visualization
- `DeliveryFeatures` - Three key features with images
- `MobileApp` - App download promotion with store buttons
- `Pricing` - Four interactive pricing cards with gradient hover effects
- `SelfService` - Laundromat information section
- `Testimonials` - Customer reviews carousel with controls
- `OurPromise` - Three company promises with icons
- `Blog` - Three blog articles with images
- `Newsletter` - Email subscription form with social media links
- `Footer` - Complete footer with services, contact info, and address
- `DarkModeContext` - Context provider for theme management

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/ahsan693/Laundry-management-system-react-js-.git
cd Laundry-management-system-react-js-
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder ready for deployment.

## 📱 Contact Information

- **Phone**: +92 349 893 2839
- **Address**: H-9, Islamabad, Pakistan
- **Hours**: 8:00-18:00 Mon-Sat
- **Email**: Available via contact form

## 🌐 Deployment to Vercel

### Method 1: GitHub Integration (Recommended)

1. Push your code to GitHub (see commands below)
2. Visit [Vercel](https://vercel.com) and sign in with GitHub
3. Click "New Project"
4. Import your repository: `Laundry-management-system-react-js-`
5. Vercel will auto-detect React settings
6. Click "Deploy"

### Method 2: Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

### Environment Variables (if needed)
No environment variables required for this project.

## 📂 Project Structure

```
laundry-website/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Header.js/css
│   │   ├── Hero.js/css
│   │   ├── FeaturedServices.js/css
│   │   ├── ServicesYouLove.js/css
│   │   ├── HowItWorks.js/css
│   │   ├── DeliveryFeatures.js/css
│   │   ├── MobileApp.js/css
│   │   ├── Pricing.js/css
│   │   ├── SelfService.js/css
│   │   ├── Testimonials.js/css
│   │   ├── OurPromise.js/css
│   │   ├── Blog.js/css
│   │   ├── Newsletter.js/css
│   │   └── Footer.js/css
│   ├── context/
│   │   └── DarkModeContext.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

The page will reload when you make changes.\
You may also see any lint errors in the console.

## 🎨 Color Scheme

- **Primary**: #4FC3F7 (Cyan)
- **Secondary**: #29B6F6 (Light Blue)
- **Accent**: #FDD835 (Yellow)
- **Dark**: #2C3E50
- **Background Light**: #f5f5f5
- **Background Dark**: #1a1a2e

## 🚀 Features in Detail

### Hero Carousel
- 5 high-quality laundry-themed images
- Auto-rotation every 2 seconds
- Manual navigation with prev/next buttons
- Dot indicators for slide position
- Smooth fade transitions

### Pricing Cards
- Interactive hover effects
- Gradient top border on hover
- Color-coded icon backgrounds
- "Book Now" call-to-action buttons
- Responsive grid layout

### Dark Mode
- Toggle button in header
- Persistent theme preference
- Smooth color transitions
- Optimized for readability

## 📄 License

This project is licensed under the MIT License - feel free to use it for your projects.

## 👨‍💻 Developer

**Ahsan**
- GitHub: [@ahsan693](https://github.com/ahsan693)
- Repository: [Laundry Management System](https://github.com/ahsan693/Laundry-management-system-react-js-)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

## 📝 Notes for Deployment

- Build command: `npm run build`
- Output directory: `build`
- Node version: 18.x or higher recommended
- No environment variables required
- Compatible with Vercel, Netlify, GitHub Pages

---

**Made with ❤️ for LaundryCity Islamabad**

*Professional laundry services serving the H-9 community since 2026*


### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
