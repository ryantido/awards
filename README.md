# 🏆 Awards!

A modern, interactive web experience built with Next.js, focusing on performance, accessibility, and immersive animations.
This project showcases advanced GSAP animations, SSR-friendly optimizations, and mobile-first design — all wrapped in a sleek, futuristic aesthetic.

## 🚀 Overview

Awards is a Next.js-based creative web experience that blends motion, interactivity, and storytelling.
It features a seamless video hero section, dynamic 3D effects, and a fully responsive layout — optimized for both desktop and mobile devices.

Recent updates bring major accessibility and SSR (Server-Side Rendering) improvements, ensuring stable hydration and smooth transitions across all pages.

## ✨ Features
## 🧭 Navigation Bar

Smooth show/hide animation on scroll using GSAP.

Fixed hydration mismatch issues by stabilizing animation properties on SSR.

Interactive audio indicator synced with background sound.

Improved keyboard accessibility and ARIA-friendly buttons.

Fluid transitions between visible and floating states.

## 🎬 Hero Section

Interactive video-based hero with seamless crossfade transitions using GSAP timelines.

Optimized video loading and preloading for performance.

Responsive tap/click areas for mobile and tablet users.

Wordmark reveal effect synchronized with scroll-triggered clip-path animation.

## 🗡️ Contact Section

Redesigned layout for better mobile-first visual hierarchy.

Cool swordman illustration displayed prominently on smaller screens.

Dynamic image layering with clip-path shapes for a cinematic effect.

Smooth responsive positioning and spacing across breakpoints.

## 🌌 Story Section

Immersive 3D tilt animation powered by GSAP, responding to cursor movement.

Improved layout alignment on large screens.

Perfectly balanced typography and image composition.

Adaptive content layout for readability on all devices.

## ⚙️ Tech Stack
Category	Technology
Framework	Next.js

Language	TypeScript
Styling	Tailwind CSS

Animations	GSAP (GreenSock)

Icons	React Icons

Utilities	React Hooks, ScrollTrigger, useGSAP
Accessibility	Semantic HTML, ARIA roles, keyboard navigation
## 🧩 Project Structure

```
src/
├── app/                 # Next.js app directory
├── components/
│   ├── sections/        # Hero, Contact, Story, NavBar, etc.
│   ├── Button/          # Reusable button component
│   ├── AnimatedTitle/   # Animated heading component
│   └── ...
├── constants/           # Navigation and shared data
├── public/
│   ├── videos/          # Hero background videos
│   ├── img/             # Contact and story images
│   └── audio/           # Audio loops and effects
└── styles/              # Global styles, Tailwind setup
```

## 🧠 Accessibility & SSR Enhancements

Eliminated hydration mismatch by removing random SSR-dependent animations.

Used deterministic, controlled animation delays for consistent rendering.

Improved keyboard focus behavior and visibility on buttons.

Enhanced color contrast ratios for readability.

Restructured DOM layering to maintain semantic flow and accessibility.

## 🛠️ Setup & Development
### Prerequisites

```
Node.js 18+

npm or yarn

Installation
# Clone the repository
git clone https://github.com/your-username/awards.git

# Navigate into the project
cd awards

# Install dependencies
npm install

# Start the development server
npm run dev


Then open your browser at http://localhost:3000
 🚀
```
## 🧪 Scripts

```
Command	Description
npm run dev	Start the development server
npm run build	Build the production-ready app
npm run start	Run the app in production mode
npm run lint	Run ESLint to check for code issues
```

## 📦 Deployment

Awards is fully compatible with Vercel, Netlify, or any Node-compatible hosting.

## 🧾 License

This project is licensed under the MIT License — feel free to use, modify, and share.

## 👨‍💻 Contributing

Contributions are welcome!
Please fork the repository and open a pull request with detailed descriptions of your updates or fixes.