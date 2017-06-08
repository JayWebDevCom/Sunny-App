import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class Weather extends Component {
  state = { items: {} };

  componentWillMount() {
    fetch('https://api.worldweatheronline.com/premium/v1/weather.ashx?key=d1f3365447a2494cb8b115449170706&q=London&format=json&num_of_days=10')
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        items: responseData,
      });
    })
    .done();
  }

  renderWeather() {

    if(this.state.items.data != null) {
      var saturday = ''
      var sunday = ''
      this.state.items.data.weather.forEach(function(weather){

        if ( new Date(weather.date).getDay() == 6 ) {
          saturday +=  this.state.items.data.weather.date
        }

        if ( new Date(weather.date).getDay() == 7 ) {
          sunday +=  this.state.items.data.weather.date
        }
      })

      console.log('sat', saturday)
      console.log('sun', sunday)

      return <Text>{this.state.items.data.weather[0].date}</Text>
    }

  }

  render() {
    return (
      <View>
      <Text>The date for the weather request: {this.renderWeather()} </Text>
      </View>
    )
  }
}

export default Weather;
