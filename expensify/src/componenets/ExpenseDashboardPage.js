import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilter x = "10" />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;
