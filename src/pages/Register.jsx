import React from 'react'
import "./Register.css"
export default function Register() {
  return (
    <div className="register">
    <span className="registertitle">Register-Page</span>
    <form className="registerform">
      <label>Username</label>
      <input type="text" className='registerinput' placeholder='Username..'/>
      <label>Email</label>
      <input type="email" className='registerinput' placeholder='Email'/>
      <label>Password</label>
      <input type="password" className='registerinput' placeholder='Password'/>
      <button className='registerbutton'>Register</button>
    </form>
    <button className='loginbutton'>Login</button>
   
</div>
  )
}
