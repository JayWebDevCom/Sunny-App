import React, { View, Text, StyleSheet } from 'react-native';
import Header from '../src/components/Header';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';


describe('<Header />'), () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).find(Text).to.have.length(2)
}
