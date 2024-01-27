import React , {useState}from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./NavBar.css";
export const NavBar = () => {
    const [MenuOpen , setMenuOpen] = useState(false);
return (
<nav>
    <Link to = "/" className='title'> Home
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
    </ul>
</nav>
);

};
export default NavBar;