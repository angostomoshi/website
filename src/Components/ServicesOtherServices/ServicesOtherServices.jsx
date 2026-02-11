import React from 'react'
import './ServicesOtherServices.css'
import appointment from '../../assets/appointment_img.svg'
import telehealth_img from '../../assets/telehealth_img.svg'
import secure_img from '../../assets/4.png'
import authentication_img from '../../assets/authentication_img.svg'
import educational_img from '../../assets/educational_img.svg'
import payment_img from '../../assets/payment_img.svg'


export const ServicesOtherServices = () => {
  return (
    <div className='other_services container'>
      <h1>
          Our <span>Other </span> Services
        </h1>


        <div className='other_services_div'>

        <div className='Appointment_booking'>
       <img src={appointment} alt="" className='appointment_image'/>
              <div className='appointment_div_text'>
              <h4>Search and appointment <br /> booking</h4>
              
              <p>This is essential for connecting users with healthcare providers
                 and enabling consultations, the core functionality of the app.</p>
                </div>
               </div>

               <div className='Appointment_booking'>
       <img src={telehealth_img} alt="" className='appointment_image'/>
              <div>
              <h4>Telehealth consultations</h4>
              
              <p>This addresses the core challenge of limited access
               and allows for virtual consultations with qualified professionals.</p>
                </div>
               </div>

               <div className='Appointment_booking'>
       <img src={secure_img} alt="" className='appointment_image'/>
              <div>
              <h4>Secure messaging</h4>
              
              <p>Enables essential communication between users 
                and providers for follow-up questions or non-urgent consultations</p>
                </div>
               </div> 

               <div className='Appointment_booking'>
       <img src={ authentication_img} alt="" className='appointment_image'/>
              <div>
              <h4>User authentication and <br /> secure data storage</h4>
              
              <p>Protects user privacy and ensures the confidentiality of medical information</p>
                </div>
               </div>

               <div className='Appointment_booking'>
       <img src={educational_img} alt="" className='appointment_image'/>
              <div>
              <h4>Educational resources</h4>
              
              <p>Partner with Easy Health platform doctors to create informative articles on various health topics.
                 Provides a foundation for improved health literacy among users.</p>
                </div>
               </div>

               <div className='Appointment_booking'>
       <img src={payment_img} alt="" className='appointment_image'/>
              <div>
              <h4>Payment gateway</h4>
              
              <p>The app would integrate with a reputable payment gateway service provider. This service 
                would securely handle all financial transactions within the app.</p>
                </div>
               </div>
        </div>
    </div>
  )
}

export default ServicesOtherServices
