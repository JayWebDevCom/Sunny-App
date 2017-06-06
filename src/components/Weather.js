import React, { Component } from 'react';

import { View, Text } from 'react-native';

class Weather extends Component {

  componentWillMount() {

    console.log('cwm')
  }
render() {
  const { viewStyle } = styles;
    return (
    <View style={viewStyle}>
      <Text>This is the weather :)</Text>
    </View>
    );
  }
}

const styles = {
  viewStyle: {
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    height: 65,
    marginTop: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5
  }
};

export default Weather;
