// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    // Remove active class from all links
    document.querySelectorAll('nav ul li a').forEach(link => link.classList.remove('active'));

    // Add active class to clicked link
    this.classList.add('active');

    // Smooth scroll to section
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
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

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
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
      ['Python', 'Machine Learning', 'LightGBM', 'ANN', 'Random Forest', 'XGBoost'].forEach(tech => {
        techStack.innerHTML += `<span>${tech}</span>`;
      });
      githubLink.href = 'https://github.com/Achira020811/Lumistone';
      break;

    case 'HandSignal':
      title.textContent = 'Hand Signal Detection Using SSD';
      description.textContent = 'Built a real-time hand gesture recognition system using a pre-trained SSD model on Ubuntu. Detected five gestures ("I Love You," "Like," "Unlike," "Bye," and "Hello") via webcam input.';
      ['Computer Vision', 'Python', 'TensorFlow', 'SSD', 'OpenCV'].forEach(tech => {
        techStack.innerHTML += `<span>${tech}</span>`;
      });
      githubLink.href = 'https://github.com/akilaIduwara/Real-Time-Object-Detection-Ubuntu';
      break;

    case 'TicketBooking':
      title.textContent = 'Ticket Booking System with Spring Boot and React';
      description.textContent = 'Developed a ticket booking system using Spring Boot for the backend and React for the frontend. Implemented multithreading to handle concurrent bookings.';
      ['Java', 'Spring Boot', 'React', 'Multithreading', 'REST API', 'MySQL'].forEach(tech => {
        techStack.innerHTML += `<span>${tech}</span>`;
      });
      githubLink.href = 'https://github.com/akilaIduwara/TicketBooking-WebApp-Backend-Springboot';
      break;

    case 'BreastCancer':
      title.textContent = 'Breast Cancer Mortality & Survival Prediction';
      description.textContent = 'Developed ML models to predict breast cancer mortality and survival periods using Logistic Regression, Naive Bayes, KNN, and Decision Trees.';
      ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Logistic Regression', 'KNN', 'Decision Trees'].forEach(tech => {
        techStack.innerHTML += `<span>${tech}</span>`;
      });
      githubLink.href = 'https://github.com/akilaiduwara/breast-cancer-prediction';
      break;

    case 'Bookstore':
      title.textContent = 'Bookstore Management System';
      description.textContent = 'Designed and implemented a RESTful API for a bookstore management system using JAX-RS and JSON.';
      ['Java', 'JAX-RS', 'JSON', 'RESTful API'].forEach(tech => {
        techStack.innerHTML += `<span>${tech}</span>`;
      });
      githubLink.href = '#';
      break;

    case 'SnakeGame':
      title.textContent = 'Snake Game (JavaSwing)';
      description.textContent = 'Developed a classic Snake game using Java Swing with game logic, collision detection, and score tracking. Implemented food generation, snake growth, and game-over conditions, designing a user-friendly interface with keyboard controls.';
      ['Java', 'Java Swing', 'Game Development'].forEach(tech => {
        techStack.innerHTML += `<span>${tech}</span>`;
      });
      githubLink.href = 'https://github.com/akilaIduwara/Snake_Game_JavaSwing'; // Update with the actual GitHub link
      break;

    case 'Calculator':
      title.textContent = 'Calculator Applications with Error Handling';
      description.textContent = 'Developed a calculator application with robust error handling and support for basic arithmetic operations. Implemented input validation and user-friendly error messages.';
      ['Java', 'Java Swing', 'Error Handling'].forEach(tech => {
        techStack.innerHTML += `<span>${tech}</span>`;
      });
      githubLink.href = 'https://github.com/akilaIduwara/CalculatorApplications_with-ErrorHandling-Java-C-'; // Update with the actual GitHub link
      break;

    default:
      title.textContent = 'Project Title';
      description.textContent = 'Project Description';
      githubLink.href = '#';
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

// Start animations when the page loads
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(typeText, 1000);
});

// Add this code to handle form submission
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form data
  const name = document.querySelector('input[type="text"]').value;
  const email = document.querySelector('input[type="email"]').value;
  const subject = document.querySelector('input[type="text"][placeholder="Subject"]').value;
  const message = document.querySelector('textarea').value;

  // Send email using EmailJS
  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    from_name: name,
    from_email: email,
    subject: subject,
    message: message
  })
  .then(function(response) {
    alert("Message sent successfully!"); // Show success message
    document.querySelector('form').reset(); // Reset the form
  }, function(error) {
    alert("Failed to send message. Please try again."); // Show error message
  });
});