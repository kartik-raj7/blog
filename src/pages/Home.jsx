import React from 'react'
import Mainpage from '../components/Mainpage';
import Navbar from '../components/Navbar';
import Posts from '../components/Posts';
import Sidebar from '../components/Sidebar';
import "./Home.css"
function Home(){
    return(
     <div>
     {/* <Navbar/> */}
     <Mainpage/>
     <div className='home'>
     <Posts/>
     <Sidebar/>
     </div>
     </div>
    )
}
export default Home;