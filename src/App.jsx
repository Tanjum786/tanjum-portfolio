import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './component/Footer'
import HeaderNavigation from './component/Header'
import ScrollToTop from './component/ScrollToTop'
import { Home } from './views/Home'
import { About } from './views/About'
import { Projects } from './views/Projects'
import ContactPage from './views/Contact'
// import BlogsPage from './views/Blogs'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <HeaderNavigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/blogs" element={<BlogsPage />} /> */}
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  )
}

export default App