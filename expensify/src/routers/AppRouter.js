import React from 'react';
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import AddExpensedPage from '../componenets/AddExpensedPage';
import EditExpensedPage from '../componenets/EditExpensedPage';
import ExpenseDashboardPage from '../componenets/ExpenseDashboardPage';
import HelpPage from '../componenets/Help';
import NotFound from '../componenets/NotFound';
import Header from '../componenets/Header';


const AppRouter = () => (
    <BrowserRouter>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<ExpenseDashboardPage/>} exact={true}/>
        <Route path="/create" element={<AddExpensedPage/>} />
        <Route path="/edit/:id" element={<EditExpensedPage/>} />
        <Route path="/help" element={<HelpPage/>} />
        <Route path="*" element={<NotFound />} exact={true} />
      </Routes>
    </div>
  </BrowserRouter>

);
    
export default AppRouter;
  