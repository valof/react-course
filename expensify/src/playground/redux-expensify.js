import { combineReducers} from 'redux'
import { createSlice, configureStore} from '@reduxjs/toolkit'
import {v1 as uuid} from 'uuid'


const initialExpenseDefaultState = [];

const sliceExpense = createSlice({
    name: 'expenses',
    initialState: initialExpenseDefaultState, // Define initial state
    reducers: {
      addExpense: (state, action) =>  [...state ,action.payload],
      removeExpense: (state, action) => state.filter( elem => elem.id != action.payload.id ),
      editExpense: (state, action) => state.map((expense) => {
        if (action.payload.id === expense.id) {
          return {
            ...expense,
            ...action.payload
          }
        } else {
          return expense;
        }
      })
    },
  })

const reducerExpense = sliceExpense.reducer


const initialFilterState = {
  text: '',
  sortBy: 'date', // date or amount
  startDate: undefined,
  endDate: undefined
} 

const sliceFilters = createSlice({
  name: 'filters',
  initialState: initialFilterState, // Define initial state
  reducers: {
    // Define reducers
    setText: (state, action) => ({
        ...state,
        text: action.payload
    }),
    sortBy: (state, action) => ({
        ...state,
        sortBy: action.payload
      }),
    setStartDate: (state, action) => ({
        ...state,
        startDate: action.payload
    }),
    setEndDate: (state, action) => ({
        ...state,
        endDate: action.payload
      })
  },
})

const reducerFilter = sliceFilters.reducer

  
const demoState = {
    expenses: [{
      id: 'poijasdfhwer',
      description: 'January Rent',
      note: 'This was the final payment for that address',
      amount: 54500,
      createdAt: 0
    }],
    filters: {
      text: 'rent',
      sortBy: 'amount', // date or amount
      startDate: undefined,
      endDate: undefined
    }
  };
const reducer = combineReducers({
  espenses: reducerExpense, 
  filters: reducerFilter
});


// Create Redux store and configure it with a reducer
const store = configureStore({reducer:{reducer}});

const {setText, sortBy, setStartDate, setEndDate}  = sliceFilters.actions
const {addExpense, removeExpense, editExpense} = sliceExpense.actions 

const getVisibleExpenses = (store, {sortBy, startDate, endDate, text}) => {
  return store.filter((expense) => {
    const startMatch = typeof startDate != 'number' || expense.createdAt >=  startDate;
    const endMatch = typeof endDate != 'nunber' || expense.createdAt <=  endDate;
    const textMatch = typeof text != 'string' || expense.description.toLowerCase().includes(text.toLowerCase());
    return startMatch && endMatch && textMatch;
  }).sort((a,b) => {
    if (sortBy === 'date')
      return a.createdAt > b.createdAt ? 1 : -1;
    if (sortBy === 'amount')
      return a.amount > b.amount ? 1 : -1;
    if (sortBy === 'text')
      return a.description > b.description ? 1 : -1;
  });
}

store.subscribe(() => {
  const state = store.getState();
  const visibleExenses = getVisibleExpenses(state.reducer.espenses, state.reducer.filters)
  console.log(visibleExenses);
});



const expenseOne = store.dispatch(addExpense({
      id: uuid('test'),
      description: 'Whatever description',
      note: 'This was the final payment for that address',
      amount: 54500,
      createdAt: 60
    }));

const expenseTwo = store.dispatch(addExpense({
      id: uuid('wer'),
      description: 'Other Description',
      note: 'OMG, this is really not that bad',
      amount: 33300,
      createdAt: 66
    }));


//store.dispatch(setText("Whatever description"));
store.dispatch(setText("description"));
store.dispatch(sortBy('text'));
store.dispatch(sortBy('date'));
store.dispatch(setText('whatever'));
//const action3 = store.dispatch(setStartDate(55));
//const action4 = store.dispatch(setEndDate(99));



// const expremain = store.dispatch(
//   removeExpense({
//       id: expenseOne.payload.id
//     })
// );

// store.dispatch(
//   editExpense({
//     id: expenseTwo.payload.id,
//     amount: 7770000
//   })
// );
