import { createSlice} from '@reduxjs/toolkit'
import moment from 'moment';

const initialFilterState = {
    text: '',
    sortBy: 'date', // date or amount
    startDate: moment().startOf('month').valueOf(),
    endDate: moment().endOf('month').valueOf()
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
  