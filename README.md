# 💼 Tanjum Kadakol - Portfolio

A modern, responsive portfolio website showcasing my work as a ReactJS Developer. Built with React, featuring dark/light mode, smooth animations, and a clean UI/UX design.

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](your-live-demo-url)
[![React](https://img.shields.io/badge/React-18.3.1-blue)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38bdf8)](https://tailwindcss.com/)

## ✨ Features

- **🎨 Modern UI/UX Design** - Clean, professional interface with smooth animations
- **🌓 Dark/Light Mode** - Toggle between themes with persistent preference
- **📱 Fully Responsive** - Works seamlessly on all devices
- **⚡ Fast Performance** - Optimized for speed with React and Vite
- **📧 Contact Form** - Integrated EmailJS for direct communication
- **🎯 Project Showcase** - Interactive project cards with detailed modals
- **📊 Stats & Achievements** - Animated counters and real achievements
- **🎭 Smooth Animations** - Typewriter effects and transitions

## 🛠️ Tech Stack

- **Frontend Framework:** React 18.3.1
- **Build Tool:** Vite 6.0.1
- **Styling:** Tailwind CSS 3.4.17
- **Routing:** React Router DOM 7.0.2
- **Icons:** Lucide React 0.468.0
- **Email Service:** EmailJS 4.4.1
- **Animations:** CSS3 & React Hooks

## 📦 Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/tanjum-portfolio.git
cd tanjum-portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up EmailJS**
   - Create an account at [EmailJS](https://www.emailjs.com/)
   - Get your Service ID, Template ID, and Public Key
   - Update the credentials in `src/views/Contact.jsx`

4. **Run the development server**
```bash
npm run dev
```

5. **Build for production**
```bash
npm run build
```

## 📂 Project Structure

```
tanjum-portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── react.svg
│   │   └── Tanjum Kadakol.pdf
│   ├── component/
│   │   ├── AboutPage/
│   │   │   ├── AboutHero.jsx
│   │   │   ├── AboutStats.jsx
│   │   │   ├── ExperienceTimeline.jsx
│   │   │   ├── ServicesOffered.jsx
│   │   │   └── SkillsSection.jsx
│   │   ├── HomePage/
│   │   │   ├── Banner.jsx
│   │   │   ├── BlogSection.jsx
│   │   │   ├── LetsConnectSection.jsx
│   │   │   ├── ProjectsSection.jsx
│   │   │   ├── TechStackSection.jsx
│   │   │   └── TestimonialsSection.jsx
│   │   ├── ProjectPage/
│   │   │   ├── HeroSection.jsx
│   │   │   └── ProjectExplorer.jsx
│   │   ├── Footer.jsx
│   │   └── Header.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── theme/
│   │   └── colors.js
│   ├── views/
│   │   ├── About.jsx
│   │   ├── Blogs.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   └── Projects.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Key Sections

### Home Page
- Hero banner with typing animation
- Quick stats overview
- Featured projects showcase
- Tech stack highlights
- Call-to-action sections

### About Page
- Professional introduction
- Experience timeline
- Skills and technologies
- Achievements and stats
- Services offered

### Projects Page
- Interactive project explorer
- Filter by category
- Grid and list view options
- Detailed project modals
- Live demo and GitHub links

### Contact Page
- Contact form with EmailJS
- Social media links
- Professional email
- Location information

## 🚀 Deployment

This project can be deployed on:
- **Vercel** (Recommended)

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

## 📧 Contact Configuration

To set up the contact form:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Copy your credentials
5. Update in `Contact.jsx`:
```javascript
emailjs.sendForm(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  form.current,
  'YOUR_PUBLIC_KEY'
)
```

## 🎨 Color Themes

The portfolio supports both dark and light themes:
- **Dark Mode:** Slate gray with cyan/teal accents
- **Light Mode:** Clean white with blue accents
- Persistent theme selection using localStorage

## 📱 Responsive Design

Fully responsive across all devices:
- **Desktop:** Full featured experience
- **Tablet:** Optimized layout
- **Mobile:** Touch-friendly interface

## 🔧 Customization

### Update Personal Information
- `src/component/HomePage/Banner.jsx` - Hero section
- `src/component/AboutPage/AboutHero.jsx` - About intro
- `src/component/AboutPage/ExperienceTimeline.jsx` - Work history

### Update Projects
- `src/component/HomePage/ProjectsSection.jsx` - Home projects
- `src/component/ProjectPage/ProjectExplorer.jsx` - All projects

### Update Resume
- Replace `src/assets/Tanjum Kadakol.pdf` with your CV

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Tanjum Kadakol**
- Location: Mahalingpur, Karnataka, India 🇮🇳
- Email: tanjumkadakol2001@gmail.com
- LinkedIn: [Tanjum Kadakol](https://www.linkedin.com/in/tanjum-kadakol-665a69225/)
- GitHub: [Tanjum786](https://github.com/Tanjum786)

## 🙏 Acknowledgments

- Icons by [Lucide Icons](https://lucide.dev/)
- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Email service by [EmailJS](https://www.emailjs.com/)

## 📈 Stats

- **3+** Years of Experience
- **15+** HubSpot Websites Delivered
- **10+** Projects Built
- **100%** Client Satisfaction

---

⭐ If you like this portfolio, please give it a star on GitHub!

Made with ❤️ by Tanjum Kadakol

