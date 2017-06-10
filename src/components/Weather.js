import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class Weather extends Component {
  state = { items: {} };

  componentWillMount() {
    fetch('https://api.worldweatheronline.com/premium/v1/weather.ashx?key=d1f3365447a2494cb8b115449170706&q=London&format=json&num_of_days=20')
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        items: responseData,
      });
    })
    .done();
  }

  renderWeather() {
    let textString = ''

    function dayFromNumber(number) {
      switch(number) {
        case 0:
        return "Sunday";
        break;
        case 1:
        return "Monday";
        break;
        case 2:
        return "Tuesday";
        break;
        case 3:
        return "Wednesday";
        break;
        case 4:
        return "Thursday";
        break;
        case 5:
        return "Friday";
        break;
        case 6:
        return "Saturday";
      }
    }

    if(this.state.items.data != null) {
      this.state.items.data.weather.forEach(function(day) {
        let dayNumber = new Date(day.date).getDay()
        if(day.maxtempC > 15){
          textString = "Max temperature on " + dayFromNumber(dayNumber) + " will be " + day.maxtempC.toString() + " \n"
        };
        });

        return <Text>{textString}</Text>

      }
    }

    render() {
      return (
        <View>
        <Text>
        All days over the next 20 days where the temperature *might* creep above 20C in London:
        {"\n"}{"\n"}
        {this.renderWeather()}
        </Text>
        </View>
      )
    }
  }

  export default Weather;
