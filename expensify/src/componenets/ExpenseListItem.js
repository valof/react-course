import React from 'react';

const ExpenseListItem = (props) => (
    <div >
        <h1>This is my Expense # {props.index+1}:</h1>
        <p/>
        Description: {props.expense.description}
        <p/>
        Amount: {props.expense.amount}
        <p/>
        CreatedAt: {props.expense.createdAt}
  </div >
);
export default ExpenseListItem;