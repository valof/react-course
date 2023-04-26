import React from 'react';
import {NavLink} from 'react-router-dom';


const Header = () => (
<header>
    <h1>Portfolio!</h1>
    <NavLink to="/" className={({ isActive }) => (isActive ? 'is-active' : 'inactive')} exact={"true"}>Go Home!</NavLink>
    <NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'is-active' : 'inactive')} exact={"true"}>Portfolio!</NavLink>
    <NavLink to="/contact" className={({ isActive }) => (isActive ? 'is-active' : 'inactive')} >Contact</NavLink>
</header>
);
  
  export default Header;
  
