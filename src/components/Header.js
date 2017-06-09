// import libraries for making a Component
import React from 'react';
import { Text, View } from 'react-native';

// make a coponent
const Header = () => {
  const { textStyle, viewStyle, smallerTextStyle } = styles;
  return (
    <View style={viewStyle}>
    <Text style={textStyle}>SunInformed</Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#ffffff'
  },
  smallerTextStyle: {
    fontSize: 9,
    marginTop: 5
  },
  viewStyle: {
    backgroundColor: '#0099e6',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    paddingTop: 15,
    paddingBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    marginTop: 20
  }
};

// export the component making it available to other parts of the app
export default Header;
