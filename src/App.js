import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contactus from './pages/Contact';
import Logout from './pages/Logout';
import Write from './pages/Write';
// import Error404 from './pages/Error404';
function App() {
  return (
    <>
    <Home/>
      {/* <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/home' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact-us' element={<Contactus/>} />
          <Route path='/logout' element={<Logout/>} />  
          <Route path='/Write' element={<Write/>} />  
        </Routes>
      </Router> */}
      </>
    
  );
}

export default App;
