import React, { useState, useEffect } from 'react';
import './Hero.css';

const words = ['Web Applications', 'Mobile Apps', 'Intelligent AI Systems', 'Optimized Databases'];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [text, setText] = useState('');

  // Typewriter effect
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      // Pause at full word before backspacing
      const timeout = setTimeout(() => setReverse(true), 1500);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, reverse, index]);

  useEffect(() => {
    setText(words[index].substring(0, subIndex));
  }, [subIndex, index]);

  return (
    <section id="home" className="hero">
      {/* Gradient background */}
      <div className="hero-bg">
        {/* Concentric circles — cloud99x exact */}
        <div className="hero-circles">
          <div className="circle circle-1" />
          <div className="circle circle-2" />
          <div className="circle circle-3" />
        </div>
      </div>

      {/* Hero content — centered */}
      <div className="hero-content">
        <div className="hero-headline">
          <div className="hero-title-row">
            <span className="hero-title-white">Breaking</span>
            <span className="hero-title-blue">Boundaries</span>
          </div>
          <div className="hero-typewriter-row">
            <span className="typewriter-static">We construct </span>
            <span className="typewriter-dynamic">{text}</span>
            <span className="typewriter-cursor">|</span>
          </div>
          <p className="hero-subtitle">Where passion meets technical excellence</p>
        </div>

        <div className="hero-cta">
          <button 
            className="hero-btn"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Explore
          </button>
        </div>
      </div>

      {/* Wave separator — animated parallax waves */}
      <div className="hero-wave">
        <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z" />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.85)" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.65)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.4)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#ffffff" />
          </g>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
