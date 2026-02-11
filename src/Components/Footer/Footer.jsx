import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-div-top'>
            <div className='footer-div-text'>
                <div className='footer-logo'>
                  <div className='logo-initials'>FS</div>
                  <div className='logo-text'>
                    <span className='logo-main'>FUNSOFT</span>
                    <span className='logo-sub'>Healthcare Systems</span>
                  </div>
                </div>
                <p className='footer-tagline'>Transforming Healthcare Management </p>
                <p className='footer-description'>Comprehensive healthcare technology solutions for hospitals, clinics, and medical facilities. Streamlining operations and improving patient care.</p>
            </div>
            
            <div className='footer-list'>
                <h4>Our Solutions</h4>
                <ul>
                    <li><a href='#hospitals'>Hospital Management System</a></li>
                    <li><a href='#hospitals'>Electronic Medical Records</a></li>
                    <li><a href='#hospitals'>Telemedicine Platform</a></li>
                    <li><a href='#hospitals'>Pharmacy Management</a></li>
                    <li><a href='#hospitals'>Lab Information System</a></li>
                </ul>
            </div>
            
            <div className='footer-list'>
                <h4>Quick Links</h4>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/our-services">Services</Link></li>
                    <li><Link to="/about-us">About Us</Link></li>
                    <li><Link to="/testimonials">Case Studies</Link></li>
                    <li><Link to="/contact-us">Get a Demo</Link></li>
                </ul>
            </div>
            
            <div className='footer-list contact-info'>
                <h4>Contact Us</h4>
                <ul>
                    <li>
                      <svg className='contact-icon' width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="currentColor"/>
                      </svg>
                      <span>+254 714 433693</span>
                    </li>
                    <li>
                      <svg className='contact-icon' width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM19.6 8.25L12.53 12.67C12.21 12.87 11.79 12.87 11.47 12.67L4.4 8.25C4.15 8.09 4 7.82 4 7.53C4 6.86 4.73 6.46 5.3 6.81L12 11L18.7 6.81C19.27 6.46 20 6.86 20 7.53C20 7.82 19.85 8.09 19.6 8.25Z" fill="currentColor"/>
                      </svg>
                      <span>info@funsofthealth.com</span>
                    </li>
                    <li>
                      <svg className='contact-icon' width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
                      </svg>
                      <span>Westlands Business Park, 4th Floor, Chiromo Ln, Nairobi, Kenya</span>
                    </li>
                </ul>
                
                <div className='business-hours'>
                  <h5>Business Hours</h5>
                  <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                </div>
            </div>
        </div>
        
        <div className='footer-div-bottom'>
          <div className='footer-bottom-left'>
            <p>© 2026 Funsoft Healthcare Systems. All rights reserved.</p>
            <div className='footer-links'>
              <Link to="/privacy-policy">Privacy Policy</Link>
              <span> • </span>
              <Link to="/terms">Terms of Service</Link>
              <span> • </span>
              <a href="#cookie-policy">Cookie Policy</a>
            </div>
          </div>
          
          <div className='footer-bottom-right'>
            <div className='social-icons'>
              <span>Follow Us:</span>
              <a href="https://facebook.com/funsofthealth" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24V15.563H7.078V12.073H10.125V9.413C10.125 6.387 11.917 4.716 14.658 4.716C15.97 4.716 17.344 4.951 17.344 4.951V7.923H15.83C14.34 7.923 13.875 8.853 13.875 9.808V12.073H17.203L16.671 15.563H13.875V24C19.612 23.094 24 18.1 24 12.073Z" fill="currentColor"/>
                </svg>
              </a>
              <a href="https://linkedin.com/company/funsofthealth" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.225C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.225 0Z" fill="currentColor"/>
                </svg>
              </a>
              <a href="https://twitter.com/funsofthealth" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" fill="currentColor"/>
                </svg>
              </a>
            </div>
            <div className='certification'>
              <span>ISO 27001 Certified</span>
              <span>• HIPAA Compliant</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer