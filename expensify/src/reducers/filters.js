import { createSlice} from '@reduxjs/toolkit'


const initialFilterState = {
    text: '',
    sortBy: 'date', // date or amount
    startDate: undefined,
    endDate: undefined
  } 
  
  export const sliceFilters = createSlice({
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
  });

export const reducerFilter=sliceFilters.reducer;
  