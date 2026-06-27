import React from 'react';
import './TechMarquee.css';
import {
  SiJavascript, SiPython, SiReact, SiNodedotjs, SiMysql,
  SiMongodb, SiDocker, SiAmazonaws, SiSpring, SiTypescript,
  SiGit, SiAndroid, SiTensorflow, SiPostman
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const technologies = [
  { icon: <SiJavascript />, name: 'JavaScript', color: '#f7df1e' },
  { icon: <SiPython />, name: 'Python', color: '#3776ab' },
  { icon: <SiReact />, name: 'React', color: '#61dafb' },
  { icon: <FaJava />, name: 'Java', color: '#ed8b00' },
  { icon: <SiNodedotjs />, name: 'Node.js', color: '#339933' },
  { icon: <SiSpring />, name: 'Spring Boot', color: '#6db33f' },
  { icon: <SiMysql />, name: 'MySQL', color: '#4479a1' },
  { icon: <SiMongodb />, name: 'MongoDB', color: '#47a248' },
  { icon: <SiTypescript />, name: 'TypeScript', color: '#3178c6' },
  { icon: <SiDocker />, name: 'Docker', color: '#2496ed' },
  { icon: <SiAmazonaws />, name: 'AWS', color: '#ff9900' },
  { icon: <SiGit />, name: 'Git', color: '#f05032' },
  { icon: <SiAndroid />, name: 'Android', color: '#3ddc84' },
  { icon: <SiTensorflow />, name: 'TensorFlow', color: '#ff6f00' },
  { icon: <SiPostman />, name: 'Postman', color: '#ff6c37' },
];

const TechMarquee = () => {
  // Duplicate for seamless loop
  const all = [...technologies, ...technologies];

  return (
    <div className="marquee-section">
      <div className="marquee-track-wrapper">
        <div className="marquee-track">
          {all.map((tech, idx) => (
            <div className="marquee-item" key={idx}>
              <span className="marquee-icon" style={{ color: tech.color }}>
                {tech.icon}
              </span>
              <span className="marquee-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechMarquee;
