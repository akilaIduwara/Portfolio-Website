import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll detection to add blur/glass effect like cloud99x
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <>
      {/* ── DESKTOP NAVBAR ── */}
      <nav className={`navbar-desktop ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar-inner">
          {/* Logo */}
          <a href="#home" className="navbar-logo" onClick={() => scrollToSection('home')}>
            <img src="/imges/logo-main.png" alt="Akila Induwara" />
          </a>

          {/* Links with hover dropdowns exactly like cloud99x */}
          <div className="navbar-links">
            <a href="#home" className="navbar-link" onClick={() => scrollToSection('home')}>
              Home
            </a>

            {/* Dropdown: Services */}
            <div className="navbar-item-wrapper">
              <button className="navbar-link dropdown-trigger" onClick={() => scrollToSection('services')}>
                Services
                <span className="dropdown-arrow">▼</span>
              </button>
              <div className="navbar-dropdown">
                <div className="dropdown-grid">
                  <a href="#services" className="dropdown-item" onClick={() => scrollToSection('services')}>
                    <span className="item-emoji">🟨</span>
                    <div>
                      <h4>Web Development</h4>
                      <p>Full-stack React & Node.js apps</p>
                    </div>
                  </a>
                  <a href="#services" className="dropdown-item" onClick={() => scrollToSection('services')}>
                    <span className="item-emoji">🧠</span>
                    <div>
                      <h4>AI & Machine Learning</h4>
                      <p>TensorFlow and smart solutions</p>
                    </div>
                  </a>
                  <a href="#services" className="dropdown-item" onClick={() => scrollToSection('services')}>
                    <span className="item-emoji">🗄️</span>
                    <div>
                      <h4>Database Engineering</h4>
                      <p>Schema design & query tuning</p>
                    </div>
                  </a>
                  <a href="#services" className="dropdown-item" onClick={() => scrollToSection('services')}>
                    <span className="item-emoji">🤖</span>
                    <div>
                      <h4>Mobile Development</h4>
                      <p>Native Android & Kotlin apps</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Dropdown: Portfolio */}
            <div className="navbar-item-wrapper">
              <button className="navbar-link dropdown-trigger" onClick={() => scrollToSection('projects')}>
                Portfolio
                <span className="dropdown-arrow">▼</span>
              </button>
              <div className="navbar-dropdown">
                <div className="dropdown-grid">
                  <a href="#projects" className="dropdown-item" onClick={() => scrollToSection('projects')}>
                    <span className="item-emoji">🏢</span>
                    <div>
                      <h4>RealEstatePro</h4>
                      <p>Property listing platform</p>
                    </div>
                  </a>
                  <a href="#projects" className="dropdown-item" onClick={() => scrollToSection('projects')}>
                    <span className="item-emoji">🚨</span>
                    <div>
                      <h4>SLPFES Support</h4>
                      <p>Police disaster emergency system</p>
                    </div>
                  </a>
                  <a href="#projects" className="dropdown-item" onClick={() => scrollToSection('projects')}>
                    <span className="item-emoji">💼</span>
                    <div>
                      <h4>GlobalEHelp</h4>
                      <p>Business support system</p>
                    </div>
                  </a>
                  <a href="#projects" className="dropdown-item" onClick={() => scrollToSection('projects')}>
                    <span className="item-emoji">💎</span>
                    <div>
                      <h4>LumiStone Detection</h4>
                      <p>AI resource detection system</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Dropdown: Company */}
            <div className="navbar-item-wrapper">
              <button className="navbar-link dropdown-trigger" onClick={() => scrollToSection('about')}>
                Company
                <span className="dropdown-arrow">▼</span>
              </button>
              <div className="navbar-dropdown">
                <div className="dropdown-grid">
                  <a href="#about" className="dropdown-item" onClick={() => scrollToSection('about')}>
                    <span className="item-emoji">ℹ️</span>
                    <div>
                      <h4>About Me</h4>
                      <p>My background and mission</p>
                    </div>
                  </a>
                  <a href="#experience" className="dropdown-item" onClick={() => scrollToSection('experience')}>
                    <span className="item-emoji">📈</span>
                    <div>
                      <h4>Experience</h4>
                      <p>My career achievements</p>
                    </div>
                  </a>
                  <a href="#certifications" className="dropdown-item" onClick={() => scrollToSection('certifications')}>
                    <span className="item-emoji">📜</span>
                    <div>
                      <h4>Certifications</h4>
                      <p>My professional credentials</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Dropdown: Blogs */}
            <div className="navbar-item-wrapper">
              <button className="navbar-link dropdown-trigger" onClick={() => scrollToSection('blog')}>
                Our Blogs
                <span className="dropdown-arrow">▼</span>
              </button>
              <div className="navbar-dropdown">
                <div className="dropdown-grid">
                  <a href="#blog" className="dropdown-item" onClick={() => scrollToSection('blog')}>
                    <span className="item-emoji">🔒</span>
                    <div>
                      <h4>Cyber Security</h4>
                      <p>Importance in the workplace</p>
                    </div>
                  </a>
                  <a href="#blog" className="dropdown-item" onClick={() => scrollToSection('blog')}>
                    <span className="item-emoji">🐍</span>
                    <div>
                      <h4>Data Science</h4>
                      <p>Natural Language Processing</p>
                    </div>
                  </a>
                  <a href="#blog" className="dropdown-item" onClick={() => scrollToSection('blog')}>
                    <span className="item-emoji">⛓️</span>
                    <div>
                      <h4>Blockchain</h4>
                      <p>Web 3.0 & consultancy</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact button */}
          <div className="navbar-contact-wrapper">
            <button className="navbar-contact-btn" onClick={() => scrollToSection('contact')}>
              <div className="btn-sweep" />
              <div className="btn-content">
                <span className="btn-text">Contact</span>
                <svg viewBox="0 0 256 256" fill="currentColor" width="18" height="18" className="btn-icon">
                  <path d="M230.14,25.86a20,20,0,0,0-19.57-5.11l-.22.07L18.44,79a20,20,0,0,0-3.06,37.25L99,157l40.71,83.65a19.81,19.81,0,0,0,18,11.38c.57,0,1.15,0,1.73-.07A19.82,19.82,0,0,0,177,237.56L235.18,45.65a1.42,1.42,0,0,0,.07-.22A20,20,0,0,0,230.14,25.86ZM156.91,221.07l-34.37-70.64,46-45.95a12,12,0,0,0-17-17l-46,46L34.93,99.09,210,46Z" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* ── MOBILE NAVBAR ── */}
      <nav className="navbar-mobile">
        {/* Glassmorphism pill logo */}
        <a href="#home" className="mobile-logo-pill" onClick={() => scrollToSection('home')}>
          <img src="/imges/logo-main.png" alt="Akila Induwara" />
        </a>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        {/* Mobile menu overlay */}
        {menuOpen && (
          <div className="mobile-menu-overlay" onClick={() => setMenuOpen(false)}>
            <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
              <button className="mobile-close" onClick={() => setMenuOpen(false)}>✕</button>
              <div className="mobile-menu-logo">
                <img src="/imges/logo-main.png" alt="Akila Induwara" />
              </div>
              <nav className="mobile-nav-links">
                <a href="#home" className="mobile-nav-link" onClick={() => scrollToSection('home')}>Home</a>
                <a href="#about" className="mobile-nav-link" onClick={() => scrollToSection('about')}>About Us</a>
                <a href="#services" className="mobile-nav-link" onClick={() => scrollToSection('services')}>Services</a>
                <a href="#projects" className="mobile-nav-link" onClick={() => scrollToSection('projects')}>Portfolio</a>
                <a href="#blog" className="mobile-nav-link" onClick={() => scrollToSection('blog')}>Our Blogs</a>
                <a href="#contact" className="mobile-nav-link" onClick={() => scrollToSection('contact')}>Contact</a>
              </nav>
            </div>
          </div>
        )}

        {/* Floating contact button bottom-right */}
        <button className="mobile-fab" onClick={() => scrollToSection('contact')} aria-label="Contact">
          <svg viewBox="0 0 256 256" fill="currentColor" width="24" height="24">
            <path d="M230.14,25.86a20,20,0,0,0-19.57-5.11l-.22.07L18.44,79a20,20,0,0,0-3.06,37.25L99,157l40.71,83.65a19.81,19.81,0,0,0,18,11.38c.57,0,1.15,0,1.73-.07A19.82,19.82,0,0,0,177,237.56L235.18,45.65a1.42,1.42,0,0,0,.07-.22A20,20,0,0,0,230.14,25.86ZM156.91,221.07l-34.37-70.64,46-45.95a12,12,0,0,0-17-17l-46,46L34.93,99.09,210,46Z" />
          </svg>
        </button>
      </nav>
    </>
  );
};

export default Navbar;
