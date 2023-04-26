import React from 'react';
import { connect } from 'react-redux';

const ExpenseList = (props) => (
    <div>
        <h1>Thsi is my Expense List component.</h1>
        {props.expenses.length}
        {props.filters.text}

    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: state.reducer.espenses,
        filters: state.reducer.filters
    };
};


export default connect(mapStateToProps)(ExpenseList);
