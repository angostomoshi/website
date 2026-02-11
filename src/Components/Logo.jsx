import './Logo.css'
import headerlogo from '../assets/headerlogo.svg'
import img1 from '../assets/abto.png'
import MaskGroup from '../assets/Mask Group.svg'
import group9 from '../assets/Group 9.svg'
import group8 from '../assets/Group 8.svg'
import pics1 from '../assets/pics1.svg'
import pics2 from '../assets/pics2.svg'
import pics3 from '../assets/pics3.svg'
import pics4 from '../assets/pics4.svg'
import pics5 from '../assets/pics5.svg'
import pics6 from '../assets/pics6.svg'
import Facebook from '../assets/Facebook.svg'
import Google from '../assets/Google.svg'
import Instagram from '../assets/Instagram.svg'
import hidepassword from '../assets/hide.svg'
import showpassword from '../assets/show.svg'
import Easyhealth from '../assets/Easyhealth Logo.svg'

export function Logo() {
    return (
        <img src={headerlogo} alt='' className='headerlogo'/>
    )
}

export function Frame1() {
    return (
        <img src={img1} alt='' className='frame1'/>
    )
}

export function Frame2() {
    return (
        <img src={MaskGroup} alt='' className='frame2'/>
    )
}

export function LeftSideDesign() {
    return (
        <img src={group9} alt='' className='LeftSideDesign'/>
    )
}

export function RightSideDesign() {
    return (
        <img src={group8} alt='' className='RightSideDesign'/>
    )
}

export function Pics() {
    return (
    <div className='grid'>
        <div className='pics '>
           <img src={pics1} alt='' className='num'/> 
           <p>Angosto Moshi</p> 
           <button>Co-Founder</button>
        </div>
       
        <div className='pics '>
          <img src={pics2} alt='' className='num'/>
          <p>Joe Macharia</p> 
          <button>Co-founder</button>
        </div>
      
        <div className='pics '>
          <img src={pics3} alt='' className='num'/>
          <p>Nchere James</p> 
          <button>Co-founder</button>
        </div>
        
        <div className='pics '>
         <img src={pics4} alt='' className='num' />
         <p>Victoria Oyekunle</p> 
         <button>Developer</button>
         
        </div>
        
        <div className='pics '>
         <img src={pics6} alt='' className='num'/>
         <p>Muhibudeen Sumayyah</p> 
         <button>Developer</button>
        </div>

        <div className='pics '>
         <img src={pics5} alt='' className='num'/>
         <p>Alakoso Maryam</p> 
         <button>Designer</button>
        </div>
        
    </div>
        
 )
}

export function AppLogo() {
    return (
        <img src={Easyhealth} alt="" className='Applogo'/>  
    ) 
}

export function Show() {
    return (
        <div className='field-password'>
         <img src={showpassword} alt="" />
        </div>
      
    )
}
export function Hide() {
    return (
        <div className='field-password'>
         <img src={hidepassword} alt="" />
        </div>
      
    )
}

export function Socialmedia() {
    return (
        <div className='socialmedia'>
        <a href='www.facebookcom/#' className='media facebook'>
          <img src={Facebook} alt='' />  
        </a>
        
        <a href='www.google.com/#' className='media google'>
          <img src={Google} alt='' />  
        </a>

        <a href='www.instagram.com/#' className='media instagram'>
          <img src={Instagram} alt='' />  
        </a>  
      
        </div>
        
    )
}