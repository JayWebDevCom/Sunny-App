// Ios code

// Import a library to help create a Component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// Create a Component
const App = () => (
    <Text>Hello From the Application</Text>
  );

// Render it to the device
AppRegistry.registerComponent('sunny_app', () => App);
