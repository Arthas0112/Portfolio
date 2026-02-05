import {
  ArrowLeft,
  ExternalLink,
  Github,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ProjectDetail.css";

const ProjectDetail = () => {
  const { id } = useParams();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, [id]);

  // Project data - in a real app, this would come from an API or database
  const projectData = {
    salesrocket: {
      title: "Salesrocket",
      subtitle: "Enterprise Sales Acceleration Platform",
      description:
        "A comprehensive CRM solution that combines AI-powered insights, automated workflows, and real-time analytics to transform how sales teams operate.",
      gradient: "from-violet-600 to-fuchsia-600",
      tech: [
        "React",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "TensorFlow",
        "Redis",
        "Docker",
        "AWS",
      ],
      role: "Full Stack Developer & Technical Lead",
      duration: "8 months",
      team: "5 developers",
      metrics: [
        { icon: TrendingUp, value: "340%", label: "Revenue Growth" },
        { icon: Users, value: "12K+", label: "Active Users" },
        { icon: Target, value: "98%", label: "Client Retention" },
        { icon: Zap, value: "2.4s", label: "Avg Response Time" },
      ],
      features: [
        {
          title: "AI-Powered Lead Scoring",
          description:
            "Machine learning algorithms that predict conversion probability in real-time, helping sales teams prioritize high-value prospects.",
        },
        {
          title: "Unified Analytics Dashboard",
          description:
            "Comprehensive data visualization combining sales metrics, pipeline health, and revenue forecasting in one intuitive interface.",
        },
        {
          title: "Automated Workflow Engine",
          description:
            "Smart automation that handles repetitive tasks, sends personalized follow-ups, and ensures no lead falls through the cracks.",
        },
      ],
      challenges: [
        {
          title: "Scalability",
          solution:
            "Implemented microservices architecture with Redis caching to handle 10K+ concurrent users.",
        },
        {
          title: "Real-time Updates",
          solution:
            "Built WebSocket infrastructure for instant data synchronization across all clients.",
        },
        {
          title: "AI Model Training",
          solution:
            "Developed automated pipeline for continuous model improvement using customer data.",
        },
      ],
      links: {
        live: "https://salesrocket-demo.com",
        github: "https://github.com/yourusername/salesrocket",
      },
    },
  };

  const project = projectData[id] || projectData.salesrocket;

  return (
    <div className="project-detail">
      <div className="project-detail-hero">
        <div
          className={`hero-gradient bg-gradient-to-br ${project.gradient}`}
        ></div>

        <div className="container">
          <Link to="/projects" className="back-button">
            <ArrowLeft size={20} />
            Back to Projects
          </Link>

          <div
            className={`project-header ${isVisible ? "animate-fade-in-up" : ""}`}
          >
            <h1>{project.title}</h1>
            <p className="project-subtitle">{project.subtitle}</p>
            <p className="project-description">{project.description}</p>

            <div className="project-links">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <ExternalLink size={20} />
                  View Live Demo
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <Github size={20} />
                  View Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="project-content section">
        <div className="container">
          {/* Project Info */}
          <div className="project-info-grid">
            <div className="info-card">
              <div className="info-label">Role</div>
              <div className="info-value">{project.role}</div>
            </div>
            <div className="info-card">
              <div className="info-label">Duration</div>
              <div className="info-value">{project.duration}</div>
            </div>
            <div className="info-card">
              <div className="info-label">Team Size</div>
              <div className="info-value">{project.team}</div>
            </div>
          </div>

          {/* Metrics */}
          <section className="metrics-section">
            <h2>Impact & Results</h2>
            <div className="metrics-grid">
              {project.metrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <div key={index} className="metric-card">
                    <Icon className="metric-icon" size={32} />
                    <div className="metric-value">{metric.value}</div>
                    <div className="metric-label">{metric.label}</div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Features */}
          <section className="features-section">
            <h2>Key Features</h2>
            <div className="features-list">
              {project.features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <div className="feature-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="feature-content">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Challenges */}
          <section className="challenges-section">
            <h2>Technical Challenges & Solutions</h2>
            <div className="challenges-grid">
              {project.challenges.map((challenge, index) => (
                <div key={index} className="challenge-card">
                  <h3>{challenge.title}</h3>
                  <div className="challenge-divider"></div>
                  <p>{challenge.solution}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Tech Stack */}
          <section className="tech-section">
            <h2>Technology Stack</h2>
            <div className="tech-grid">
              {project.tech.map((tech, index) => (
                <div key={index} className="tech-item">
                  {tech}
                </div>
              ))}
            </div>
          </section>

          {/* Next Project */}
          <div className="next-project">
            <Link to="/projects" className="btn btn-primary">
              View More Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
