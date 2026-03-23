import React, { useState } from 'react';
import './Projects.css';

/**
 * Projects — Showcases portfolio projects.
 *
 * Uses useState to track which project is "expanded" (shows full description).
 * Projects data is defined as a JS array — easy to add more projects.
 *
 * Interview tip: "I used useState here to toggle project detail visibility
 * without any routing. This demonstrates how state drives the UI in React —
 * same data, different display based on state value."
 */
function Projects() {
  // Track which card is expanded (null = none)
  const [expanded, setExpanded] = useState(null);

  // ── Projects data ──────────────────────────────────────────────────────────
  const projects = [
    {
      id: 1,
      title: 'Employee Management System',
      subtitle: 'Full Stack Web Application',
      emoji: '👥',
      status: 'Completed',
      statusColor: '#22c55e',
      description:
        'A complete full-stack application for managing company employees. Admins can add, update, delete, and search employees. Employees can view the directory. Built with a secure JWT-based login system.',
      features: [
  'Full CRUD operations for employee management (Create, Read, Update, Delete)',
  'Secure authentication using JWT (login-based access control)',
  'Role-based access where admin can manage employees and users can view data',
  'RESTful APIs built using Spring Boot with layered architecture (Controller-Service-Repository)',
  'Database integration using MySQL with JPA/Hibernate for ORM mapping',
  'Frontend built with React for dynamic UI and seamless API communication via Axios'
],
      techStack: ['Java 17', 'Spring Boot 3.2', 'React 18', 'MySQL', 'JWT', 'Axios', 'Lombok'],
      github: 'https://github.com/maheshtitare/Employee-Management-System',
      type: 'Full Stack',
    },
    {
      id: 2,
      title: 'Portfolio Website',
      subtitle: 'Personal Portfolio',
      emoji: '🌐',
      status: 'Completed',
      statusColor: '#22c55e',
      description:
        'Developed a full-stack portfolio website using React and Spring Boot to showcase projects and skills. Implemented a contact form with REST API integration, enabling data submission to backend and storage in database. Designed responsive UI with smooth animations for better user experience.',
      features: [
  'Responsive design built with custom CSS (no UI frameworks)',
  'Smooth scroll and fade-in animations using IntersectionObserver API',
  'Contact form integrated with Spring Boot REST API (POST requests)',
  'Backend stores user submissions securely in MySQL database',
  'CORS configured for seamless React ↔ Spring Boot communication',
  'Centralized exception handling with clean JSON error responses'
],
      techStack: ['React 18', 'Spring Boot', 'MySQL', 'Axios', 'CSS Animations'],
      github: 'https://github.com/maheshtitare/portfolio-fullstack',
      type: 'Full Stack',
    },
    {
      id: 3,
      title: 'Dockerized Spring Boot API',
      subtitle: 'REST API with Docker Deployment',
      emoji: '🐳',
      status: 'Completed',
      statusColor: '#22c55e',
      description:
        'A production-ready Spring Boot REST API containerized with Docker. Demonstrates deployment-ready backend development with docker-compose, environment variable configuration, and cloud-readiness.',
      features: [
        'Spring Boot REST API with full CRUD',
        'Dockerfile + docker-compose.yml setup',
        'MySQL container linked via Docker network',
        'Environment variables for config (no hardcoded secrets)',
        'Tested with Postman collections',
        'Ready for AWS/GCP/Azure deployment',
      ],
      techStack: ['Java', 'Spring Boot', 'Docker', 'MySQL', 'docker-compose', 'Postman'],
      github: 'https://github.com/maheshtitare/StudyNotion',
      type: 'Backend + DevOps',
    },
  ];

  return (
    <section id="projects">
      <div className="container">

        {/* Section heading */}
        <div className="section-header fade-in">
          <p className="section-label">What I've built</p>
          <h2 className="section-title">Projects</h2>
          <div className="accent-line" />
          <p className="section-subtitle">
            Real-world applications built from scratch
          </p>
        </div>

        {/* Project cards grid */}
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card card fade-in">

              {/* ── Card Top: emoji + title + badge ──────────── */}
              <div className="project-top">
                <span className="project-emoji">{project.emoji}</span>
                <span
                  className="project-status"
                  style={{ color: project.statusColor, borderColor: project.statusColor + '44', background: project.statusColor + '14' }}
                >
                  {project.status}
                </span>
              </div>

              <div className="project-type-badge">{project.type}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-subtitle">{project.subtitle}</p>

              {/* Description */}
              <p className="project-desc">{project.description}</p>

              {/* Expandable feature list */}
              {expanded === project.id && (
                <ul className="project-features">
                  {project.features.map((f, i) => (
                    <li key={i}>
                      <span className="feature-bullet">▸</span> {f}
                    </li>
                  ))}
                </ul>
              )}

              {/* Toggle features button */}
              <button
                className="toggle-btn"
                onClick={() =>
                  setExpanded(expanded === project.id ? null : project.id)
                }
              >
                {expanded === project.id ? '▲ Less details' : '▼ Key features'}
              </button>

              {/* Tech stack tags */}
              <div className="project-tags">
                {project.techStack.map((tech) => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>

              {/* GitHub link */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline project-link"
              >
                <span>⬡</span> View on GitHub
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
