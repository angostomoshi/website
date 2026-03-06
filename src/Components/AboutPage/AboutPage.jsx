import React from 'react'
import './AboutPage.css'
import healthcare from '../../assets/healthcare.webp'
import play_icon from '../../assets/play_icon.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export const About = () => {
  return (
    <section id='about' className='about_page container'>
      {/* Left Column - Image */}
      <div className='about_page_left'>
        <img src={healthcare} alt="Healthcare professionals" className='healthcare_img' />
       
      </div>

      {/* Right Column - Content */}
      <div className='about_page_right'>
        <h1>About <span>Funsoft Health</span> Management System</h1> 
        
        <p>Funsoft Health Management System was founded to address the global challenge of inaccessible primary healthcare through innovative technology solutions.</p>
        
        <p>Our platform optimizes healthcare resource management by providing accurate, timely data for better decision-making. We transform underutilized resources into effectively managed assets through actionable intelligence.</p>
        
        <p>With successful implementations in Kenya, Sudan, Nigeria, and Ghana, our ICT solutions improve patient care, facility management, and policy formulation. We've partnered with governments, UN agencies, and international organizations including USAID and the World Bank.</p>
        
        <p>Through integrated health management systems and comprehensive staff training, we empower healthcare facilities to deliver quality, accessible care to all.</p>
      </div>
    </section>
  )
}

export default About