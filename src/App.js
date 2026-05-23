import React from 'react';
import './styles.css';
import { motion } from 'framer-motion';

import {
  Linkedin,
  Mail,
  Github,
  Shield,
  Database,
  Cloud,
  Server,
  Cpu,
  Code2,
  BriefcaseBusiness
} from 'lucide-react';

export default function App() {

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

        <div className="background-glow"></div>

        {/* HERO SECTION */}

        <section className="hero">

          <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-left"
          >

            <div className="availability">
              AVAILABLE FOR SOFTWARE ENGINEERING OPPORTUNITIES
            </div>

            <h1>
              Sreeram
              <span> Ravishankar</span>
            </h1>

            <h2>
              Backend Software Engineer
            </h2>

            <p className="hero-description">
              Backend-focused Software Engineer with 5+ years of experience
              building scalable enterprise applications, authentication systems,
              distributed microservices, and cloud-native backend platforms.

              Specialized in Java, Spring Boot, Azure Cloud,
              Azure AD B2C, REST APIs, authentication protocols,
              and large-scale production systems.
            </p>

            <div className="hero-buttons">

              <a
                  href="https://www.linkedin.com/in/work-ram/"
                  target="_blank"
                  rel="noreferrer"
                  className="primary-btn"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>

              <a
                  href="mailto:work.ram22@gmail.com"
                  className="secondary-btn"
              >
                <Mail size={18} />
                Contact Me
              </a>

            </div>

            <div className="stats">

              <div className="stat-card">
                <h3>25+</h3>
                <p>Microservices</p>
              </div>

              <div className="stat-card">
                <h3>100M+</h3>
                <p>Files Moderated</p>
              </div>

              <div className="stat-card">
                <h3>5+</h3>
                <p>Years Experience</p>
              </div>

            </div>

          </motion.div>

          <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="hero-right"
          >

            <div className="image-container">
              <img src="/profile.jpg" alt="Sreeram" />
            </div>

          </motion.div>

        </section>

        {/* ABOUT */}

        <section className="section glass-card">

          <div className="section-title">
            <p>ABOUT ME</p>
            <h2>Building secure and scalable backend systems.</h2>
          </div>

          <p className="about-text">
            Currently working at Straumann Group as a Software Engineer managing
            authentication systems, Azure Active Directory, login services,
            custom policies, and User Data Services.

            Experienced in designing production-grade backend services,
            implementing real-time synchronization systems,
            resolving live production issues, and optimizing enterprise applications.

            Passionate about system design, clean architecture,
            scalability, and building reliable cloud-native platforms.
          </p>

        </section>

        {/* EXPERTISE */}

        <section className="section">

          <div className="section-title">
            <p>CORE EXPERTISE</p>
            <h2>What I specialize in</h2>
          </div>

          <div className="expertise-grid">

            <div className="expertise-card">
              <Shield size={40} />
              <h3>Authentication Systems</h3>
              <p>
                Azure AD B2C, JWT, OAuth, SAML,
                login services, token flows,
                and enterprise identity management.
              </p>
            </div>

            <div className="expertise-card">
              <Server size={40} />
              <h3>Microservices</h3>
              <p>
                Scalable backend systems using
                Java, Spring Boot, REST APIs,
                distributed architecture and event-driven systems.
              </p>
            </div>

            <div className="expertise-card">
              <Cloud size={40} />
              <h3>Cloud & DevOps</h3>
              <p>
                Azure Cloud, CI/CD pipelines,
                Jenkins, Docker, monitoring,
                deployments and infrastructure automation.
              </p>
            </div>

            <div className="expertise-card">
              <Database size={40} />
              <h3>Databases</h3>
              <p>
                PostgreSQL, MySQL, Redis,
                performance optimization,
                caching and data management.
              </p>
            </div>

          </div>

        </section>

        {/* EXPERIENCE */}

        <section className="section">

          <div className="section-title">
            <p>EXPERIENCE</p>
            <h2>Professional Journey</h2>
          </div>

          <div className="timeline">

            <div className="timeline-item">
              <div className="timeline-icon">
                <BriefcaseBusiness />
              </div>

              <div>
                <h3>Straumann Group</h3>
                <h4>Software Engineer - Java</h4>
                <span>September 2023 — Present</span>

                <ul>
                  <li>
                    Managed authentication services including Azure Active Directory,
                    Azure AD B2C custom policies, login services, and User Data Services.
                  </li>

                  <li>
                    Took complete ownership of the authentication segment from knowledge transfer
                    to production support and enhancement.
                  </li>

                  <li>
                    Implemented high-value customer-facing backend features
                    and optimized real-time SAP synchronization systems.
                  </li>

                  <li>
                    Resolved production issues, refactored legacy code,
                    improved system performance and stability.
                  </li>

                  <li>
                    Awarded Certificates of Appreciation in 2024 and 2025
                    for ownership and technical excellence.
                  </li>

                </ul>
              </div>
            </div>

            <div className="timeline-item">

              <div className="timeline-icon">
                <Code2 />
              </div>

              <div>

                <h3>Yell</h3>
                <h4>Software Engineer</h4>
                <span>February 2022 — August 2023</span>

                <ul>

                  <li>
                    Worked across 25+ microservices and enterprise backend systems.
                  </li>

                  <li>
                    Built moderation systems capable of filtering
                    over 100 million image and text files.
                  </li>

                  <li>
                    Configured backend infrastructure and MarkLogic servers
                    handling UK-wide traffic.
                  </li>

                  <li>
                    Developed and enhanced APIs,
                    implemented new microservices and cross-functional integrations.
                  </li>

                </ul>

              </div>

            </div>

            <div className="timeline-item">

              <div className="timeline-icon">
                <Cpu />
              </div>

              <div>

                <h3>Flagroot</h3>
                <h4>Full Stack Developer Intern</h4>
                <span>October 2019 — October 2020</span>

                <ul>

                  <li>
                    Developed ERP systems using Java, JDBC, SQL and J2EE.
                  </li>

                  <li>
                    Worked on real-world projects during Java Full Stack training.
                  </li>

                </ul>

              </div>

            </div>

          </div>

        </section>

        {/* SKILLS */}

        <section className="section glass-card">

          <div className="section-title">
            <p>TECH STACK</p>
            <h2>Skills & Technologies</h2>
          </div>

          <div className="skills">

            {skills.map((skill) => (
                <span key={skill}>
              {skill}
            </span>
            ))}

          </div>

        </section>

        {/* EDUCATION */}

        <section className="section">

          <div className="section-title">
            <p>EDUCATION</p>
            <h2>Academic Background</h2>
          </div>

          <div className="education-grid">

            <div className="education-card">
              <h3>University of Glasgow</h3>
              <p>M.Sc. Information Technology</p>
              <span>2021 — 2022</span>
            </div>

            <div className="education-card">
              <h3>REVA University</h3>
              <p>B.Tech Electronics & Communication</p>
              <span>2014 — 2018</span>
            </div>

          </div>

        </section>

        {/* FOOTER */}

        <footer>

          <h2>
            Let's build scalable systems together.
          </h2>

          <p>
            Open to Backend Engineering opportunities and impactful software projects.
          </p>

          <div className="footer-links">

            <a
                href="https://www.linkedin.com/in/work-ram/"
                target="_blank"
                rel="noreferrer"
            >
              <Linkedin />
            </a>

            <a href="mailto:work.ram22@gmail.com">
              <Mail />
            </a>

            <a
                href="https://github.com/workram22"
                target="_blank"
                rel="noreferrer"
            >
              <Github />
            </a>

          </div>

          <span>
          © 2026 Sreeram Ravishankar
        </span>

        </footer>

      </div>
  );
}