// Ios code

// Import a library to help create a Component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import Weather from './src/components/Weather';
import Footer from './src/components/Footer';

// Create a Component
const App = () => (
    <View style={styles.body}>
      <Header headerText={'this varies potentially'} />
      <Weather />
      <Footer footerText={'Copyright © 2017 Anthony, Alex, Jaiye, Will'} />

    </View>
  );

// Render it to the device
AppRegistry.registerComponent('sunny_app', () => App);

const styles = {
  body: {
    marginTop: 2,
    flex: 1,
    backgroundColor: '#e6f2ff',
    justifyContent: 'center'
  }
};
