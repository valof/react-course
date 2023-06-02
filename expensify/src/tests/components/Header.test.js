import React from 'react'
import { MemoryRouter } from "react-router-dom";
import TestRenderer from 'react-test-renderer';
import Header from '../../componenets/Header'

test ('should render Header say "Expensify!" and render correctly', () => {
    const testRenderer = TestRenderer.create(
        <MemoryRouter>
            <Header />
        </MemoryRouter>
      );
      const componentInstance = testRenderer.root;
      expect(componentInstance.findByType('h1').props.children).toBe('Expensify!')
      expect(testRenderer.toJSON()).toMatchSnapshot();
})




















    //const mountedHeader = create(<Header />)
    // const renderer = ReactShallowRenderer.createRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    // console.log(renderer.getRenderOutput())
