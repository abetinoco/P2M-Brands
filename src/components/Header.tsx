import { useEffect, useId, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import logoPrimary from '../assets/images/Logo.svg'
import logoInverted from '../assets/images/Logo-white.svg'
import brandLogo from '../assets/images/p2m-logo.png'
import './Header.css'

const focusableSelectors = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '#', label: 'Contact' },
]

const secondaryLinks = [
  { to: '#', label: 'Meet the Team' },
  { to: '#', label: 'Our Brands' },
  { to: '#', label: 'Join the Family' },
]

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement | null>(null)
  const navRef = useRef<HTMLElement | null>(null)
  const previouslyFocusedElementRef = useRef<HTMLElement | null>(null)
  const navMenuId = useId()

  const closeMenu = () => setMenuOpen(false)
  const toggleMenu = () => setMenuOpen((prev) => !prev)

  const handleLinkClick = () => {
    closeMenu()
  }

  useEffect(() => {
    if (typeof document === 'undefined') {
      return undefined
    }

    if (!menuOpen) {
      document.body.style.removeProperty('overflow')
      document.body.classList.remove('menu-open')
      if (previouslyFocusedElementRef.current) {
        previouslyFocusedElementRef.current.focus()
        previouslyFocusedElementRef.current = null
      } else {
        menuButtonRef.current?.focus()
      }
      return undefined
    }

    previouslyFocusedElementRef.current = document.activeElement as HTMLElement | null

    const getFocusableElements = () =>
      navRef.current?.querySelectorAll<HTMLElement>(focusableSelectors) ?? []

    const focusableElements = getFocusableElements()
    focusableElements[0]?.focus()
    document.body.style.setProperty('overflow', 'hidden')
    document.body.classList.add('menu-open')

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        closeMenu()
        return
      }

      if (event.key !== 'Tab') {
        return
      }

      const updatedFocusableElements = getFocusableElements()
      if (!updatedFocusableElements.length) {
        return
      }

      const first = updatedFocusableElements[0]
      const last = updatedFocusableElements[updatedFocusableElements.length - 1]

      if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      } else if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.removeProperty('overflow')
      document.body.classList.remove('menu-open')
    }
  }, [menuOpen])

  const logoSrc = menuOpen ? logoInverted : logoPrimary

  return (
    <>
      <header className={`header ${menuOpen ? 'menu-active' : ''}`}>
        <div className="header-container">
          <Link to="/" className="logo" aria-label="P2M Brands">
            <img
              className="logo-image"
              src={logoSrc}
              alt="P2M Brands logo"
            />
          </Link>

          <button
            ref={menuButtonRef}
            type="button"
            className={`menu-toggle ${menuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls={navMenuId}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <nav
          ref={navRef}
          id={navMenuId}
          className={`nav-menu ${menuOpen ? 'open' : ''}`}
          aria-hidden={!menuOpen}
          aria-label="Primary navigation"
        >
          <div className="nav-content">
            <div className="nav-left">
              <ul className="nav-main-links">
                {navLinks.map((link) => (
                  <li key={link.to + link.label}>
                    <Link
                      to={link.to}
                      onClick={handleLinkClick}
                      tabIndex={menuOpen ? 0 : -1}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="nav-divider" />

              <ul className="nav-secondary-links">
                {secondaryLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      onClick={handleLinkClick}
                      tabIndex={menuOpen ? 0 : -1}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="nav-contact-info">
                <a
                  href="tel:+14074050427"
                  tabIndex={menuOpen ? 0 : -1}
                >
                  (407) 405-0427
                </a>
                <a
                  href="mailto:HELLO@P2MBRANDS.COM"
                  tabIndex={menuOpen ? 0 : -1}
                >
                  HELLO@P2MBRANDS.COM
                </a>
              </div>
            </div>

            <div className="nav-right">
              <img
                className="nav-brand-logo"
                src={brandLogo}
                alt="P2M Brands"
              />
            </div>
          </div>
        </nav>
      </header>

      {menuOpen && (
        <button
          type="button"
          className="nav-overlay"
          aria-label="Close navigation menu"
          onClick={closeMenu}
        />
      )}
    </>
  )
}

export default Header

