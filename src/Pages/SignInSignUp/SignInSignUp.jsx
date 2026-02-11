import React, { useState } from "react";
import './SignInSignUp.css'
import { AppLogo, Hide, Show} from '../../Components/Logo'
import Login from '../../assets/Login.svg'
import Button from '../../Components/Button'


export const SignUp = () => {
  const [visible, setvisible] = useState(false)
  const handleshow = () => {
    setvisible(!visible)
  }
    return (
      <div className='pageholder'>

      <div className='imgpage'>
      <img src={Login} alt='' className='signupimg' />
      </div>

     
        <div className='formpage'>

        <div className="logoheader">
            <AppLogo />
        </div>

        <h1 className="h1">WELCOME!</h1>  
      <div>
        <p className='p'>Already have an account ? 
            <a className='login' href='src\pages\SignInSignUp\Login.jsx'>Log In</a>
        </p>
       </div>
    
     <div className='form-box'>
     <form className='form'>

     <label className='label'>Full Name</label>
     <div className='input-field'> 
      <input className='input' type='text'
      placeholder='Sam John'/>
       </div>

       <label className='label'>Email</label>
       <div className='input-field'>
       <input className='input' type='Email'
       placeholder='input43@gmail.com'/>
       </div>
       
       <label className='label'>Password</label>
       <div className='input-field password'>
       <input className='input' type='{visible? "text":"password"}'
       placeholder='Password'
       onChange={(e) => visible(e.target.value)}/>
        {(visible=== false)?   
        <Hide onClick={handleshow}/>: <Show onClick={handleshow}/>}
       
       </div>

      <br/>

       {/* <button className='submit' type='submit'>
       <span className='text'>Get Started</span> 
        </button> */}
        <Button type="submit"  text="Sign Up" />
       </form>

       </div>
       
       {/* <div>
        <Socialmedia />
       </div> */}
    
       </div>

      



       

        </div>
     )   
}
