import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: "Civil Aviation Authority of Sri Lanka",
      position: "Software Engineer Intern",
      location: "Katunayake, Sri Lanka",
      period: "Sep 2025 – Present",
      responsibilities: [
        "Developed enterprise web applications using React.js, JavaScript, and MySQL for aviation audit and compliance workflows supporting national regulatory operations",
        "Designed relational database schemas and optimized SQL queries achieving 40% improvement in data retrieval performance for compliance reporting systems",
        "Implemented comprehensive data validation and integrity checks ensuring reliable audit logs and regulatory data consistency across production systems",
        "Provided enterprise IT support including system monitoring, application troubleshooting, and issue resolution to minimize downtime"
      ],
      technologies: ["React.js", "JavaScript", "MySQL", "Database Optimization", "Enterprise Systems"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Professional <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <motion.div
          className="experience-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-item"
              variants={itemVariants}
            >
              <div className="experience-card">
                <div className="experience-header">
                  <div className="experience-icon">
                    <FaBriefcase />
                  </div>
                  <div className="experience-title">
                    <h3>{exp.position}</h3>
                    <h4>{exp.company}</h4>
                    <div className="experience-meta">
                      <span className="experience-period">
                        <FaCalendarAlt /> {exp.period}
                      </span>
                      <span className="experience-location">
                        <FaMapMarkerAlt /> {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="experience-responsibilities">
                  <h5>Key Responsibilities & Achievements:</h5>
                  <ul>
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx}>{responsibility}</li>
                    ))}
                  </ul>
                </div>

                <div className="experience-technologies">
                  <h5>Technologies:</h5>
                  <div className="tech-tags">
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

