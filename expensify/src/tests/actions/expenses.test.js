import {addExpense, removeExpense, editExpense} from '../../actions/expenses';

test ('should remove expense', () => {
    const res = removeExpense({id: 'xxx'});
    expect(res).toEqual({type: 'expenses/removeExpense', payload: {id:"xxx"}});
})

test ('should edit expense', () => {
    const res = editExpense({id:25})
    expect(res).toEqual(
        {type: "expenses/editExpense", 
        payload:{id: 25}
        });
});

test ('should set new expense action with provided values', () => {
    const expenseData = 
        {description: 'Сука, description', 
        note: 'Замечание', 
        amount: 77.77, 
        createdAt: 99999};
        const res = addExpense(expenseData);
        expect(res).toEqual(
            {type: "expenses/addExpense", 
            payload:{
                ...expenseData
            }});
    
})

test ('should set new expense action with no values', () => {
        const res = addExpense()
        expect(res).toEqual(
            {type: "expenses/addExpense", 
            payload:undefined});
    
})

