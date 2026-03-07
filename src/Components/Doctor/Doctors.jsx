import React from 'react'
import './Doctors.css'

export const Doctors = () => {
  const googleMapsUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.835585677798!2d36.80367527500311!3d-1.2683984355897735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1746779e8f8b%3A0x9c503c0d5d7f6a1e!2sWestlands%20Business%20Park%2C%20Chiromo%20Ln%2C%20Nairobi%2C%20Kenya!5e0!3m2!1sen!2sng!4v${Date.now()}`;

  return (
    <div id='hospitals' className='doctor_div'>
   


      {/* Google Maps Section - Clean version with only map */}
      <div className="google-maps-section">
        <h2>Find Our Location</h2>
        <div className="google-map-container">
          <iframe
            src={googleMapsUrl}
            className="map-frame"
            title="Funsoft Location"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="map-pin-overlay">
            <div className="map-pin"></div>
            <div className="map-pin-label">Funsoft Headquarters</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Doctors