import React from 'react';
import { connect } from 'react-redux';
import {addExpense, removeExpense, editExpense}  from '../actions/expenses';

const ExpenseListItem = (props) => (
    <div >
        <h1>This is my Expense # {props.index+1}:</h1>
        <p/>
        Description: {props.expense.description}
        <p/>
        Amount: {props.expense.amount}
        <p/>
        CreatedAt: {props.expense.createdAt}
        <button onClick={() => {
          props.dispatch(removeExpense({id:props.expense.id}))
        }}>Remove</button>

  </div >
);
export default connect()(ExpenseListItem);