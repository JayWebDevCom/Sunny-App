// Ios code

// Import a library to help create a Component
import React from 'react';
import { AppRegistry, View, Image } from 'react-native';
import Header from './src/components/Header';
import Weather from './src/components/Weather';
import Footer from './src/components/Footer';

// Create a Component
const App = () => (
  <Image source={require('./src/images/sunny.jpg')} style={styles.backgroundImage}>
    <View style={styles.body}>
      <Header headerText={'this varies potentially'} />
      <Weather />
      <Footer footerText={'Copyright © 2017 Anthony, Alex, Jaiye, Will'} />
    </View>
    </Image>
  );

// Render it to the device
AppRegistry.registerComponent('sunny_app', () => App);

const styles = {
  body: {
    marginTop: 2,
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center'
  },
  backgroundImage: {
  flex: 1,
  width: undefined,
  height: undefined,
  backgroundColor: 'transparent',
  justifyContent: 'center',
  alignItems: 'center'
}
};
