import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import './Write.css'
export default function Write() {
  return (
    <div className='write'>
        <img className="writeimg" src="landscape.jpeg" alt=" "/>
        <form className='writeform'>
            <div className="writeformgroup">
              <label htmlFor='fileinput'>
              <div className='add'>
              <AddIcon/>
              </div>
              </label>
              <input type="file" id="fileinput" style={{display:"none"}}/>
              <input type="text" placeholder="title" className="writeinput" autoFocus={true}/>
            </div>
            <div className='writeFormGroup'>
                <textarea placeholder="Write your story....." typeof="text" className="writeinput writetext"></textarea>
            </div>
            <button className="writesubmit">Submit</button>
        </form>
    </div>
  )
}