import React from 'react'

import {Navbar} from '../../Components/Navbar/Navbar'
import ContactHero from '../../Components/ContactHero/ContactHero'
import Title from '../../Components/Title/Title'
import Contact from '../../Components/Contact/Contact'
import Footer from '../../Components/Footer/Footer'

export const ContactPage = () => {
  return (
    <div >
       <Navbar/>
     <ContactHero/>
   
     <Contact/>
     <Footer/>
     
     
    </div>
  )
}

export default ContactPage
