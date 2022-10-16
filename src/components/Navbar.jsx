import React from 'react'
import './Navbar.css'
import CreateIcon from '@mui/icons-material/Create';
import { Link } from 'react-router-dom';
export default function Navbar() {
  const user = true;
  return (
    <div className='navbar'>
      
      <div className='navl'>
      
      <h1> Blogging </h1>&nbsp;
      <i class="fa-solid fa-pen-nib"></i>
      </div>
      <div className='navc'>
        <ul className='list'>
         <li className='list-cont'>
          <Link to="/" style={{textDecoration:"none",color:"#ffde4a"}} >HOME</Link>
          </li>
         <li className='list-cont'>
         <Link to="/About" style={{textDecoration:"none",color:"#ffde4a"}} >ABOUT</Link>
         </li>
         <li className='list-cont'>
         <Link to="/Write" style={{textDecoration:"none",color:"#ffde4a"}}>WRITE</Link>
         </li>
         <li className='list-cont'>
         <Link to="/Contact-us" style={{textDecoration:"none",color:"#ffde4a"}}>CONTACT</Link>
         </li>
         {user&&<li className='list-cont'>
         <Link to="/Logout" style={{textDecoration:"none",color:"#ffde4a"}}>LOGOUT</Link>
         </li>}
         {user&&<li className='list-cont'>
         <Link to="/Login" style={{textDecoration:"none",color:"#ffde4a"}} >LOGIN</Link>
         </li>}
         </ul>
      </div>
      <div className='navr'>
        
      <i class="fa-solid fa-magnifying-glass"></i>
      <img className="profile-img" src='images.jpeg'/>
       </div>

      </div>
  )
}
