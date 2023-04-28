import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as ReactDOMClient from 'react-dom/client';
import AppRouter from './routers/AppRouter';
import configureStore from './store/store';
import {addExpense, removeExpense, editExpense}  from './actions/expenses';
import {setText, sortBy, setStartDate, setEndDate} from './actions/filters';
import {getVisibleExpenses} from './selectors/selector'
import {v1 as uuid} from 'uuid';
import selectExpenses from './selectors/selector'

import './styles/styles.scss'

const store = configureStore();

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

store.dispatch(setText("description"));
store.dispatch(sortBy('text'));
store.dispatch(sortBy('date'));
//store.dispatch(setText('whatever'));
// store.dispatch(setStartDate(55));

const exp = selectExpenses(store.getState().reducer.espenses, store.getState().reducer.filters);

console.log(store.getState());

console.log(exp);

const jsx = (
  <Provider store = {store}>
    <AppRouter />
  </Provider>
)
ReactDOMClient.createRoot(document.getElementById('app')).render(jsx);
