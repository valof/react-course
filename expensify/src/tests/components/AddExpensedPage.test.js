import React from 'react';
import {AddExpenseDisconnected} from '../../componenets/AddExpensedPage';
import {addExpense, removeExpense, editExpense}  from '../../actions/expenses';
import ShallowRenderer from 'react-test-renderer/shallow';
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import { MemoryRouter } from "react-router-dom";
import expenses from '../fixtures/expenses'

test ('should render Add Expense', () => {
    const onSubmit = jest.fn();
    const navigate = jest.fn();

    const renderer = ShallowRenderer.createRenderer();
    const result = renderer.render(
        <MemoryRouter>
          <Route path="/create" element={<AddExpenseDisconnected onSubmit={onSubmit} navigate={navigate}/>} />
        </MemoryRouter>
    );
    const tree = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
})

test ('should handel onSubmit', () => {
  const onSubmit = jest.fn();
  const onNavigate = jest.fn();

  const renderer = ShallowRenderer.createRenderer();
  const result = renderer.render(
      <MemoryRouter>
        <Route path="/create" element={<AddExpenseDisconnected onSubmit={onSubmit} navigate={onNavigate}/>} />
      </MemoryRouter>
  );
  const tree = renderer.getRenderOutput();
  const input = tree.props.children[1];
  tree.props.children.props.element.props.onSubmit(expenses[1]);
  expect(onSubmit).toHaveBeenCalledWith(expenses[1]);
  expect(onNavigate).toHaveBeenLastCalledWith("/");
})





// All failed attempts below

// jest.mock("react-redux", () => ({
//     useDispatch: jest.fn(),
// }));


// // how to mock my store? 
// const mockStore = {
//     reducer: {
//         expenses: [
//             {   id: '1',
//                 description: 'thing1',
//                 amount: 100,
//                 note: 'this is thing1',
//                 createdAt: 0
//             }],
//         filters: {
//             text: 'thing1',
//             sortBy: 'date',
//             startDate: undefined,
//             endDate: undefined
//         }
//     }
// };

// describe('Test TargetComponent', () => {
//     let loginFn = jest.fn(() => {
//         console.log('We are in the function!')
//         return null
//     });

//     const mockedUsedNavigate = jest.fn();

//     beforeEach(() => {
//         useDispatchMock.mockImplementation( () => () => {return loginFn;});
//     })
    
//     afterEach(() => {
//         useDispatchMock.mockClear();
//     })

//     const useDispatchMock = reactRedux.useDispatch;


//     it('shows thing1 and thing2', () => {
//         const renderer = ShallowRenderer.createRenderer();
//         jest.spyOn(renderer, 'useNavigate').mockImplementation(() => mockedUsedNavigate)

//         const result = renderer.render(
//               <AddExpensePage />
//         );
//         const tree = renderer.getRenderOutput();
//       });

// });


// beforeEach(() => {
//     useDispatchMock.mockImplementation(() => () => {});
//     useSelectorMock.mockImplementation(selector => selector(mockStore));
// })
// afterEach(() => {
//     useDispatchMock.mockClear();
//     useSelectorMock.mockClear();
// })
