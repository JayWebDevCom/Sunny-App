import React, { Component } from 'react';
import { View, Text } from 'react-native';

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
  renderWeatherDesc() {
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

    if (this.state.items.data != null) {
      this.state.items.data.weather.forEach(function(day) {
        const dayNumber = new Date(day.date).getDay()
        if (day.maxtempC > 15 && day.hourly[3].weatherDesc[0].value === 'Sunny') {
          textString += dayFromNumber(dayNumber) + " will be " + day.hourly[3].weatherDesc[0].value + " \n"
        }
      });
      return <Text>{textString}</Text>
    }
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
        const dayNumber = new Date(day.date).getDay()
        if(day.maxtempC > 15){textString =
          textString + "The weather on " + dayFromNumber(dayNumber) + " will be " + day.maxtempC.toString() + " \n"};
        });
        return <Text>{textString}</Text>
      }
    }

    render() {
      return (
        <View>
        <Text>
        The next 20 days where the temperature *might* creep above 20&#8451; in London:
        {"\n"}{"\n"}
        {this.renderWeatherDesc()}
        </Text>
        </View>
      )
    }
  }

  export default Weather;
