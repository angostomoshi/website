import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { Link, useLocation } from 'react-router-dom'
import fsLogo from '../../assets/fs-logo-cropped.png'

export const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  const location = useLocation()

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768
      setIsMobile(mobile)
      if (!mobile && isMenuOpen) {
        closeMenu()
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isMenuOpen])

  useEffect(() => {
    const path = location.pathname
    if (path === '/') setActiveMenu('home')
    else if (path.includes('/our-services')) setActiveMenu('services')
    else if (path.includes('/about-us')) setActiveMenu('about')
    else if (path.includes('/testimonials')) setActiveMenu('testimonials')
    else if (path.includes('/contact-us')) setActiveMenu('contact')
    
    if (isMobile && isMenuOpen) {
      closeMenu()
    }
  }, [location, isMobile, isMenuOpen])

  const openMenu = () => {
    setIsMenuOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    document.body.style.overflow = 'unset'
  }

  const handleNavClick = (menuItem) => {
    setActiveMenu(menuItem)
  }

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <nav className='navbar'>
      {/* Main Logo */}
      <div className='logo-container'>
        <Link to="/" className='logo' onClick={() => handleNavClick("home")}>
          <img src={fsLogo} alt="FS Logo" className='logo-img' />
          <span className='navbar-brand-text'>
            <span className='navbar-brand-name'>Funsoft</span>
            <span className='navbar-brand-badge'>I-HMIS</span>
          </span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className='nav-desktop'>
        <ul className='nav-menu-desktop'>
          <li><Link to='/' onClick={() => handleNavClick("home")} className={activeMenu === "home" ? 'active-link' : ''}><span>Home</span></Link></li>
          <li><Link to='/our-services' onClick={() => handleNavClick("services")} className={activeMenu === "services" ? 'active-link' : ''}><span>Services</span></Link></li>
          <li><Link to='/about-us' onClick={() => handleNavClick("about")} className={activeMenu === "about" ? 'active-link' : ''}><span>About Us</span></Link></li>
          <li><Link to='/testimonials' onClick={() => handleNavClick("testimonials")} className={activeMenu === "testimonials" ? 'active-link' : ''}><span>Testimonials</span></Link></li>
          <li><Link to='/contact-us' onClick={() => handleNavClick("contact")} className={activeMenu === "contact" ? 'active-link' : ''}><span>Contact Us</span></Link></li>
        </ul>
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className='menu-toggle' 
        onClick={openMenu} 
        aria-label="Open menu"
      >
        <div className="hamburger-box">
          <div className="hamburger-inner"></div>
        </div>
      </button>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <div className='mobile-menu-overlay' onClick={closeMenu}></div>
        
        <div className='mobile-menu-content'>
          {/* Navigation Links */}
          <nav className='mobile-nav'>
            <ul className='mobile-nav-list'>
              <li>
                <Link to='/' onClick={() => handleNavClick("home")} className={activeMenu === "home" ? 'active' : ''}>
                  <span className="nav-icon">🏠</span>
                  <span className="nav-label">Home</span>
                  <span className="nav-arrow">→</span>
                </Link>
              </li>
              <li>
                <Link to='/our-services' onClick={() => handleNavClick("services")} className={activeMenu === "services" ? 'active' : ''}>
                  <span className="nav-icon">⚕️</span>
                  <span className="nav-label">Services</span>
                  <span className="nav-arrow">→</span>
                </Link>
              </li>
              <li>
                <Link to='/about-us' onClick={() => handleNavClick("about")} className={activeMenu === "about" ? 'active' : ''}>
                  <span className="nav-icon">🏢</span>
                  <span className="nav-label">About Us</span>
                  <span className="nav-arrow">→</span>
                </Link>
              </li>
              <li className="nav-divider"></li>
              <li>
                <Link to='/testimonials' onClick={() => handleNavClick("testimonials")} className={activeMenu === "testimonials" ? 'active' : ''}>
                  <span className="nav-icon">💬</span>
                  <span className="nav-label">Testimonials</span>
                  <span className="nav-arrow">→</span>
                </Link>
              </li>
              <li>
                <Link to='/contact-us' onClick={() => handleNavClick("contact")} className={activeMenu === "contact" ? 'active' : ''}>
                  <span className="nav-icon">📞</span>
                  <span className="nav-label">Contact Us</span>
                  <span className="nav-arrow">→</span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Bottom Close Button */}
          <div className='mobile-menu-footer'>
            <button className='mobile-bottom-close' onClick={closeMenu}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
              <span>Close Menu</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar