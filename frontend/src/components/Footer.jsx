import React from 'react';
import './Footer.css';

/**
 * Footer — Simple bottom section with social links and copyright.
 * Purely presentational — no state needed.
 */
function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { label: 'GitHub',   href: 'https://github.com/maheshtitare',           icon: '🐙' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/maheshtitare',       icon: '💼' },
    { label: 'Email',    href: 'mailto:maheshtitare748@gmail.com',            icon: '📧' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">

        {/* Logo / brand */}
        <div className="footer-logo" onClick={scrollToTop}>
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">Mahesh</span>
          <span className="logo-bracket">/&gt;</span>
        </div>

        {/* Social links */}
        <div className="footer-links">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              {link.icon} {link.label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="footer-copy">
          © {currentYear} Mahesh. Built with React &amp; Spring Boot.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
