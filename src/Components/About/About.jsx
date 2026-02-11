import React, { useState, useEffect, useRef } from 'react'
import './About.css'
import abtImage from '../../assets/abt.png'

export const About = () => {
  const [currentService, setCurrentService] = useState(0)
  const carouselRef = useRef(null)
  
  const services = [
    {
      id: 1,
      icon: "💬",
      title: "Doctor Consultation",
      description: "Connect instantly with certified healthcare professionals for quality virtual consultations and treatments.",
      color: "#0C3B98"
    },
    {
      id: 2,
      icon: "💊",
      title: "Pharmacy Integration",
      description: "Seamless prescription management with delivery to your doorstep or pickup at partner pharmacies.",
      color: "#16CDAC"
    },
    {
      id: 3,
      icon: "🏥",
      title: "Hospital Management",
      description: "Complete hospital workflow automation for efficient patient care and administrative operations.",
      color: "#3B82F6"
    },
    {
      id: 4,
      icon: "📊",
      title: "Analytics Dashboard",
      description: "Real-time insights and reports to monitor performance and make data-driven decisions.",
      color: "#8B5CF6"
    },
    {
      id: 5,
      icon: "⚡",
      title: "Fast Implementation",
      description: "Quick deployment with minimal disruption to your existing healthcare operations.",
      color: "#F59E0B"
    },
    {
      id: 6,
      icon: "🔒",
      title: "Secure Platform",
      description: "Enterprise-grade security and compliance to protect patient data and privacy.",
      color: "#10B981"
    }
  ];

  // Create double array for continuous loop
  const carouselServices = [...services, ...services]

  // Auto-scroll carousel continuously
  useEffect(() => {
    let animationId
    let startTime
    let scrollPosition = 0
    const scrollSpeed = 0.8 // pixels per frame

    const animateScroll = (timestamp) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime

      if (carouselRef.current) {
        // Move the carousel
        scrollPosition += scrollSpeed
        
        // Check if we've scrolled through one set of services
        const singleSetWidth = services.length * 320 + (services.length - 1) * 25
        if (scrollPosition >= singleSetWidth) {
          scrollPosition = 0
        }
        
        carouselRef.current.style.transform = `translateX(-${scrollPosition}px)`
      }

      animationId = requestAnimationFrame(animateScroll)
    }

    animationId = requestAnimationFrame(animateScroll)

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [services.length])

  // Handle Schedule Demo click
  const handleScheduleDemo = () => {
    window.location.href = 'https://wa.me/254758533049?text=Hello%2C%20I%27d%20like%20to%20schedule%20a%20personalized%20demo%20of%20your%20healthcare%20platform.';
  };

  return (
    <section id='about' className='about'>
      {/* FULL WIDTH TECHNOLOGIES SECTION */}
      <div className='about-partners-section'>
        <div className='about-container'>
          <p className='partners-title'>
            Core Technology Stack
          </p>
          <div className='single-tech-image-container'>
            <img 
              src={abtImage} 
              alt="Technology Stack and Integrations" 
              className='tech-stack-image'
            />
          </div>
        </div>
      </div>

      {/* FULL WIDTH SERVICES SECTION */}
      <div className='about-services-section'>
        <div className='about-container'>
          {/* Full Width Header */}
          <div className='section-header-fullwidth'>
            <h1 className='main-title-fullwidth'>
              <span className='title-main-gradient'>Integrated Healthcare Ecosystem</span>
              <span className='title-divider'>by</span>
              <span className='title-brand'>Funsoft</span>
            </h1>
            <p className='section-subtitle-fullwidth'>
              Comprehensive virtual care platform designed to optimize operations, enhance patient care, 
              and streamline administrative workflows across multiple departments
            </p>
          </div>

          {/* Full Width Continuous Carousel */}
          <div className='continuous-carousel-fullwidth'>
            <div className='carousel-wrapper'>
              <div 
                className='carousel-track'
                ref={carouselRef}
              >
                {/* First set for seamless loop */}
                {carouselServices.map((service, index) => (
                  <div 
                    key={`first-${service.id}-${index}`}
                    className='service-card-fullwidth'
                    style={{ 
                      borderTopColor: service.color,
                    }}
                  >
                    <div className='service-icon-wrapper' style={{ backgroundColor: service.color }}>
                      <span className='service-icon'>{service.icon}</span>
                    </div>
                    <h3 className='service-title-fullwidth'>{service.title}</h3>
                    <p className='service-description-fullwidth'>{service.description}</p>
                  </div>
                ))}
                {/* Second set for continuous loop */}
                {carouselServices.map((service, index) => (
                  <div 
                    key={`second-${service.id}-${index}`}
                    className='service-card-fullwidth'
                    style={{ 
                      borderTopColor: service.color,
                    }}
                  >
                    <div className='service-icon-wrapper' style={{ backgroundColor: service.color }}>
                      <span className='service-icon'>{service.icon}</span>
                    </div>
                    <h3 className='service-title-fullwidth'>{service.title}</h3>
                    <p className='service-description-fullwidth'>{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FULL WIDTH CTA SECTION */}
          <div className='cta-section-fullwidth'>
            <div className='cta-content-fullwidth'>
              <h2 className='cta-title-fullwidth'>Ready to Transform Your Healthcare Facility?</h2>
              <p className='cta-text-fullwidth'>
                Join hundreds of healthcare providers using our platform to improve patient care 
                and streamline operations
              </p>
              <div className='cta-buttons-fullwidth'>
                <button className='btn-cta-primary' onClick={handleScheduleDemo}>
                  Schedule a Personalized Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About