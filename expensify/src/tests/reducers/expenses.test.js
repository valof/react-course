import {reducerExpense} from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default expense', () => {
    const state = reducerExpense (undefined, '@@INIT');
    expect(state).toEqual([]);
});

test('shoudl remove an expense', () => {
    const action = {'type': 'expenses/removeExpense', 'payload': {id: expenses[1].id}};
    const ret = reducerExpense(expenses, action);
    expect(ret).toEqual([expenses[0], expenses[2],expenses[3]]);
});

test('shoudl NOT remove an expense', () => {
    const action = {'type': 'expenses/removeExpense', 'payload': {id: 10}};
    const ret = reducerExpense(expenses, action);
    expect(ret).toEqual([expenses[0], expenses[1], expenses[2],expenses[3]]);
});

test('shoudl add an expense', () => {
    const newExpense = {
        id: 10,
        description: 'Да бля!',
        note: '',
        amount: 54000,
        createdAt: moment(0).subtract(10, 'days').valueOf()
             
    };    
    const action = {'type': 'expenses/addExpense', 'payload': newExpense};
    const ret = reducerExpense(expenses, action);
    expect(ret[expenses.length]).toEqual({id: expect.any(String), description: 'Да бля!', note: '', amount: 54000,createdAt: moment(0).subtract(10, 'days').valueOf()});
});

test('shoudl edit an expense', () => {
    const newExpense = {
        id: expenses[2].id,
        description: 'Да бля!',
        note: '',
        amount: 71000,
        createdAt: moment(0).add(71, 'days').valueOf()
    };    
    const action = {'type': 'expenses/editExpense', 'payload': newExpense};
    const ret = reducerExpense(expenses, action);
    expect(ret[2]).toEqual({id: expenses[2].id, description: 'Да бля!', note: '', amount: 71000,createdAt: moment(0).add(71, 'days').valueOf()});
});

test('shoudl NOT edit an expense', () => {
    const newExpense = {
        id: 999,
        description: 'Да бля!',
        note: '',
        amount: 71000,
        createdAt: moment(0).add(71, 'days').valueOf()
    };    
    const action = {'type': 'expenses/editExpense', 'payload': newExpense};
    const ret = reducerExpense(expenses, action);
    expect(ret).toEqual(expenses);
});
