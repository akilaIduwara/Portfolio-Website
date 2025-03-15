// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Remove active class from all links
    document.querySelectorAll('nav ul li a').forEach(link => {
      link.classList.remove('active');
    });
    
    // Add active class to clicked link
    this.classList.add('active');
    
    // Smooth scroll to section
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
}

// Highlight active section on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav ul li a');
  
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
  
  // Add background to navbar when scrolled
  const navbar = document.querySelector('nav');
  if (window.scrollY > 50) {
    navbar.style.padding = '0.7rem 0';
    navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
  } else {
    navbar.style.padding = '1rem 0';
    navbar.style.boxShadow = 'none';
  }
  
  // Animate skill bars when in viewport
  const skillBars = document.querySelectorAll('.skill-bar');
  skillBars.forEach(bar => {
    const barPosition = bar.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    
    if (barPosition < screenPosition) {
      bar.style.width = bar.parentElement.getAttribute('data-progress') || bar.style.width;
    }
  });
});

// Project Details Popup
function showProjectDetails(project) {
  const popup = document.getElementById('project-popup');
  const title = document.getElementById('project-title');
  const description = document.getElementById('project-description');
  const techStack = document.getElementById('project-tech-stack');
  const githubLink = document.getElementById('project-github');
  
  // Clear existing tech stack
  techStack.innerHTML = '';

  // Set project details based on the project clicked
  switch (project) {
    case 'LumiStone':
      title.textContent = 'LumiStone - AI-Powered Resource Detection';
      description.textContent = 'Developed the backend machine learning system for LumiStone, a project designed to detect underground resources such as water, gold, and gems. Implemented predictive models using LightGBM, ANN, Random Forest, and XGBoost.';
      
      // Add tech stack tags
      const lumiTechs = ['Python', 'Machine Learning', 'LightGBM', 'ANN', 'Random Forest', 'XGBoost'];
      lumiTechs.forEach(tech => {
        const span = document.createElement('span');
        span.textContent = tech;
        techStack.appendChild(span);
      });
      
      githubLink.href = 'https://github.com/akilaiduwara/lumistone';
      break;
    case 'HandSignal':
      title.textContent = 'Hand Signal Detection Using SSD';
      description.textContent = 'Built a real-time hand gesture recognition system using a pre-trained SSD model on Ubuntu. Detected five gestures ("I Love You," "Like," "Unlike," "Bye," and "Hello") via webcam input.';
      
      // Add tech stack tags
      const handTechs = ['Computer Vision', 'Python', 'TensorFlow', 'SSD', 'OpenCV'];
      handTechs.forEach(tech => {
        const span = document.createElement('span');
        span.textContent = tech;
        techStack.appendChild(span);
      });
      
      githubLink.href = 'https://github.com/akilaiduwara/hand-signal-detection';
      break;
    case 'TicketBooking':
      title.textContent = 'Ticket Booking System with Spring Boot and React';
      description.textContent = 'Developed a ticket booking system using Spring Boot for the backend and React for the frontend. Implemented multithreading to handle concurrent bookings.';
      
      // Add tech stack tags
      const ticketTechs = ['Java', 'Spring Boot', 'React', 'Multithreading', 'REST API', 'MySQL'];
      ticketTechs.forEach(tech => {
        const span = document.createElement('span');
        span.textContent = tech;
        techStack.appendChild(span);
      });
      
      githubLink.href = 'https://github.com/akilaiduwara/ticket-booking-system';
      break;
    case 'BreastCancer':
      title.textContent = 'Breast Cancer Mortality & Survival Prediction';
      description.textContent = 'Developed ML models to predict breast cancer mortality and survival periods using Logistic Regression, Naive Bayes, KNN, and Decision Trees.';
      
      // Add tech stack tags
      const cancerTechs = ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Logistic Regression', 'KNN', 'Decision Trees'];
      cancerTechs.forEach(tech => {
        const span = document.createElement('span');
        span.textContent = tech;
        techStack.appendChild(span);
      });
      
      githubLink.href = 'https://github.com/akilaiduwara/breast-cancer-prediction';
      break;
    case 'Bookstore':
      title.textContent = 'Bookstore Management System';
      description.textContent = 'Designed and implemented a RESTful API for a bookstore management system using JAX-RS and JSON.';
      
      // Add tech stack tags
      const bookstoreTechs = ['Java', 'JAX-RS', 'JSON', 'RESTful API'];
      bookstoreTechs.forEach(tech => {
        const span = document.createElement('span');
        span.textContent = tech;
        techStack.appendChild(span);
      });
      
      githubLink.href = 'https://github.com/akilaiduwara/bookstore-management';
      break;
    case 'ClientServer':
      title.textContent = 'Client-Server Architectures Coursework';
      description.textContent = 'Developed a RESTful API for a bookstore application as part of the Client-Server Architectures coursework. Implemented CRUD operations for books, authors, customers, carts, and orders using JAX-RS and JSON. Tested the API using Postman.';
      
      // Add tech stack tags
      const clientServerTechs = ['Java', 'JAX-RS', 'JSON', 'Postman', 'RESTful API'];
      clientServerTechs.forEach(tech => {
        const span = document.createElement('span');
        span.textContent = tech;
        techStack.appendChild(span);
      });
      
      githubLink.href = 'https://github.com/akilaiduwara/client-server-architectures';
      break;
  }
  
  // Show the popup
  popup.style.display = 'flex';

  // Close popup when clicking outside the content
  popup.addEventListener('click', (e) => {
    if (e.target === popup) {
      closeProjectDetails();
    }
  });
}

