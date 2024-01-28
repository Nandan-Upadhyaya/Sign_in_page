import React , {useState}from 'react';
import { Link, NavLink } from 'react-router-dom';
import image from '../Assets/Links_Logo.webp';
import "./NavBar.css";
export const NavBar = () => {
    const [MenuOpen , setMenuOpen] = useState(false);
return (
<nav>
    <Link to = "/" className='title'> FreeFlow Learning <img src = {image} alt = "Logo" className='image'/>
    </Link>
    <div className='Menu' onClick={() => {
        setMenuOpen(!MenuOpen);
    }}>
        <span></span>
        <span></span>
        <span></span>

    </div>
    <ul className={MenuOpen ? 'open' : ""}>
        <li> 
      <NavLink to = "/about"> About</NavLink>
       </li>
        <li> 
        <NavLink to = "/services"> Services</NavLink>
       </li>
        <li> 
        <NavLink to = "/contact"> Contact</NavLink>

        </li>
        <li>
            <button className='Login'> Login</button>
        </li>
        <li>
        <button className='Login'> Sign Up</button>
        </li>
    </ul>
</nav>
);

};
export default NavBar;