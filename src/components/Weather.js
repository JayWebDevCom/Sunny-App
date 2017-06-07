import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class Weather extends Component {

componentWillMount() {
const requestApi = 'https://api.apixu.com/v1/current.json?key=ceaa0f0125d04d5da98191845170606&q=london';

state = { items: {} }; // initial or empty state
  axios.get(requestApi)
  .then(response => this.setState({ items: response.data }));
}

renderWeather() {
  return <Text>{this.state.items.current.feelslike_c}</Text>
}

render() {

return (
  <View>{this.renderWeather()}</View>
)

}
}

export default Weather;