// Close Project Details Popup
function closeProjectDetails() {
  const popup = document.getElementById('project-popup');
  popup.style.display = 'none';
}

// Skill Details Popup
function showSkillDetails(skill) {
  const popup = document.getElementById('skill-popup');
  const title = document.getElementById('skill-title');
  const description = document.getElementById('skill-description');
  
  // Set skill details based on the skill clicked
  switch (skill) {
    case 'Java':
      title.textContent = 'Java';
      description.textContent = 'Proficient in Java programming, with experience in building desktop applications, RESTful APIs, and multithreaded systems.';
      break;
    case 'Python':
      title.textContent = 'Python';
      description.textContent = 'Experienced in Python for data analysis, machine learning, and backend development. Familiar with libraries like Pandas, NumPy, and Scikit-learn.';
      break;
    case 'MySQL':
      title.textContent = 'MySQL';
      description.textContent = 'Skilled in database design and management using MySQL. Experienced in writing complex queries and optimizing database performance.';
      break;
    case 'ReactJS':
      title.textContent = 'ReactJS';
      description.textContent = 'Proficient in building dynamic and responsive user interfaces using ReactJS. Familiar with state management and component-based architecture.';
      break;
    case 'Machine Learning':
      title.textContent = 'Machine Learning';
      description.textContent = 'Experienced in building and deploying machine learning models using Python and Scikit-learn. Familiar with supervised and unsupervised learning techniques.';
      break;
    case 'Spring Boot':
      title.textContent = 'Spring Boot';
      description.textContent = 'Proficient in building RESTful APIs and microservices using Spring Boot. Experienced in dependency injection and database integration.';
      break;
    case 'JAX-RS':
      title.textContent = 'JAX-RS';
      description.textContent = 'Proficient in building RESTful APIs using JAX-RS. Experienced in resource mapping, HTTP method handling, and exception handling.';
      break;
    case 'Postman':
      title.textContent = 'Postman';
      description.textContent = 'Skilled in API testing using Postman. Experienced in creating collections, running tests, and documenting API endpoints.';
      break;
  }
  
  // Show the popup
  popup.style.display = 'flex';

  // Close popup when clicking outside the content
  popup.addEventListener('click', (e) => {
    if (e.target === popup) {
      closeSkillDetails();
    }
  });
}

// Close Skill Details Popup
function closeSkillDetails() {
  const popup = document.getElementById('skill-popup');
  popup.style.display = 'none';
}

// Typing effect
const titles = ["Computer Science Undergraduate", "Machine Learning Enthusiast", "Software Developer"];
let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeText() {
  const currentTitle = titles[titleIndex];
  const typingElement = document.getElementById('typing-text');
  
  if (isDeleting) {
    typingElement.textContent = currentTitle.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 50;
  } else {
    typingElement.textContent = currentTitle.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 100;
  }

  if (!isDeleting && charIndex === currentTitle.length) {
    isDeleting = true;
    typingSpeed = 1000; // Pause at end
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    titleIndex = (titleIndex + 1) % titles.length;
    typingSpeed = 500; // Pause before starting new word
  }

  setTimeout(typeText, typingSpeed);
}

// Particle effect for profile animation
document.addEventListener('DOMContentLoaded', function() {
  const canvas = document.getElementById('particle-canvas');
  const ctx = canvas.getContext('2d');
  
  // Set canvas size
  canvas.width = 400;
  canvas.height = 400;
  
  // Particle system
  const particles = [];
  const particleCount = 100;
  const colors = ['#8a2be2', '#9370db', '#6a5acd', '#ba55d3', '#9932cc'];
  
  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 5 + 1;
      this.speedX = Math.random() * 3 - 1.5;
      this.speedY = Math.random() * 3 - 1.5;
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.opacity = Math.random() * 0.8 + 0.2;
    }
    
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      
      // Bounce off edges
      if (this.x < 0 || this.x > canvas.width) {
        this.speedX *= -1;
      }
      if (this.y < 0 || this.y > canvas.height) {
        this.speedY *= -1;
      }
      
      // Attract to center
      const dx = this.x - canvas.width / 2;
      const dy = this.y - canvas.height / 2;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance > 50 && distance < 150) {
        this.speedX -= dx * 0.0005;
        this.speedY -= dy * 0.0005;
      }
    }
    
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.opacity;
      ctx.fill();
      ctx.globalAlpha = 1;
    }
  }
  
  function init() {
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }
  
  function connectParticles() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          ctx.beginPath();
          ctx.strokeStyle = particles[i].color;
          ctx.globalAlpha = 0.2 * (1 - distance / 100);
          ctx.lineWidth = 1;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      }
    }
  }
  
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
    
    connectParticles();
    requestAnimationFrame(animate);
  }
  
  init();
  animate();
});

// Start animations when the page loads
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(typeText, 1000);
});

// Particles.js Initialization
particlesJS('particles-js', {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: '#e55', // Red-tinted particles
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000',
      },
      polygon: {
        nb_sides: 5,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#e55', // Red-tinted connecting lines
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'grab',
      },
      onclick: {
        enable: true,
        mode: 'push',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});