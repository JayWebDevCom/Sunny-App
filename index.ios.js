// Ios code

// Import a library to help create a Component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import Weather from './src/components/Weather';

// Create a Component
const App = () => (
    <View>
      <Header headerText={'this varies potentially'} />
      <Weather />
    </View>
  );

// Render it to the device
AppRegistry.registerComponent('sunny_app', () => App);
