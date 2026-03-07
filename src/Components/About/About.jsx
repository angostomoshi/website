import React, { useState, useEffect } from 'react';
import './About.css';
import abtImage from '../../assets/abt.png';
import { getDocs, collection } from "firebase/firestore/lite";
import { db } from "../../firebase/firebase_config";

const HARDCODED_SERVICES = [
  {
    id: "hardcoded-1",
    title: "Health Management Information Systems (HMIS)",
    description: "Comprehensive digital solutions for healthcare facilities including patient records, appointment scheduling, billing, and clinical decision support. Streamline operations and improve patient care with our integrated HMIS platform.",
    type: "image",
    url: null,
    uploadDate: new Date().toISOString(),
    icon: "🏥"
  },
  {
    id: "hardcoded-2",
    title: "Enterprise Resource Planning (ERPM)",
    description: "End-to-end business management solutions integrating finance, HR, procurement, inventory, and operations. Optimize resources, reduce costs, and enhance productivity with our customizable ERP systems.",
    type: "image",
    url: null,
    uploadDate: new Date().toISOString(),
    icon: "📊"
  },
  {
    id: "hardcoded-3",
    title: "Artificial Intelligence Systems",
    description: "Cutting-edge AI solutions including machine learning, predictive analytics, natural language processing, and computer vision. Transform data into actionable insights and automate complex processes.",
    type: "image",
    url: null,
    uploadDate: new Date().toISOString(),
    icon: "🤖"
  }
];

