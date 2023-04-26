import React from 'react';
import {NavLink} from 'react-router-dom';

const PortfolioPage = () => (
  <div>
        <h1>My Work!</h1>
        Check out the following things I've done
        <br></br>
        <NavLink to="/">Home</NavLink>
        <br></br>
        <NavLink to="/portfolio/1">ItemOne</NavLink>
        <br></br>
        <NavLink to="/portfolio/2">ItemTwo</NavLink>
  </div>
);

export default PortfolioPage;

