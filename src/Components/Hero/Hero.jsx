import React, { useState, useEffect } from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

// Use only existing assets that you have
import physician from '../../assets/Phys.png';
import b1 from '../../assets/1.png';
import b2 from '../../assets/3.png';
import b3 from '../../assets/b2.png';
import image_200 from '../../assets/200+.png';
import image_15k from '../../assets/15K+.png';
import image_50 from '../../assets/50+.png';

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Carousel items using all three images
  const carouselItems = [
    {
      id: 1,
      image: physician,
      title: "Cloud-Based Healthcare Platform",
      description: "Secure, scalable hospital management in the cloud"
    },
    {
      id: 2,
      image: b1,
      title: "Real-time Analytics Dashboard",
      description: "Monitor healthcare metrics and performance in real-time"
    },
    {
      id: 3,
      image: b2,
      title: "Electronic Health Records",
      description: "Secure and accessible patient records management"
    },
    {
      id: 4,
      image: b3,
      title: "Multi-department Integration",
      description: "Seamless coordination across all hospital departments"
    }
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleEnquire = (product, price) => {
    const message = encodeURIComponent(`Hello, I'm interested in the ${product} plan priced at $${price}. Please provide more information.`);
    window.open(`https://wa.me/254732530218?text=${message}`, '_blank');
  };

  return (
    <div id='Hero' className='hero'>
      {/* FULL WIDTH CAROUSEL SECTION */}
      <div className='hero-carousel-section'>
        <div className='hero-carousel'>
          <div className='carousel-container'>
            {carouselItems.map((item, index) => (
              <div 
                key={item.id}
                className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
              >
                {/* Full width image */}
                <img 
                  src={item.image} 
                  alt={item.title}
                  className='carousel-image'
                />
                
                {/* Minimal overlay for better text visibility */}
                <div className='carousel-dark-overlay'></div>
                
                {/* Text overlay - Split layout */}
                <div className='carousel-overlay'>
                  <div className='carousel-content-container'>
                    <div className='carousel-text-overlay'>
                      {/* Left side: Main text */}
                      <div className='carousel-left-content'>
                        <h1 className='carousel-main-text'>
                          Funsoft I-HMIS
                        </h1>
                        <h2 className='carousel-sub-text'>
                          Reforming Healthcare Service Delivery
                        </h2>
                      </div>
                      
                      {/* Right side: System Usage Stats */}
                      <div className='carousel-right-stats'>
                        <div className='stat-item'>
                          <div className='stat-icon'>
                            <img src={image_200} alt="200+ Healthcare Facilities" />
                          </div>
                          <div className='stat-content'>
                            <h3>200+</h3>
                            <p>Healthcare Facilities</p>
                          </div>
                        </div>
                        
                        <div className='stat-item'>
                          <div className='stat-icon'>
                            <img src={image_15k} alt="15K+ Daily System Users" />
                          </div>
                          <div className='stat-content'>
                            <h3>15K+</h3>
                            <p>Daily System Users</p>
                          </div>
                        </div>
                        
                        <div className='stat-item'>
                          <div className='stat-icon'>
                            <img src={image_50} alt="10+ Years of Expertise " />
                          </div>
                          <div className='stat-content'>
                            <h3>50+</h3>
                            <p>Training Sessions</p>
                          </div>
                        </div>
                        
                        <div className='stat-item'>
                          <div className='stat-icon'>
                            <div className='stat-icon-text'>🏥</div>
                          </div>
                          <div className='stat-content'>
                            <h3>2M+</h3>
                            <p>Patient Records Managed</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Carousel Indicators */}
          <div className='carousel-indicators'>
            {carouselItems.map((_, index) => (
              <button
                key={index}
                className={`carousel-indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* ============ WHO WE ARE SECTION (Replaces old content) ============ */}
      <div className='hero-content-section'>
        <div className='hero-content-wrapper'>
          {/* Left content */}
          <div className='hero-content-left'>
            <div className='hero-text-content'>
              <h2 className='hero-main-title'>
                Who <span className='cloud-text'>We Are</span>
              </h2>
              <p className='hero-subtitle-colored'>
                A service to clientele
              </p>
              <p className='hero-description'>
                System Partners Limited (SPL) was founded in 2001 and incorporated as a private 
                limited liability company in Kenya. It is a software development and information 
                technology consultancy organization with a specific interest in designing and 
                developing comprehensive I-HMIS software applications with a core accounting module 
                that integrates with the business of our clients to produce a seamless system.
              </p>
              <p className='hero-description'>
                At the same time the systems are highly robust to serve a diverse clientele while 
                employing a standardized real time integrated accounting and process control platform 
                in the form of an I-HMIS and management system. The firm is located on Mombasa Rd at 
                the Royal ICT Business Park on the third floor.
              </p>
            </div>
          </div>
          
          {/* Right content - Simplified Overview Cards */}
          <div className='hero-content-right'>
            <div className='hero-features-grid'>
              <div className='feature-card'>
                <div className='feature-card-icon'>🏥</div>
                <h4>Est. 2001</h4>
                <p>Over 22 years of healthcare innovation in Kenya</p>
              </div>
              <div className='feature-card'>
                <div className='feature-card-icon'>✓</div>
                <h4>MOH Approved</h4>
                <p>Certified for use in public healthcare facilities</p>
              </div>
              <div className='feature-card'>
                <div className='feature-card-icon'>🔄</div>
                <h4>Open Source</h4>
                <p>Flexible, customizable, no vendor lock-in</p>
              </div>
              <div className='feature-card'>
                <div className='feature-card-icon'>📊</div>
                <h4>2M+ Records</h4>
                <p>Successfully managed patient records</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============ SYSTEM IMPACT STATS SECTION ============ */}
<div className='impact-stats-section'>
  <div className='impact-stats-wrapper'>
    <div className='impact-stats-grid'>
      <div className='impact-stat-item'>
        <div className='impact-stat-number'>200+</div>
        <div className='impact-stat-label'>Healthcare Facilities</div>
        <p className='impact-stat-description'>Hospitals and clinics across Kenya using Funsoft I-HMIS</p>
      </div>
      <div className='impact-stat-item'>
        <div className='impact-stat-number'>15K+</div>
        <div className='impact-stat-label'>Daily Active Users</div>
        <p className='impact-stat-description'>Healthcare professionals using the system daily</p>
      </div>
<div className='impact-stat-item'>
  <div className='impact-stat-number'>10+</div>
  <div className='impact-stat-label'>Years of Expertise</div>
  <p className='impact-stat-description'>Combined experience of our development team</p>
</div>
      <div className='impact-stat-item'>
        <div className='impact-stat-number'>2M+</div>
        <div className='impact-stat-label'>Patient Records</div>
        <p className='impact-stat-description'>Electronic health records securely managed</p>
      </div>
      <div className='impact-stat-item'>
        <div className='impact-stat-number'>99.9%</div>
        <div className='impact-stat-label'>System Uptime</div>
        <p className='impact-stat-description'>Reliable cloud infrastructure</p>
      </div>
      <div className='impact-stat-item'>
        <div className='impact-stat-number'>1M+</div>
        <div className='impact-stat-label'>Monthly Transactions</div>
        <p className='impact-stat-description'>Billing, pharmacy, and lab transactions processed</p>
      </div>
    </div>
  </div>
</div>

      {/* ============ OVERVIEW SECTION (Funsoft I-HMIS Deep Dive) ============ */}
      <div className='overview-section'>
        <div className='overview-wrapper'>
          <div className='overview-header'>
            <h2 className='overview-title'>
              An Overview of <span className='cloud-text'>Funsoft I-HMIS</span>
            </h2>
            <p className='overview-subtitle'>
              Developed in Kenya for the unique challenges of the public health sector
            </p>
          </div>
          
          <div className='overview-grid'>
            {/* Left Column */}
            <div className='overview-left'>
              <div className='overview-card'>
                <div className='overview-icon'>⚡</div>
                <h3>Uniqueness & Evolution</h3>
                <p>
                  The Funsoft I-HMIS is a unique system where end users are incorporated into the 
                  production routines. This has evolved a fairly effective system that takes care 
                  of various activities as applied to process control and administrative routines 
                  in a healthcare environment. Users play a major role in determining service 
                  management and data capture. All products are developed from scratch and go 
                  through a thoroughly tested process.
                </p>
              </div>
              
              <div className='overview-card'>
                <div className='overview-icon'>📋</div>
                <h3>Comprehensive Coverage</h3>
                <p>
                  The system covers all operations: patient registration, doctors consultations, 
                  Outpatient/Inpatient, cash collection & billing, banking, theatre, laboratory, 
                  pharmacy, stores/stocks, procurement, mortuary, kitchen, dental, mother child care, 
                  debtors/creditors, assets, budget, patient records, HR and Payroll.
                </p>
              </div>
              
              <div className='overview-card'>
                <div className='overview-icon'>📢</div>
                <h3>Communication & M-PESA Integration</h3>
                <p>
                  Includes modules for email, SMS and internet communication. The company is at an 
                  advanced stage of negotiating with Safaricom to provide M-PESA services through 
                  the Funsoft system. The system can receive and convert SMS, email, XML, web services 
                  into appropriate data and store it in the Funsoft database.
                </p>
              </div>
            </div>
            
            {/* Right Column */}
            <div className='overview-right'>
              <div className='overview-card'>
                <div className='overview-icon'>⏰</div>
                <h3>Workflow Alerts & Scheduling</h3>
                <p>
                  The system is equipped with workflow alerts to prompt users of pending works. 
                  Capabilities include reminders for clinics, bookings, meetings, appointments, 
                  maintenance and service dates. Supports patient/staff photographs, biometrics, 
                  and Smart Card Technologies. Can flag unusual data entries and enforce cash 
                  handling thresholds.
                </p>
              </div>
              
              <div className='overview-card'>
                <div className='overview-icon'>📊</div>
                <h3>Informatics & Planning</h3>
                <p>
                  Based on an Open Source platform, compatible with any operating system. Users can 
                  customize the UI, reporting formats, and add features with minimal technical knowledge. 
                  No annual license fee—only a maintenance fee. Installation takes 10 minutes with 
                  a self-installer CD, backed by a 12-month free warranty.
                </p>
              </div>
              
              <div className='overview-card highlight'>
                <div className='overview-icon'>✅</div>
                <h3>Ministry of Health Certified</h3>
                <p>
                  Funsoft I-HMIS was reviewed by the Ministry of Health and certified for use in 
                  public healthcare facilities. Currently deployed in <strong>200+ healthcare facilities</strong>, serving <strong>15,000+ daily users</strong> and managing <strong>2M+ patient records</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============ WHY CHOOSE US (Simplified & Combined) ============ */}
      <div className='pricing-section' style={{ background: 'linear-gradient(180deg, #F0F7FF 0%, #FFFFFF 100%)' }}>
        <div className='pricing-wrapper'>
          <div className='pricing-header'>
            <h2 className='pricing-title'>Why <span className='cloud-text'>Choose Us</span></h2>
            <p className='pricing-subtitle'>Ministry of Health Approved EMR/HIS System</p>
            <div className='pricing-badge'>Trusted by 200+ Healthcare Facilities </div>
          </div>
          
          <div className='pricing-grid'>
            {/* Plan 1 - Popular */}
            <div className='pricing-card popular'>
              <div className='popular-badge'>most popular</div>
              <h3 className='plan-title'>OUT Patient Centre</h3>
              <div className='plan-price'>$3,999.00</div>
              <p className='plan-description'>0-50 Bed Hospital</p>
              <p className='price-note'>(This price is subject to VAT tax @ 16%). Training, support, travel and accommodation fees to be billed at 50% of the cost of the software</p>
              <button className='btn-enquire' onClick={() => handleEnquire('OUT Patient Centre - $3,999', '3,999')}>
                Enquire Now
              </button>
            </div>
            
            {/* Plan 2 */}
            <div className='pricing-card'>
              <h3 className='plan-title'>OUT Patient Centre</h3>
              <div className='plan-price'>$5,999.00</div>
              <p className='plan-description'>0-50 Bed Hospital</p>
              <p className='price-note'>(This price is subject to VAT tax @ 16%). Training, support, travel and accommodation fees to be billed at 50% of the cost of the software</p>
              <button className='btn-enquire' onClick={() => handleEnquire('OUT Patient Centre - $5,999', '5,999')}>
                Enquire Now
              </button>
            </div>
            
            {/* Plan 3 */}
            <div className='pricing-card'>
              <h3 className='plan-title'>OUT Patient Centre</h3>
              <div className='plan-price'>$8,999.00</div>
              <p className='plan-description'>51-100 Bed Hospital</p>
              <p className='price-note'>(This price is subject to VAT tax @ 16%). Training, support, travel and accommodation fees to be billed at 50% of the cost of the software</p>
              <button className='btn-enquire' onClick={() => handleEnquire('OUT Patient Centre - $8,999', '8,999')}>
                Enquire Now
              </button>
            </div>
          </div>
          
          <div className='pricing-footer'>
            <p className='footer-text'>View The Funsoft® Integrated Healthcare Information Management System (I-HMIS) and variants coverage</p>
            <div className='footer-stats-mini'>
              <span><strong>200+</strong> Facilities</span>
              <span><strong>10+</strong>Years of Expertise</span>
              <span><strong>15K+</strong> Daily Users</span>
              <span><strong>2M+</strong> Records</span>
            </div>
            <p className='footer-commitment'>Committed to our clients needs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;