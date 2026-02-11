import React from 'react'
import './OurServices.css'

import {Navbar} from '../../Components/Navbar/Navbar'
import ServicesHero from '../../Components/ServicesHero/ServicesHero'
import About from '../../Components/About/About'
// import Title from '../../Components/Title/Title'
import ServicesOtherServices from '../../Components/ServicesOtherServices/ServicesOtherServices'
import Footer from '../../Components/Footer/Footer'




export const OurServices = () => {
  return (
   
    <div className='our_services container'>
      <Navbar/>
     <ServicesHero/>
     <About/>
     <ServicesOtherServices/>
     <Footer/>
   
    </div>
  )
}

export default OurServices
