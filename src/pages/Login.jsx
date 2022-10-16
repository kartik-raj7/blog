import React from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"
export default function Login() {
  return (
    <div className="login">
        <span className="logintitle">Login-Page</span>
        <form className="loginform">
          <label>Email</label>
          <input type="text" className='logininput' placeholder='email..'/>
          <label>Password</label>
          <input type="password" className='logininput' placeholder='Password'/>
          <button className='loginbutton'>Login</button>
        </form>
        <button className='registerbutton'>
            <Link to='/Register'>Register
            </Link></button>
       
    </div>
  )
}
