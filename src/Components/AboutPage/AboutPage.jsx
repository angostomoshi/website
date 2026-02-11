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
        <p>Funsoft Health Management System is a comprehensive healthcare technology solution designed to revolutionize 
          medical services delivery. Our platform integrates cutting-edge technology with healthcare expertise to provide 
          seamless, efficient, and accessible medical services for everyone.</p>
        
        <p>We specialize in connecting patients with healthcare providers through innovative digital solutions, 
          including virtual consultations, hospital coordination, pharmacy services, and health insurance management. 
          Our system bridges the gap between traditional healthcare and modern technology.</p>
        
        <p>With strategic partnerships with leading healthcare providers and insurance companies, we ensure that 
          every individual receives quality care through our integrated platform. Our mission is to make healthcare 
          more accessible, affordable, and efficient for all Nigerians.</p>
        
        <p>The Funsoft system is built on principles of innovation, reliability, and patient-centric care. 
          We continuously evolve our platform to meet the changing needs of the healthcare landscape while 
          maintaining the highest standards of medical service delivery.</p>
          
   
      </div>
    </section>
  )
}

export default About