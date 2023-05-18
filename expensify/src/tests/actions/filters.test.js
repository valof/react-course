import {setText, sortBy, setStartDate, setEndDate} from '../../actions/filters';
import moment from 'moment'

test ('should generate setStartDate action', () => {
    const res = setStartDate(moment(55).valueOf());
    expect(res).toEqual({type: 'filters/setStartDate', payload: moment(55).valueOf()})
});

test ('should generate setEndDate action', () => {
    const res = setEndDate(moment(33).valueOf());
    expect(res).toEqual({type: 'filters/setEndDate', payload: moment(33).valueOf()})
});

test ('should generate setText action', () => {
    const res = setText("Ебёнамать");
    expect(res).toEqual({type: 'filters/setText', payload: "Ебёнамать"})
});

test ('should generate sortBy action', () => {
    expect(sortBy('text')).toEqual({type: 'filters/sortBy', payload: 'text'})
    expect(sortBy('description')).toEqual({type: 'filters/sortBy', payload: 'description'})
    expect(sortBy('date')).toEqual({type: 'filters/sortBy', payload: 'date'})
});



