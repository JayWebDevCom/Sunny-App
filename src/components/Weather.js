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

<<<<<<< HEAD
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
=======
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
        if(day.maxtempC > 15){textString =
          textString + "Max temperature on " + dayFromNumber(dayNumber) + " will be " + day.maxtempC.toString() + " \n"};
        });
        console.log(textString);
        return <Text>{textString}</Text>

      }
    }
<<<<<<< HEAD
  }
>>>>>>> fbda1c5b1dfd3d14c1de96241a4072e0cec7c0b5
=======
>>>>>>> a0c3627848417d9787e4795817226036e84fb7dc

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
