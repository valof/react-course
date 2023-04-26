import { configureStore } from '@reduxjs/toolkit'
import { createSlice} from '@reduxjs/toolkit'

// Creating initial state, in this case it is an object with empty array 
// 
const initialState = {
  books: [],
}

// Create Redux state slice
//NOTE: the key of the slice is automatically participate 
//in the name of the actions, in this case: "books/addBook" and "book/RemoveBook"
const booksSlice = createSlice({
  name: 'books',
  initialState, // Define initial state
  reducers: {
    // Define reducers
    addBook: (state, action) => {
      // Reducer for adding new book to collection
      // Create new state by taking existing books
      // and combining them with newly added book:
      state.books = [...state.books, action.payload]
    },
    removeBook: (state, action) => {
      // Reducer for removing book from collection
      // Filter out a book that matches provided "id":
      state.books = state.books.filter((b) => b.id !== action.payload.id)
    },
  },
})

// Taking a reducer from the initial slice
const bookReducer = booksSlice.reducer

// Create Redux store and configure it with a reducer
const store = configureStore({
  reducer: {
    bookReducer // Add books reducer
  }
})

const { addBook, removeBook } = booksSlice.actions

const action = store.dispatch(
  addBook({
    title:'Harry Potter and the Goblet of Fire',
    author:'Val O.',
    id: 1
  })
);
console.log(action)
console.log(store.getState())
store.dispatch(
  removeBook({
    id: 1
  })
);
console.log(store.getState())

