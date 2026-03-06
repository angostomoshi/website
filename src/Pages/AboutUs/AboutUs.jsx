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

      {/* About Cards Section */}
      <section className='about-cards-section'>
        <div className='container'>
          <h2 className='section-title-main'>Our Foundation</h2>
          <div className='cards-grid'>
            <div className='about-card'>
              <div className='card-icon'>👥</div>
              <h3 className='card-title'>Who We Are</h3>
              <p className='card-content'>
                Founded in 2001, System Partners Limited (SPL) is a specialized software development 
                and IT consultancy organization focused on creating comprehensive healthcare 
                technology solutions across Africa.
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

      {/* Success Story Section */}
      <section className='success-section'>
        <div className='container'>
          <div className='success-grid'>
            <div className='success-content'>
              <h2 className='section-title'>100+ Health Systems Implemented</h2>
              
              <p className='success-paragraph'>
                In SPL's continued effort to contribute towards quality health services, 
                the company has successfully implemented over 100 systems in the health 
                sector. In about 5 cases, we replaced previous in-house systems, while all 
                others were completely new installations from scratch.
              </p>
              
              <p className='success-paragraph'>
                Our software evolved through these installations as facilities requested 
                new menus and functionalities, continuously improving our system to meet 
                diverse healthcare needs. Facilities where the system is installed have 
                recorded tremendous improvements in service delivery.
              </p>

              <div className='hospital-showcase'>
                <h3>Key Hospital Partners:</h3>
                <ul className='hospital-list'>
                  <li>Moi Teaching and Referral Hospital</li>
                  <li>Machakos Level 5 Hospital</li>
                  <li>Thika Level 5 Hospital</li>
                  <li>Nakuru Provincial General Hospital</li>
                  <li>Enugu State University Teaching Hospital, Nigeria</li>
                </ul>
              </div>
            </div>
            
            <div className='success-stats'>
              <div className='stat-card'>
                <div className='stat-number'>100+</div>
                <div className='stat-label'>Health Systems</div>
              </div>
              <div className='stat-card highlight'>
                <div className='stat-number'>2x+</div>
                <div className='stat-label'>Revenue Increase</div>
              </div>
              <div className='stat-card'>
                <div className='stat-number'>5</div>
                <div className='stat-label'>Countries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className='results-section'>
        <div className='container'>
          <h2 className='section-title'>Proven Results</h2>
          <div className='results-grid'>
            <div className='result-item'>
              <div className='result-icon'>📈</div>
              <h3>Revenue Growth</h3>
              <p>Within months of Funsoft installation, partner hospitals more than doubled their revenues</p>
            </div>
            <div className='result-item'>
              <div className='result-icon'>📊</div>
              <h3>Comprehensive Reporting</h3>
              <p>All required reports produced directly from Funsoft I-HMIS system</p>
            </div>
            <div className='result-item'>
              <div className='result-icon'>⚡</div>
              <h3>Improved Efficiency</h3>
              <p>Tremendous improvements in service delivery across all facilities</p>
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
              <p>Continuously evolving through client feedback</p>
            </div>
            <div className='value-item'>
              <div className='value-icon'>🛡️</div>
              <h3>Reliability</h3>
              <p>100+ successful implementations</p>
            </div>
            <div className='value-item'>
              <div className='value-icon'>🤝</div>
              <h3>Collaboration</h3>
              <p>Partnerships with leading hospitals</p>
            </div>
            <div className='value-item'>
              <div className='value-icon'>⭐</div>
              <h3>Excellence</h3>
              <p>Proven results and revenue growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}