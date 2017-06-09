import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

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

    renderWeather() {
      if (this.state.items.data != null) {
        return <Text>{this.state.items.data.weather[0].maxtempC}</Text>
      }
    }

    render() {
      return (
        <View style={styles.container}>
        <View style={styles.content}>
        <Text style={{ alignSelf: 'center' }}>
        The next 20 days where the temperature *might* creep above 20&#8451; in London:
        {"\n"}{"\n"}
        {this.renderWeatherDesc()}
        </Text>
        </View>
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'transparent',
      alignItems: 'center',
      // marginTop: 5,
      marginBottom: 5

    },
    content: {
      alignItems: 'center',
      // flexGrow: 1,
      justifyContent: 'center',
      height: 'auto',
      width: 330,
      backgroundColor: '#e6ffe6',
      paddingTop: 20,
      paddingBottom: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5
    }
  });

  export default Weather;
