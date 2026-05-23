import React from 'react';
import './styles.css';

import { motion } from 'framer-motion';

import {
  Linkedin,
  Mail,
  Github,
  Cpu,
  Code2,
  BriefcaseBusiness,
  Phone,
  MapPin,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function App() {

  /* DYNAMIC EXPERIENCE CALCULATION */

  const calculateDuration = (start, end = new Date()) => {

    const startDate = new Date(start);
    const endDate = new Date(end);

    let years =
        endDate.getFullYear() - startDate.getFullYear();

    let months =
        endDate.getMonth() - startDate.getMonth();

    let days =
        endDate.getDate() - startDate.getDate();

    if (days < 0) {
      months--;
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    return `${years}y ${months}m`;
  };

  const calculateTotalExperience = () => {

    const jobs = [
      {
        start: '2019-10-01',
        end: '2020-10-01'
      },
      {
        start: '2022-02-01',
        end: '2023-08-01'
      },
      {
        start: '2023-09-01',
        end: new Date()
      }
    ];

    let totalMonths = 0;

    jobs.forEach(job => {

      const start = new Date(job.start);
      const end = new Date(job.end);

      let months =
          (end.getFullYear() - start.getFullYear()) * 12 +
          (end.getMonth() - start.getMonth());

      if (end.getDate() < start.getDate()) {
        months--;
      }

      totalMonths += months;

    });

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    return `${years}y ${months}m`;
  };

  const totalExperience = calculateTotalExperience();

  const experiences = [
    {
      company: 'Straumann Group',
      role: 'Software Engineer - Java',
      location: 'Bengaluru, Karnataka, India',
      duration: 'September 2023 — Present',
      experience: calculateDuration('2023-09-01'),
      icon: <BriefcaseBusiness />,
      points: [
        'Managed Azure AD B2C authentication systems and enterprise login services.',
        'Owned authentication systems from KT to production enhancements.',
        'Implemented high-value customer-facing backend features.',
        'Optimized SAP synchronization and backend integrations.',
        'Received Certificates of Appreciation in 2024 and 2025.'
      ]
    },

    {
      company: 'Yell',
      role: 'Software Engineer',
      location: 'Reading, England, United Kingdom',
      duration: 'February 2022 — August 2023',
      experience: calculateDuration(
          '2022-02-01',
          '2023-08-01'
      ),
      icon: <Code2 />,
      points: [
        'Worked across 25+ enterprise microservices.',
        'Built moderation systems handling 100M+ files.',
        'Configured MarkLogic infrastructure for UK-wide traffic.',
        'Implemented backend integrations and APIs.'
      ]
    },

    {
      company: 'FLAGROOT',
      role: 'Full Stack Developer Intern',
      location: 'Bengaluru, Karnataka, India',
      duration: 'October 2019 — October 2020',
      experience: calculateDuration(
          '2019-10-01',
          '2020-10-01'
      ),
      icon: <Cpu />,
      points: [
        'Worked on ERP applications using Java and SQL.',
        'Built strong backend engineering foundations.',
        'Worked on enterprise full-stack applications.'
      ]
    }
  ];

  const skills = [
    'Java',
    'Spring Boot',
    'Microservices',
    'REST APIs',
    'JWT',
    'OAuth',
    'SAML',
    'Azure',
    'Azure AD B2C',
    'Docker',
    'Redis',
    'PostgreSQL',
    'MySQL',
    'CI/CD',
    'Jenkins',
    'Git',
    'Swagger',
    'Flyway',
    'Gradle',
    'Maven',
    'System Design',
    'Distributed Systems',
    'Agile',
    'TDD',
    'SDLC'
  ];

  return (

      <div className="app">

        {/* BACKGROUND */}

        <div className="background-glow"></div>
        <div className="grid-background"></div>

        {/* FLOATING TECH */}

        <div className="floating-icons">

          <div className="floating-icon java">
            JAVA
          </div>

          <div className="floating-icon api">
            SPRING BOOT
          </div>

          <div className="floating-icon db">
            MICROSERVICES
          </div>

          <div className="floating-icon cloud">
            AZURE
          </div>

          <div className="floating-icon docker">
            DOCKER
          </div>

        </div>

        {/* ORBS */}

        <div className="animated-orb orb1"></div>
        <div className="animated-orb orb2"></div>
        <div className="animated-orb orb3"></div>

        {/* HERO */}

        <section className="hero">

          <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="hero-left"
          >

            <div className="availability">

              <Sparkles size={14} />

              OPEN TO WORK • BACKEND ENGINEERING OPPORTUNITIES

            </div>

            <div className="experience-badge">

              {totalExperience} Professional Experience

            </div>

            <h1>

              Sreeram
              <span> Ravishankar</span>

            </h1>

            <div className="hero-role-section">

              <h2>

                Backend Software Engineer

                <span className="experience-inline">
                • {totalExperience}
              </span>

              </h2>

              <div className="hero-location">

                <MapPin size={16} />

                Bengaluru, Karnataka, India

              </div>

            </div>

            <p className="hero-description">
              Backend-focused Software Engineer with{' '}
              {totalExperience}{' '}
              of experience building scalable enterprise applications,
              authentication systems, distributed microservices and
              cloud-native backend platforms.
            </p>

            {/* BUTTONS */}
            <div className="hero-buttons">

              <motion.a
                  whileHover={{
                    scale: 1.05,
                    y: -4
                  }}
                  href="https://www.linkedin.com/in/work-ram/"
                  target="_blank"
                  rel="noreferrer"
                  className="primary-btn"
              >

                <Linkedin size={18} />

                LinkedIn

                <ArrowRight size={16} />

              </motion.a>

              <motion.a
                  whileHover={{
                    scale: 1.05,
                    y: -4
                  }}
                  href="mailto:work.ram22@gmail.com"
                  className="secondary-btn"
              >

                <Mail size={18} />

                Email

              </motion.a>

              <motion.a
                  whileHover={{
                    scale: 1.05,
                    y: -4
                  }}
                  href="tel:+919008174440"
                  className="secondary-btn"
              >

                <Phone size={18} />

                Contact

              </motion.a>

            </div>

            {/* STATS */}

            <div className="stats">

              <motion.div
                  whileHover={{ y: -8 }}
                  className="stat-card"
              >

                <h3>25+</h3>

                <p>Microservices</p>

              </motion.div>

              <motion.div
                  whileHover={{ y: -8 }}
                  className="stat-card"
              >

                <h3>100M+</h3>

                <p>Files Moderated</p>

              </motion.div>

              <motion.div
                  whileHover={{ y: -8 }}
                  className="stat-card"
              >

                <h3>{totalExperience}</h3>

                <p>Total Experience</p>

              </motion.div>

            </div>

          </motion.div>

          {/* IMAGE */}

          <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="hero-right"
          >

            <motion.div
                className="image-container"
                animate={{
                  y: [0, -10, 0]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5
                }}
            >

              <img
                  src={process.env.PUBLIC_URL + '/profile.jpg'}
                  alt="Sreeram"
              />

            </motion.div>

          </motion.div>

        </section>

        {/* EXPERIENCE */}

        <section className="section">

          <div className="section-title">

            <p>EXPERIENCE</p>

            <h2>Professional Journey</h2>

          </div>

          <div className="timeline">

            {experiences.map((job, index) => (

                <motion.div
                    key={index}
                    className="timeline-item"
                    initial={{
                      opacity: 0,
                      x: -60
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.1
                    }}
                    whileHover={{
                      y: -8
                    }}
                >

                  <div className="timeline-icon">

                    {job.icon}

                  </div>

                  <div className="timeline-content">

                    <div className="company-header">

                      <div className="company-top-row">

                        <h3>{job.company}</h3>

                        <div className="job-experience">

                          {job.experience}

                        </div>

                      </div>

                      <h4>{job.role}</h4>

                      <div className="job-meta">

                        <div className="company-location">

                          <MapPin size={14} />

                          {job.location}

                        </div>

                        <div className="meta-dot"></div>

                        <div className="job-duration">

                          {job.duration}

                        </div>

                      </div>

                    </div>

                    <ul>

                      {job.points.map((point, i) => (

                          <li key={i}>

                            {point}

                          </li>

                      ))}

                    </ul>

                  </div>

                </motion.div>

            ))}

          </div>

        </section>

        {/* SKILLS */}

        <section className="section glass-card">

          <div className="section-title">

            <p>TECH STACK</p>

            <h2>Skills & Technologies</h2>

          </div>

          <div className="skills">

            {skills.map((skill, index) => (

                <motion.span
                    key={skill}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      delay: index * 0.03
                    }}
                    whileHover={{
                      scale: 1.08,
                      y: -4
                    }}
                >

                  {skill}

                </motion.span>

            ))}

          </div>

        </section>

        {/* FOOTER */}

        <footer className="footer">

          <motion.div
              initial={{
                opacity: 0,
                y: 40
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8
              }}
          >

            <h2>

              Let's Build Scalable Backend Systems Together.

            </h2>

            <p>

              Open to Backend Engineering opportunities,
              cloud-native platform development,
              distributed systems and enterprise backend projects.

            </p>

            <div className="footer-buttons">

              <a
                  href="mailto:work.ram22@gmail.com"
                  className="primary-btn"
              >

                <Mail size={18} />

                Contact Me

              </a>

              <a
                  href="https://github.com/workram22"
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-btn"
              >

                <Github size={18} />

                GitHub

              </a>

              <a
                  href="https://www.linkedin.com/in/work-ram/"
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-btn"
              >

                <Linkedin size={18} />

                LinkedIn

              </a>

            </div>

            <div className="footer-bottom">

            <span>

              © 2026 Sreeram Ravishankar

            </span>

              <span>

              Backend Software Engineer • Bengaluru, India

            </span>

            </div>

          </motion.div>

        </footer>

      </div>

  );
}