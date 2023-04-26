import React from 'react';
import {NavLink} from 'react-router-dom';


const Header = () => (
<header>
    <h1>Expensify!</h1>
    <NavLink to="/" className={({ isActive }) => (isActive ? 'is-active' : 'inactive')} >Go Home!</NavLink>
    <br></br>
    <NavLink to="/create" className={({ isActive }) => (isActive ? 'is-active' : 'inactive')} >Go Create!</NavLink>
    <br></br>
    <NavLink to="/help" className={({ isActive }) => (isActive ? 'is-active' : 'inactive')} >Help...</NavLink>
</header>
);
  
  export default Header;
  
