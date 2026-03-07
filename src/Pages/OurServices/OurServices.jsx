import React from 'react'
import './OurServices.css'

import {Navbar} from '../../Components/Navbar/Navbar'
import About from '../../Components/About/About'
import ServicesHero from '../../Components/ServicesHero/ServicesHero'
// import Title from '../../Components/Title/Title'
import ServicesOtherServices from '../../Components/ServicesOtherServices/ServicesOtherServices'
import Footer from '../../Components/Footer/Footer'

export const OurServices = () => {
  return (
   
    <div className='our_services'>
      <Navbar/>
      <ServicesHero/>
      <About/>
      <ServicesOtherServices/>
      <Footer/>
    </div>
  )
}

export default OurServices
