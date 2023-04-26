import { createSlice} from '@reduxjs/toolkit'

const initialExpenseDefaultState = [];

export const sliceExpense = createSlice({
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


export const reducerExpense=sliceExpense.reducer;
