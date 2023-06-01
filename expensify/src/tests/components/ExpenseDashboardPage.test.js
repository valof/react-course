import React from 'react'
import ExpenseDashboardPage from '../../componenets/ExpenseDashboardPage';
import ShallowRenderer from 'react-test-renderer/shallow';

test ('should render Expense Dashboard page correctly', () => {
    const testRenderer = ShallowRenderer.createRenderer()
    const result = testRenderer.render(
            <ExpenseDashboardPage />
      );
      expect(result).toMatchSnapshot();
})
