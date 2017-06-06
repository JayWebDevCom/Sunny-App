// Ios code

// Import a library to help create a Component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create a Component
const App = () => (
    <Header headerText={'this varies'} />
  );

// Render it to the device
AppRegistry.registerComponent('sunny_app', () => App);
