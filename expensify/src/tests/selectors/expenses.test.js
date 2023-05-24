import selectors from '../../selectors/selector'
import moment from 'moment'
import expenses from '../fixtures/expenses'

test('should filter by text', () => {
    const filters = {
        text: 'm',
        sortBy: 'date', // date or amount
        startDate: 0,
        endDate: 1000
        };
    const res = selectors(expenses, filters);
    expect(res).toEqual([expenses[0], expenses[3]]);
})

test('should filter by end date', () => {
    const filters = {
        text: '',
        sortBy: 'date', // date or amount
        startDate: 0,
        endDate: moment(0).valueOf()
        };
    const res = selectors(expenses, filters);
    expect(res).toEqual([expenses[0], expenses[2], expenses[3]]);
})

test('should filter by end date', () => {
    const filters = {
        text: '',
        sortBy: 'date', // date or amount
        startDate: moment(0).add(4, 'days').valueOf(),
        endDate: 0
        };
    const res = selectors(expenses, filters);
    expect(res).toEqual([expenses[2], expenses[3]]);
})

test('should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date', // date or amount
        startDate: moment(0).add(4, 'days').valueOf(),
        endDate: 0
        };
    const res = selectors(expenses, filters);
    expect(res).toEqual([expenses[2], expenses[3]]);
})

test('should sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount', // date or amount
        startDate: moment(0).subtract(4, 'days').valueOf(),
        endDate: moment(0).add(4, 'days').valueOf()
        };
    const res = selectors(expenses, filters);
    expect(res).toEqual([expenses[3], expenses[2], expenses[1], expenses[0]]);
})




