import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './component/Footer'
import HeaderNavigation from './component/Header'
import { Home } from './views/Home'
import { About } from './views/About'
import { Projects } from './views/Projects'
import ContactPage from './views/Contact'

function App() {
  return (
    <Router>
      <HeaderNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactPage />} />


      </Routes>
      <Footer />
    </Router>
  )
}

export default App