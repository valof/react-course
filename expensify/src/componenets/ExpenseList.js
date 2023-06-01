import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/selector'

export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No expenses!</p>
             ) : (
                props.expenses.map((expense, index) => (
                    <ExpenseListItem key = {expense.id} expense={expense} index = {index}/>
                ))
             )
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.reducer.espenses, state.reducer.filters),
        filters: state.reducer.filters
    };
};


export default connect(mapStateToProps)(ExpenseList);
