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
        });

      })
      .done();
  }

    renderDate() {
      if (this.state.items.data != null) {
      return <Text>{this.state.items.data.weather[0].date}</Text>
    }
    }

    renderWeather() {
      if (this.state.items.data != null) {
      return <Text>{this.state.items.data.weather[0].maxtempC}</Text>
    }
    }

    render() {
      return (
        <View>
        <Text>The date for the weather request: {this.renderDate()}</Text>
        <Text>The maxium temerature for this day is: {this.renderWeather()} &deg;C</Text>
        </View>
      )

    }
  }

  export default Weather;
