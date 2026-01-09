import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaLinkedin, FaCertificate, FaTrophy } from 'react-icons/fa';
import './Certifications.css';

const Certifications = () => {
  const certifications = {
    linkedin: [
      { name: "Learning C++", url: "https://www.linkedin.com/learning/certificates/78eb7c4d0d099d460a2794a03202689b4cf950c40e4365aecf2e2b456f1e3dbc?u=76664938" },
      { name: "Level Up: C++", url: "https://www.linkedin.com/learning/certificates/be1b7e605e60bce7fc67b6b878d47d05dbe5940ec2caf2dc52cee8aa687d3f71?u=76664938" },
      { name: "Object-Oriented Programming with C++", url: "https://www.linkedin.com/learning/certificates/c3ceec784523b8be0155e9904a65f6df01f682193eee30c48db6e12a6c3ff81c?u=76664938" },
      { name: "C++ Development: Advanced Concepts, Lambda Expressions, and Best Practices", url: "https://www.linkedin.com/learning/certificates/75e8ac853198ae47a539d4214c856dd8bc8d673509bd2319c0c17e21da01c17c?u=76664938" },
      { name: "AWS Certified Cloud Practitioner (CLF-C02) Cert Prep: 1 Cloud Concepts", url: "https://www.linkedin.com/learning/certificates/8f3f5f5cae55c1632c305acfa308319f313941095b04e523f12aacecdfecc1af?u=76664938" },
      { name: "AWS Essential Training for Developers", url: "https://www.linkedin.com/learning/certificates/403bb7053ddf49330dbafcc9b2286bb3f2f01182dde01b3b48523477c1be352f?u=76664938" },
      { name: "Artificial Intelligence Foundations: Machine Learning", url: "https://www.linkedin.com/learning/certificates/cf9412a1c980a8d17b3741a67fc76d0d7a5d547715d824ef3e3156a3ca5eb62b?u=76664938" },
      { name: "Python Development Professional Certification", url: "https://www.linkedin.com/learning/certificates/e9389c0d949d382dda066e8badd6a717d234b673d1fe9e14c6fec8f87d791e59?u=76664938" },
      { name: "Learning REST APIs", url: "https://www.linkedin.com/learning/certificates/a27f14e2f3a47bc1173b457b8bbca8789d867d9d2536c5918ae4d01c98e913d0?u=76664938" },
      { name: "Spring Boot 2.0 Essential Training", url: "https://www.linkedin.com/learning/certificates/75e8ac853198ae47a539d4214c856dd8bc8d673509bd2319c0c17e21da01c17c?u=76664938" }
    ],
    udemy: [
      { name: "Java Masterclass 2025 (130+ Hours)", url: "https://www.udemy.com/certificate/UC-170be36a-5072-4be4-b5d0-48277d3793f9/" },
      { name: "Beginning C++ Programming - From Beginner to Beyond", url: "https://www.udemy.com/certificate/UC-32ca3880-1bff-4e40-954a-2a1457af7ffa/" },
      { name: "HTML - The Complete Guide to HTML for Beginners", url: "https://www.udemy.com/certificate/UC-2c452b21-bb48-482a-9224-b8f34052abea/" },
      { name: "SQL Bootcamp with MySQL, PHP & Python", url: "https://www.udemy.com/certificate/UC-758122e9-95da-490a-a4e0-5045eff5ae01/" }
    ],
    others: [
      { 
        name: "GitHub Foundations", 
        description: "Git version control and GitHub workflows"
      },
      {
        name: "Hult Prize 2025 – On-Campus Program",
        description: "Participated in the Hult Prize 2025 On-Campus Program with LumiStone, a project using ML, ANN, and Deep Learning to detect underground water, gold, and gems. Developed an Android app for real-time detection and analysis.",
        url: "https://drive.google.com/file/d/1Ncjq7yi9vP9Kg7OPk6vzYqPV4hPY5C2U/view"
      }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
        </motion.div>

        <motion.div
          className="certifications-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="cert-section" variants={itemVariants}>
            <div className="cert-section-header">
              <FaLinkedin className="cert-section-icon" />
              <h3>LinkedIn Learning</h3>
            </div>
            <div className="cert-list">
              {certifications.linkedin.map((cert, index) => (
                <motion.a
                  key={index}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-item"
                  whileHover={{ x: 10, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaCertificate className="cert-icon" />
                  <span>{cert.name}</span>
                  <FaAward className="cert-badge" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div className="cert-section" variants={itemVariants}>
            <div className="cert-section-header">
              <FaCertificate className="cert-section-icon" />
              <h3>Udemy</h3>
            </div>
            <div className="cert-list">
              {certifications.udemy.map((cert, index) => (
                <motion.a
                  key={index}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-item"
                  whileHover={{ x: 10, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaCertificate className="cert-icon" />
                  <span>{cert.name}</span>
                  <FaAward className="cert-badge" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div className="cert-section" variants={itemVariants}>
            <div className="cert-section-header">
              <FaTrophy className="cert-section-icon" />
              <h3>Competitions & Other</h3>
            </div>
            <div className="cert-list">
              {certifications.others.map((cert, index) => (
                <motion.div
                  key={index}
                  className="cert-item achievement-item"
                  whileHover={{ x: 10, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaTrophy className="cert-icon" />
                  <div className="achievement-content">
                    <span className="achievement-name">{cert.name}</span>
                    {cert.description && (
                      <p className="achievement-description">{cert.description}</p>
                    )}
                  </div>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Certificate
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;