const About = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  // Service type colors mapping - Using purple/pink gradient like Hero
  const serviceTypeColors = {
    image: "#722ed1",
    video: "#eb2f96",
    pdf: "#fadb14",
    default: "#722ed1"
  };

  // Service type icons mapping
  const serviceTypeIcons = {
    image: "🖼️",
    video: "🎥",
    pdf: "📄",
    default: "📁"
  };

  // Hardcoded service icons mapping
  const hardcodedIcons = {
    "Health Management Information Systems (HMIS)": "🏥",
    "Enterprise Resource Planning (ERPM)": "📊",
    "Artificial Intelligence Systems": "🤖"
  };

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const servicesRef = collection(db, "services", "media", "media");
        const snapshot = await getDocs(servicesRef);
        const data = [];

        snapshot.forEach((doc) => {
          const d = doc.data();
          data.push({
            id: doc.id,
            ...d,
            uploadDate: d.uploadDate?.toDate ? d.uploadDate.toDate() : d.uploadDate,
          });
        });

        data.sort((a, b) => new Date(b.uploadDate || 0) - new Date(a.uploadDate || 0));

        if (data.length > 0) {
          setServices(data);
        } else {
          setServices(HARDCODED_SERVICES);
        }
      } catch (err) {
        console.error("Error fetching services:", err);
        setServices(HARDCODED_SERVICES);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const handleGmailEnquiry = (serviceTitle) => {
    const recipient = "angostomoshi@gmail.com";
    const subject = encodeURIComponent(`Enquiry about Service: ${serviceTitle}`);
    const body = encodeURIComponent(
      `Hello,\n\nI'm interested in your service: ${serviceTitle}.\n\nPlease provide more information about this service, including pricing and availability.\n\nThank you.`
    );
    
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`, '_blank');
  };

  const handleScheduleDemo = () => {
    window.open('https://wa.me/254758533049?text=Hello%2C%20I%27d%20like%20to%20schedule%20a%20personalized%20demo%20of%20your%20IT%20solutions.', '_blank');
  };

  const openServiceModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeServiceModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
    document.body.style.overflow = 'auto';
  };

  // Get service color based on type
  const getServiceColor = (type) => {
    return serviceTypeColors[type] || serviceTypeColors.default;
  };

  // Get service icon based on type or hardcoded icon
  const getServiceIcon = (service) => {
    if (service.id?.startsWith('hardcoded')) {
      return hardcodedIcons[service.title] || "📁";
    }
    return serviceTypeIcons[service.type] || serviceTypeIcons.default;
  };

  return (
    <section id='about' className='about'>
      {/* Our Technology Stack & Capabilities Section */}
      <div className='about-partners-section'>
        <div className='about-container'>
          <p className='partners-title'>
            Our Technology Stack & Capabilities
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

      {/* Our Services Section */}
      <div className='about-services-section'>
        <div className='about-container'>
          {/* Section Header */}
          <div className='services-header-enhanced'>
            <div className='header-decoration'>
              <span className='decoration-line left'></span>
              <span className='decoration-icon'>⚡</span>
              <span className='decoration-line right'></span>
            </div>
            <h1 className='services-main-title'>
              <span className='title-word'>Our</span>
              <span className='gradient-word'>Services</span>
            </h1>
            <div className='title-underline'>
              <span className='underline-dot'></span>
              <span className='underline-line'></span>
              <span className='underline-dot'></span>
            </div>
            <p className='services-subtitle'>
              Delivering innovative technology solutions including <span className="highlight-text">Health Management Information Systems (HMIS)</span>, 
              <span className="highlight-text"> Enterprise Resource Planning</span>, <span className="highlight-text">Artificial Intelligence</span>, and comprehensive IT services.
            </p>
          </div>

          {/* Services Grid - Clean Cards */}
          {loading ? (
            <div className="services-loading-container">
              <div className="loading-spinner"></div>
              <p className="loading-text">Loading services...</p>
            </div>
          ) : services.length === 0 ? (
            <div className="services-empty-container">
              <div className="empty-icon">📁</div>
              <p className="empty-text">No services available at the moment</p>
            </div>
          ) : (
            <div className="services-grid-clean">
              {services.map((service) => {
                const serviceColor = getServiceColor(service.type);
                const serviceIcon = getServiceIcon(service);
                const isHardcoded = service.id?.startsWith('hardcoded');
                
                return (
                  <div 
                    key={service.id}
                    className={`service-card-clean ${isHardcoded ? 'hardcoded-card' : ''}`}
                  >
                    {/* Image/Icon Section */}
                    <div className="service-card-image-clean">
                      {service.type === 'image' && service.url ? (
                        <img 
                          src={service.url} 
                          alt={service.title}
                          className="service-image-clean"
                        />
                      ) : (
                        <div className="service-icon-clean" style={{ 
                          background: `linear-gradient(135deg, ${serviceColor} 0%, ${serviceColor}dd 100%)`
                        }}>
                          <span className="service-emoji-clean">{serviceIcon}</span>
                        </div>
                      )}
                      {isHardcoded && (
                        <div className="hardcoded-badge">Core Service</div>
                      )}
                    </div>

                    {/* Content Below Image */}
                    <div className="service-card-content-clean">
                      <h3 className="service-title-clean">{service.title || 'Untitled Service'}</h3>
                      
                      <p className="service-description-clean">
                        {service.description && service.description.length > 120 
                          ? service.description.substring(0, 120) + '...' 
                          : service.description || 'No description available'}
                      </p>

                      {/* Footer with actions only */}
                      <div className="service-footer-clean">
                        <div className="service-actions-clean">
                          <button 
                            className="service-action-btn view-btn-clean"
                            onClick={() => openServiceModal(service)}
                            title="View Details"
                          >
                            👁️ View
                          </button>
                          <button 
                            className="service-action-btn enquire-btn-clean"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleGmailEnquiry(service.title);
                            }}
                            style={{ background: serviceColor }}
                            title="Enquire"
                          >
                            ✉️ Enquire
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* CTA SECTION */}
          <div className='cta-section-compact'>
            <div className='cta-content-compact'>
              <h2 className='cta-title-compact'>
                Ready to Transform?
              </h2>
              <p className='cta-text-compact'>
                Partner with us for cutting-edge IT solutions tailored to your needs.
              </p>
              <button 
                className='btn-cta-compact' 
                onClick={handleScheduleDemo}
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Service Detail Modal - Simplified */}
      {isModalOpen && selectedService && (
        <div className="modal-overlay" onClick={closeServiceModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeServiceModal}>×</button>
            
            <div className="modal-content">
              <div className="modal-header" style={{ 
                background: `linear-gradient(135deg, ${getServiceColor(selectedService.type)} 0%, ${getServiceColor(selectedService.type)}dd 100%)`
              }}>
                <h2 className="modal-title">{selectedService.title || 'Untitled Service'}</h2>
              </div>
              
              <div className="modal-body">
                {/* Media Preview */}
                {selectedService.type === 'image' && selectedService.url && (
                  <div className="modal-media">
                    <img 
                      src={selectedService.url} 
                      alt={selectedService.title}
                      className="modal-image"
                    />
                  </div>
                )}

                {selectedService.type === 'video' && selectedService.url && (
                  <div className="modal-media">
                    <video 
                      src={selectedService.url} 
                      controls
                      className="modal-video"
                    />
                  </div>
                )}

                {selectedService.type === 'pdf' && selectedService.url && (
                  <div className="modal-media">
                    <a 
                      href={selectedService.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="modal-pdf-link"
                      style={{ background: getServiceColor(selectedService.type) }}
                    >
                      <span className="pdf-icon">📄</span>
                      <span>Open PDF Document</span>
                      <span className="pdf-arrow">→</span>
                    </a>
                  </div>
                )}

                {/* Description */}
                {selectedService.description && (
                  <div className="modal-description-section">
                    <p className="modal-description">{selectedService.description}</p>
                  </div>
                )}

                {/* Actions */}
                <div className="modal-actions">
                  <button className="modal-btn-secondary" onClick={closeServiceModal}>
                    Close
                  </button>
                  <button 
                    className="modal-btn-primary"
                    style={{ background: getServiceColor(selectedService.type) }}
                    onClick={() => {
                      handleGmailEnquiry(selectedService.title);
                      closeServiceModal();
                    }}
                  >
                    <span className="btn-icon">✉️</span>
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Styles */}
      <style jsx="true">{`
        /* Clean Services Grid */
        .services-grid-clean {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 24px;
          margin: 40px 0;
        }

        /* Clean Card */
        .service-card-clean {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
          transition: all 0.3s ease;
          border: 1px solid rgba(0, 0, 0, 0.05);
          display: flex;
          flex-direction: column;
        }

        .service-card-clean:hover {
          transform: translateY(-6px);
          box-shadow: 0 15px 30px rgba(114, 46, 209, 0.12);
          border-color: rgba(114, 46, 209, 0.2);
        }

        .hardcoded-card {
          border-left: 4px solid #722ed1;
        }

        /* Image Section */
        .service-card-image-clean {
          height: 160px;
          overflow: hidden;
          position: relative;
          background: linear-gradient(135deg, #f5f5f5, #e0e0e0);
        }

        .service-image-clean {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .service-card-clean:hover .service-image-clean {
          transform: scale(1.08);
        }

        .service-icon-clean {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .service-emoji-clean {
          font-size: 56px;
          filter: drop-shadow(0 8px 16px rgba(0,0,0,0.15));
        }

        .hardcoded-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          background: rgba(114, 46, 209, 0.9);
          color: white;
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.3px;
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          z-index: 2;
        }

        /* Content Section */
        .service-card-content-clean {
          padding: 16px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .service-title-clean {
          font-size: 16px;
          font-weight: 700;
          color: #1A237E;
          margin: 0 0 8px 0;
          line-height: 1.4;
          min-height: 44px;
        }

        .service-description-clean {
          font-size: 12px;
          color: #5C6BC0;
          line-height: 1.5;
          margin: 0 0 12px 0;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          flex: 1;
          min-height: 54px;
        }

        /* Footer */
        .service-footer-clean {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          margin-top: auto;
          padding-top: 10px;
          border-top: 1px solid rgba(0, 0, 0, 0.05);
        }

        .service-actions-clean {
          display: flex;
          gap: 6px;
        }

        .service-action-btn {
          padding: 5px 12px;
          border: none;
          border-radius: 30px;
          font-size: 11px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
          transition: all 0.2s ease;
          box-shadow: 0 2px 6px rgba(0,0,0,0.08);
        }

        .view-btn-clean {
          background: #f0f0f0;
          color: #333;
          border: 1px solid #e0e0e0;
        }

        .view-btn-clean:hover {
          background: #e5e5e5;
          transform: translateY(-2px);
        }

        .enquire-btn-clean {
          color: white;
        }

        .enquire-btn-clean:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(0,0,0,0.15);
        }

        /* Header Styling */
        .services-header-enhanced {
          text-align: center;
          margin-bottom: 40px;
        }

        .header-decoration {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 15px;
        }

        .decoration-line {
          width: 40px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #722ed1, #eb2f96, transparent);
        }

        .decoration-icon {
          font-size: 20px;
          color: #722ed1;
        }

        .services-main-title {
          font-size: 36px;
          font-weight: 800;
          margin: 0 0 15px 0;
          line-height: 1.2;
        }

        .title-word {
          color: #1A237E;
        }

        .gradient-word {
          background: linear-gradient(135deg, #722ed1, #eb2f96);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-left: 8px;
        }

        .title-underline {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-bottom: 20px;
        }

        .underline-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #722ed1;
        }

        .underline-line {
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, #722ed1, #eb2f96);
          border-radius: 2px;
        }

        .services-subtitle {
          font-size: 14px;
          color: #666;
          line-height: 1.6;
          max-width: 800px;
          margin: 0 auto;
        }

        .highlight-text {
          color: #722ed1;
          font-weight: 600;
          position: relative;
          display: inline-block;
          margin: 0 2px;
        }

        .highlight-text:hover {
          color: #eb2f96;
          transition: color 0.3s ease;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .services-grid-clean {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 16px;
          }
          
          .services-main-title {
            font-size: 28px;
          }
          
          .services-subtitle {
            font-size: 13px;
            padding: 0 15px;
          }
        }

        @media (max-width: 480px) {
          .services-grid-clean {
            grid-template-columns: 1fr;
          }
          
          .service-card-image-clean {
            height: 140px;
          }
          
          .service-title-clean {
            font-size: 15px;
            min-height: auto;
          }
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
        }

        .modal-container {
          background: white;
          border-radius: 24px;
          max-width: 600px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          animation: modalSlideUp 0.3s ease;
        }

        @keyframes modalSlideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .modal-close {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: white;
          border: none;
          font-size: 24px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #333;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          z-index: 10;
          transition: all 0.3s ease;
        }

        .modal-close:hover {
          transform: rotate(90deg);
          background: #f0f0f0;
        }

        .modal-header {
          padding: 20px 25px 15px;
          color: white;
        }

        .modal-title {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 8px;
          font-family: 'Nunito', sans-serif;
        }

        .modal-body {
          padding: 0 25px 25px;
        }

        .modal-media {
          margin: 15px 0;
          text-align: center;
        }

        .modal-image {
          max-width: 100%;
          max-height: 250px;
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }

        .modal-video {
          max-width: 100%;
          max-height: 250px;
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }

        .modal-pdf-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 20px;
          color: white;
          text-decoration: none;
          border-radius: 40px;
          font-size: 14px;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 6px 16px rgba(0,0,0,0.2);
        }

        .modal-pdf-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.25);
        }

        .modal-description-section {
          margin: 15px 0;
        }

        .modal-description {
          color: #666;
          line-height: 1.6;
          font-size: 13px;
          text-align: center;
        }

        .modal-actions {
          display: flex;
          gap: 10px;
          margin-top: 20px;
        }

        .modal-btn-primary,
        .modal-btn-secondary {
          flex: 1;
          padding: 10px;
          border: none;
          border-radius: 40px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          transition: all 0.3s ease;
        }

        .modal-btn-primary {
          color: white;
          box-shadow: 0 6px 14px rgba(0,0,0,0.15);
        }

        .modal-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }

        .modal-btn-secondary {
          background: #f5f5f5;
          color: #333;
          border: 1px solid #e0e0e0;
        }

        .modal-btn-secondary:hover {
          background: #e8e8e8;
        }

        @media (max-width: 480px) {
          .modal-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
};

export default About;