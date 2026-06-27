import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'RealEstatePro – Property Management Platform',
    type: 'MERN Stack',
    year: '2025',
    description: 'Full-stack real estate platform with property listing, search, and inquiry management for buyers, sellers, and agents.',
    features: [
      'React.js UI with advanced filtering by price, location and type',
      'Secure REST APIs with JWT-based authentication and multi-role support',
      'Optimized MongoDB schemas for properties, users, inquiries and bookings',
      'Integrated image uploads, contact forms and inquiry notifications',
    ],
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT'],
    github: '#',
    demo: '#',
  },
  {
    id: 2,
    title: 'SLPFES – Police Flood Emergency Support System',
    type: 'MERN Stack',
    year: '2025',
    description: 'Disaster management platform to track missing and affected individuals during flood emergencies in Sri Lanka.',
    features: [
      'Secure REST APIs with JWT auth, input validation and error handling',
      'Responsive React UI for data entry, search and incident tracking',
      'Agile methodology with sprint planning and CI/CD pipelines',
    ],
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'CI/CD'],
    github: '#',
    demo: '#',
  },
  {
    id: 3,
    title: 'GlobalEHelp Business Support Platform',
    type: 'MERN Stack',
    year: '2025',
    description: 'Scalable business support platform with modular React components and RESTful backend supporting multi-user concurrent access.',
    features: [
      'Node.js and Express.js APIs for auth, service requests and sessions',
      'MongoDB data models with indexing for improved query performance',
    ],
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    github: '#',
    demo: '#',
  },
  {
    id: 4,
    title: 'KevinaCosmetics.lk – E-Commerce Website',
    type: 'React.js',
    year: '2025',
    description: 'Responsive cosmetics e-commerce website with product listings, category navigation and modern UI components.',
    features: [
      'Reusable React components with optimized state management',
      'Mobile-first responsive design with modern UI/UX principles',
    ],
    technologies: ['React.js', 'JavaScript', 'CSS3'],
    github: '#',
    demo: '#',
  },
  {
    id: 5,
    title: 'LumiStone – AI Underground Resource Detection',
    type: 'Python · Android · ML',
    year: '2025',
    description: 'ML system achieving 92% accuracy in underground resource detection, recognized at Hult Prize 2025 On-Campus Program.',
    features: [
      'TensorFlow model with 92% detection accuracy for underground resources',
      'Android app with on-device inference, reducing latency by 35%',
      'Recognized at Hult Prize 2025 for technical innovation',
    ],
    technologies: ['Python', 'TensorFlow', 'Android', 'Kotlin', 'ML'],
    github: 'https://github.com/Achira020811/Lumistone',
    demo: '#',
  },
];

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">

        {/* Header */}
        <motion.div 
          className="projects-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="projects-label">Portfolio</h2>
          <h1 className="projects-heading">Featured Projects</h1>
          <p className="projects-subheading">
            A selection of projects showcasing full-stack development, ML, and enterprise systems.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="projects-grid">
          {projects.map((p, idx) => (
            <motion.div 
              key={p.id} 
              className="project-card" 
              onClick={() => setSelected(p)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="project-card-top">
                <span className="project-type">{p.type}</span>
                <span className="project-year">{p.year}</span>
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.description}</p>
              <div className="project-techs">
                {p.technologies.slice(0, 4).map((t, i) => (
                  <span key={i} className="project-tech">{t}</span>
                ))}
                {p.technologies.length > 4 && (
                  <span className="project-tech">+{p.technologies.length - 4}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div className="project-modal-backdrop" onClick={() => setSelected(null)}>
          <div className="project-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelected(null)}>✕</button>
            <span className="modal-type">{selected.type}</span>
            <h2 className="modal-title">{selected.title}</h2>
            <p className="modal-desc">{selected.description}</p>
            <div className="modal-features">
              <h4>Key Features</h4>
              <ul>
                {selected.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            </div>
            <div className="modal-techs">
              <h4>Technologies Used</h4>
              <div className="modal-tech-tags">
                {selected.technologies.map((t, i) => (
                  <span key={i} className="modal-tech-tag">{t}</span>
                ))}
              </div>
            </div>
            <div className="modal-actions">
              {selected.github !== '#' && (
                <a href={selected.github} target="_blank" rel="noopener noreferrer" className="modal-btn modal-btn-primary">
                  View Code
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
