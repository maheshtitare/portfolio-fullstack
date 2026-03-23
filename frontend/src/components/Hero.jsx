import React from 'react';
import './Hero.css';

/**
 * Hero — The first thing visitors see. Full-screen intro section.
 *
 * Contains:
 * - Greeting + Name (large, prominent)
 * - Role / tagline
 * - Short bio line
 * - CTA buttons (View Projects, Hire Me)
 * - Floating code card decoration
 * - Animated background blobs (CSS only)
 *
 * scrollToSection: inline helper to smooth-scroll to a section ID.
 * No useState/useEffect needed here — purely presentational.
 */
function Hero() {

  // Smooth scroll helper
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">

      {/* Decorative background blobs — CSS animated circles */}
      <div className="hero-blob blob-1" />
      <div className="hero-blob blob-2" />

      <div className="container hero-container">

        {/* ── Left: Text Content ──────────────────────────────────── */}
        <div className="hero-content">

          {/* Badge above name */}
          <div className="hero-badge">
            <span className="badge-dot" /> Available for opportunities
          </div>

          {/* Name + Role */}
          <h1 className="hero-name">
            Hi, I'm <span className="name-accent">Mahesh</span>
          </h1>

          <h2 className="hero-role">
            Full Stack Developer
          </h2>

          <p className="hero-bio">
            I build clean, scalable web applications using
            <span className="code-text"> Java Spring Boot</span> &amp;
            <span className="code-text"> React.js</span>.
            Passionate about writing readable code and solving real-world problems.
          </p>

          {/* CTA Buttons */}
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollTo('projects')}>
              View Projects
            </button>
            <button className="btn btn-outline" onClick={() => scrollTo('contact')}>
              Hire Me
            </button>
          </div>

          {/* Quick stats */}
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">3+</span>
              <span className="stat-label">Projects Built</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">Java</span>
              <span className="stat-label">Primary Backend</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">7.7</span>
              <span className="stat-label">CGPA</span>
            </div>
          </div>
        </div>

        {/* ── Right: Floating Code Card ───────────────────────────── */}
        <div className="hero-visual">
          <div className="code-card">
            <div className="code-card-header">
              {/* Mac-style window buttons */}
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
              <span className="code-filename">Developer.java</span>
            </div>
            <pre className="code-content">
{`public class Developer {

  String name = "Mahesh";
  String role = "Full Stack Dev";

  String[] skills = {
    "Spring Boot",
    "React.js",
    "MySQL",
    "REST APIs"
  };

  String passion() {
    return "Building great"
         + " products!";
  }
}`}
            </pre>
          </div>
        </div>

      </div>

      {/* Scroll down indicator */}
      <div className="scroll-indicator" onClick={() => scrollTo('about')}>
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll down</span>
      </div>

    </section>
  );
}

export default Hero;
