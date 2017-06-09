import 'react-native';
import React from 'react';
import Header from '../src/components/Header';
import renderer from 'react-test-renderer';

test('sunny app renders header correctly', () => {
  const tree = renderer.create(
    <Header />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
