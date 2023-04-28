import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';

const ExpenseList = (props) => (
    <div>
        <h1>Thsi is my Expense List component.</h1>
        {
            props.expenses.map((expense, index) => (
                <ExpenseListItem key = {expense.id} expense={expense} index = {index}/>
            ))
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: state.reducer.espenses,
        filters: state.reducer.filters
    };
};


export default connect(mapStateToProps)(ExpenseList);
