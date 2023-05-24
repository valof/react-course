import {reducerFilter} from '../../reducers/filters'
import moment from 'moment'

test ('should set up default filter values', () => {
    const ret = reducerFilter (undefined, {'type': '@@INIT'});
    expect(ret).toEqual({
            text: '',
            sortBy: 'date', // date or amount
            startDate: moment().startOf('month').valueOf(),
            endDate: moment().endOf('month').valueOf()
    });
});

 test ('should set sortBy to amount', () => {
     const ret = reducerFilter (undefined, {'type': 'filters/sortBy'});
     expect(ret.sortBy).toEqual(undefined);
 });

test ('should set sortBy to byDate', () => {
    const beginState = {
        text: '',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    };    
    const action = {'type': 'filters/sortBy', 'payload': 'date'}
    const ret = reducerFilter (beginState, action);
    expect(ret.sortBy).toEqual('date');
});

test ('should set text filter', () => {
    const myText = 'My text filter';    
    const action = {'type': 'filters/setText', 'payload': myText}
    const ret = reducerFilter (undefined, action);
    expect(ret.text).toEqual(myText);
});

test ('should set StartDate', () => {
    const startDate = moment().valueOf();
    const action = {'type': 'filters/setStartDate', 'payload': startDate}
    const ret = reducerFilter (undefined, action);
    expect(ret.startDate).toEqual(startDate);
});

test ('should set endDate', () => {
    const endDate = moment().valueOf();
    const action = {'type': 'filters/setEndDate', 'payload': endDate}
    const ret = reducerFilter (undefined, action);
    expect(ret.endDate).toEqual(endDate);
});






