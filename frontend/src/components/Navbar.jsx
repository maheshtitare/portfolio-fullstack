import React, { useState, useEffect } from 'react';
import './Navbar.css';

/**
 * Navbar — Fixed top navigation bar.
 *
 * Features:
 * 1. Scrolls to sections smoothly on nav link click.
 * 2. Highlights the active section as user scrolls (scrollspy).
 * 3. Adds a solid background when user scrolls down (glass effect).
 * 4. Hamburger menu for mobile screens.
 *
 * useState: tracks which section is active and if menu is open.
 * useEffect: adds scroll listener, cleans up on unmount.
 */
function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);      // Is page scrolled down?
  const [menuOpen, setMenuOpen] = useState(false);       // Mobile menu open?

  // Nav links config — label + the section ID to scroll to
  const navLinks = [
    { label: 'Home',     id: 'home'     },
    { label: 'About',    id: 'about'    },
    { label: 'Skills',   id: 'skills'   },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact',  id: 'contact'  },
  ];

  useEffect(() => {
    // ── Scroll listener: detect which section is in view ─────────────────────
    const handleScroll = () => {
      // Add background when scrolled more than 60px
      setScrolled(window.scrollY > 60);

      // Scrollspy: find which section is currently visible
      const sections = navLinks.map((l) => document.getElementById(l.id));
      const scrollPos = window.scrollY + 100; // offset for navbar height

      sections.forEach((section) => {
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup — remove listener when component unmounts (memory leak prevention)
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * scrollToSection — smooth scroll to a section by ID.
   * Uses native scrollIntoView for smooth scrolling.
   */
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo / Brand */}
        <div className="nav-logo" onClick={() => scrollToSection('home')}>
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">Mahesh</span>
          <span className="logo-bracket">/&gt;</span>
        </div>

        {/* Desktop navigation links */}
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={() => scrollToSection(link.id)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Hamburger menu button (visible on mobile) */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
