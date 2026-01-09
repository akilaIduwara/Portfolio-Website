# Portfolio Website - Akila Induwara

A modern, responsive portfolio website built with React, featuring dark/light mode toggle, smooth animations, and a beautiful UI.

## Features

- ✨ Modern, creative UI/UX design
- 🌓 Dark/Light mode toggle
- 📱 Fully responsive design
- ⚡ Smooth animations using Framer Motion
- 🎨 Beautiful gradients and transitions
- 📄 Complete CV details integration
- 🔗 Social media integration
- 📧 Contact form

## Technologies Used

- React 18
- Framer Motion (animations)
- React Icons
- CSS3 with CSS Variables
- Modern ES6+ JavaScript

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
Portfolio-Website/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── Akila2.jpg
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── Experience.js
│   │   ├── Projects.js
│   │   ├── Certifications.js
│   │   └── Contact.js
│   ├── context/
│   │   └── ThemeContext.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Sections

- **Hero**: Introduction with animated typing effect
- **About**: Personal information and education
- **Skills**: Technical skills with progress bars
- **Experience**: Professional work experience
- **Projects**: Featured projects with detailed modals
- **Certifications**: LinkedIn, Udemy certifications and achievements
- **Contact**: Contact form and social links

## Customization

### Theme Colors

Edit the CSS variables in `src/index.css` to customize colors:

```css
:root[data-theme="dark"] {
  --primary-color: #6a11cb;
  --secondary-color: #2575fc;
  --accent-color: #ff3e6c;
  /* ... */
}
```

### Profile Image

Replace `public/Akila2.jpg` with your own image.

## License

This project is open source and available under the MIT License.

