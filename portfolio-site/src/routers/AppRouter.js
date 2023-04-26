import React from 'react';
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import PortfolioPage from '../componenets/PortfolioPage';
import ItemPage from '../componenets/ItemPage';
import HomePage from '../componenets/HomePage';
import ContactPage from '../componenets/ContactPage';
import NotFound from '../componenets/NotFound';
import Header from '../componenets/Header';


const AppRouter = () => (
    <BrowserRouter>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>} exact={true}/>
        <Route path="/portfolio" element={<PortfolioPage/>} exact={true} />
        <Route path="/portfolio/:id" element={<ItemPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="*" element={<NotFound />} exact={true} />
      </Routes>
    </div>
  </BrowserRouter>

);
    
export default AppRouter;
  