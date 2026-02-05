# Portfolio Quick Start Guide

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Header.jsx       # Navigation header
│   │   ├── Header.css
│   │   ├── ProjectCard.jsx  # Project display card
│   │   └── ProjectCard.css
│   │
│   ├── pages/              # Page components
│   │   ├── Home.jsx        # Landing page with hero
│   │   ├── Home.css
│   │   ├── Projects.jsx    # Projects gallery
│   │   ├── Projects.css
│   │   ├── ProjectDetail.jsx  # Individual project page
│   │   ├── ProjectDetail.css
│   │   ├── About.jsx       # About/bio page
│   │   ├── About.css
│   │   ├── Contact.jsx     # Contact form
│   │   └── Contact.css
│   │
│   ├── App.jsx            # Main app with routing
│   ├── App.css            # Global styles & design system
│   └── main.jsx           # Entry point
│
├── index.html             # HTML template
├── package.json           # Dependencies
├── vite.config.js         # Vite configuration
└── README.md              # Full documentation
```

## 🚀 Getting Started

1. **Install dependencies:**

   ```bash
   yarn install
   # or simply
   yarn
   ```

2. **Run development server:**

   ```bash
   yarn dev
   ```

   Opens at http://localhost:3000

3. **Build for production:**
   ```bash
   yarn build
   ```

## 🎨 Design System

### Color Theme: Deep Ocean

- Primary Background: `#0a0e1a` (Deep navy)
- Accent: `#06b6d4` (Cyan)
- Secondary: `#8b5cf6` (Violet)

### Typography

- Headings: Instrument Serif (elegant, professional)
- Body: DM Sans (clean, readable)

### Key Features

✅ Fully responsive design
✅ Smooth page transitions
✅ Animated backgrounds
✅ Interactive hover states
✅ Mobile-friendly navigation
✅ SEO optimized

## 📝 Customization Guide

### 1. Update Your Information

**Home Page** (`src/pages/Home.jsx`):

- Line 18-30: Update featured projects
- Line 47: Change hero title
- Line 53: Update description
- Line 58-64: Modify action buttons

**About Page** (`src/pages/About.jsx`):

- Line 12-32: Update skills and proficiency
- Line 64-82: Modify work experience
- Line 142-158: Update bio text

**Contact Page** (`src/pages/Contact.jsx`):

- Line 37-55: Update contact information
- Line 57-63: Change social media links

### 2. Add/Remove Projects

Edit `src/pages/Projects.jsx`:

```javascript
const allProjects = [
  {
    id: "your-project",
    title: "Project Name",
    description: "Project description",
    tags: ["React", "Node.js"],
    category: "fullstack",
    gradient: "from-blue-600 to-cyan-600",
  },
  // Add more projects...
];
```

### 3. Change Color Scheme

Edit `src/App.css` (lines 4-13):

```css
:root {
  --color-accent-primary: #06b6d4; /* Change this */
  --color-accent-secondary: #0ea5e9;
  --color-accent-tertiary: #8b5cf6;
}
```

## 🔧 Tech Stack

- **React 18** - UI framework
- **React Router 6** - Routing
- **Vite** - Build tool
- **Lucide React** - Icons
- **CSS Variables** - Theming

## 📱 Pages

1. **Home** - Hero, featured projects, stats
2. **Projects** - Filterable project gallery
3. **Project Detail** - In-depth project showcase
4. **About** - Bio, skills, experience timeline
5. **Contact** - Contact form & social links

## 🎯 Next Steps

1. Replace placeholder content with your actual information
2. Add your project images to `/public/images/`
3. Update social media links
4. Configure contact form backend
5. Deploy to Vercel/Netlify

## 💡 Tips

- All animations are CSS-based for performance
- Design system uses CSS variables for easy theming
- Component styles are modular and reusable
- Mobile-first responsive design
- Semantic HTML for SEO

## 🐛 Troubleshooting

**Port already in use?**

```bash
# Kill the process or use different port
yarn dev --port 3001
```

**Build errors?**

```bash
# Clear cache and reinstall
rm -rf node_modules yarn.lock
yarn install
```

Happy coding! 🚀

```bash
# Kill the process or use different port
yarn dev --port 3001
```

**Build errors?**

```bash
# Clear cache and reinstall
rm -rf node_modules yarn.lock
yarn install
```

Happy coding! 🚀
