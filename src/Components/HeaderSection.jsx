import './HeaderSection.css'
import { Logo } from './Logo'
import Button from './Button'
// import { SignIn } from '../../pages/SignInSignUp/SignInSignUp'
// import { Link } from 'react-router-dom'


export function HeaderSection() {
    return (
     <div className='wrapper'>

        <div className="container">

            <Logo /> 
            <div className="navbar">
            <ul>
                <a href='#/home'>Home</a >
                <a href='#/services'>Service</a >
                <a href='#/blog'>Blog</a>
                <a href='#/About us'>About us</a >
                <a href='#/Contact us'>Contact us</a >
            <Button type="blue"  text="Log In" />
           <Button type="green"  text="Sign Up" />
               
            </ul>
            </div>

        </div>

        </div>
    )
}

// export const HeaderSection = () => {
//     return (
        
//         <div className='wrapper'>

//              <div className="container">
        
//                <Logo /> 

//         <nav className='navbar'>
//             <ul>
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="/About us">About us</Link></li>
//                 <li><Link to="/services">Services</Link></li>
//                 <li><Link to="/contact">Contact</Link></li>

//                  <Link to="/signup">
//                 <Button type="green" text="Sign Up"/>
//             </Link>
//             </ul>
           
//         </nav>

//         </div>

//          </div>
//     );
// };