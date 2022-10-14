import React from 'react'
import Sidebar from '../../components/Sidebar';
import SinglePost from './SinglePost';
import './Single.css'
const Single = () => {
  return (
    <div className='single'>
        <SinglePost/>
        <Sidebar/>
    </div>
  )
}

export default Single;