import React from 'react'
import { MemoryRouter } from "react-router-dom";
import TestRenderer from 'react-test-renderer';
import {ExpenseList} from '../../componenets/ExpenseList'
import expenses from '../fixtures/expenses'

test ('should render ExportList with expenses', () => {
    const testRenderer = TestRenderer.create(
        <MemoryRouter>
            <ExpenseList expenses={expenses} />
        </MemoryRouter>
      );
    expect(testRenderer.toJSON()).toMatchSnapshot();
})

test ('should render message "No expenses!"', () => {
    const testRenderer = TestRenderer.create(
        <MemoryRouter>
            <ExpenseList expenses={[]} />
        </MemoryRouter>
      );
    expect(testRenderer.toJSON()).toMatchSnapshot();
})