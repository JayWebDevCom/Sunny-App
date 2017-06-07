import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class Weather extends Component {
  state = { items: {} };

  componentWillMount() {
      fetch('https://api.worldweatheronline.com/premium/v1/weather.ashx?key=d1f3365447a2494cb8b115449170706&q=London&format=json&num_of_days=5')
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          items: responseData,
        })
        .done();
      })

  }

    renderWeather() {
      console.log('wdata', this.state)
      // return <Text>{this.state.items.data.weather[0].date}</Text>
    }

    render() {
      return (

        <View>{this.renderWeather()}</View>

      )

    }
  }

  export default Weather;
