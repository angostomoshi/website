import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Typography, Spin, Empty, Tag } from 'antd';
import { FireOutlined, StarOutlined, RocketOutlined, CrownOutlined, ThunderboltOutlined, HeartOutlined, TrophyOutlined, GiftOutlined } from '@ant-design/icons';
import { getDocs, collection } from "firebase/firestore/lite";
import { db } from "../../firebase/firebase_config";

// Import all your images
import physician from '../../assets/Phys.png';
import b1 from '../../assets/1.png';
import b2 from '../../assets/b2.png';
import b3 from '../../assets/b2.png';

const { Text } = Typography;

const HARDCODED_PRODUCTS = [
  {
    id: "hardcoded-1",
    name: "OUT PATIENT CENTRE",
    description: "O-50 Bed Hospital\n\n(This price is subject to VAT tax @ 16%). Training, support, travel and accommodation fees to be billed at 50% of the cost of the software",
    price: 3999.00,
    currency: "USD",
    mediaType: null,
    mediaUrl: null,
    createdAt: new Date().toISOString(),
    iconType: 'fire',
    tagType: 'popular'
  },
  {
    id: "hardcoded-2",
    name: "OUT PATIENT CENTRE",
    description: "O-50 Bed Hospital\n\n(This price is subject to VAT tax @ 16%). Training, support, travel and accommodation fees to be billed at 50% of the cost of the software",
    price: 5999.00,
    currency: "USD",
    mediaType: null,
    mediaUrl: null,
    createdAt: new Date().toISOString(),
    iconType: 'star',
    tagType: 'featured'
  },
  {
    id: "hardcoded-3",
    name: "OUT PATIENT CENTRE",
    description: "51-100 Bed Hospital\n\n(This price is subject to VAT tax @ 16%) Training, support fees to be billed online and ready to help.",
    price: 8999.00,
    currency: "USD",
    mediaType: null,
    mediaUrl: null,
    createdAt: new Date().toISOString(),
    iconType: 'rocket',
    tagType: 'new'
  }
];

const ICON_TYPES = ['fire', 'star', 'rocket', 'crown', 'thunder', 'heart', 'trophy', 'gift'];
const TAG_TYPES = ['popular', 'featured', 'new', 'bestseller', 'trending', 'limited'];

