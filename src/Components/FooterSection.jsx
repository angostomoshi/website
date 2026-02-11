import './Footersection.css'
import { Logo } from './Logo'
import call from '../assets/images/Call.svg'
import message from '../assets/images/Message.svg'
import location from '../assets/images/Location.svg'

export function Footer() {
    return (
        <div>
    <div className='wrap'>
     
        <div>
            <Logo className='logo'/>
         <p className='par'>You’ve reached the end, </p>
         <p className='par'>but it’s not the end! </p>
         <p className='par'>Remember, you’re not alone. </p>
         <p className='par'>Reach out, seek support,</p>
         <p className='par'>and prioritize your well-being.</p>
        </div>

      <div className='container'>
        <div>
            <h5>Services</h5>
            <p>Psychotherapy</p>
            <p>Mental Counseling</p>
            <p>Support Groups</p>
            <p>Case Management</p>
        </div>

        <div>
            <h5>Contacts</h5>
            <a className='imgtag'>
                <img src={call} alt='' className='tag' />
                <span>+234 5464 8272</span>
            </a>
            <br/> 
            <a className='imgtag'>
                <img src={message} alt='' className='tag' />
                <span>input43@gmail.com</span>
            </a>
            <br/>
            <a className='imgtag'>
                <img src={location} alt='' className='tag' />
                <span>Lazzy Tower, 192, Burn Swiss, VI, Lagos</span>
            </a>
        </div>

     <div>
        <h5>Links</h5>
        <a  className='tags' href='#/privacy'>Privacy Policy</a> <br/> <br/>
        <a className='tags' href='#/Terms'>Term Of Use</a>
     </div>

</div>

</div>
     <div className='copyright'>
        <p>copyright 2024 @mindmates all right reserved</p>
     </div>
     
     

     </div>
    )
}