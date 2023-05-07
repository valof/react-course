import React from 'react';
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'
import {addExpense, removeExpense, editExpense}  from '../actions/expenses';
import {useNavigate} from "react-router-dom"

const AddExpensePage = (props) => {
  const navigate = useNavigate();
  return (
  <div>
    <h1>Expense Form</h1>
    <ExpenseForm  
      onSubmit={(p)=>{
        props.dispatch(addExpense(p));
        navigate('/');
      }}
    />
  </div>
  );
};

export default connect()(AddExpensePage);

