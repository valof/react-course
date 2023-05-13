import React from 'react';
import { NavLink } from 'react-router-dom'


const ExpenseListItem = (props) => (
  <div >
    <NavLink to={'/edit/'+props.expense.id} className={({ isActive }) => (isActive ? 'is-active' : 'inactive')}>
      <h3>This is my Expense # {props.index+1}:</h3>
    </NavLink>
    <p/>
      Description: {props.expense.description}
    <p/>
      Amount: {props.expense.amount}
    <p/>
      CreatedAt: {props.expense.createdAt}
    <p/>
  </div >
);
export default ExpenseListItem;