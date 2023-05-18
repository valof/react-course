import React from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import {connect} from 'react-redux'
import {addExpense, removeExpense, editExpense}  from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

let id;

const EditExpensedPage = (props) => {
    const navigate =useNavigate()
    id = undefined
    return (
            <div>
                <ExpenseForm
                    expense = {props.expense}
                    onSubmit = {(p) => {
                        props.dispatch(editExpense({...p, id: props.expense.id}));
                        console.log('updated', p) ;
                        navigate('/');

                    }}
                />
                <button onClick={() => {
                    props.dispatch(removeExpense({id:props.expense.id}))
                    navigate('/');
                }}>Remove</button>
            </div>
        );
}



const mapStateToProps = (state) => {
    if ( ! id ){
        const x = useParams();
        id = x.id;
    }
    return {
        expense: state.reducer.espenses.find((it) => {
            return id === it.id;
        })
    };
};

export default connect(mapStateToProps)(EditExpensedPage);
