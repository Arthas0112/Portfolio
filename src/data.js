// data.js

// 1️⃣ Profil
export const PROFILE = {
  name: "Haritiana Ranaivojaona",
  title: "Développeur Fullstack & Designer",
  avatar: "/avatar.jpg", // image dans public/
  description:
    "Je crée des applications web et mobiles modernes, performantes et esthétiques. Passionné par l'UI/UX et le design.",
  socials: {
    github: "https://github.com/haritiana",
    linkedin: "https://www.linkedin.com/in/haritiana-fanomezana-ranaivojaona-4a31b4239?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "rhartiana.fanomezana@gmail.com",
  },
};

// 2️⃣ Navigation
export const NAVIGATION = [
  { name: "Accueil", href: "#hero" },
  { name: "À propos", href: "#about" },
  { name: "Compétences", href: "#skills" },
  { name: "Projets", href: "#projects" },
  { name: "Témoignages", href: "#testimonials" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

// 3️⃣ Compétences
export const SKILLS = [
  { name: "HTML", level: 95 },
  { name: "CSS / Tailwind", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 85 },
  { name: "UI/UX Design", level: 80 },
  { name: "Figma", level: 75 },
];

// 4️⃣ Projets
export const PROJECTS = [
  {
    title: "Vadi - App Mobile",
    description: "Application mobile de rencontre et réseau social.",
    tech: ["React Native", "NestJS", "MongoDB"],
    image: "/projects/vadi.png",
    link: "https://vadi-web.mg",
  },
  {
    title: "Portfolio",
    description: "Mon site personnel avec React et TailwindCSS.",
    tech: ["React", "TailwindCSS"],
    image: "/projects/Figma-logo.svg",
    link: "https://www.figma.com/design/uVe8pJvTCw3pUbjBhyM3hl/Portfolio?node-id=0-1&t=ZtNV4rPG8Q8lCyKL-1",
  },
  {
    title: "Jeu Snake 2D",
    description: "Un jeu classique développé en Python avec Pygame.",
    tech: ["Python", "Pygame"],
    image: "/projects/snake.svg",
    link: "#",
  },
];

// 5️⃣ Témoignages
export const TESTIMONIALS = [
  {
    name: "Alice Dupont",
    position: "Chef de projet",
    avatar: "/testimonials/alice.jpg",
    feedback: "Haritiana est un développeur talentueux et créatif !",
  },
  {
    name: "Jean Martin",
    position: "Designer",
    avatar: "/testimonials/jean.jpg",
    feedback: "Toujours disponible et efficace, je recommande vivement.",
  },
];

// 6️⃣ Blog / Articles
export const BLOGS = [
  {
    title: "Comment créer un portfolio moderne",
    summary: "Guide étape par étape pour créer un portfolio avec React et TailwindCSS.",
    image: "/blog/blog1.jpg",
    link: "#",
  },
  {
    title: "UI/UX Design pour développeurs",
    summary: "Conseils pratiques pour améliorer vos interfaces utilisateur.",
    image: "/blog/blog2.jpg",
    link: "#",
  },
  {
    title: "React Tips & Tricks",
    summary: "Quelques astuces utiles pour les projets React modernes.",
    image: "/blog/blog3.jpg",
    link: "#",
  },
];

// 7️⃣ Footer / Infos contact
export const CONTACT_INFO = {
  phone: "+261 34 00 000 00",
  email: "mailto:haritiana@example.com",
  location: "Antananarivo, Madagascar",
};
