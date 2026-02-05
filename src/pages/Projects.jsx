import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import "./Projects.css";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const allProjects = [
    {
      id: "salesrocket",
      title: "Salesrocket",
      description:
        "Enterprise sales acceleration platform with AI-powered insights and automated workflows",
      image: "/images/salesrocket.jpg",
      tags: ["React", "Node.js", "TensorFlow", "PostgreSQL"],
      category: "fullstack",
      gradient: "from-violet-600 to-fuchsia-600",
    },
    {
      id: "ecommerce-dashboard",
      title: "E-Commerce Analytics",
      description:
        "Real-time analytics dashboard for tracking sales, inventory, and customer behavior",
      image: "/images/ecommerce.jpg",
      tags: ["React", "TypeScript", "D3.js", "MongoDB"],
      category: "frontend",
      gradient: "from-cyan-600 to-blue-600",
    },
    {
      id: "task-manager",
      title: "Collaborative Task Manager",
      description:
        "Team productivity platform with real-time collaboration and project tracking",
      image: "/images/taskmanager.jpg",
      tags: ["Vue.js", "Firebase", "Tailwind CSS"],
      category: "fullstack",
      gradient: "from-orange-600 to-red-600",
    },
    {
      id: "weather-app",
      title: "Weather Forecast App",
      description:
        "Beautiful weather application with detailed forecasts and interactive maps",
      image: "/images/weather.jpg",
      tags: ["React", "OpenWeather API", "Mapbox"],
      category: "frontend",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: "blog-platform",
      title: "Content Management System",
      description:
        "Modern blogging platform with markdown support and SEO optimization",
      image: "/images/blog.jpg",
      tags: ["Next.js", "Prisma", "PostgreSQL"],
      category: "fullstack",
      gradient: "from-green-600 to-emerald-600",
    },
    {
      id: "fitness-tracker",
      title: "Fitness Tracking Mobile App",
      description:
        "Cross-platform mobile app for tracking workouts and nutrition",
      image: "/images/fitness.jpg",
      tags: ["React Native", "Redux", "Node.js"],
      category: "mobile",
      gradient: "from-red-600 to-pink-600",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full Stack" },
    { id: "frontend", label: "Frontend" },
    { id: "mobile", label: "Mobile" },
  ];

  const filteredProjects =
    filter === "all"
      ? allProjects
      : allProjects.filter((project) => project.category === filter);

  return (
    <div className="projects-page">
      <div className="projects-hero section">
        <div className="container">
          <h1 className="animate-fade-in-up">My Projects</h1>
          <p
            className="projects-subtitle animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            A collection of work showcasing my skills in web development,
            design, and problem-solving
          </p>
        </div>
      </div>

      <div className="projects-content section">
        <div className="container">
          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${filter === category.id ? "active" : ""}`}
                onClick={() => setFilter(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
