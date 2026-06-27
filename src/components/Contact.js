import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:k.a.akilainduwara@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailto;
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">

      {/* Pre-footer CTA — cloud99x "Have a project in mind?" section */}
      <div className="contact-cta-block">
        <div className="contact-cta-overlay">
          <motion.h1 
            className="contact-cta-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Have a project in mind?
          </motion.h1>
          <motion.div 
            className="contact-cta-btn-wrapper"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <button
              className="contact-cta-btn"
              onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="cta-btn-text">Get Started</span>
              <span className="cta-btn-arrow">→</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div id="contact-form" className="contact-form-section">
        <div className="contact-inner">

          {/* Left — info */}
          <motion.div 
            className="contact-info-block"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="contact-info-label">Contact Us</h2>
            <h3 className="contact-info-heading">Let's Build Something Great Together</h3>
            <p className="contact-info-text">
              Whether you have a project idea, want to collaborate, or just want to connect — I'm always happy to hear from you.
            </p>

            <div className="contact-info-items">
              <div className="contact-info-item">
                <span className="info-icon">✉️</span>
                <div>
                  <p className="info-label">Email</p>
                  <a href="mailto:k.a.akilainduwara@gmail.com" className="info-value">k.a.akilainduwara@gmail.com</a>
                </div>
              </div>
              <div className="contact-info-item">
                <span className="info-icon">📱</span>
                <div>
                  <p className="info-label">Phone</p>
                  <a href="tel:+94712025476" className="info-value">+94 71 202 5476</a>
                </div>
              </div>
              <div className="contact-info-item">
                <span className="info-icon">📍</span>
                <div>
                  <p className="info-label">Location</p>
                  <span className="info-value">Colombo, Sri Lanka</span>
                </div>
              </div>
              <div className="contact-info-item">
                <span className="info-icon">⏰</span>
                <div>
                  <p className="info-label">Availability</p>
                  <span className="info-value">Open to opportunities</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.form 
            className="contact-form" 
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="cf-name">Name</label>
                <input id="cf-name" name="name" type="text" placeholder="Your name" value={form.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="cf-email">Email</label>
                <input id="cf-email" name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="cf-subject">Subject</label>
              <input id="cf-subject" name="subject" type="text" placeholder="Project inquiry" value={form.subject} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="cf-message">Message</label>
              <textarea id="cf-message" name="message" placeholder="Tell me about your project..." value={form.message} onChange={handleChange} required rows={6} />
            </div>
            <button type="submit" className="form-submit-btn">
              Send Message
              <svg viewBox="0 0 256 256" fill="currentColor" width="18" height="18">
                <path d="M230.14,25.86a20,20,0,0,0-19.57-5.11l-.22.07L18.44,79a20,20,0,0,0-3.06,37.25L99,157l40.71,83.65a19.81,19.81,0,0,0,18,11.38c.57,0,1.15,0,1.73-.07A19.82,19.82,0,0,0,177,237.56L235.18,45.65a1.42,1.42,0,0,0,.07-.22A20,20,0,0,0,230.14,25.86ZM156.91,221.07l-34.37-70.64,46-45.95a12,12,0,0,0-17-17l-46,46L34.93,99.09,210,46Z" />
              </svg>
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
