import React, { useState, useEffect } from 'react';
import './ProjectForm.css';
import { FiX, FiUpload } from 'react-icons/fi';

const ProjectForm = ({ isOpen, onClose, onSubmit, projectToEdit }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'Web Development',
    technologies: '',
    liveUrl: '',
    githubUrl: '',
    imageUrl: '',
    date: new Date().toISOString().split('T')[0]
  });

  const categories = [
    'Web Development',
    'Mobile App',
    'UI/UX Design',
    'Machine Learning',
    'Data Science',
    'Game Development',
    'Other'
  ];

  useEffect(() => {
    if (projectToEdit) {
      setFormData({
        ...projectToEdit,
        technologies: projectToEdit.technologies.join(', ')
      });
    } else {
      setFormData({
        title: '',
        description: '',
        category: 'Web Development',
        technologies: '',
        liveUrl: '',
        githubUrl: '',
        imageUrl: '',
        date: new Date().toISOString().split('T')[0]
      });
    }
  }, [projectToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const projectData = {
      ...formData,
      technologies: formData.technologies.split(',').map(tech => tech.trim()).filter(tech => tech),
      id: projectToEdit ? projectToEdit.id : Date.now().toString()
    };

    onSubmit(projectData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">
            {projectToEdit ? 'Edit Project' : 'Add New Project'}
          </h2>
          <button className="modal-close" onClick={onClose}>
            <FiX />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="project-form">
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="title" className="form-label">
                Project Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="form-input"
                placeholder="Enter project title"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="category" className="form-label">
                Category *
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="form-select"
                required
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group full-width">
              <label htmlFor="description" className="form-label">
                Description *
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="form-textarea"
                placeholder="Describe your project..."
                rows="4"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="technologies" className="form-label">
                Technologies *
              </label>
              <input
                type="text"
                id="technologies"
                name="technologies"
                value={formData.technologies}
                onChange={handleChange}
                className="form-input"
                placeholder="React, Node.js, MongoDB, etc."
                required
              />
              <small className="form-hint">Separate technologies with commas</small>
            </div>

            <div className="form-group">
              <label htmlFor="date" className="form-label">
                Completion Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="imageUrl" className="form-label">
                Image URL *
              </label>
              <div className="image-upload">
                <input
                  type="url"
                  id="imageUrl"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="https://example.com/image.jpg"
                  required
                />
                <FiUpload className="upload-icon" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="liveUrl" className="form-label">
                Live Demo URL
              </label>
              <input
                type="url"
                id="liveUrl"
                name="liveUrl"
                value={formData.liveUrl}
                onChange={handleChange}
                className="form-input"
                placeholder="https://example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="githubUrl" className="form-label">
                GitHub URL
              </label>
              <input
                type="url"
                id="githubUrl"
                name="githubUrl"
                value={formData.githubUrl}
                onChange={handleChange}
                className="form-input"
                placeholder="https://github.com/username/project"
              />
            </div>
          </div>

          <div className="form-actions">
            <button
              type="button"
              className="btn btn-outline"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary"
            >
              {projectToEdit ? 'Update Project' : 'Add Project'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectForm;
