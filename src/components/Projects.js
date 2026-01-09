import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "RealEstatePro – Property Management Platform",
      type: "MERN Stack",
      year: "2025",
      description: "Designed full-stack real estate platform enabling property listing, search, and inquiry management for buyers, sellers, and agents using MongoDB, Express.js, React.js, and Node.js",
      features: [
        "Built responsive React.js interfaces with advanced filtering (price, location, type) and detailed property views",
        "Implemented secure RESTful APIs with JWT-based authentication supporting multiple user roles (admin, agent, customer)",
        "Designed optimized MongoDB schemas for properties, users, inquiries, and bookings",
        "Integrated image uploads, contact forms, and real-time inquiry notifications"
      ],
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "REST APIs"],
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "SLPFES - Police Flood Emergency Support System",
      type: "MERN Stack",
      year: "2025",
      description: "Built full-stack disaster management platform using MongoDB, Express.js, React.js, and Node.js to track missing and affected individuals during flood emergencies",
      features: [
        "Developed secure RESTful APIs with JWT authentication, input validation, and structured error handling",
        "Implemented responsive React interfaces supporting efficient data entry, advanced search functionality, and incident tracking",
        "Collaborated using Agile methodology with sprint planning, code reviews, and CI/CD pipelines"
      ],
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Agile", "CI/CD"],
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "GlobalEHelp Business Support Platform",
      type: "MERN Stack",
      year: "2025",
      description: "Developed scalable business support platform using modular React components and RESTful backend services supporting multi-user concurrent access",
      features: [
        "Implemented Node.js and Express.js APIs for user authentication, service request management, and session handling",
        "Designed optimized MongoDB data models with indexing strategies for improved query performance"
      ],
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs"],
      github: "#",
      demo: "#"
    },
    {
      id: 4,
      title: "KevinaCosmetics.lk - Cosmetics E-Commerce Website",
      type: "React.js",
      year: "2025",
      description: "Developed responsive cosmetics e-commerce website using React.js with modern UI components, product listings, and category-based navigation",
      features: [
        "Implemented reusable React components, state management, and optimized rendering",
        "Enhanced user experience with modern UI/UX design principles"
      ],
      technologies: ["React.js", "JavaScript", "CSS3", "Responsive Design"],
      github: "#",
      demo: "#"
    },
    {
      id: 5,
      title: "LumiStone - AI Resource Detection",
      type: "Python, Android, ML",
      year: "2025",
      description: "Designed machine learning system achieving 92% accuracy in underground resource detection using Python and TensorFlow",
      features: [
        "Developed Android application integrating trained ML models for real-time detection with optimized on-device inference",
        "Improved model performance and reduced prediction latency by 35% through feature engineering and hyperparameter optimization",
        "Recognized at Hult Prize 2025 On-Campus Program for technical innovation"
      ],
      technologies: ["Python", "TensorFlow", "Machine Learning", "Android", "Kotlin"],
      github: "https://github.com/Achira020811/Lumistone",
      demo: "#"
    }
  ];

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-header">
                <div className="project-type">{project.type}</div>
                <div className="project-year">{project.year}</div>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.slice(0, 4).map((tech, idx) => (
                  <span key={idx} className="tech-badge">{tech}</span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="tech-badge">+{project.technologies.length - 4}</span>
                )}
              </div>
              <div className="project-links">
                {project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub /> Code
                  </a>
                )}
                <button className="project-link" onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProject(project);
                }}>
                  <FaCode /> Details
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="project-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="project-modal-content"
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="modal-close"
                  onClick={() => setSelectedProject(null)}
                >
                  ×
                </button>
                <div className="modal-header">
                  <div className="modal-type">{selectedProject.type}</div>
                  <h2>{selectedProject.title}</h2>
                  <p className="modal-description">{selectedProject.description}</p>
                </div>
                <div className="modal-features">
                  <h3>Key Features:</h3>
                  <ul>
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="modal-tech">
                  <h3>Technologies Used:</h3>
                  <div className="modal-tech-tags">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span key={idx} className="modal-tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="modal-actions">
                  {selectedProject.github !== "#" && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <FaGithub /> View Code
                    </a>
                  )}
                  {selectedProject.demo !== "#" && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;

