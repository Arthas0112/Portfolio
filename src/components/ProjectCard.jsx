import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

const ProjectCard = ({ project, index }) => {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="project-card"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="project-image-wrapper">
        <div
          className={`project-image-placeholder bg-gradient-to-br ${project.gradient}`}
        >
          <div className="image-overlay"></div>
        </div>
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-tags">
          {project.tags.map((tag, i) => (
            <span key={i} className="project-tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="project-link-arrow">
          <span>View project</span>
          <ArrowRight size={18} />
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
