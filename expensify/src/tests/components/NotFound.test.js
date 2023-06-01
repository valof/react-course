import React from 'react'
import NotFound from '../../componenets/NotFound';
import ShallowRenderer from 'react-test-renderer/shallow';

test ('should render NotFound correctly', () => {
    const testRenderer = ShallowRenderer.createRenderer()
    const result = testRenderer.render(
            <NotFound />
      );
      expect(result).toMatchSnapshot();
})
