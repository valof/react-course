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
    add: (state, action) => {
      const {increment = 1} = action.payload;
      state.count = state.count + increment;
    },
    subtract: (state, action) => {
      const {decrement:decr = 1} = action.payload;
      state.count = state.count - decr;
    },
    reset: (state) => {
      // Reducer for removing book from collection
      // Filter out a book that matches provided "id":
      state.count = 0;
    },
    set: (state, action) => {
      state.count = action.payload.set;
    },
  },
})

// Taking a reducer from the initial slice
const reducer = slice.reducer

// Create Redux store and configure it with a reducer
const store = configureStore({
  reducer: {
    reducer
  }
})

store.subscribe( () =>
{
  console.log(store.getState())
});



const { add, subtract, reset, set } = slice.actions

const action = store.dispatch(
  slice.actions.add({increment: 101})
);
store.dispatch(
  add({})
);
store.dispatch(
  subtract({decrement: 2})
);
store.dispatch(
  subtract({})
);
store.dispatch(
  reset({})
);

store.dispatch(
  set({set: 255})
);




