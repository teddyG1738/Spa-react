import React, { useState } from 'react';
import './Header.css';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const Header = ({ darkMode, toggleDarkMode, onAddProject }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="nav-brand">
            <a href="#home" className="logo">
              <span className="logo-text">Portfolio</span>
              <span className="logo-dot">.</span>
            </a>
          </div>

          <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
            <ul className="nav-list">
              {menuItems.map((item) => (
                <li key={item.label} className="nav-item">
                  <a 
                    href={item.href} 
                    className="nav-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="nav-actions">
              <button 
                className="btn btn-primary"
                onClick={onAddProject}
              >
                + Add Project
              </button>
              <button 
                className="theme-toggle"
                onClick={toggleDarkMode}
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {darkMode ? <FiSun /> : <FiMoon />}
              </button>
            </div>
          </div>

          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
