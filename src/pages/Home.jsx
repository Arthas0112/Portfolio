import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import "./Home.css";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const featuredProjects = [
    {
      id: "salesrocket",
      title: "Salesrocket",
      description:
        "Enterprise sales acceleration platform with AI-powered insights and automated workflows",
      image: "/images/salesrocket.jpg",
      tags: ["React", "Node.js", "TensorFlow", "PostgreSQL"],
      gradient: "from-violet-600 to-fuchsia-600",
    },
    {
      id: "ecommerce-dashboard",
      title: "E-Commerce Analytics",
      description:
        "Real-time analytics dashboard for tracking sales, inventory, and customer behavior",
      image: "/images/ecommerce.jpg",
      tags: ["React", "TypeScript", "D3.js", "MongoDB"],
      gradient: "from-cyan-600 to-blue-600",
    },
    {
      id: "task-manager",
      title: "Collaborative Task Manager",
      description:
        "Team productivity platform with real-time collaboration and project tracking",
      image: "/images/taskmanager.jpg",
      tags: ["Vue.js", "Firebase", "Tailwind CSS"],
      gradient: "from-orange-600 to-red-600",
    },
  ];

  return (
    <div className="home">
      {/* Animated background elements */}
      <div className="hero-bg">
        <div className="bg-orb orb-1"></div>
        <div className="bg-orb orb-2"></div>
        <div className="bg-orb orb-3"></div>
      </div>

      {/* Hero Section */}
      <section className="hero section">
        <div className="container">
          <div
            className={`hero-content ${isVisible ? "animate-fade-in-up" : ""}`}
          >
            <div className="hero-badge">
              <span className="badge-dot"></span>
              Available for work
            </div>

            <h1 className="hero-title">
              Crafting digital experiences
              <br />
              <span className="gradient-text">that make an impact</span>
            </h1>

            <p className="hero-description">
              Full-stack developer specializing in building elegant, scalable
              web applications. Passionate about clean code, intuitive design,
              and solving complex problems.
            </p>

            <div className="hero-actions">
              <Link to="/projects" className="btn btn-primary">
                View my work
                <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get in touch
              </Link>
            </div>

            <div className="social-links">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Linkedin size={20} />
              </a>
              <a href="mailto:hello@example.com" className="social-link">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="featured-projects section">
        <div className="container">
          <div className="section-header">
            <h2>Featured Projects</h2>
            <Link to="/projects" className="view-all-link">
              View all projects <ArrowRight size={18} />
            </Link>
          </div>

          <div className="projects-grid">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-value">50+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">5+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">30+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">100%</div>
              <div className="stat-label">Coffee Powered</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
