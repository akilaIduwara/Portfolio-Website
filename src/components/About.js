import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaRocket, FaUniversity, FaCalendarAlt } from 'react-icons/fa';
import './About.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const education = {
    degree: "Bachelor of Science (Honours) in Computer Science",
    university: "University of Westminster",
    period: "Sep 2023 – Sep 2027",
    coursework: [
      "Algorithms & Data Structures",
      "Object-Oriented Programming",
      "Machine Learning",
      "Software Development",
      "Database Management Systems"
    ]
  };

  const highlights = [
    {
      icon: <FaGraduationCap />,
      title: "Education",
      description: education.degree,
      details: `${education.university} - ${education.period}`
    },
    {
      icon: <FaLaptopCode />,
      title: "Experience",
      description: "Software Engineer Intern at Civil Aviation Authority of Sri Lanka",
      details: "Enterprise web applications, database optimization, and IT support"
    },
    {
      icon: <FaRocket />,
      title: "Passion",
      description: "Building innovative solutions",
      details: "Full-stack development, ML/AI, and cloud technologies"
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="about-text" variants={itemVariants}>
            <p className="about-description">
              Computer Science undergraduate with hands-on experience in full-stack development, 
              machine learning, and enterprise systems. Skilled in building scalable web applications, 
              developing RESTful APIs, optimizing relational databases, and deploying cloud-based solutions.
            </p>
            <p className="about-description">
              Proficient in Java, Python, React, SQL, and modern cloud technologies, with a strong 
              foundation in data structures, algorithms, object-oriented programming, and Agile/Scrum 
              software development.
            </p>
          </motion.div>

          <motion.div className="highlights-grid" variants={itemVariants}>
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="highlight-card"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="highlight-icon">{highlight.icon}</div>
                <h3>{highlight.title}</h3>
                <p className="highlight-description">{highlight.description}</p>
                <p className="highlight-details">{highlight.details}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="education-section" variants={itemVariants}>
            <div className="education-card">
              <div className="education-header">
                <FaUniversity className="education-icon" />
                <div>
                  <h3>{education.degree}</h3>
                  <p className="university-name">{education.university}</p>
                  <div className="education-period">
                    <FaCalendarAlt /> {education.period}
                  </div>
                </div>
              </div>
              <div className="coursework">
                <h4>Key Coursework:</h4>
                <div className="coursework-tags">
                  {education.coursework.map((course, index) => (
                    <span key={index} className="coursework-tag">{course}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

