import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo" aria-label="P2M Brands">
          <img
            className="logo-image"
            src="/Logo.svg"
            alt="P2M Brands logo"
          />
        </Link>
        
        <button 
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
          <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
        </ul>
      </nav>

      {menuOpen && <div className="nav-overlay" onClick={() => setMenuOpen(false)} />}
    </header>
  )
}

export default Header
