import {Route,Routes} from 'react-router-dom';
import './App.css';
import { About } from './Components/Login-Signup/About';
import { Contact } from './Components/Login-Signup/Contact';
import { Home } from './Components/Login-Signup/Home';
import { Services } from './Components/Login-Signup/Services';

import LoginSignup from './Components/Login-Signup/LoginSignup';
import NavBar from './Components/Login-Signup/NavBar';


function App() {
  return (
    
      <div className = "NavBar">
        <NavBar /> 
        <Routes>
          <Route path = "/" element = {<Home />}/>
          <Route path = "/about"  element = { <About />} />
          <Route path = "/contact" element ={<Contact/>} />
          <Route path = "/services" element={<Services/>} />
         
          
        </Routes>
      <div>
      <LoginSignup />
      </div>
      </div>
     
    
    
  );
}

export default App;
