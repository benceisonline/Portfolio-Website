# Portfolio Website

A modern, component-based personal portfolio website showcasing projects, skills, and work experience.

**Live Site**: https://bence-is-online.web.app/

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.3
- **Styling**: Tailwind CSS v4
- **Hosting**: Firebase Hosting
- **Icons**: react-icons
- **Image Optimization**: Next.js Image component

See [TECH_STACK.md](docs/TECH_STACK.md) for details.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Firebase CLI (`npm install -g firebase-tools`)

### Development
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view locally.

### Production Build
```bash
npm run build
npm start
```

## 📦 Project Structure

```
portfolio-website/
├── app/
│   ├── components/          # Reusable React components
│   │   ├── Navigation.js
│   │   ├── HeroSection.js
│   │   ├── ProjectCard.js
│   │   ├── SkillCard.js
│   │   ├── SectionTitle.js
│   │   └── ...
│   ├── globals.css          # Global styles
│   ├── layout.js            # Root layout
│   └── page.js              # Main page
├── public/                  # Static assets
├── docs/                    # Documentation
├── firebase.json            # Firebase config
├── next.config.js           # Next.js config
├── tailwind.config.js       # Tailwind config
└── package.json             # Dependencies
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment

Deploy to Firebase Hosting:

```bash
npm run build
firebase deploy
```

See [FIREBASE_SETUP.md](docs/FIREBASE_SETUP.md) for detailed Firebase setup instructions.

## 📝 Features

- **Responsive Design** - Mobile-first, works on all devices
- **Component-Based Architecture** - Reusable, maintainable components
- **SEO Optimized** - Proper meta tags and structured data
- **Performance** - Next.js optimization with Turbopack
- **Modern UI** - Tailwind CSS with smooth animations

## 📄 License

Personal portfolio - see LICENSE file for details.

---

This project uses Dependabot for automatic dependency monitoring and updates.
