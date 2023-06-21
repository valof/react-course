import React from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import {connect} from 'react-redux'
import {addExpense, removeExpense, editExpense}  from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

let id;

const EditExpensedPage = (props) => {
    let { id } = useParams();
    const navigate = useNavigate();
    return (
            <div>
                <ExpenseForm
                    expense = {props.expense}
                    onSubmit = {(p) => {
                        props.dispatch(editExpense({...p, id: id}));
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
    if ( !id ){
        const x = useParams();
        id = x.id;
    }
    const exp = state.reducer.espenses.find((it) => {
        return id === it.id;
    })
    return {
        expense: exp
    };
};

export default connect(mapStateToProps)(EditExpensedPage);
