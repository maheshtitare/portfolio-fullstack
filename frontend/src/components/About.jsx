import React from 'react';
import './About.css';

/**
 * About — Personal introduction section.
 *
 * Highlights:
 * - Short bio paragraph
 * - Education details
 * - Quick-glance info cards (degree, college, year, CGPA)
 * - "Download Resume" button
 *
 * All elements have className="fade-in" so IntersectionObserver
 * in App.js triggers the scroll animation.
 *
 * Purely presentational — no state or effects needed here.
 */
function About() {

  // Info cards shown below the bio
  const infoCards = [
    { icon: '🎓', label: 'Degree',  value: 'B.E. Computer Science and Engineering' },
    { icon: '🏛️', label: 'College', value: 'Babasaheb Naik College of Engineering, Pusad' },
    { icon: '📅', label: 'Year',    value: '2025 Graduate' },
    { icon: '⭐', label: 'CGPA',    value: '7.7 / 10' },
  ];

  return (
    <section id="about">
      <div className="container">

        {/* Section heading */}
        <div className="section-header fade-in">
          <p className="section-label">Get to know me</p>
          <h2 className="section-title">About Me</h2>
          <div className="accent-line" />
        </div>

        <div className="about-layout">

          {/* ── Left: Bio text ─────────────────────────────────────── */}
          <div className="about-text fade-in">
            <p>
               I'm a Computer Science & Engineering graduate with a strong focus on 
  <strong> Full Stack Development</strong>. I specialize in building scalable 
  end-to-end applications, from designing robust REST APIs using Spring Boot 
  to developing responsive and user-friendly interfaces with React.
</p>

<br />

<p>
  I have hands-on experience developing real-world projects such as an 
  <strong> Employee Management System</strong> and a 
  <strong> –	Personal Portfolio | Full Stack </strong>. Through these, I’ve gained a solid 
  understanding of modern software architecture, including layered design, 
  JWT-based authentication, and database optimization.
</p>

<br />

<p>
  I am currently seeking opportunities as a <strong>Full Stack Developer (Fresher)</strong>, 
  where I can contribute to impactful products while continuously improving my technical 
  and problem-solving skills. I am passionate about writing clean, maintainable code 
  and building efficient, user-centric applications.
            </p>

            <div className="about-actions">
              <a
                href="/Mahesh_Titare_Resume.docx"
                download
                className="btn btn-primary"
                style={{ marginTop: '28px' }}
              >
                📄 Download Resume
              </a>
            </div>
          </div>

          {/* ── Right: Info cards grid ──────────────────────────────── */}
          <div className="about-cards">
            {infoCards.map((card, idx) => (
              <div key={idx} className="about-card card fade-in">
                <span className="about-card-icon">{card.icon}</span>
                <div>
                  <p className="about-card-label">{card.label}</p>
                  <p className="about-card-value">{card.value}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
