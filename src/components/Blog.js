import React from 'react';
import { motion } from 'framer-motion';
import './Blog.css';

const blogPosts = [
  {
    id: 1,
    title: 'The Rising Importance of Cybersecurity in the Modern Workplace',
    author: 'Chamath Anjula',
    category: 'Cyber Security',
    date: '12/12/2024',
    image: 'https://cdn.sanity.io/images/fddwno7f/production/2e0a4818664e03ff325c3c48ece10fce2793a770-1920x1080.png',
  },
  {
    id: 2,
    title: 'Exploring Natural Language Processing (NLP)',
    author: 'Thisuli Amanethmi',
    category: 'Data Science',
    date: '12/11/2024',
    image: 'https://cdn.sanity.io/images/fddwno7f/production/e7dc6329632ff3a862d5530115d52a3c45000d31-1920x1080.png',
  },
  {
    id: 3,
    title: 'Unlocking the Future with Blockchain and Web 3.0 Consultancy',
    author: 'Aasif Shakoor',
    category: 'Blockchain & Web 3.0',
    date: '12/11/2024',
    image: 'https://cdn.sanity.io/images/fddwno7f/production/919609843a9ef2c39a826234168f97c0bdcdbc3d-1920x1080.png',
  },
];

const Blog = () => {
  return (
    <section id="blog" className="blog-section">
      <div className="blog-container">
        
        {/* Header */}
        <motion.div 
          className="blog-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="blog-label">Publications</span>
          <h2 className="blog-heading">Our Blogs</h2>
        </motion.div>

        {/* Scrollable Row */}
        <div className="blog-scroll-wrapper">
          {blogPosts.map((post, idx) => (
            <motion.div 
              key={post.id}
              className="blog-card-wrapper"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <div className="blog-card">
                {/* Image */}
                <div className="blog-card-img-holder">
                  <img src={post.image} alt={post.title} className="blog-card-img" />
                  <div className="blog-card-category">{post.category}</div>
                </div>

                {/* Metadata */}
                <div className="blog-card-meta">
                  <span className="blog-card-author">{post.author}</span>
                  <span className="blog-card-dot">•</span>
                  <span className="blog-card-date">{post.date}</span>
                </div>

                {/* Title */}
                <h3 className="blog-card-title">{post.title}</h3>
                
                {/* Action */}
                <a href="#contact" className="blog-card-link">
                  Read Article <span className="arrow">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blog;
