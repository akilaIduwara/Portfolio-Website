import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="exp-section">
      <div className="exp-container">

        {/* Header */}
        <motion.div 
          className="exp-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="exp-label">Work History</h2>
          <h1 className="exp-heading">Professional Experience</h1>
        </motion.div>

        {/* Experience card */}
        <motion.div 
          className="exp-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="exp-card-top">
            <div className="exp-role-block">
              <h3 className="exp-role">Software Engineer Intern</h3>
              <h4 className="exp-company">Civil Aviation Authority of Sri Lanka</h4>
              <div className="exp-meta">
                <span>📅 Sep 2025 – Present</span>
                <span>📍 Katunayake, Sri Lanka</span>
              </div>
            </div>
            <div className="exp-badge">Internship</div>
          </div>

          <div className="exp-responsibilities">
            <h5>Key Responsibilities &amp; Achievements</h5>
            <ul>
              <li>Developed enterprise web applications using React.js, JavaScript and MySQL for aviation audit and compliance workflows supporting national regulatory operations</li>
              <li>Designed relational database schemas and optimized SQL queries achieving <strong>40% improvement</strong> in data retrieval performance for compliance reporting systems</li>
              <li>Implemented comprehensive data validation and integrity checks ensuring reliable audit logs and regulatory data consistency across production systems</li>
              <li>Provided enterprise IT support including system monitoring, application troubleshooting, and issue resolution to minimize downtime</li>
            </ul>
          </div>

          <div className="exp-techs">
            <h5>Technologies Used</h5>
            <div className="exp-tech-tags">
              {['React.js', 'JavaScript', 'MySQL', 'Database Optimization', 'Enterprise Systems', 'SQL'].map((t, i) => (
                <span key={i} className="exp-tech-tag">{t}</span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Education card */}
        <motion.div 
          className="exp-card edu-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="exp-card-top">
            <div className="exp-role-block">
              <h3 className="exp-role">BSc (Hons) in Computer Science</h3>
              <h4 className="exp-company">University of Westminster</h4>
              <div className="exp-meta">
                <span>📅 Sep 2023 – Sep 2027</span>
                <span>📍 Colombo, Sri Lanka</span>
              </div>
            </div>
            <div className="exp-badge edu-badge">Education</div>
          </div>

          <div className="exp-responsibilities">
            <h5>Key Coursework</h5>
            <div className="exp-tech-tags">
              {['Algorithms & Data Structures', 'OOP', 'Machine Learning', 'Software Development', 'Database Management', 'Web Development'].map((t, i) => (
                <span key={i} className="exp-tech-tag">{t}</span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;
