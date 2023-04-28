//import {store} from '../store/store'

export default (expenses, {sortBy, startDate, endDate, text}) => {
    return expenses.filter( expense => {
      const startMatch = typeof startDate != 'number' || expense.createdAt >=  startDate;
      const endMatch = typeof endDate != 'nunber' || expense.createdAt <=  endDate;
      const textMatch = typeof text != 'string' || expense.description.toLowerCase().includes(text.toLowerCase());
      return startMatch && endMatch && textMatch;
    }).sort((a,b) => {
      if (sortBy === 'date')
        return a.createdAt > b.createdAt ? 1 : -1;
      if (sortBy === 'amount')
        return a.amount > b.amount ? 1 : -1;
      if (sortBy === 'text')
        return a.description > b.description ? 1 : -1;
    });
}

// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExenses = getVisibleExpenses(state.reducer.espenses, state.reducer.filters)
//     console.log(visibleExenses);
//   });
  
  