import React from 'react';
import { connect } from 'react-redux';
import {setText, sortBy, setStartDate, setEndDate} from '../actions/filters';
import { DateRangePicker } from 'react-dates';
import moment from 'moment'

class ExpenseFilterList extends React.Component {
    state = {
        calendarFocused: null
    }
    onDatesChage = ({startDate, endDate}) => {
        if (startDate != null) {
            this.props.dispatch(setStartDate(startDate.valueOf()));
        } else {this.props.dispatch(setStartDate(undefined))}

        if ( endDate != null ) {
            this.props.dispatch(setEndDate(endDate.valueOf()));
        } else this.props.dispatch(setEndDate(undefined));
    }
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({calendarFocused}))
    }
    render() {
        return(
            <div>
                <input type='text' value={this.props.filters.text} onChange={(e) => {
                    this.props.dispatch(setText(e.target.value))
                }} />
                <select value={this.props.filters.sortBy} onChange={(e) => {
                    this.props.dispatch(sortBy(e.target.value))
                }} >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDateId="Whatever The Fuck YouNeed, DateRangePicker"
                    endDateId="Whatever The Fuck You Need for the EndDateId, DateRangePicker"
                    startDate = {this.props.filters.startDate === undefined ? null : moment(this.props.filters.startDate)}
                    endDate = {this.props.filters.endDate  === undefined ? null : moment(this.props.filters.endDate)}
                    onDatesChange = {this.onDatesChage}
                    focusedInput = {this.state.calendarFocused}
                    onFocusChange = {this.onFocusChange}
                    numberOfMonths = {1}
                    isOutsideRange={() => false}
                    showClearDates = {true}
                    />
            </div>
        )}
}

const mapStateToProps = (state) => {
    return {
        filters: state.reducer.filters
    };
};

export default connect(mapStateToProps)(ExpenseFilterList);