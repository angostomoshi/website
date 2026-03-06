import React from 'react'
import './ServicesOtherServices.css'
import appointment from '../../assets/appointment_img.svg'
import telehealth_img from '../../assets/telehealth_img.svg'
import secure_img from '../../assets/4.png'
import authentication_img from '../../assets/authentication_img.svg'
import educational_img from '../../assets/educational_img.svg'
import payment_img from '../../assets/payment_img.svg'


export const Features = () => {
  return (
    <div className='other_services container'>
      <h1>
          Some of <span>Our Features</span>
        </h1>


        <div className='other_services_div'>

        <div className='Appointment_booking'>
       <img src={appointment} alt="" className='appointment_image'/>
              <div className='appointment_div_text'>
              <h4>Smart Appointment Booking</h4>
              
              <p>Connect with healthcare providers and book consultations seamlessly.</p>
                </div>
               </div>

               <div className='Appointment_booking'>
       <img src={telehealth_img} alt="" className='appointment_image'/>
              <div>
              <h4>Virtual Telehealth</h4>
              
              <p>Virtual consultations with qualified professionals from anywhere.</p>
                </div>
               </div>

               <div className='Appointment_booking'>
       <img src={secure_img} alt="" className='appointment_image'/>
              <div>
              <h4>Secure Messaging</h4>
              
              <p>Safe communication with providers for follow-ups and non-urgent needs.</p>
                </div>
               </div> 

               <div className='Appointment_booking'>
       <img src={ authentication_img} alt="" className='appointment_image'/>
              <div>
              <h4>Privacy & Data Security</h4>
              
              <p>Enterprise-grade authentication and encrypted medical records.</p>
                </div>
               </div>

               <div className='Appointment_booking'>
       <img src={educational_img} alt="" className='appointment_image'/>
              <div>
              <h4>Health Education Hub</h4>
              
              <p>Informative articles from medical professionals on various health topics.</p>
                </div>
               </div>

               <div className='Appointment_booking'>
       <img src={payment_img} alt="" className='appointment_image'/>
              <div>
              <h4>Secure Payments</h4>
              
              <p>Integrated with trusted providers for safe and seamless transactions.</p>
                </div>
               </div>
        </div>
    </div>
  )
}

export default Features