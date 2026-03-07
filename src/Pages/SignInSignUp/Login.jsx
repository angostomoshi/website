import React,{useState} from "react";
import { Link } from 'react-router-dom'
import './SignInSignUp.css'
import { AppLogo, Show, Hide} from '../../Components/Logo.jsx'
import Signup from '../../assets/Signup.svg'
import Button from '../../Components/Button'
// import { SignUp } from './SignInSignUp'


export const LogIn = () => {

    const [visible, setvisible] = useState(false)
    const handleshow = () => {
      setvisible(!visible)
    }
    return (
      <div className='pageholder'>

      <div className='imgpage'>
      <img src={Signup} alt='' className='signupimg' />
      </div>

     
        <div className='formpage'>

        <div className="logoheader">
            <AppLogo />
        </div>

        <h1 className="h1">WELCOME BACK!</h1>  
      <div>
        <p className='p'>Don't have an account ? 
            <Link className='login' to="/signup">Sign Up</Link>
        </p>
       </div>
    
     <div className='form-box'>
     <form className='form'>

       <label className='label'>Email</label>
       <div className='input-field'>
       <input className='input' type='Email'
      placeholder='info@systempartners.biz'/>
       </div>
       
       <label className='label'>Password</label>
       <div className='input-field password'>
      <input className='input' type={visible ? "text" : "password"}
       placeholder='Password'/>
      {(visible=== false)?   
        <Hide onClick={handleshow}/>:<Show onClick={handleshow}/>}
       </div>

       <div >
        <button type="button" className='forget'>Forget Password?</button>
       </div>

      <br/>

       {/* <button className='submit' type='submit'>
       <span className='text'>Get Started</span> 
        </button> */}
        <Button type="submit"  text="Login" />
       </form>

       </div>
       
       {/* <div>
        <Socialmedia />
       </div>
     */}
       </div>

      



       

        </div>
     )   
}
