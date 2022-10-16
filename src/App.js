import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contactus from './pages/Contact';
import Logout from './pages/Logout';
import Write from './pages/Write';
import Single from './pages/Singly/Single';
import Settings from './pages/Settings';
import Login from './pages/Login';
import Register from './pages/Register';
// import Error404 from './pages/Error404';
function App() {
  const user = true;
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/Home' element={<Home/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Contact-us' element={<Contactus/>} />
          <Route path='/Logout' element={<Logout/>} />  
          <Route path='/Login' element={user?<Login/>:<Home/>} />  
          <Route path='/Post/:PostId' element={<Single/>} />  
          <Route path='/Write' element={user?<Write/>:<Home/>} />  
          <Route path='/Register' element={user?<Register/>:<Home/>} />
          <Route path='/Settings' element={user?<Settings/>:<Register/>}/>
        </Routes>
      </Router>
      </>
    
  );
}

export default App;
