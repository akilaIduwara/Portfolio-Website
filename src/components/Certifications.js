import React from 'react';
import { motion } from 'framer-motion';
import './Certifications.css';

const linkedinCerts = [
  { name: "Learning C++", url: "https://www.linkedin.com/learning/certificates/78eb7c4d0d099d460a2794a03202689b4cf950c40e4365aecf2e2b456f1e3dbc" },
  { name: "Level Up: C++", url: "https://www.linkedin.com/learning/certificates/be1b7e605e60bce7fc67b6b878d47d05dbe5940ec2caf2dc52cee8aa687d3f71" },
  { name: "OOP with C++", url: "#" },
  { name: "C++ Advanced Concepts", url: "#" },
  { name: "AWS Cloud Practitioner Prep", url: "#" },
  { name: "AWS Essential Training", url: "#" },
  { name: "AI Foundations: Machine Learning", url: "#" },
  { name: "Python Development Professional", url: "#" },
  { name: "Learning REST APIs", url: "#" },
  { name: "Spring Boot 2.0 Essential Training", url: "#" },
];

const udemyCerts = [
  { name: "Java Masterclass 2025 (130+ Hours)", url: "https://www.udemy.com/certificate/UC-170be36a-5072-4be4-b5d0-48277d3793f9/" },
  { name: "Beginning C++ Programming – Beginner to Beyond", url: "https://www.udemy.com/certificate/UC-32ca3880-1bff-4e40-954a-2a1457af7ffa/" },
  { name: "HTML – Complete Guide for Beginners", url: "#" },
  { name: "SQL Bootcamp with MySQL, PHP & Python", url: "#" },
];

const achievements = [
  { name: "GitHub Foundations", description: "Git version control and GitHub workflows certification" },
  {
    name: "Hult Prize 2025 – On-Campus Program",
    description: "LumiStone: ML-powered app detecting underground water, gold & gems. Built Android integration for real-time detection.",
    url: "https://drive.google.com/file/d/1Ncjq7yi9vP9Kg7OPk6vzYqPV4hPY5C2U/view",
  },
];

const Certifications = () => (
  <section id="certifications" className="certs-section">
    <div className="certs-container">

      <motion.div 
        className="certs-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="certs-label">Credentials</h2>
        <h1 className="certs-heading">Certifications &amp; Achievements</h1>
      </motion.div>

      <div className="certs-grid">

        {/* LinkedIn Learning */}
        <motion.div 
          className="cert-group"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="cert-group-header">
            <span className="cert-group-icon">🔗</span>
            <h3>LinkedIn Learning</h3>
            <span className="cert-count">{linkedinCerts.length}</span>
          </div>
          <div className="cert-list">
            {linkedinCerts.map((c, i) => (
              <a key={i} href={c.url} target="_blank" rel="noopener noreferrer" className="cert-item">
                <span className="cert-check">🏅</span>
                <span>{c.name}</span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Udemy + Achievements */}
        <motion.div 
          className="cert-group-col"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="cert-group">
            <div className="cert-group-header">
              <span className="cert-group-icon purple-icon">🎓</span>
              <h3>Udemy</h3>
              <span className="cert-count">{udemyCerts.length}</span>
            </div>
            <div className="cert-list">
              {udemyCerts.map((c, i) => (
                <a key={i} href={c.url} target="_blank" rel="noopener noreferrer" className="cert-item">
                  <span className="cert-check">🏅</span>
                  <span>{c.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="cert-group">
            <div className="cert-group-header">
              <span className="cert-group-icon gold-icon">🏆</span>
              <h3>Competitions &amp; Other</h3>
            </div>
            <div className="cert-list">
              {achievements.map((a, i) => (
                <div key={i} className="cert-item achieve-item">
                  <div className="achieve-top">
                    <span className="cert-check">🏆</span>
                    <strong>{a.name}</strong>
                  </div>
                  {a.description && <p className="achieve-desc">{a.description}</p>}
                  {a.url && (
                    <a href={a.url} target="_blank" rel="noopener noreferrer" className="achieve-link">
                      View Certificate →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  </section>
);

export default Certifications;
