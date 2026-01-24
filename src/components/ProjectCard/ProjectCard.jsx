import React from 'react';
import './ProjectCard.css';
import { FiExternalLink, FiGithub, FiCalendar, FiTag } from 'react-icons/fi';

const ProjectCard = ({ project, onEdit, onDelete }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short' 
    });
  };

  return (
    <div className="project-card fade-in">
      <div className="project-image-container">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="project-image"
          loading="lazy"
        />
        <div className="project-category">
          <FiTag /> {project.category}
        </div>
      </div>

      <div className="project-content">
        <div className="project-header">
          <h3 className="project-title">{project.title}</h3>
          <div className="project-meta">
            <span className="project-date">
              <FiCalendar /> {formatDate(project.date)}
            </span>
          </div>
        </div>

        <p className="project-description">{project.description}</p>

        <div className="project-tech">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>

        <div className="project-footer">
          <div className="project-links">
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                <FiExternalLink /> Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                <FiGithub /> Code
              </a>
            )}
          </div>

          <div className="project-actions">
            <button 
              className="btn-edit"
              onClick={() => onEdit(project)}
              aria-label="Edit project"
            >
              Edit
            </button>
            <button 
              className="btn-delete"
              onClick={() => onDelete(project.id)}
              aria-label="Delete project"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
