# DHL Vetting Tracker - Pages

🏠 Landing Page + 🔐 Vetting Flow

Complete, reusable pages for DHL Vetting Tracker built with Next.js 14+.

## 📁 What's Inside

```
pages/
├── landing/              # Landing page (public)
│   ├── page.tsx         # Main landing page
│   └── components/      # Landing UI components
│       ├── LandingHeader.tsx
│       ├── EnhancedHeroSection.tsx
│       ├── ServiceTabs.tsx
│       ├── FleetSpotlight.tsx
│       └── ContactForm.tsx
│
└── vetting/             # Vetting flow (driver portal)
    ├── page.tsx         # Router to /login
    ├── layout.tsx       # Vetting layout
    ├── login/page.tsx   # Driver login
    ├── register/        # Pre-registration
    ├── dashboard/       # Driver portal
    └── components/      # Vetting UI components
```

## 🚀 Quick Start

### Copy to your project:

```bash
# Clone this repository
git clone https://github.com/j-mazini/dhl-vetting-pages.git

# Copy pages folder to your Next.js app
cp -r dhl-vetting-pages/pages ./your-project/
```

### Import in your app:

```typescript
// src/app/page.tsx - Landing page
import LandingPage from '@/pages/landing/page';

export default LandingPage;
```

```typescript
// src/app/vetting/page.tsx - Vetting flow
import VettingPage from '@/pages/vetting/page';

export default VettingPage;
```

## 🎨 Features

### Landing Page
- 📱 Responsive hero section
- 🎬 Framer Motion animations
- 📊 Service showcase tabs
- 🚗 Fleet information
- 📧 Contact form
- 🎯 DHL branding

### Vetting Flow
- 🔐 Firebase authentication
- 📝 Pre-registration form
- 📊 Progress tracking
- 📄 Document management
- 💼 Work history tracking
- ✅ Real-time status updates

## 🔧 Tech Stack

- **Next.js** 16.2+
- **React** 19+
- **TypeScript** 5+
- **Firebase** Authentication & Firestore
- **Framer Motion** - Animations
- **CSS Modules** - Styling
- **TailwindCSS** - Utility classes

## 📦 Dependencies

These pages assume your project has:

```json
{
  "firebase": "^10.11.0",
  "firebase-admin": "^12.2.0",
  "framer-motion": "^12.40.0",
  "next": "^16.2.2",
  "react": "^19.0.0"
}
```

## 🔌 Integration

### 1. Copy pages folder
```bash
cp -r pages ./your-project/
```

### 2. Update imports (if needed)
Paths use `@/` alias - ensure your `tsconfig.json` has:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### 3. Configure Firebase
Add your Firebase config to `src/lib/firebase.ts`

### 4. Import pages
Reference pages in your `src/app` routes

## 📚 File Structure

- `pages/landing/` - Landing page entry point + components
- `pages/vetting/` - Vetting flow with multiple routes
- `pages/README.md` - Detailed documentation

## 🎯 Routes

| Route | Purpose |
|-------|---------|
| `/` | Landing page |
| `/vetting` | Redirect to login |
| `/vetting/login` | Driver login |
| `/vetting/register` | Pre-registration |
| `/vetting/dashboard` | Driver portal |

## 📄 License

MIT

## 🔗 Links

- **App Repo**: [dhl-vetting-v2](https://github.com/j-mazini/dhl-vetting-v2)
- **Live**: https://j-mazini.github.io/dhl-vetting-v2/
- **GitHub**: https://github.com/j-mazini/dhl-vetting-pages

---

**Created:** July 2026  
**Last Updated:** July 22, 2026
