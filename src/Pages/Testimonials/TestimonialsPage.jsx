import React from 'react'
import {Navbar} from '../../Components/Navbar/Navbar'
import Title from '../../Components/Title/Title'
import Testimonials from '../../Components/Testimonials/Testimonials'
import Footer from '../../Components/Footer/Footer'


export const TestimonialsPage = () => {
  return (
    <div className='Testimonials_page'>
        <Navbar/>
        <Title className='hero-banner hero-banner--overlay testimonials-hero' title='TESTIMONIALS' subTitle='Reviews from our Users'/>   
        <Testimonials/>
        <Footer/>


    </div>
  )
}

export default TestimonialsPage
