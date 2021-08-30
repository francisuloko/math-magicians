import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../src/pages/Home';

test('Caluculator renders correctly', () => {
  const tree = renderer
    .create(<Home />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
