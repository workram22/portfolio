
import React from 'react';
import { Github, Linkedin, Mail, Server, Database, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';

export default function App() {
  const skills = [
    'Java', 'Spring Boot', 'Microservices', 'REST APIs', 'Azure',
    'Azure AD B2C', 'Docker', 'Redis', 'PostgreSQL',
    'MySQL', 'CI/CD', 'Jenkins', 'Git', 'Swagger'
  ];

  const experiences = [
    {
      company: 'Straumann Group',
      role: 'Software Engineer - Java',
      duration: '2023 - Present',
      points: [
        'Owned authentication services and Azure AD B2C custom policies.',
        'Implemented enterprise backend features and real-time SAP sync.',
        'Resolved production issues and optimized legacy services.'
      ]
    },
    {
      company: 'Yell',
      role: 'Software Engineer - Java',
      duration: '2022 - 2023',
      points: [
        'Worked on 25+ microservices and distributed backend systems.',
        'Built moderation systems processing 100M+ files.',
        'Configured backend infrastructure for UK traffic.'
      ]
    }
  ];

  return (
    <div className="app">
      <section className="hero">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="tag">Backend Software Engineer</p>
          <h1>Sreeram Ravishankar</h1>
          <p className="subtitle">
            Building scalable backend systems, authentication platforms,
            microservices, and enterprise APIs.
          </p>

          <div className="hero-buttons">
            <a href="https://www.linkedin.com/in/work-ram" target="_blank" rel="noreferrer">
              <Linkedin size={18} /> LinkedIn
            </a>

            <a href="mailto:work.ram22@gmail.com">
              <Mail size={18} /> Contact
            </a>
          </div>
        </motion.div>
      </section>

      <section className="glass">
        <h2>About Me</h2>
        <p>
          Backend-focused Software Engineer with experience building enterprise-grade
          authentication systems, scalable APIs, distributed microservices,
          and cloud-native applications using Java and Spring Boot.
        </p>
      </section>

      <section>
        <h2>Core Expertise</h2>

        <div className="cards">
          <div className="card">
            <Server />
            <h3>Microservices</h3>
            <p>Enterprise-grade scalable backend systems.</p>
          </div>

          <div className="card">
            <Cloud />
            <h3>Cloud & Azure</h3>
            <p>Azure AD B2C, pipelines, monitoring and deployments.</p>
          </div>

          <div className="card">
            <Database />
            <h3>Databases</h3>
            <p>Redis, PostgreSQL, MySQL and high-performance APIs.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Experience</h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <h3>{exp.company}</h3>
              <h4>{exp.role}</h4>
              <span>{exp.duration}</span>

              <ul>
                {exp.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Skills</h2>

        <div className="skills">
          {skills.map(skill => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="glass">
        <h2>Education</h2>

        <div className="edu">
          <h3>University of Glasgow</h3>
          <p>M.Sc. Information Technology</p>
        </div>

        <div className="edu">
          <h3>Reva University</h3>
          <p>B.Tech Electronics and Communication</p>
        </div>
      </section>

      <footer>
        <h2>Let's Build Something Great</h2>

        <div className="footer-links">
          <a href="https://www.linkedin.com/in/work-ram" target="_blank" rel="noreferrer">
            <Linkedin size={18} />
          </a>

          <a href="mailto:work.ram22@gmail.com">
            <Mail size={18} />
          </a>

          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <Github size={18} />
          </a>
        </div>

        <p>© 2026 Sreeram Ravishankar</p>
      </footer>
    </div>
  );
}
