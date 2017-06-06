import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class Weather extends Component {

componentWillMount() {
const requestApi = 'https://api.apixu.com/v1/current.json?key=ceaa0f0125d04d5da98191845170606&q=london';
state = { items: [] }; // initial or empty state
  axios.get(requestApi)
  .then(response => this.setState({ items: response.data }));
}

render() {
  // console.log('asdf', this.state.items.current.feelslike_c)
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
