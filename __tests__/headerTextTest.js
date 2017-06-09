import ReactNative, { Text } from 'react-native';
import React from 'react';
import Header from '../src/components/Header';
import { shallow } from 'enzyme';

describe('<Header />', () => {
  it('should render stuff', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.length).toBe(1);
    // expect(wrapper.contains(<Text>SunInformed</Text>)).toBe(true)
  });
});
