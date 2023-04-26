import { combineReducers} from 'redux'
import { configureStore} from '@reduxjs/toolkit'
import {reducerExpense} from '../reducers/expenses'
import {reducerFilter} from '../reducers/filters'

const reducer = combineReducers({
    espenses: reducerExpense, 
    filters: reducerFilter
  });
  
  
  // Create Redux store and configure it with a reducer
  export default () => {
    const store = configureStore({reducer:{reducer}});
    return store;
  }
  