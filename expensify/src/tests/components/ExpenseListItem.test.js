import React from 'react'
import { MemoryRouter } from "react-router-dom";
import TestRenderer from 'react-test-renderer';
import {ExpenseListItem} from '../../componenets/ExpenseListItem'
import expenses from '../fixtures/expenses'

test ('should render ExportList with expenses', () => {
    const testRenderer = TestRenderer.create(
        <MemoryRouter>
            <ExpenseListItem expense={expenses[0]} index = {0}/>
        </MemoryRouter>
      );
    expect(testRenderer.toJSON()).toMatchSnapshot();
})
