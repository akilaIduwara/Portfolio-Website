import React from 'react';
import { motion } from 'framer-motion';
import {
  SiPython, SiJavascript, SiTypescript, SiCplusplus,
  SiReact, SiNodedotjs, SiExpress, SiSpring, SiMongodb, SiMysql,
  SiDocker, SiAmazonaws, SiGit, SiPostman, SiTensorflow, SiAndroid
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Java", icon: <FaJava />, level: 90 },
        { name: "Python", icon: <SiPython />, level: 85 },
        { name: "JavaScript", icon: <SiJavascript />, level: 85 },
        { name: "TypeScript", icon: <SiTypescript />, level: 75 },
        { name: "SQL", icon: <SiMysql />, level: 90 },
        { name: "C++", icon: <SiCplusplus />, level: 80 }
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React.js", icon: <SiReact />, level: 90 },
        { name: "Node.js", icon: <SiNodedotjs />, level: 85 },
        { name: "Express.js", icon: <SiExpress />, level: 85 },
        { name: "Spring Boot", icon: <SiSpring />, level: 85 },
        { name: "Android", icon: <SiAndroid />, level: 75 }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", icon: <SiMysql />, level: 90 },
        { name: "MongoDB", icon: <SiMongodb />, level: 85 }
      ]
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: "Git", icon: <SiGit />, level: 90 },
        { name: "Docker", icon: <SiDocker />, level: 75 },
        { name: "AWS", icon: <SiAmazonaws />, level: 70 },
        { name: "Postman", icon: <SiPostman />, level: 85 }
      ]
    },
    {
      title: "Machine Learning",
      skills: [
        { name: "TensorFlow", icon: <SiTensorflow />, level: 80 },
        { name: "Scikit-learn", icon: <SiPython />, level: 85 },
        { name: "Pandas", icon: <SiPython />, level: 85 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.07 }
    }
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
    }
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        {/* Header */}
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">What I Know</span>
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="section-underline" />
        </motion.div>

        <motion.div
          className="skills-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category"
              variants={itemVariants}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-card"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.15 }}
                  >
                    <div className="skill-icon">{skill.icon}</div>
                    <div className="skill-info">
                      <h4 className="skill-name">{skill.name}</h4>
                      <div className="skill-bar-container">
                        <motion.div
                          className="skill-bar"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: skillIndex * 0.08, ease: [0.4, 0, 0.2, 1] }}
                        />
                      </div>
                    </div>
                    <span className="skill-level">{skill.level}%</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Core CS Concepts */}
        <motion.div
          className="core-skills"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="core-skills-title">Core CS Concepts</h3>
          <div className="core-skills-tags">
            {[
              "OOP", "Data Structures", "Algorithms", "DBMS",
              "SDLC", "Agile Methodologies", "REST APIs", "Query Optimization",
              "Design Patterns", "System Design"
            ].map((skill, index) => (
              <motion.span
                key={index}
                className="core-skill-tag"
                whileHover={{ scale: 1.08, y: -2 }}
                transition={{ duration: 0.15 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
