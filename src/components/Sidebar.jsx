import React from 'react'
import "./Sidebar.css"
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <h1>sidebar</h1>
    <div className="sidebar-item">
        <span className='sidebartitle'>
            Aboutme
        </span>
        <img className='aboutme-img' src = "images.jpeg" alt=" " />
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, unde explicabo eligendi voluptatibus illum accusamus dolorem nihil ullam eveniet nam corrupti possimus obcaecati officiis dicta labore culpa voluptate cum at.</p>
    </div>
    <div className='side'>
    <div className="sidebar-items">
        <span className='sidebartitle'>Categories</span>
    <ul className="sidebarlist">
        <li className="sidebarliitems">Events</li>
        <li className="sidebarliitems">Music</li>
        <li className="sidebarliitems">Sports</li>
        <li className="sidebarliitems">Lifestyle</li>
        <li className="sidebarliitems">Fitness</li>
    </ul>
    <span className='sidebartitle'>Socials</span>
      <ul className="sidebarlist">
        <li className="sidebarliitems">Facebook</li>
        <li className="sidebarliitems">Twitter</li>
        <li className="sidebarliitems">Instagram</li>
        <li className="sidebarliitems">Linkedin</li>
        <li className="sidebarliitems">Whatsapp</li>
    </ul>
    </div>
    </div>
    </div>
  )
}

export default Sidebar