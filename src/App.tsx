import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollRestoration from './components/ScrollRestoration'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'

function App() {
  return (
    <Router>
      <ScrollRestoration />
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