const CURRENCY_SYMBOLS = {
  KES: "KSh",
  USD: "$",
  EUR: "€",
  GBP: "£",
  JPY: "¥",
  CNY: "¥",
};

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Icon mapping
  const getIconByType = (type) => {
    switch(type) {
      case 'fire': return <FireOutlined />;
      case 'star': return <StarOutlined />;
      case 'rocket': return <RocketOutlined />;
      case 'crown': return <CrownOutlined />;
      case 'thunder': return <ThunderboltOutlined />;
      case 'heart': return <HeartOutlined />;
      case 'trophy': return <TrophyOutlined />;
      case 'gift': return <GiftOutlined />;
      default: return <FireOutlined />;
    }
  };

  // Tag configuration
  const getTagByType = (type, index) => {
    const tags = {
      popular: { color: '#fa541c', icon: <FireOutlined />, text: 'POPULAR', burning: index === 0 },
      featured: { color: '#faad14', icon: <StarOutlined />, text: 'FEATURED', burning: false },
      new: { color: '#52c41a', icon: <RocketOutlined />, text: 'NEW', burning: false },
      bestseller: { color: '#722ed1', icon: <CrownOutlined />, text: 'BEST SELLER', burning: false },
      trending: { color: '#eb2f96', icon: <HeartOutlined />, text: 'TRENDING', burning: false },
      limited: { color: '#1890ff', icon: <ThunderboltOutlined />, text: 'LIMITED', burning: false }
    };
    return tags[type] || tags.popular;
  };

  // Format currency
  const formatCurrency = (amount, currency = "USD") => {
    const symbol = CURRENCY_SYMBOLS[currency] || currency;
    return `${symbol}${amount?.toLocaleString() || 0}`;
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        console.log("Fetching products from Firebase...");

        const productsRef = collection(db, "products", "listings", "products");
        const snapshot = await getDocs(productsRef);
        const data = [];

        if (!snapshot.empty) {
          snapshot.forEach((doc, index) => {
            const productData = doc.data();
            data.push({
              id: doc.id,
              ...productData,
              price: Number(productData.price) || 0,
              createdAt: productData.createdAt?.toDate ? productData.createdAt.toDate() : productData.createdAt,
              updatedAt: productData.updatedAt?.toDate ? productData.updatedAt.toDate() : productData.updatedAt,
              iconType: ICON_TYPES[index % ICON_TYPES.length],
              tagType: TAG_TYPES[index % TAG_TYPES.length],
            });
          });

          console.log(`Found ${data.length} products from Firebase`);
          setProducts(data);
        } else {
          console.log("No products in Firebase, using hardcoded products");
          setProducts(HARDCODED_PRODUCTS);
        }
      } catch (err) {
        console.error("Error fetching products:", err);
        console.log("Using hardcoded products due to error");
        setProducts(HARDCODED_PRODUCTS);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleGmailEnquiry = (productName, productPrice) => {
    const recipient = "angostomoshi@gmail.com";
    const subject = encodeURIComponent(`Enquiry about ${productName}`);
    const body = encodeURIComponent(
      `Hello,\n\nI'm interested in ${productName} (${formatCurrency(productPrice, 'USD')}).\n\nPlease provide more information and pricing.\n\nThank you.`
    );
    
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`, '_blank');
  };

  // Carousel items
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
  }, [carouselItems.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div style={{ 
      width: '100%',
      minHeight: '100vh',
      fontFamily: "'Inter', 'Nunito', sans-serif",
      background: 'linear-gradient(180deg, #FFFFFF 0%, #F5F9FF 100%)',
    }}>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        @keyframes burn {
          0% { transform: scale(1); opacity: 1; filter: drop-shadow(0 0 2px #ff4d4f); }
          50% { transform: scale(1.2); opacity: 0.9; filter: drop-shadow(0 0 8px #ff4d4f) drop-shadow(0 0 12px #faad14); }
          100% { transform: scale(1); opacity: 1; filter: drop-shadow(0 0 2px #ff4d4f); }
        }
        @keyframes flicker {
          0% { opacity: 1; }
          25% { opacity: 0.8; }
          50% { opacity: 1; }
          75% { opacity: 0.9; }
          100% { opacity: 1; }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .product-card {
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
          border-radius: 20px !important;
          overflow: hidden;
          background: white;
          border: 1px solid #f0f0f0 !important;
        }
        .product-col {
          display: flex;
        }
        .product-col .product-card {
          width: 100%;
        }
        .product-card .ant-card-body {
          padding: 0 !important;
          display: flex;
          height: 100%;
        }
        .product-card-body {
          padding: 24px;
          display: flex;
          flex-direction: column;
          width: 100%;
          min-height: 430px;
        }
        .product-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(114, 46, 209, 0.15) !important;
          border-color: transparent !important;
        }
        .product-image-container {
          height: 200px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          overflow: hidden;
        }
        .product-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        }
        .product-icon-large {
          font-size: 100px;
          color: white;
          filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3));
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .product-icon-large svg {
          width: 100px;
          height: 100px;
        }
        .icon-fire {
          animation: pulse 2s infinite, flicker 3s infinite;
        }
        .icon-star {
          animation: pulse 3s infinite, float 4s infinite;
        }
        .icon-rocket {
          animation: pulse 2.5s infinite, float 3s infinite;
        }
        .icon-crown {
          animation: pulse 3s infinite, spin 10s infinite linear;
        }
        .icon-thunder {
          animation: flicker 1s infinite;
        }
        .icon-heart {
          animation: pulse 2s infinite;
        }
        .icon-trophy {
          animation: pulse 3s infinite, float 4s infinite;
        }
        .icon-gift {
          animation: pulse 2.5s infinite;
        }
        .enquire-button {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          background: linear-gradient(135deg, #00bfff, #0099cc);
          border: none;
          height: 48px;
          font-weight: 600;
          font-size: 15px;
          letter-spacing: 0.5px;
          border-radius: 12px;
          box-shadow: 0 8px 16px rgba(0, 191, 255, 0.25);
          color: white;
          flex: 1;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          min-width: 0;
        }
        .enquire-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(0, 191, 255, 0.35);
          background: linear-gradient(135deg, #0099cc, #00bfff);
        }
        .enquire-button:active {
          transform: translateY(-1px);
        }
        .button-secondary {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          background: transparent;
          border: 2px solid #00bfff;
          height: 48px;
          font-weight: 600;
          font-size: 15px;
          letter-spacing: 0.5px;
          border-radius: 12px;
          color: #00bfff;
          flex: 1;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-width: 0;
        }
        .button-secondary:hover {
          background: linear-gradient(135deg, rgba(0, 191, 255, 0.1) 0%, rgba(0, 191, 255, 0.05) 100%);
          border-color: #0099cc;
          color: #0099cc;
          box-shadow: 0 8px 20px rgba(0, 191, 255, 0.2);
          transform: translateY(-3px);
        }
        .button-secondary:active {
          transform: translateY(-1px);
        }
        .button-container {
          display: flex;
          gap: 12px;
          margin-top: auto;
          width: 100%;
        }
        @media (max-width: 480px) {
          .button-container {
            flex-direction: column;
          }
          .enquire-button,
          .button-secondary {
            width: 100%;
          }
        }
        .price-tag {
          font-size: 28px;
          font-weight: 800;
          color: #1A237E;
          display: inline-block;
          letter-spacing: -0.5px;
          margin-bottom: 8px;
          line-height: 1.1;
        }
        .product-name {
          font-size: 24px;
          font-weight: 700;
          color: #1A237E;
          margin-bottom: 12px;
          line-height: 1.3;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          min-height: 64px;
        }
        .product-description-wrap {
          margin-top: 12px;
          min-height: 170px;
          display: flex;
          flex-direction: column;
        }
        .product-description {
          color: #666;
          font-size: 14px;
          line-height: 1.7;
          margin: 0 0 10px 0;
          white-space: pre-line;
          text-align: left;
        }
        .product-description:last-child {
          margin-bottom: 0;
        }
        @media (max-width: 992px) {
          .product-card-body {
            min-height: 400px;
          }

          .product-description-wrap {
            min-height: 150px;
          }
        }
        .stats-icon {
          font-size: 28px;
          color: white;
        }
        .section-title {
          font-size: clamp(1.8rem, 5vw, 2.8rem);
          font-weight: 800;
          margin-bottom: clamp(15px, 3vw, 25px);
          line-height: 1.2;
          color: #1A237E;
        }
        .gradient-text {
          background: linear-gradient(90deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .badge {
          display: inline-block;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: clamp(10px, 2vw, 15px) clamp(20px, 4vw, 30px);
          border-radius: 50px;
          font-size: clamp(1rem, 2.5vw, 1.2rem);
          font-weight: 700;
          letter-spacing: 0.5px;
          box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
        }
        .stat-card {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border-radius: clamp(15px, 3vw, 20px);
          padding: clamp(15px, 3vw, 25px);
          border: 2px solid rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          gap: clamp(10px, 2vw, 15px);
          transition: all 0.3s ease;
        }
        .stat-card:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: translateY(-5px);
          border-color: rgba(255, 255, 255, 0.4);
        }
        .product-tag {
          position: absolute;
          top: 16px;
          right: 16px;
          z-index: 10;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          font-weight: 700;
          border: none;
          padding: 6px 16px;
          border-radius: 30px;
          font-size: 13px;
          letter-spacing: 0.5px;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .burning-tag {
          animation: burn 1.5s infinite, flicker 0.5s infinite;
        }
        .activate-windows {
          font-size: 11px;
          color: #999;
          text-align: right;
          margin-top: 8px;
          font-style: italic;
        }
        .carousel-dot {
          width: clamp(10px, 2vw, 14px);
          height: clamp(10px, 2vw, 14px);
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          border: 2px solid rgba(255, 255, 255, 0.8);
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }
        .carousel-dot.active {
          background: white;
          transform: scale(1.2);
        }
      `}</style>

      {/* FULL WIDTH CAROUSEL SECTION */}
      <div style={{
        width: '100%',
        height: 'min(80vh, 900px)',
        minHeight: 'min(70vh, 500px)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            {carouselItems.map((item, index) => (
              <div 
                key={item.id}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  opacity: index === currentSlide ? 1 : 0,
                  transition: 'opacity 0.8s ease-in-out',
                }}
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block',
                  }}
                  loading="lazy"
                />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(45deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 100%)',
                  zIndex: 1,
                }}></div>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 2,
                  padding: '0 clamp(15px, 5vw, 50px)',
                }}>
                  <div style={{ width: '100%', maxWidth: '1400px', margin: '0 auto' }}>
                    <div style={{
                      width: '100%',
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                      gap: 'clamp(20px, 5vw, 60px)',
                      alignItems: 'center',
                      animation: 'fadeInUp 1s ease-out',
                    }}>
                      <div style={{ textAlign: 'left' }}>
                        <h1 style={{
                          fontSize: 'clamp(2rem, 8vw, 4.5rem)',
                          fontWeight: 900,
                          lineHeight: 1.1,
                          color: 'white',
                          margin: '0 0 clamp(15px, 3vw, 25px) 0',
                          fontFamily: "'Nunito', sans-serif",
                          textShadow: '0 4px 30px rgba(0, 0, 0, 0.6)',
                          letterSpacing: '-0.5px',
                          textTransform: 'uppercase',
                          animation: 'fadeInUp 0.9s ease-out 0.2s both',
                          overflow: 'visible',
                          whiteSpace: 'normal',
                          borderRight: 'none',
                          display: 'block',
                          maxWidth: 'clamp(280px, 70vw, 780px)',
                        }}>
                          FUNSOFT Healthcare Systems
                        </h1>
                        <h2 style={{
                          fontSize: 'clamp(1rem, 4vw, 2rem)',
                          fontWeight: 600,
                          lineHeight: 1.3,
                          color: 'rgba(255, 255, 255, 0.95)',
                          margin: 0,
                          fontFamily: "'Inter', sans-serif",
                          textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
                          letterSpacing: '0.5px',
                          textTransform: 'uppercase',
                          animation: 'fadeInUp 1s ease-out 1.5s both',
                          maxWidth: '600px',
                        }}>
                          Trusted by 200+ Healthcare Facilities
                        </h2>
                      </div>
                      
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: 'clamp(15px, 3vw, 25px)',
                        paddingLeft: 'clamp(20px, 5vw, 40px)',
                        borderLeft: '2px solid rgba(255, 255, 255, 0.3)',
                      }}>
                        {[
                          { icon: '🏥', number: '200+', text: 'Healthcare Facilities' },
                          { icon: '👥', number: '15K+', text: 'Daily System Users' },
                          { icon: '📚', number: '50+', text: 'Training Sessions' },
                          { icon: '📋', number: '2M+', text: 'Patient Records Managed' },
                        ].map((stat, idx) => (
                          <div key={idx} className="stat-card">
                            <div style={{
                              minWidth: 'clamp(40px, 8vw, 60px)',
                              height: 'clamp(40px, 8vw, 60px)',
                              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                              borderRadius: 'clamp(10px, 2vw, 15px)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                              border: '2px solid rgba(255, 255, 255, 0.3)',
                            }}>
                              <span className="stats-icon">{stat.icon}</span>
                            </div>
                            <div>
                              <h3 style={{
                                fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
                                fontWeight: 900,
                                color: 'white',
                                margin: 0,
                                fontFamily: "'Nunito', sans-serif",
                                lineHeight: 1,
                                textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
                              }}>{stat.number}</h3>
                              <p style={{
                                fontSize: 'clamp(12px, 2vw, 14px)',
                                color: 'rgba(255, 255, 255, 0.9)',
                                margin: '5px 0 0 0',
                                fontWeight: 600,
                                letterSpacing: '0.3px',
                                textTransform: 'uppercase',
                              }}>{stat.text}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div style={{
            position: 'absolute',
            bottom: 'clamp(20px, 5vh, 40px)',
            left: 0,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            gap: 'clamp(10px, 2vw, 15px)',
            zIndex: 10,
            flexWrap: 'wrap',
            padding: '0 15px',
          }}>
            {carouselItems.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* WHO WE ARE SECTION */}
      <div style={{
        width: '100%',
        padding: 'clamp(40px, 8vw, 80px) 0',
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FBFF 100%)',
      }}>
        <div style={{
          width: '100%',
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 clamp(15px, 5vw, 50px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(30px, 6vw, 60px)',
        }}>
          <div>
            <h2 className="section-title">
              Who <span className="gradient-text">We Are</span>
            </h2>
            <p style={{
              fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
              fontWeight: 700,
              lineHeight: 1.5,
              color: '#0D47A1',
              marginBottom: 'clamp(15px, 3vw, 20px)',
              maxWidth: '700px',
            }}>
              A service to clientele
            </p>
            <p style={{
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              lineHeight: 1.7,
              color: '#3949AB',
              marginBottom: 'clamp(15px, 3vw, 25px)',
            }}>
              System Partners Limited (SPL) was founded in 2001 and incorporated as a private 
              limited liability company in Kenya. It is a software development and information 
              technology consultancy organization with a specific interest in designing and 
              developing comprehensive I-HMIS software applications with a core accounting module 
              that integrates with the business of our clients to produce a seamless system.
            </p>
            <p style={{
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              lineHeight: 1.7,
              color: '#3949AB',
              marginBottom: 'clamp(15px, 3vw, 25px)',
            }}>
              At the same time the systems are highly robust to serve a diverse clientele while 
              employing a standardized real time integrated accounting and process control platform 
              in the form of an I-HMIS and management system. The firm is located on Mombasa Rd at 
              the Royal ICT Business Park on the third floor.
            </p>
          </div>
          
          <div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 'clamp(15px, 3vw, 25px)',
              width: '100%',
            }}>
              {[
                { icon: '🏥', title: 'Est. 2001', desc: 'Over 22 years of healthcare innovation in Kenya' },
                { icon: '✓', title: 'MOH Approved', desc: 'Certified for use in public healthcare facilities' },
                { icon: '🔄', title: 'Open Source', desc: 'Flexible, customizable, no vendor lock-in' },
                { icon: '📊', title: '2M+ Records', desc: 'Successfully managed patient records' },
              ].map((feature, idx) => (
                <div key={idx} style={{
                  background: 'white',
                  padding: 'clamp(20px, 4vw, 35px)',
                  borderRadius: '20px',
                  boxShadow: '0 15px 40px rgba(102, 126, 234, 0.1)',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  border: '2px solid rgba(102, 126, 234, 0.05)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                  <div style={{
                    fontSize: 'clamp(2rem, 5vw, 3rem)',
                    marginBottom: 'clamp(10px, 2vw, 15px)',
                    color: '#667eea',
                  }}>{feature.icon}</div>
                  <h4 style={{
                    fontSize: 'clamp(1rem, 3vw, 1.2rem)',
                    color: '#1A237E',
                    marginBottom: 'clamp(8px, 1.5vw, 10px)',
                    fontWeight: 700,
                  }}>{feature.title}</h4>
                  <p style={{
                    color: '#5C6BC0',
                    fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                    margin: 0,
                    lineHeight: 1.5,
                    flexGrow: 1,
                  }}>{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* SYSTEM IMPACT STATS SECTION */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: 'clamp(40px, 8vw, 60px) 0',
        width: '100%',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 clamp(15px, 5vw, 20px)',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: 'clamp(20px, 5vw, 30px)',
          }}>
            {[
              { icon: '🏥', number: '200+', label: 'Healthcare Facilities', desc: 'Hospitals and clinics across Kenya using Funsoft I-HMIS' },
              { icon: '👥', number: '15K+', label: 'Daily Active Users', desc: 'Healthcare professionals using the system daily' },
              { icon: '⏳', number: '10+', label: 'Years of Expertise', desc: 'Combined experience of our development team' },
              { icon: '📋', number: '2M+', label: 'Patient Records', desc: 'Electronic health records securely managed' },
              { icon: '⚡', number: '99.9%', label: 'System Uptime', desc: 'Reliable cloud infrastructure' },
              { icon: '💳', number: '1M+', label: 'Monthly Transactions', desc: 'Billing, pharmacy, and lab transactions processed' },
            ].map((stat, idx) => (
              <div key={idx} style={{
                textAlign: 'center',
                color: 'white',
                padding: '0 clamp(5px, 2vw, 10px)',
              }}>
                <div style={{
                  fontSize: '48px',
                  marginBottom: '15px',
                  color: 'white',
                  textShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                  transition: 'all 0.3s ease',
                }}>{stat.icon}</div>
                <div style={{
                  fontSize: 'clamp(1.8rem, 5vw, 2.6rem)',
                  fontWeight: 800,
                  fontFamily: "'Nunito', sans-serif",
                  color: 'white',
                  marginBottom: 'clamp(5px, 1.5vw, 10px)',
                  lineHeight: 1.1,
                }}>{stat.number}</div>
                <div style={{
                  fontSize: 'clamp(14px, 3vw, 16px)',
                  fontWeight: 600,
                  marginBottom: 'clamp(5px, 1vw, 8px)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  color: 'white',
                }}>{stat.label}</div>
                <p style={{
                  fontSize: 'clamp(11px, 2vw, 13px)',
                  opacity: 0.9,
                  lineHeight: 1.4,
                  margin: 0,
                  color: 'white',
                }}>{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* OVERVIEW SECTION */}
      <div style={{
        width: '100%',
        padding: 'clamp(40px, 8vw, 80px) 0',
        background: 'linear-gradient(180deg, #F8FBFF 0%, #FFFFFF 100%)',
      }}>
        <div style={{
          width: '100%',
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 clamp(15px, 5vw, 50px)',
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: 'clamp(30px, 6vw, 60px)',
          }}>
            <h2 className="section-title">
              An Overview of <span className="gradient-text">Funsoft I-HMIS</span>
            </h2>
            <p style={{
              fontSize: 'clamp(1rem, 3vw, 1.5rem)',
              color: '#667eea',
              fontWeight: 600,
              marginTop: 'clamp(10px, 2vw, 15px)',
            }}>
              Developed in Kenya for the unique challenges of the public health sector
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(20px, 4vw, 40px)',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(20px, 3vw, 30px)' }}>
              <div style={{
                background: 'white',
                padding: 'clamp(20px, 4vw, 35px)',
                borderRadius: '24px',
                boxShadow: '0 15px 35px rgba(102, 126, 234, 0.08)',
                transition: 'all 0.3s ease',
                border: '2px solid rgba(102, 126, 234, 0.03)',
                height: '100%',
              }}>
                <div style={{
                  fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                  marginBottom: 'clamp(15px, 3vw, 20px)',
                  color: '#667eea',
                  background: '#f0e6ff',
                  width: 'clamp(50px, 8vw, 70px)',
                  height: 'clamp(50px, 8vw, 70px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '18px',
                }}>⚡</div>
                <h3 style={{
                  fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                  fontWeight: 700,
                  color: '#1A237E',
                  marginBottom: 'clamp(10px, 2vw, 15px)',
                }}>Uniqueness & Evolution</h3>
                <p style={{
                  fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                  lineHeight: 1.7,
                  color: '#3949AB',
                  marginBottom: 0,
                }}>
                  The Funsoft I-HMIS is a unique system where end users are incorporated into the 
                  production routines. This has evolved a fairly effective system that takes care 
                  of various activities as applied to process control and administrative routines 
                  in a healthcare environment.
                </p>
              </div>
              
              <div style={{
                background: 'white',
                padding: 'clamp(20px, 4vw, 35px)',
                borderRadius: '24px',
                boxShadow: '0 15px 35px rgba(102, 126, 234, 0.08)',
                transition: 'all 0.3s ease',
                border: '2px solid rgba(102, 126, 234, 0.03)',
                height: '100%',
              }}>
                <div style={{
                  fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                  marginBottom: 'clamp(15px, 3vw, 20px)',
                  color: '#667eea',
                  background: '#f0e6ff',
                  width: 'clamp(50px, 8vw, 70px)',
                  height: 'clamp(50px, 8vw, 70px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '18px',
                }}>📋</div>
                <h3 style={{
                  fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                  fontWeight: 700,
                  color: '#1A237E',
                  marginBottom: 'clamp(10px, 2vw, 15px)',
                }}>Comprehensive Coverage</h3>
                <p style={{
                  fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                  lineHeight: 1.7,
                  color: '#3949AB',
                  marginBottom: 0,
                }}>
                  The system covers all operations: patient registration, doctors consultations, 
                  Outpatient/Inpatient, cash collection & billing, banking, theatre, laboratory, 
                  pharmacy, stores/stocks, procurement, and more.
                </p>
              </div>
              
              <div style={{
                background: 'white',
                padding: 'clamp(20px, 4vw, 35px)',
                borderRadius: '24px',
                boxShadow: '0 15px 35px rgba(102, 126, 234, 0.08)',
                transition: 'all 0.3s ease',
                border: '2px solid rgba(102, 126, 234, 0.03)',
                height: '100%',
              }}>
                <div style={{
                  fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                  marginBottom: 'clamp(15px, 3vw, 20px)',
                  color: '#667eea',
                  background: '#f0e6ff',
                  width: 'clamp(50px, 8vw, 70px)',
                  height: 'clamp(50px, 8vw, 70px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '18px',
                }}>📢</div>
                <h3 style={{
                  fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                  fontWeight: 700,
                  color: '#1A237E',
                  marginBottom: 'clamp(10px, 2vw, 15px)',
                }}>Communication & M-PESA</h3>
                <p style={{
                  fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                  lineHeight: 1.7,
                  color: '#3949AB',
                  marginBottom: 0,
                }}>
                  Includes modules for email, SMS and internet communication. Integration with 
                  M-PESA services for seamless payment processing. The system can receive and 
                  convert SMS, email, XML, web services into appropriate data.
                </p>
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(20px, 3vw, 30px)' }}>
              <div style={{
                background: 'white',
                padding: 'clamp(20px, 4vw, 35px)',
                borderRadius: '24px',
                boxShadow: '0 15px 35px rgba(102, 126, 234, 0.08)',
                transition: 'all 0.3s ease',
                border: '2px solid rgba(102, 126, 234, 0.03)',
                height: '100%',
              }}>
                <div style={{
                  fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                  marginBottom: 'clamp(15px, 3vw, 20px)',
                  color: '#667eea',
                  background: '#f0e6ff',
                  width: 'clamp(50px, 8vw, 70px)',
                  height: 'clamp(50px, 8vw, 70px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '18px',
                }}>⏰</div>
                <h3 style={{
                  fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                  fontWeight: 700,
                  color: '#1A237E',
                  marginBottom: 'clamp(10px, 2vw, 15px)',
                }}>Workflow Alerts</h3>
                <p style={{
                  fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                  lineHeight: 1.7,
                  color: '#3949AB',
                  marginBottom: 0,
                }}>
                  Equipped with workflow alerts to prompt users of pending works. Capabilities 
                  include reminders for clinics, bookings, meetings, appointments, maintenance 
                  and service dates.
                </p>
              </div>
              
              <div style={{
                background: 'white',
                padding: 'clamp(20px, 4vw, 35px)',
                borderRadius: '24px',
                boxShadow: '0 15px 35px rgba(102, 126, 234, 0.08)',
                transition: 'all 0.3s ease',
                border: '2px solid rgba(102, 126, 234, 0.03)',
                height: '100%',
              }}>
                <div style={{
                  fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                  marginBottom: 'clamp(15px, 3vw, 20px)',
                  color: '#667eea',
                  background: '#f0e6ff',
                  width: 'clamp(50px, 8vw, 70px)',
                  height: 'clamp(50px, 8vw, 70px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '18px',
                }}>📊</div>
                <h3 style={{
                  fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                  fontWeight: 700,
                  color: '#1A237E',
                  marginBottom: 'clamp(10px, 2vw, 15px)',
                }}>Informatics & Planning</h3>
                <p style={{
                  fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                  lineHeight: 1.7,
                  color: '#3949AB',
                  marginBottom: 0,
                }}>
                  Based on an Open Source platform, compatible with any operating system. 
                  Users can customize the UI, reporting formats, and add features with 
                  minimal technical knowledge.
                </p>
              </div>
              
              <div style={{
                background: 'linear-gradient(145deg, #FFFFFF, #F0E6FF)',
                padding: 'clamp(20px, 4vw, 35px)',
                borderRadius: '24px',
                boxShadow: '0 15px 35px rgba(102, 126, 234, 0.08)',
                transition: 'all 0.3s ease',
                border: '2px solid rgba(102, 126, 234, 0.03)',
                borderLeft: '6px solid #667eea',
                height: '100%',
              }}>
                <div style={{
                  fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                  marginBottom: 'clamp(15px, 3vw, 20px)',
                  color: '#667eea',
                  background: '#f0e6ff',
                  width: 'clamp(50px, 8vw, 70px)',
                  height: 'clamp(50px, 8vw, 70px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '18px',
                }}>✅</div>
                <h3 style={{
                  fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                  fontWeight: 700,
                  color: '#1A237E',
                  marginBottom: 'clamp(10px, 2vw, 15px)',
                }}>Ministry of Health Certified</h3>
                <p style={{
                  fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                  lineHeight: 1.7,
                  color: '#3949AB',
                  marginBottom: 0,
                }}>
                  Funsoft I-HMIS was reviewed by the Ministry of Health and certified for use in 
                  public healthcare facilities. Currently deployed in <strong>200+ healthcare facilities</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PRODUCTS SECTION */}
      <div style={{
        width: '100%',
        padding: 'clamp(40px, 8vw, 80px) 0',
        background: 'linear-gradient(180deg, #F8FBFF 0%, #FFFFFF 100%)',
      }}>
        <div style={{
          width: '100%',
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 clamp(15px, 5vw, 50px)',
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: 'clamp(30px, 6vw, 60px)',
          }}>
            <h2 className="section-title">
              Our <span className="gradient-text">Products & Solutions</span>
            </h2>
            <p style={{
              fontSize: 'clamp(1rem, 3vw, 1.5rem)',
              fontWeight: 600,
              color: '#667eea',
              marginBottom: 'clamp(15px, 3vw, 25px)',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}>
              Ministry of Health Approved Healthcare Systems
            </p>
            
            {/* Stats Badge */}
            <div className="badge">
              Trusted by 200+ Healthcare Facilities
            </div>
          </div>

          {/* Products Grid */}
          {loading ? (
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
              <Spin size="large" />
              <Text style={{ display: 'block', marginTop: 16 }}>Loading products...</Text>
            </div>
          ) : products.length === 0 ? (
            <Empty
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              description="No products available"
              style={{ padding: '40px 0' }}
            />
          ) : (
            <Row gutter={[24, 24]}>
              {products.map((product, index) => {
                // Get tag based on product's tag type
                const tag = getTagByType(product.tagType, index);
                // Get icon based on product's icon type
                const icon = getIconByType(product.iconType);
                
                // Determine icon animation class
                let iconClass = '';
                if (product.iconType === 'fire') iconClass = 'icon-fire';
                else if (product.iconType === 'star') iconClass = 'icon-star';
                else if (product.iconType === 'rocket') iconClass = 'icon-rocket';
                else if (product.iconType === 'crown') iconClass = 'icon-crown';
                else if (product.iconType === 'thunder') iconClass = 'icon-thunder';
                else if (product.iconType === 'heart') iconClass = 'icon-heart';
                else if (product.iconType === 'trophy') iconClass = 'icon-trophy';
                else if (product.iconType === 'gift') iconClass = 'icon-gift';
                
                return (
                  <Col xs={24} sm={12} lg={8} xl={8} key={product.id} className="product-col">
                    <Card
                      hoverable
                      className="product-card"
                      cover={
                        <div className="product-image-container">
                          <div className="product-icon-wrapper">
                            <div className={`product-icon-large ${iconClass}`}>
                              {icon}
                            </div>
                          </div>
                          {/* Each card has its own tag based on tagType */}
                          <Tag 
                            color={tag.color}
                            className={`product-tag ${tag.burning ? 'burning-tag' : ''}`}
                            icon={tag.icon}
                          >
                            {tag.text}
                          </Tag>
                        </div>
                      }
                    >
                      <div className="product-card-body">
                        <h3 className="product-name">{product.name}</h3>
                        <div className="price-tag">{formatCurrency(product.price, product.currency)}</div>
                        <div className="product-description-wrap">
                          {product.description?.split('\n').map((line, i) => (
                            <p key={i} className="product-description">
                              {line}
                            </p>
                          ))}
                        </div>
                        
                        <div className="button-container">
                          <button
                            className="enquire-button"
                            onClick={() => handleGmailEnquiry(product.name, product.price)}
                            title="Send an enquiry about this service"
                          >
                            Enquire Now
                          </button>
                          <button
                            className="button-secondary"
                            onClick={() => {}}
                            title="Learn more about this service"
                          >
                            Learn More
                          </button>
                        </div>
                        
                        
                      </div>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          )}
          
          {/* Footer Stats */}
          <div style={{
            marginTop: 'clamp(40px, 8vw, 60px)',
            textAlign: 'center',
            padding: 'clamp(30px, 6vw, 40px) clamp(15px, 3vw, 20px)',
            background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
            borderRadius: '30px',
            border: '1px solid rgba(102, 126, 234, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              color: '#1A237E',
              fontWeight: 600,
              margin: '0 auto 18px',
              maxWidth: '900px',
              lineHeight: 1.5,
            }}>
              The Funsoft® Integrated Healthcare Information Management System (I-HMIS)
            </p>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'stretch',
              gap: '14px',
              margin: '20px auto 15px',
              maxWidth: '980px',
            }}>
              {[
                { value: '200+', label: 'Facilities' },
                { value: '10+', label: 'Years Expertise' },
                { value: '15K+', label: 'Daily Users' },
                { value: '2M+', label: 'Records' },
              ].map((item) => (
                <span
                  key={item.label}
                  style={{
                    fontSize: '1rem',
                    color: '#666',
                    padding: '12px 16px',
                    background: 'linear-gradient(135deg, #f8f9fa, #ffffff)',
                    borderRadius: '14px',
                    border: '1px solid rgba(102, 126, 234, 0.1)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                    width: 'clamp(180px, 22vw, 220px)',
                    minHeight: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <strong>{item.value}</strong> {item.label}
                </span>
              ))}
            </div>
            <p style={{
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              color: '#764ba2',
              fontWeight: 600,
              letterSpacing: '0.5px',
              margin: '6px 0 0',
            }}>
              Committed to our clients needs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;