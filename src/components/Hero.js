import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaGithub, FaLinkedin, FaInstagram, FaUser } from 'react-icons/fa';
import { HiMail, HiPhone } from 'react-icons/hi';
import './Hero.css';

// Profile Image Component with fallback
const ProfileImage = () => {
  const [imgSrc, setImgSrc] = useState('/profile.jpg');
  const [hasError, setHasError] = useState(false);

  const imagePaths = [
    '/profile.jpg',
    '/profile.jpg.jpg',
    '/profile.png',
    '/akila.jpg',
    '/Akila2.jpg',
    '/akila-profile.jpg',
    '/photo.jpg'
  ];

  const handleError = (e) => {
    const currentIndex = imagePaths.indexOf(imgSrc);
    if (currentIndex < imagePaths.length - 1) {
      // Try next path
      setImgSrc(imagePaths[currentIndex + 1]);
    } else {
      // All paths failed, show placeholder
      setHasError(true);
    }
  };

  if (hasError) {
    return (
      <div className="hero-image placeholder-image">
        <FaUser />
        <p>Add profile.jpg to public folder</p>
      </div>
    );
  }

  return (
    <img 
      src={imgSrc}
      alt="Akila Induwara" 
      className="hero-image"
      onError={handleError}
      onLoad={() => setHasError(false)}
    />
  );
};

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  
  const texts = [
    'Full Stack Developer',
    'Machine Learning Enthusiast',
    'Software Engineer',
    'AI/ML Developer'
  ];

  useEffect(() => {
    const typeEffect = () => {
      const current = texts[textIndex];
      
      if (!isDeleting) {
        if (currentText.length < current.length) {
          setCurrentText(current.substring(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(current.substring(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    };

    const timeout = setTimeout(typeEffect, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, textIndex, texts]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
    <section id="home" className="hero">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-text" variants={itemVariants}>
            <motion.h3 
              className="hero-greeting"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Hello, I'm
            </motion.h3>
            
            <motion.h1 
              className="hero-name"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="gradient-text">Akila Induwara</span>
              <br />
              Kaluarachchi
            </motion.h1>

            <motion.div 
              className="hero-profession"
              variants={itemVariants}
            >
              <span>I'm a </span>
              <span className="typing-text">{currentText}</span>
              <span className="cursor">|</span>
            </motion.div>

            <motion.p 
              className="hero-description"
              variants={itemVariants}
            >
              Computer Science undergraduate with hands-on experience in full-stack development, 
              machine learning, and enterprise systems. Skilled in building scalable web applications, 
              developing RESTful APIs, optimizing relational databases, and deploying cloud-based solutions.
            </motion.p>

            <motion.div 
              className="hero-contact-info"
              variants={itemVariants}
            >
              <a href="mailto:k.a.akilainduwara@gmail.com" className="contact-link">
                <HiMail /> k.a.akilainduwara@gmail.com
              </a>
              <a href="tel:+94712025476" className="contact-link">
                <HiPhone /> +94 71 202 5476
              </a>
            </motion.div>

            <motion.div 
              className="hero-buttons"
              variants={itemVariants}
            >
              <motion.a
                href="#projects"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="https://drive.google.com/file/d/1gHShnNyw8FpXNYwhk38ane7NWMmg2UjQ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload /> Download CV
              </motion.a>
            </motion.div>

            <motion.div 
              className="hero-social"
              variants={itemVariants}
            >
              <motion.a
                href="https://github.com/akilaIduwara"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/akila-induwara/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/akil_induwara"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaInstagram />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="hero-image-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="hero-image-wrapper">
              <motion.div
                className="floating-shapes"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
              </motion.div>
              <ProfileImage />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="scroll-arrow"></div>
      </motion.div>
    </section>
  );
};

export default Hero;

