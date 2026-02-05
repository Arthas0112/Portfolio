# Portfolio Website

A modern, responsive portfolio website built with React featuring a distinctive deep ocean theme with cyan/violet accents. Showcases projects, skills, and provides a contact form.

## Features

- **Multi-page Structure**: Home, Projects, About, and Contact pages with smooth routing
- **Responsive Design**: Fully responsive across all devices
- **Modern UI**: Deep ocean color scheme with animated backgrounds and smooth transitions
- **Project Showcase**: Filterable project grid with detailed project pages
- **Skills Section**: Interactive skill bars showing proficiency levels
- **Contact Form**: Functional contact form with validation
- **Performance**: Optimized animations and lazy loading

## Design System

### Color Palette

- **Background**: Deep ocean blues (#0a0e1a, #111827, #1a2332)
- **Accent Colors**: Cyan (#06b6d4), Blue (#0ea5e9), Violet (#8b5cf6)
- **Typography**: Instrument Serif (headings), DM Sans (body)

### Key Components

- `Header` - Responsive navigation with scroll effects
- `ProjectCard` - Reusable project display component
- `Home` - Hero section with featured projects
- `Projects` - Filterable project gallery
- `ProjectDetail` - Individual project showcase with metrics
- `About` - Bio, skills, and experience timeline
- `Contact` - Contact form with social links

## Project Structure

```
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── ProjectCard.jsx
│   │   └── ProjectCard.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── Projects.jsx
│   │   ├── Projects.css
│   │   ├── ProjectDetail.jsx
│   │   ├── ProjectDetail.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Contact.jsx
│   │   └── Contact.css
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   yarn install
   # or simply
   yarn
   ```

3. **Start development server**

   ```bash
   yarn dev
   ```

4. **Build for production**

   ```bash
   yarn build
   ```

5. **Preview production build**
   ```bash
   yarn preview
   ```

## Customization

### Update Personal Information

1. **Home Page** (`src/pages/Home.jsx`)
   - Update hero title and description
   - Modify featured projects array
   - Change statistics in stats section

2. **Projects Page** (`src/pages/Projects.jsx`)
   - Add/remove projects in `allProjects` array
   - Update project categories
   - Customize project details

3. **About Page** (`src/pages/About.jsx`)
   - Update bio content
   - Modify skills arrays (frontend, backend, tools)
   - Update work experience timeline

4. **Contact Page** (`src/pages/Contact.jsx`)
   - Change contact information
   - Update social media links
   - Configure form submission endpoint

### Styling

All styles use CSS custom properties defined in `App.css`:

- Colors: `--color-*`
- Typography: `--font-*`
- Spacing: `--space-*`
- Border radius: `--radius-*`

Modify these variables to customize the entire theme.

## Dependencies

- **react**: UI library
- **react-dom**: React DOM renderer
- **react-router-dom**: Client-side routing
- **lucide-react**: Icon library
- **vite**: Build tool

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Lazy loaded routes
- Optimized animations with CSS
- Minimal dependencies
- Code splitting with Vite

## Future Enhancements

- [ ] Add dark/light theme toggle
- [ ] Implement blog section
- [ ] Add project search functionality
- [ ] Integrate CMS for content management
- [ ] Add analytics
- [ ] Implement actual form backend
- [ ] Add more animations and micro-interactions

## License

MIT

## Contact

For questions or suggestions, please reach out via the contact form or email.

## License

MIT

## Contact

For questions or suggestions, please reach out via the contact form or email.
