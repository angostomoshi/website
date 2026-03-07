import React, { useEffect, useState } from 'react'
import {Routes, Route, useLocation} from 'react-router-dom'
import {Landing} from './Pages/Landing/Landing'
import {OurServices} from './Pages/OurServices/OurServices'
import {ContactPage} from './Pages/ContactPage/ContactPage'
import {TestimonialsPage} from './Pages/Testimonials/TestimonialsPage'
import {AboutUs} from './Pages/AboutUs/AboutUs'
import {LogIn} from './Pages/SignInSignUp/Login'
import {SignUp} from './Pages/SignInSignUp/SignInSignUp'
import { PrivacyPolicyPage } from './Pages/Legal/PrivacyPolicyPage'
import { TermsOfServicePage } from './Pages/Legal/TermsOfServicePage'
import { CookiePolicyPage } from './Pages/Legal/CookiePolicyPage'
import fsLogo from './assets/fs-logo-cropped.png'

const ScrollToTop = () => {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }, [pathname])

    return null
}




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
                <ScrollToTop />
                <Routes>
                <Route path='/' element={<Landing /> }></Route>
               <Route path='/our-services' element= {<OurServices />} ></Route>
               <Route path='/about-us' element= {<AboutUs />} ></Route>
               <Route path='/contact-us' element= {< ContactPage />} ></Route>
               <Route path='/testimonials' element= {< TestimonialsPage />} ></Route>
               <Route path='/login' element= {< LogIn />} ></Route>
               <Route path='/signup' element= {< SignUp />} ></Route>
               <Route path='/privacy-policy' element= {< PrivacyPolicyPage />} ></Route>
               <Route path='/terms' element= {< TermsOfServicePage />} ></Route>
               <Route path='/cookie-policy' element= {< CookiePolicyPage />} ></Route>

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

