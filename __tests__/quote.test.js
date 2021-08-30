import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../src/pages/Quote';

test('Caluculator renders correctly', () => {
  const tree = renderer
    .create(<Quote />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
