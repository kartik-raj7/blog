import React from 'react'
import './Navbar.css'
import CreateIcon from '@mui/icons-material/Create';
export default function Navbar() {
  return (
    <div className='navbar'>
      
      <div className='navl'>
      
      <h1> Blogging </h1>&nbsp;
      <i class="fa-solid fa-pen-nib"></i>
      </div>
      <div className='navc'>
        <ul className='list'>
         <li className='list-cont'>HOME</li>
         <li className='list-cont'>ABOUT</li>
         <li className='list-cont'>CONTACT</li>
         <li className='list-cont'>WRITE</li>
         <li className='list-cont'>LOGOUT</li>
         <li className='list-cont'>LOGIN</li>
         </ul>
      </div>
      <div className='navr'>
      <i class="fa-solid fa-magnifying-glass"></i>
      <img className="profile-img" src='images.jpeg'/>
       </div>

      </div>
  )
}
