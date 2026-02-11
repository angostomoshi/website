import React, { useRef, useState, useEffect } from 'react';
import './Testimonials.css';
import Adeola from '../../assets/Adeola.png';
import Mary from '../../assets/Mary.png';
import DrHalimat from '../../assets/DrHalimat.png';
import star from '../../assets/five-star.png';
import Doctor from '../../assets/doctor.png';
import DrOlawale from '../../assets/DrOlawale.png';
import back_arrow from '../../assets/back-arrow.png';
import next_arrow from '../../assets/next-arrow.png';
import Victoria from '../../assets/Victoria.svg';

const Testimonials = () => {
  const slider = useRef(null);
  const sliderContainer = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);
  
  const testimonials = [
    {
      id: 1,
      name: "Dr. James K.",
      position: "Hospital Administrator",
      image: Doctor,
      quote: "Funsoft transformed our operations across 15 departments. Patient wait times reduced by 65% and revenue cycle management improved by 40%.",
      rating: 5,
      benefits: ["65% Reduced Wait Time", "40% Revenue Increase", "15 Departments Integrated"],
      country: "Kenya",
      flag: "🇰🇪"
    },
    {
      id: 2,
      name: "Dr. Aisha M.",
      position: "Medical Director",
      image: Victoria,
      quote: "The telemedicine platform allowed us to serve patients across East Africa. Implementation was seamless with excellent local support.",
      rating: 5,
      benefits: ["East Africa Coverage", "Seamless Integration", "Local Support Team"],
      country: "Kenya",
      flag: "🇰🇪"
    },
    {
      id: 3,
      name: "Prof. Samuel O.",
      position: "Former Health PS",
      image: Adeola,
      quote: "Funsoft's NHIF integration reduced claim processing from 90 days to 5 days. Revolutionary for Kenya's public health system.",
      rating: 5,
      benefits: ["95% Faster Claims", "NHIF Integrated", "National Scale"],
      country: "Kenya",
      flag: "🇰🇪"
    },
    {
      id: 4,
      name: "Mr. Raj P.",
      position: "Group CEO",
      image: DrOlawale,
      quote: "Implemented across 8 African countries. Patient satisfaction increased by 45% with unified electronic medical records.",
      rating: 5,
      benefits: ["8 Countries", "45% Satisfaction", "Unified EMR"],
      country: "Pan-Africa",
      flag: "🌍"
    },
    {
      id: 5,
      name: "Pharm. Grace M.",
      position: "Chief Pharmacist",
      image: Mary,
      quote: "Inventory management reduced stockouts by 80%. Prescription tracking improved patient safety across 25 locations.",
      rating: 5,
      benefits: ["80% Less Stockouts", "25 Locations", "Safety Improved"],
      country: "Kenya",
      flag: "🇰🇪"
    },
    {
      id: 6,
      name: "Dr. Fatuma A.",
      position: "Laboratory Director",
      image: DrHalimat,
      quote: "LIS integration reduced test turnaround by 55%. Cross-border result sharing transformed regional healthcare.",
      rating: 5,
      benefits: ["55% Faster Results", "Cross-border Sharing", "Regional Network"],
      country: "East Africa",
      flag: "🌍"
    },
    {
      id: 7,
      name: "Dr. Chinedu O.",
      position: "Hospital CEO",
      image: Doctor,
      quote: "Implementation was flawless. The system handles our high patient volume perfectly with 99.9% uptime.",
      rating: 5,
      benefits: ["High Volume Ready", "99.9% Uptime", "Local Compliance"],
      country: "Nigeria",
      flag: "🇳🇬"
    },
    {
      id: 8,
      name: "Ms. Sarah J.",
      position: "Hospital COO",
      image: Victoria,
      quote: "Post-conflict healthcare transformation. Funsoft helped us rebuild medical records system from scratch.",
      rating: 5,
      benefits: ["Post-conflict Setup", "Records Reconstruction", "Capacity Building"],
      country: "South Sudan",
      flag: "🌍"
    }
  ];

  const coverageData = [
    {
      region: "Kenya",
      flag: "🇰🇪",
      facilities: [
        "Jaramogi Oginga Odinga Teaching Referral Hospital (JOOTRH)",
        "Kisumu County Hospital",
        "Coast Province General Hospital",
        "Lodwar County Referral Hospital",
        "Kenyatta National Hospital",
        "Moi Teaching Referral Hospital (MTRH)",
        "Rift Valley Provincial General Hospital - Annex (RPGH)",
        "Nanyuki Teaching Referral Hospital (NTRH)",
        "Kisii Teaching Referral Hospital",
        "Kenhancha Sub-County Hospital",
        "Homa Bay Teaching Referral Hospital",
        "Machakos Level 5 Hospital",
        "Makueni County Referral Hospital",
        "Makindu County Hospital",
        "Kibwezi County Hospital",
        "Thika Level 5 Hospital",
        "Ruiru County Hospital",
        "Narok County Referral Hospital",
        "Kimilili County Hospital",
        "Samburu County Referral Hospital"
      ]
    },
    {
      region: "Kenya (Continued)",
      flag: "🇰🇪",
      facilities: [
        "Ngao County Hospital",
        "Kakamega Teaching Referral Hospital",
        "Malava County Referral Hospital",
        "Webuye County Referral Hospital",
        "Chwele County Hospital",
        "Cheptais County Hospital",
        "Lumakanda County Hospital",
        "Likuyani County Hospital",
        "Mautuma County Hospital",
        "Kandiege County Hospital",
        "Kandongo County Hospital",
        "Nduru County Hospital",
        "Kijauri County Hospital",
        "Masimba County Hospital",
        "Ogembo Level 4 Hospital",
        "Bahati County Hospital",
        "Nyakechi Hospital",
        "Mbita Sub County Hospital",
        "Rachuonyo County Hospital",
        "Siaya County Referral Hospital"
      ]
    },
    {
      region: "Other African Countries",
      flag: "🌍",
      facilities: [
        "Enugu State University Teaching Hospital (ESUTH) Parklane - Nigeria",
        "Nnamdi Azikiwe University Teaching Hospital Nnewi - Nigeria",
        "Ahfad University for Women - Sudan",
        "Sudan Family Planning Association - Sudan",
        "St. Nicholas Hospital Lagos - Nigeria",
        "Juba Teaching Hospital - South Sudan",
        "Multiple facilities in Tanzania, Uganda, Rwanda",
        "Healthcare centers in Ghana and Ethiopia",
        "Regional hospitals across 15+ African nations"
      ]
    }
  ];

  const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials];

  useEffect(() => {
    const updateResponsive = () => {
      const width = window.innerWidth;
      if (width >= 1200) {
        setVisibleSlides(3);
      } else if (width >= 768) {
        setVisibleSlides(2);
      } else {
        setVisibleSlides(1);
      }
    };

    updateResponsive();
    window.addEventListener('resize', updateResponsive);
    return () => window.removeEventListener('resize', updateResponsive);
  }, []);

  useEffect(() => {
    if (sliderContainer.current) {
      const containerWidth = sliderContainer.current.offsetWidth;
      const slideWidthPercentage = 100 / visibleSlides;
      setSlideWidth(slideWidthPercentage);
    }
  }, [visibleSlides]);

  const slideForward = () => {
    setAutoplay(false);
    setCurrentIndex(prev => {
      const newIndex = prev + 1;
      return newIndex >= testimonials.length ? 0 : newIndex;
    });
  };
  
  const slideBackward = () => {
    setAutoplay(false);
    setCurrentIndex(prev => {
      const newIndex = prev - 1;
      return newIndex < 0 ? testimonials.length - 1 : newIndex;
    });
  };

  const goToSlide = (index) => {
    setAutoplay(false);
    setCurrentIndex(index);
  };

  const handleDragStart = (e) => {
    setIsDragging(true);
    setDragStartX(e.type.includes('mouse') ? e.clientX : e.touches[0].clientX);
    setDragDistance(0);
    e.preventDefault();
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    const currentX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    const distance = currentX - dragStartX;
    setDragDistance(distance);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const threshold = 50;
    if (dragDistance < -threshold) {
      slideForward();
    } else if (dragDistance > threshold) {
      slideBackward();
    }
    setDragDistance(0);
  };

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        const newIndex = prev + 1;
        if (newIndex >= testimonials.length) {
          return 0;
        }
        return newIndex;
      });
    }, 6000);
    
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  useEffect(() => {
    if (slider.current) {
      const translateX = -currentIndex * slideWidth;
      let adjustedTranslateX = translateX;
      
      if (isDragging) {
        const dragOffset = (dragDistance / window.innerWidth) * 100;
        adjustedTranslateX += dragOffset;
      }
      
      slider.current.style.transform = `translateX(${adjustedTranslateX}%)`;
      slider.current.style.transition = isDragging ? 'none' : 'transform 0.6s ease-in-out';
    }
  }, [currentIndex, slideWidth, isDragging, dragDistance]);

  useEffect(() => {
    const handleTransitionEnd = () => {
      if (currentIndex >= testimonials.length) {
        slider.current.style.transition = 'none';
        setCurrentIndex(0);
        setTimeout(() => {
          if (slider.current) {
            slider.current.style.transition = 'transform 0.6s ease-in-out';
          }
        }, 50);
      }
    };

    if (slider.current) {
      slider.current.addEventListener('transitionend', handleTransitionEnd);
    }

    return () => {
      if (slider.current) {
        slider.current.removeEventListener('transitionend', handleTransitionEnd);
      }
    };
  }, [currentIndex, testimonials.length]);

  useEffect(() => {
    if (!autoplay) {
      const timeout = setTimeout(() => {
        setAutoplay(true);
      }, 10000);
      return () => clearTimeout(timeout);
    }
  }, [autoplay]);

  const renderStars = (count) => {
    return Array(count).fill().map((_, index) => (
      <img key={index} src={star} alt="star" className='five_star_icon' />
    ));
  };

  return (
    <section id='testimonials' className='testimonial_section'>
      <div className='container'>
        <div className='testimonial_header'>
          <div className='section_intro'>
            <div className='title_wrapper'>
              <span className='accent_text'>Trusted Across Africa</span>
              <h1>Funsoft I-HMIS Coverage & Testimonials</h1>
            </div>
            <h3 className='subtitle'>
              Serving healthcare facilities across 15+ African countries with proven results and satisfied clients
            </h3>
            <div className='global_badge'>
              <span className='badge_icon'>🌍</span>
              <span className='badge_text'>Serving 15+ African Countries</span>
            </div>
          </div>
        </div>

        {/* Map Section - Above */}
        <div className="coverage_section">
          <div className="coverage_header">
            <h3>Our Africa-Wide Coverage</h3>
            <p className="coverage_subtitle">Funsoft I-HMIS is deployed across 150+ healthcare facilities in Africa</p>
          </div>
          
          <div className="coverage_container">
            <div className="coverage_image_container">
              <div className="map_wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8199817.846997357!2d20.9108775!3d-1.3162139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182780d08350900f%3A0x403b0eb0a1976dd9!2sKenya!5e1!3m2!1sen!2sus!4v1707577000000!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  style={{border:0}}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Funsoft Africa Coverage Map"
                  className="google_map"
                ></iframe>
              </div>
              <div className="map_caption">
                <span className="map_views">Interactive Africa Coverage Map • Showing Kenya as primary hub</span>
                <span className="map_source">Funsoft serves facilities across 15+ African countries</span>
              </div>
            </div>
            
            <div className="coverage_stats_row">
              <div className="coverage_stat_box">
                <div className="coverage_stat_icon">🏥</div>
                <div className="coverage_stat_content">
                  <div className="coverage_stat_number">150+</div>
                  <div className="coverage_stat_label">Healthcare Facilities</div>
                </div>
              </div>
              <div className="coverage_stat_box">
                <div className="coverage_stat_icon">🌍</div>
                <div className="coverage_stat_content">
                  <div className="coverage_stat_number">15+</div>
                  <div className="coverage_stat_label">African Countries</div>
                </div>
              </div>
              <div className="coverage_stat_box">
                <div className="coverage_stat_icon">👥</div>
                <div className="coverage_stat_content">
                  <div className="coverage_stat_number">15K+</div>
                  <div className="coverage_stat_label">Daily Users</div>
                </div>
              </div>
             
            </div>
            
            <div className="facility_regions">
              <div className="region_section">
                <h4 className="region_title">
                  <span className="region_flag">🇰🇪</span>
                  Key Facilities in Kenya
                </h4>
                <div className="facility_grid">
                  <div className="facility_column">
                    <div className="facility_item">
                      <span className="facility_marker">📍</span>
                      <span className="facility_name">Kenyatta National Hospital</span>
                    </div>
                    <div className="facility_item">
                      <span className="facility_marker">📍</span>
                      <span className="facility_name">Moi Teaching Referral Hospital</span>
                    </div>
                    <div className="facility_item">
                      <span className="facility_marker">📍</span>
                      <span className="facility_name">Kisumu County Hospital</span>
                    </div>
                    <div className="facility_item">
                      <span className="facility_marker">📍</span>
                      <span className="facility_name">Coast Province General Hospital</span>
                    </div>
                  </div>
                  <div className="facility_column">
                    <div className="facility_item">
                      <span className="facility_marker">📍</span>
                      <span className="facility_name">Nanyuki Teaching Referral Hospital</span>
                    </div>
                    <div className="facility_item">
                      <span className="facility_marker">📍</span>
                      <span className="facility_name">Kisii Teaching Referral Hospital</span>
                    </div>
                    <div className="facility_item">
                      <span className="facility_marker">📍</span>
                      <span className="facility_name">Machakos Level 5 Hospital</span>
                    </div>
                    <div className="facility_item">
                      <span className="facility_marker">📍</span>
                      <span className="facility_name">Thika Level 5 Hospital</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="region_section">
                <h4 className="region_title">
                  <span className="region_flag">🌍</span>
                  International Facilities
                </h4>
                <div className="facility_grid">
                  <div className="facility_column">
                    <div className="facility_item">
                      <span className="facility_marker">📍</span>
                      <span className="facility_name">St. Nicholas Hospital Lagos (Nigeria)</span>
                    </div>
                    <div className="facility_item">
                      <span className="facility_marker">📍</span>
                      <span className="facility_name">Juba Teaching Hospital (South Sudan)</span>
                    </div>
                  </div>
                  <div className="facility_column">
                    <div className="facility_item">
                      <span className="facility_marker">📍</span>
                      <span className="facility_name">Enugu State University Teaching Hospital (Nigeria)</span>
                    </div>
                    <div className="facility_item">
                      <span className="facility_marker">📍</span>
                      <span className="facility_name">Ahfad University for Women (Sudan)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section - Below */}
        <div className="testimonials_section">
          <div className="section_title">
            <h2>What Healthcare Leaders Say</h2>
            <p className="section_subtitle">Trusted by hospital administrators, medical directors, and healthcare professionals across Africa</p>
          </div>

          <div className='testimonial_container' ref={sliderContainer}>
            <div className='testimonial_nav'>
              <button className='nav_button prev_button' onClick={slideBackward}>
                <img src={back_arrow} alt="Previous" />
              </button>
              <button className='nav_button next_button' onClick={slideForward}>
                <img src={next_arrow} alt="Next" />
              </button>
            </div>

            <div className='testimonial_slider_wrapper'
              onMouseDown={handleDragStart}
              onMouseMove={handleDragMove}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
              onTouchStart={handleDragStart}
              onTouchMove={handleDragMove}
              onTouchEnd={handleDragEnd}
            >
              <div className='testimonial_slider'>
                <div className='slider_track' ref={slider}>
                  {infiniteTestimonials.map((testimonial, index) => (
                    <div 
                      key={`${testimonial.id}-${index}`} 
                      className='testimonial_slide'
                    >
                      <div className='testimonial_card'>
                        <div className='card_header'>
                          <div className='country_badge'>
                            <span className='flag_emoji'>{testimonial.flag}</span>
                            <span className='country_name'>{testimonial.country}</span>
                          </div>
                          <div className='rating_stars'>
                            {renderStars(testimonial.rating)}
                          </div>
                        </div>
                        
                        <div className='quote_container'>
                          <div className='quote_symbol'>"</div>
                          <p className='testimonial_quote'>{testimonial.quote}</p>
                        </div>
                        
                        <div className='benefits_container'>
                          {testimonial.benefits.map((benefit, idx) => (
                            <div key={idx} className='benefit_item'>
                              <span className='benefit_icon'>✓</span>
                              <span className='benefit_text'>{benefit}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className='testimonial_author'>
                          <div className='author_image_container'>
                            <img src={testimonial.image} alt={testimonial.name} className='author_image' />
                            <div className='author_badge'>
                              <span className='badge_dot'></span>
                              <span className='badge_text'>Verified</span>
                            </div>
                          </div>
                          <div className='author_info'>
                            <h4 className='author_name'>{testimonial.name}</h4>
                            <p className='author_position'>{testimonial.position}</p>
                            <p className='author_organization'>Funsoft System User</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className='slider_dots'>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className='testimonial_stats'>
          <div className='stats_grid'>
            <div className='stat_box'>
              <div className='stat_icon'>🏥</div>
              <div className='stat_number'>200+</div>
              <div className='stat_label'>Healthcare Facilities</div>
              <div className='stat_sub'>Across Africa</div>
            </div>
            <div className='stat_box'>
              <div className='stat_icon'>⭐</div>
              <div className='stat_number'>98.5%</div>
              <div className='stat_label'>Satisfaction Rate</div>
              <div className='stat_sub'>From Healthcare Leaders</div>
            </div>
            <div className='stat_box'>
              <div className='stat_icon'>⏰</div>
              <div className='stat_number'>24/7</div>
              <div className='stat_label'>Local Support</div>
              <div className='stat_sub'>Nairobi, Lagos, Jo'burg</div>
            </div>
            <div className='stat_box'>
              <div className='stat_icon'>💰</div>
              <div className='stat_number'>KES 3.2B+</div>
              <div className='stat_label'>Claims Processed</div>
              <div className='stat_sub'>NHIF & Private Insurers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;