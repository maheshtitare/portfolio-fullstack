import React from 'react';
import './Skills.css';

/**
 * Skills — Displays technical skills grouped by category.
 *
 * Data is defined as a JavaScript array of objects.
 * We use .map() to render each skill category and skill item.
 *
 * Interview tip: "I used .map() to render skill items dynamically
 * from a data array. This way if I want to add a new skill, I just
 * update the data — the UI updates automatically. This is the React
 * principle of data-driven rendering."
 *
 * Each skill shows:
 * - Icon (emoji — no external library needed)
 * - Name
 * - Proficiency bar (CSS width % = skill level)
 */
function Skills() {

  // ── Skills data ─────────────────────────────────────────────────────────────
  // Each category has: title, icon, color, and array of skills
  // Each skill has: name, icon, level (0-100 for the progress bar)
  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      color: '#6c63ff',
      skills: [
        { name: 'HTML5',       icon: '🌐', level: 85 },
        { name: 'CSS3',        icon: '🎨', level: 80 },
        { name: 'JavaScript',  icon: '⚡', level: 75 },
        { name: 'React.js',    icon: '⚛️', level: 70 },
      ],
    },
    {
      title: 'Backend',
      icon: '⚙️',
      color: '#22d3ee',
      skills: [
        { name: 'Java',           icon: '☕', level: 82 },
        { name: 'Spring Boot',    icon: '🌱', level: 78 },
        { name: 'REST APIs',      icon: '🔗', level: 80 },
        { name: 'JWT Auth',       icon: '🔒', level: 70 },
      ],
    },
    {
      title: 'Database & Tools',
      icon: '🛢️',
      color: '#f59e0b',
      skills: [
        { name: 'MySQL',    icon: '🗄️', level: 78 },
        { name: 'Git',      icon: '📦', level: 80 },
        { name: 'Docker',   icon: '🐳', level: 60 },
        { name: 'Postman',  icon: '🧪', level: 82 },
      ],
    },
  ];

  return (
    <section id="skills">
      <div className="container">

        {/* Section heading */}
        <div className="section-header fade-in">
          <p className="section-label">What I work with</p>
          <h2 className="section-title">Skills</h2>
          <div className="accent-line" />
          <p className="section-subtitle">
            Technologies I've used to build real projects
          </p>
        </div>

        {/* Three skill category cards */}
        <div className="skills-grid">
          {skillCategories.map((category, catIdx) => (
            <div key={catIdx} className="skill-card card fade-in">

              {/* Card header */}
              <div className="skill-card-header">
                <span className="skill-category-icon">{category.icon}</span>
                <h3 className="skill-category-title"
                    style={{ color: category.color }}>
                  {category.title}
                </h3>
              </div>

              {/* Individual skills list */}
              <div className="skill-list">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="skill-item">

                    {/* Skill name row */}
                    <div className="skill-info">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>

                    {/* Progress bar — width is set by skill.level */}
                    <div className="skill-bar-bg">
                      <div
                        className="skill-bar-fill"
                        style={{
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${category.color}, ${category.color}aa)`,
                        }}
                      />
                    </div>

                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
