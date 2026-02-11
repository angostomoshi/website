import React, {useState, useRef} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("home")
  const menuRef = useRef()

  const openMenu = () => {
    menuRef.current.classList.add('active')
    document.body.style.overflow = 'hidden'
  }

  const closeMenu = () => {
    menuRef.current.classList.remove('active')
    document.body.style.overflow = 'auto'
  }

  const handleNavClick = (menuItem) => {
    setActiveMenu(menuItem)
    if (window.innerWidth <= 767) {
      closeMenu()
    }
  }

  return (
    <nav className='navbar'>
      {/* Logo with FS Initials */}
      <div className='logo-container'>
        <Link to="/" className='logo' onClick={() => handleNavClick("home")}>
          <div className='logo-initials'>FS</div>
          <div className='logo-text'>
            <span className='logo-main'>FUNSOFT</span>
            <span className='logo-sub'>Healthcare Systems</span>
          </div>
        </Link>
      </div>

      {/* Main Navigation Links - Centered */}
      <div className='nav-center'>
        <ul className='nav-menu-center'>
          <li>
            <Link 
              to='/' 
              onClick={() => handleNavClick("home")}
            >
              <span className={activeMenu === "home" ? 'active' : ''}>Home</span>
            </Link>
          </li>
          
          <li>
            <Link 
              to='/our-services' 
              onClick={() => handleNavClick("services")}
            >
              <span className={activeMenu === "services" ? 'active' : ''}>Services</span>
            </Link>
          </li>
          
          <li>
            <Link 
              to='/about-us' 
              onClick={() => handleNavClick("about")}
            >
              <span className={activeMenu === "about" ? 'active' : ''}>About Us</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Right Navigation Links */}
      <div className='nav-right'>
        <ul className='nav-menu-right'>
          <li>
            <Link 
              to='/testimonials' 
              onClick={() => handleNavClick("testimonials")}
            >
              <span className={activeMenu === "testimonials" ? 'active' : ''}>Testimonials</span>
            </Link>
          </li>
          
          <li>
            <Link 
              to='/contact-us' 
              onClick={() => handleNavClick("contact")}
            >
              <span className={activeMenu === "contact" ? 'active' : ''}>Contact Us</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Toggle */}
      <button className='menu-toggle' onClick={openMenu} aria-label="Open navigation menu">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 12H21" stroke="#0C3B98" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M3 6H21" stroke="#0C3B98" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M3 18H21" stroke="#0C3B98" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      </button>

      {/* Mobile Navigation Menu */}
      <div ref={menuRef} className='mobile-menu'>
        {/* Overlay - Click to close */}
        <div className='mobile-menu-overlay' onClick={closeMenu}></div>
        
        {/* Mobile Menu Content */}
        <div className='mobile-menu-content'>
          {/* Close Button - Top Right */}
          <div className='mobile-menu-header'>
            <button className='menu-close' onClick={closeMenu} aria-label="Close navigation menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="#0C3B98" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M6 6L18 18" stroke="#0C3B98" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Mobile Logo */}
          <div className='mobile-logo'>
            <div className='mobile-logo-initials'>FS</div>
            <div className='mobile-logo-text'>
              <span className='mobile-logo-main'>FUNSOFT</span>
              <span className='mobile-logo-sub'>Healthcare Systems</span>
            </div>
          </div>

          {/* Mobile Navigation Links */}
          <ul className='mobile-nav-links'>
            <li>
              <Link 
                to='/' 
                onClick={() => handleNavClick("home")}
                className={activeMenu === "home" ? 'active' : ''}
              >
                Home
              </Link>
            </li>
            
            <li>
              <Link 
                to='/our-services' 
                onClick={() => handleNavClick("services")}
                className={activeMenu === "services" ? 'active' : ''}
              >
                Services
              </Link>
            </li>
            
            <li>
              <Link 
                to='/about-us' 
                onClick={() => handleNavClick("about")}
                className={activeMenu === "about" ? 'active' : ''}
              >
                About Us
              </Link>
            </li>
            
            <li>
              <Link 
                to='/testimonials' 
                onClick={() => handleNavClick("testimonials")}
                className={activeMenu === "testimonials" ? 'active' : ''}
              >
                Testimonials
              </Link>
            </li>
            
            <li>
              <Link 
                to='/contact-us' 
                onClick={() => handleNavClick("contact")}
                className={activeMenu === "contact" ? 'active' : ''}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar