import React, { useState } from 'react'
import './App.css'

function App() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'E-commerce Website',
      description: 'A full-featured online store with shopping cart and payment processing',
      category: 'Web Development',
      technologies: ['React', 'Node.js', 'MongoDB'],
      imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'Fitness Tracker App',
      description: 'Mobile app for tracking workouts and nutrition goals',
      category: 'Mobile App',
      technologies: ['React Native', 'Firebase'],
      imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'Portfolio Website Design',
      description: 'Modern portfolio design with dark mode and animations',
      category: 'UI/UX Design',
      technologies: ['Figma', 'React', 'Framer Motion'],
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
    }
  ])

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [darkMode, setDarkMode] = useState(false)
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    category: 'Web Development',
    technologies: '',
    imageUrl: ''
  })

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newProject.title.trim() && newProject.description.trim()) {
      const projectToAdd = {
        id: Date.now(),
        title: newProject.title,
        description: newProject.description,
        category: newProject.category,
        technologies: newProject.technologies.split(',').map(tech => tech.trim()),
        imageUrl: newProject.imageUrl || 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop'
      }
      setProjects([projectToAdd, ...projects])
      setNewProject({
        title: '',
        description: '',
        category: 'Web Development',
        technologies: '',
        imageUrl: ''
      })
    }
  }

  const handleChange = (e) => {
    setNewProject({
      ...newProject,
      [e.target.name]: e.target.value
    })
  }

  const deleteProject = (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter(project => project.id !== id))
    }
  }

  const categories = ['All', 'Web Development', 'Mobile App', 'UI/UX Design']

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <header className="header">
        <h1>Portfolio Platform</h1>
        <button onClick={() => setDarkMode(!darkMode)} className="theme-toggle">
          {darkMode ? '‚òÄÔ∏è Light Mode' : 'Ìºô Dark Mode'}
        </button>
      </header>

      <main>
        <div className="hero">
          <h2>Showcase Your Creative Work</h2>
          <p>Add, search, and showcase your projects in one place</p>
        </div>

        <div className="controls">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <select 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="category-select"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div className="stats">
          <div className="stat">
            <span className="stat-number">{projects.length}</span>
            <span className="stat-label">Total Projects</span>
          </div>
          <div className="stat">
            <span className="stat-number">{filteredProjects.length}</span>
            <span className="stat-label">Showing</span>
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="no-projects">
            <p>No projects found. Try a different search or add a new project.</p>
          </div>
        ) : (
          <div className="projects-grid">
            {filteredProjects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.imageUrl} alt={project.title} />
                  <span className="category-badge">{project.category}</span>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <button 
                    onClick={() => deleteProject(project.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="add-project">
          <h3>Add New Project</h3>
          <form onSubmit={handleSubmit} className="project-form">
            <input
              type="text"
              name="title"
              placeholder="Project Title"
              value={newProject.title}
              onChange={handleChange}
              required
            />
            <textarea
              name="description"
              placeholder="Project Description"
              value={newProject.description}
              onChange={handleChange}
              required
              rows="4"
            />
            <div className="form-row">
              <select name="category" value={newProject.category} onChange={handleChange}>
                <option value="Web Development">Web Development</option>
                <option value="Mobile App">Mobile App</option>
                <option value="UI/UX Design">UI/UX Design</option>
              </select>
              <input
                type="text"
                name="technologies"
                placeholder="Technologies (comma separated)"
                value={newProject.technologies}
                onChange={handleChange}
              />
            </div>
            <input
              type="url"
              name="imageUrl"
              placeholder="Image URL (optional)"
              value={newProject.imageUrl}
              onChange={handleChange}
            />
            <button type="submit" className="submit-btn">Add Project</button>
          </form>
        </div>
      </main>

      <footer className="footer">
        <p>Portfolio Platform &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}

export default App
