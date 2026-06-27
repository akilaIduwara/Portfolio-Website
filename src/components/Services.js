import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';

const services = [
  {
    id: 1,
    title: 'Full Stack Web Development',
    description:
      'Building high-quality, scalable web applications using the MERN stack and modern frameworks to showcase products and power business workflows.',
    bullets: [
      'React.js, Node.js & Express.js applications',
      'RESTful API design & JWT authentication',
      'Database design with MySQL & MongoDB',
      'Responsive, mobile-first UI development',
    ],
    image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=80',
    alt: 'Full Stack Development',
  },
  {
    id: 2,
    title: 'Machine Learning & AI',
    description:
      'Developing intelligent ML systems using Python and TensorFlow, from data preprocessing through model training to production-ready deployment.',
    bullets: [
      'TensorFlow & Scikit-learn model development',
      'Feature engineering & hyperparameter optimization',
      'Data analysis with Pandas & NumPy',
      'Android ML integration for on-device inference',
    ],
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
    alt: 'Machine Learning',
  },
  {
    id: 3,
    title: 'Database Engineering',
    description:
      'Designing optimized relational and NoSQL database schemas, writing complex queries, and improving data retrieval performance for enterprise systems.',
    bullets: [
      'MySQL schema design & query optimization',
      'MongoDB data modeling & indexing strategies',
      'Data integrity validation & audit logging',
      '40%+ performance improvements on large datasets',
    ],
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80',
    alt: 'Database Engineering',
  },
  {
    id: 4,
    title: 'Mobile App Development',
    description:
      'Creating native Android applications with seamless UX and ML integration for real-time intelligent features on-device.',
    bullets: [
      'Native Android development with Kotlin',
      'ML model integration & on-device inference',
      'RESTful API consumption',
      'Material Design UI/UX patterns',
    ],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    alt: 'Mobile Development',
  },
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-container">

        {/* Section heading */}
        <motion.div 
          className="services-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="services-label">What I Do</h2>
          <h1 className="services-heading">Skills &amp; Services</h1>
        </motion.div>

        {/* Alternating rows — exactly like cloud99x services page */}
        {services.map((svc, i) => (
          <motion.div
            key={svc.id}
            className={`service-row ${i % 2 === 1 ? 'service-row--reverse' : ''}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* Text block */}
            <div className="service-text">
              <h2 className="service-title">{svc.title}</h2>
              <p className="service-description">{svc.description}</p>
              <ul className="service-bullets">
                {svc.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            </div>

            {/* Image block */}
            <div className="service-image-wrapper">
              <div className="service-image-inner">
                <img src={svc.image} alt={svc.alt} className="service-image" />
                <div className="service-image-overlay" />
              </div>
            </div>
          </motion.div>
        ))}

        {/* Technologies Grid — cloud99x exact */}
        <div className="tech-grid-section">
          <motion.h2 
            className="tech-grid-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Technologies
          </motion.h2>
          <div className="tech-grid">
            {[
              { name: 'JavaScript', emoji: '🟨' },
              { name: 'Python', emoji: '🐍' },
              { name: 'Java', emoji: '☕' },
              { name: 'TypeScript', emoji: '🔷' },
              { name: 'React.js', emoji: '⚛️' },
              { name: 'Node.js', emoji: '💚' },
              { name: 'Spring Boot', emoji: '🍃' },
              { name: 'MySQL', emoji: '🗄️' },
              { name: 'MongoDB', emoji: '🍃' },
              { name: 'Docker', emoji: '🐳' },
              { name: 'AWS', emoji: '☁️' },
              { name: 'Android', emoji: '🤖' },
              { name: 'TensorFlow', emoji: '🧠' },
              { name: 'Git', emoji: '🔀' },
              { name: 'Postman', emoji: '📮' },
              { name: 'Linux', emoji: '🐧' },
              { name: 'REST APIs', emoji: '🔗' },
              { name: 'Kotlin', emoji: '📱' },
            ].map((tech, i) => (
              <div key={i} className="tech-grid-item">
                <span className="tech-grid-emoji">{tech.emoji}</span>
                <p className="tech-grid-name">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
