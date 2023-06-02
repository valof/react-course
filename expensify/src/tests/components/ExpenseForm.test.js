import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow';
import ExpenseForm from '../../componenets/ExpenseForm'
import expenses from '../fixtures/expenses'

test ('shoudl render ExpenseForm', () => {
    const testRenderer = ShallowRenderer.createRenderer()
    const result = testRenderer.render(
            <ExpenseForm />
      );
      expect(result).toMatchSnapshot();
})

test ('should render ExpenseForm with data', () => {
    const testRenderer = ShallowRenderer.createRenderer()
    const result = testRenderer.render(
            <ExpenseForm expense = {expenses[1]}/>
      );
      expect(result).toMatchSnapshot();})