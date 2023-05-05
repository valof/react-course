import React from 'react';
import { connect } from 'react-redux'
import {setText, sortBy, setStartDate, setEndDate} from '../actions/filters'

const ExpenseFilterList = (props) => (
    <div>
        <input type='text' value={props.filters.text} onChange={(e) => {
            props.dispatch(setText(e.target.value))
        }} />
        <select value={props.filters.sortBy} onChange={(e) => {
            props.dispatch(sortBy(e.target.value))
        }} >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
    </div>
);

const mapStateToProps = (state) => {
    return {
        filters: state.reducer.filters
    };
};

export default connect(mapStateToProps)(ExpenseFilterList);