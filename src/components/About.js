import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const stats = [
    { number: '2+', label: 'Years of Learning' },
    { number: '5+', label: 'Projects Completed' },
    { number: '14+', label: 'Certifications' },
    { number: '1', label: 'Award & Recognition' },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">

        {/* Label + Heading */}
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="about-label">About Me</h2>
          <div className="about-heading-row">
            <div className="about-heading-left">
              <h1 className="about-heading">
                Elevating Standards Through Creative Excellence
              </h1>
            </div>
            <div className="about-heading-right">
              <p className="about-description">
                Computer Science undergraduate at University of Westminster with hands-on experience in full-stack development, machine learning, and enterprise systems. Skilled in building scalable web applications, RESTful APIs, and cloud-based solutions. Proficient in Java, Python, React, SQL, and modern cloud technologies.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Story image + Stats grid */}
        <div className="about-content-row">
          {/* Story image */}
          <motion.div 
            className="about-story-card"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="about-story-img-wrapper">
              <img src="/imges/logo-vertical-stylized.png" alt="Aikoo Solutions" className="about-story-img" />
              <div className="about-story-overlay" />
            </div>
            <div className="about-story-text">
              <h3>My Story</h3>
              <p>
                A passionate developer from Sri Lanka, building impactful digital solutions that bridge technology and real-world needs. Currently interning at Civil Aviation Authority of Sri Lanka while pursuing my CS degree at University of Westminster.
              </p>
            </div>
          </motion.div>

          {/* Stats grid */}
          <motion.div 
            className="about-stats-grid"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {stats.map((stat, i) => (
              <div className="about-stat-card" key={i}>
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
