import React from 'react';
import './Footer.css';
import { FiHeart, FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FiGithub />, href: 'https://github.com', label: 'GitHub' },
    { icon: <FiLinkedin />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FiTwitter />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <FiMail />, href: 'mailto:hello@example.com', label: 'Email' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              Portfolio<span className="logo-dot">.</span>
            </a>
            <p className="footer-tagline">
              Showcasing creativity, innovation, and technical excellence
            </p>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h4 className="link-group-title">Quick Links</h4>
              <ul className="link-list">
                <li><a href="#home">Home</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="link-group">
              <h4 className="link-group-title">Categories</h4>
              <ul className="link-list">
                <li><a href="#web">Web Development</a></li>
                <li><a href="#mobile">Mobile Apps</a></li>
                <li><a href="#design">UI/UX Design</a></li>
                <li><a href="#ml">Machine Learning</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-social">
            <h4 className="social-title">Connect With Me</h4>
            <div className="social-icons">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Portfolio Platform. Made with <FiHeart className="heart-icon" /> using React
          </p>
          <p className="attribution">
            Images from <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Unsplash</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
