import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero'
import About from '../../Components/About/About'
import AboutPage from '../../Components/AboutPage/AboutPage'
import Doctors from '../../Components/Doctor/Doctors'
import AppPage from '../../Components/AppPage/AppPage'
import Testimonials from '../../Components/Testimonials/Testimonials'

import Footer from '../../Components/Footer/Footer'
import Title from '../../Components/Title/Title'


export const Landing = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <div className='container'>
        <About/> 
        
        <Title title='ABOUT US' />
         <AboutPage/>
     <Doctors/>
    </div>
    
        <AppPage/>
        
    <div className='container'>
        <Title title='TESTIMONIALS' subTitle='Reviews from our Users'/>            
        <Testimonials />  
    </div>
    
    <Footer/>
   
</div>
  )
}

export default Landing
