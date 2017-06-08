import 'react-native';
import React from 'react';
import Header from '../src/components/Header';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

describe('<Header />'), () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).find(Text).to.have.length(2)
}
