import { configureStore } from '@reduxjs/toolkit'
import { createSlice} from '@reduxjs/toolkit'

// Creating initial state, in this case it is an object with empty array 
// 
const initialState = {
  count: 0
}

// Create Redux state slice
//NOTE: the key of the slice is automatically participate 
//in the name of the actions, in this case: "books/addBook" and "book/RemoveBook"
const slice = createSlice({
  name: 'counter',
  initialState, // Define initial state
  reducers: {
    // Define reducers
    add: (state) => {
      // Reducer for adding new book to collection
      // Create new state by taking existing books
      // and combining them with newly added book:
      state.count = state.count + 1
    },
    subtract: (state) => {
      // Reducer for removing book from collection
      // Filter out a book that matches provided "id":
      state.count = state.count -1
    },
  },
})

// Taking a reducer from the initial slice
const reducer = slice.reducer

// Create Redux store and configure it with a reducer
const store = configureStore({
  reducer: {
    reducer // Add books reducer
  }
})

const { add, subtract } = slice.actions

const action = store.dispatch(
  add({})
);
console.log(action)
console.log(store.getState())
store.dispatch(
  add({})
);
console.log(store.getState())

