import moment from 'moment';

export default [
    {
        id: 1,
        description: 'Mortgage',
        note: 'Fucking milloions',
        amount: 505055,
        createdAt: 0
             
    },
    {
        id: 2,
        description: 'Хуёргадж',
        note: '',
        amount: 54000,
        createdAt: moment(0).subtract(4, 'days').valueOf()
             
    },
    {
        id: 3,
        description: 'Что угодно',
        note: '',
        amount: 540,
        createdAt: moment(0).add(4, 'days').valueOf()
             
    },
    {
        id: 4,
        description: 'mar rent',
        note: 'Just pay your bill',
        amount: 50,
        createdAt: moment(0).add(20, 'days').valueOf()
             
    }
    
];
