import React from 'react';
import ExpenseForm from './ExpenseForm'
import {addExpense, removeExpense, editExpense}  from '../actions/expenses';
import {useNavigate} from "react-router-dom"
import {useDispatch, connect} from "react-redux"

const withRouter = WrappedComponent => props => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // other hooks

  return (
    <WrappedComponent
      {...props}
      {...{ navigate, dispatch }}
    />
  );
};

class AddExpensePage extends React.Component {

onSubmit = (expense) => {
  this.props.onSubmit(expense);
  this.props.navigate("/")
}

render () {
    return (
      <div>
        <h1>Expense Form</h1>
        <ExpenseForm  
          onSubmit={this.onSubmit}
        />
      </div>
      );
  }
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (expense) => dispatch (addExpense(expense))
})

export const AddExpenseDisconnected = withRouter(AddExpensePage);

export default connect(undefined, mapDispatchToProps)(AddExpenseDisconnected);


// This is how it was:
//
// import React from 'react';
// import ExpenseForm from './ExpenseForm'
// import {addExpense, removeExpense, editExpense}  from '../actions/expenses';
// import {useNavigate} from "react-router-dom"
// import {useDispatch} from "react-redux"


// const AddExpensePage = (props) => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   return (
//   <div>
//     <h1>Expense Form</h1>
//     <ExpenseForm  
//       onSubmit={(p)=>{
//         dispatch(addExpense(p));
//         navigate('/');
//       }}
//     />
//   </div>
//   );
// };

// export default AddExpensePage;