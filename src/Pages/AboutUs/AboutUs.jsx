import './AboutUs.css'
import { Frame1, LeftSideDesign } from '../../Components/Logo.jsx'
import { Navbar } from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

export function AboutUs() {
  return (
    <div className='about-us-container'>
      {/* Header/Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className='hero-section'>
        <Frame1 className='hero-graphic' />
        <div className='hero-content'>
          <h1 className='hero-title'>About System Partners Ltd</h1>
          <p className='hero-subtitle'>
            Transforming Healthcare Through Technology Since 2001
          </p>
        </div>
      </section>

      {/* About Cards Section - Full Width */}
      <section className='about-cards-section'>
        <div className='container'>
          <h2 className='section-title-main'>Our Foundation</h2>
          <div className='cards-grid'>
            <div className='about-card'>
              <div className='card-icon'>👥</div>
              <h3 className='card-title'>Who We Are</h3>
              <p className='card-content'>
                Founded in 2001, System Partners Limited is a specialized software development 
                and IT consultancy organization focused on creating comprehensive healthcare 
                technology solutions.
              </p>
            </div>
            
            <div className='about-card'>
              <div className='card-icon'>🎯</div>
              <h3 className='card-title'>Our Mission</h3>
              <p className='card-content'>
                Revolutionize healthcare accessibility through innovative technology solutions 
                that bridge the gap between healthcare providers and communities.
              </p>
            </div>
            
            <div className='about-card'>
              <div className='card-icon'>🔭</div>
              <h3 className='card-title'>Our Vision</h3>
              <p className='card-content'>
                Create a healthier nation with equitable access to quality healthcare 
                services through technology and collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integrated Content Section */}
      <section className='integrated-content'>
        <div className='container'>
          <div className='integrated-grid'>
            <div className='content-main'>
              <h2 className='section-title'>Transforming Healthcare</h2>
              <p className='content-paragraph'>
                With over two decades of experience, System Partners Ltd has been at the 
                forefront of healthcare technology innovation. Our expert team combines 
                technical excellence with deep healthcare system understanding to deliver 
                impactful solutions.
              </p>
              <p className='content-paragraph'>
                We harness technology's power to transform lives, building systems that 
                are both technologically advanced and accessible to all users. Our commitment 
                extends beyond software—we're dedicated to improving healthcare outcomes 
                nationwide.
              </p>
              
              <div className='content-features'>
                <div className='feature-item'>
                  <span className='feature-icon'>✓</span>
                  <span className='feature-text'>20+ Years of Healthcare IT Experience</span>
                </div>
                <div className='feature-item'>
                  <span className='feature-icon'>✓</span>
                  <span className='feature-text'>Nationwide Healthcare Solutions</span>
                </div>
                <div className='feature-item'>
                  <span className='feature-icon'>✓</span>
                  <span className='feature-text'>End-to-End Technology Services</span>
                </div>
              </div>
              
              <div className='cta-section'>
                <a href='/contact-us' className='btn-primary'>Get In Touch</a>
                <a href='/our-services' className='btn-secondary'>View Services</a>
              </div>
            </div>
            
            <div className='content-graphic'>
              <LeftSideDesign className='graphic-element' />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className='values-section'>
        <div className='container'>
          <h2 className='section-title'>Our Core Values</h2>
          <div className='values-grid'>
            <div className='value-item'>
              <div className='value-icon'>💡</div>
              <h3>Innovation</h3>
              <p>Advancing healthcare technology</p>
            </div>
            <div className='value-item'>
              <div className='value-icon'>🛡️</div>
              <h3>Reliability</h3>
              <p>Dependable solutions you can trust</p>
            </div>
            <div className='value-item'>
              <div className='value-icon'>🔍</div>
              <h3>Transparency</h3>
              <p>Clear communication always</p>
            </div>
            <div className='value-item'>
              <div className='value-icon'>⭐</div>
              <h3>Excellence</h3>
              <p>Quality in everything we do</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}