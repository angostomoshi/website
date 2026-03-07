import React, { useEffect, useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import {Landing} from './Pages/Landing/Landing'
import {OurServices} from './Pages/OurServices/OurServices'
import {ContactPage} from './Pages/ContactPage/ContactPage'
import {TestimonialsPage} from './Pages/Testimonials/TestimonialsPage'
import {PrivacyPolicy} from './Components/PrivacyPolicy/PrivacyPolicy'
import {AboutUs} from './Pages/AboutUs/AboutUs'
import {LogIn} from './Pages/SignInSignUp/Login'
import {SignUp} from './Pages/SignInSignUp/SignInSignUp'
import fsLogo from './assets/fs-logo-cropped.png'




const App = () => {
    const [isEntering, setIsEntering] = useState(true)

    useEffect(() => {
        const entranceTimer = setTimeout(() => {
            setIsEntering(false)
        }, 1200)

        return () => clearTimeout(entranceTimer)
    }, [])

    return  (
        <div className='App'>
            <div
                className={`site-intro ${isEntering ? 'site-intro-active' : 'site-intro-hidden'}`}
                aria-hidden={!isEntering}
            >
                <div className='site-intro-content'>
                    <div className='site-intro-brand'>
                        <img src={fsLogo} alt='Funsoft logo' className='site-intro-logo' />
                        <span className='site-intro-brand-text'>
                            <span className='site-intro-brand-name'>Funsoft</span>
                            <span className='site-intro-brand-badge'>I-HMIS</span>
                        </span>
                    </div>
                    <p>Healthcare Systems Platform</p>
                    <span className='site-intro-line'></span>
                </div>
            </div>

            <div className={`app-shell ${isEntering ? 'app-shell-preload' : 'app-shell-ready'}`}>
                <Routes>
                <Route path='/' element={<Landing /> }></Route>
               <Route path='/our-services' element= {<OurServices />} ></Route>
               <Route path='/about-us' element= {<AboutUs />} ></Route>
               <Route path='/contact-us' element= {< ContactPage />} ></Route>
               <Route path='/testimonials' element= {< TestimonialsPage />} ></Route>
               <Route path='/login' element= {< LogIn />} ></Route>
               <Route path='/signup' element= {< SignUp />} ></Route>
               <Route path='/privacy-policy' element= {< PrivacyPolicy />} ></Route>

               </Routes>
            </div>
        </div>
    )
}

export default App

// const router = createBrowserRouter([
//     {
//         path:'',
//         Component: Landing,
//     },
//     {
//         path: ' Login',
//         element: <OurServices/>,

//     },
//     {
//         path: 'Signup',
//         element: <ContactPage/>,

//     }
// ])

