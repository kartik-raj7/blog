import React from 'react'
import Sidebar from '../components/Sidebar'
import "./Settings.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export default function Settings() {
  return (
    <div className='settings'>
        <div className='settingswrapper'>
            <div className="settingstitle">
                <span className='settingsupdatetitle'>
                    Update your Account
                </span>
                <span className='settingsdeletetitle'>
                    Delete your Account
                </span>
            </div>
            <form className="settingsform">
                <label>Profile Picture</label>
                <div className="settingsdp">
                    <img src="landscape.jpeg" alt="display picture" />
                    <label htmlFor='fileinput'>
                        <div className='settingsdpicon'>
                        <AccountCircleIcon/>
                        </div>
                    </label>
                    <input type='file' id='fileinput' style={{display:"none"}}/>
                </div>
                <label>Username</label>
                <input type='text' placeholder='kartikey'/>
                <label>Email</label>
                <input type='text' placeholder='kartikey@mail.com'/>
                <label>Password</label>
                <input type='password' placeholder='password'/>
                <button className="settingssubmit">Update</button>
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}
