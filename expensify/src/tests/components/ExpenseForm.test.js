import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow';
import ExpenseForm from '../../componenets/ExpenseForm'
import expenses from '../fixtures/expenses'
import moment from 'moment'

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
      expect(result).toMatchSnapshot();
})

test ('shoudl render error', () => {
      const renderer = ShallowRenderer.createRenderer();
      const result = renderer.render(
            <ExpenseForm />
      );
      expect (result).toMatchSnapshot();

      const tree = renderer.getRenderOutput();
      const input = tree.props.children[1];
      const mEvent = {
            target:            { value: 'submit' },
            preventDefault:    () => {}
            };
      input.props.onSubmit(mEvent)
      const tree2 = renderer.getRenderOutput();
      const input2 = tree2.props.children[0];
      expect(input2.props.children).toEqual('Please provide description and amount!');

      expect (tree2).toMatchSnapshot();
});

test ('shoudl render description', () => {
      const renderer = ShallowRenderer.createRenderer();
      const result = renderer.render(
            <ExpenseForm />
      );
      expect (result).toMatchSnapshot();

      const tree = renderer.getRenderOutput();
      const input = tree.props.children[1].props.children[0];
      const mEvent = {
                  target:{ value: 'Нет, ну это нормальная хуйня?' }
            };
      input.props.onChange(mEvent)
      const tree2 = renderer.getRenderOutput();
      const input2 = tree2.props.children[1].props.children[0];
      expect(input2.props.value).toEqual('Нет, ну это нормальная хуйня?');

      expect (tree2).toMatchSnapshot();
});

test ('shoudl set a note on text area change', () => {
      const renderer = ShallowRenderer.createRenderer();
      const result = renderer.render(
            <ExpenseForm />
      );
      expect (result).toMatchSnapshot();

      const tree = renderer.getRenderOutput();
      const textArea = tree.props.children[1].props.children[3];
      const event = {
                  target:{ value: 'Вы не заебали? Нет, давайте не по-братски, но по-справедливости!' }
            };
      textArea.props.onChange(event)
      const tree2 = renderer.getRenderOutput();
      const input2 = tree2.props.children[1].props.children[3];
      expect(input2.props.value).toEqual('Вы не заебали? Нет, давайте не по-братски, но по-справедливости!');

      expect (tree2).toMatchSnapshot();
});

test ('shoudl set a right amount of expense', () => {
      const renderer = ShallowRenderer.createRenderer();
      const result = renderer.render(
            <ExpenseForm />
      );
      expect (result).toMatchSnapshot();

      const tree = renderer.getRenderOutput();
      const textArea = tree.props.children[1].props.children[1];
      const event = {
                  target:{ value: "77.07" }
            };
      textArea.props.onChange(event)
      const tree2 = renderer.getRenderOutput();
      const input2 = tree2.props.children[1].props.children[1];
      expect(input2.props.value).toEqual('77.07');

      expect (tree2).toMatchSnapshot();
});

test ('shoudl set a wrong amount of expense', () => {
      const renderer = ShallowRenderer.createRenderer();
      const result = renderer.render(
            <ExpenseForm />
      );
      expect (result).toMatchSnapshot();

      const tree = renderer.getRenderOutput();
      const textArea = tree.props.children[1].props.children[1];
      const event = {
                  target:{ value: "77.07996" }
            };
      textArea.props.onChange(event)
      const tree2 = renderer.getRenderOutput();
      const input2 = tree2.props.children[1].props.children[1];
      expect(input2.props.value).toEqual('');

      expect (tree2).toMatchSnapshot();
});

test ('should submit onSubmit with valid form submissions', () => {
      const onSpySubmit=jest.fn();
      const renderer = ShallowRenderer.createRenderer();
      const result = renderer.render(
            <ExpenseForm expense = {expenses[0]} onSubmit={onSpySubmit}/>
      );
      const tree = renderer.getRenderOutput();
      const input = tree.props.children[1];
      const mEvent = {
            target:            { value: 'submit' },
            preventDefault:    () => {}
            };
      input.props.onSubmit(mEvent)

      expect (onSpySubmit).toHaveBeenLastCalledWith({
            amount: expenses[0].amount,
            description: expenses[0].description,
            createdAt: expenses[0].createdAt,
            note: expenses[0].note
      });
})

test ('should set new date on onDateChange', () => {
      const renderer = ShallowRenderer.createRenderer();
      const result = renderer.render(
            <ExpenseForm />
      );
      const tree = renderer.getRenderOutput();
      const datePicker = tree.props.children[1].props.children[2];
      const newDate = moment();
      datePicker.props.onDateChange(newDate);
      const tree2 = renderer.getRenderOutput();
      const datePicker2 = tree2._self;
      expect(datePicker2.state.createdAt).toEqual(newDate);
})

test ('should set new date on onFocusChange', () => {
      const renderer = ShallowRenderer.createRenderer();
      const result = renderer.render(
            <ExpenseForm />
      );
      const tree = renderer.getRenderOutput();
      const datePicker = tree.props.children[1].props.children[2];
      datePicker.props.onFocusChange({focused:true});
      const tree2 = renderer.getRenderOutput();
      const datePicker2 = tree2._self;
      expect(datePicker2.state.calendarFocused).toEqual(true);
})