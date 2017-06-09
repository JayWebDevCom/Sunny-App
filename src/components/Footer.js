// import libraries for making a Component
import React from 'react';
import { Text, View } from 'react-native';

// make a coponent
const Footer = (props) => {
  const { textStyle, viewStyle, smallerTextStyle } = styles;
  return (
    <View style={viewStyle}>
    <Text style={smallerTextStyle}>{props.footerText}</Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 14
  },
  smallerTextStyle: {
    fontSize: 9,
    marginTop: 5
  },
  viewStyle: {
    backgroundColor: '#e6f2ff',
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
    paddingBottom: 5
  }
};

// export the component making it available to other parts of the app
export default Footer;
