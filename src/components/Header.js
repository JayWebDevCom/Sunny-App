// import libraries for making a Component
import React from 'react';
import { Text, View } from 'react-native';

// make a coponent
const Header = (props) => {
  const { textStyle, viewStyle, smallerTextStyle } = styles;
  return (
    <View style={viewStyle}>
    <Text style={textStyle}>SunInformed</Text>
    <Text style={smallerTextStyle}>{props.headerText}</Text>
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
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 65,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5
  }
};

// export the component making it available to other parts of the app
export default Header;
