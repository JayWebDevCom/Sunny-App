import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
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
        <View style={styles.container}>
          <View style={styles.content}>
            <Text>The date for the weather request: {this.renderDate()}</Text>
            <Text>The maximum temperature for this day is: {this.renderWeather()} &deg;C</Text>
          </View>
        </View>
      )

    }
  }

  const styles = StyleSheet.create({
    container: {
      // flex: 1,
      backgroundColor: '#e6ffe6'
    },
    content: {
      alignItems: 'center',
      flexGrow: 1,
      justifyContent: 'center',
      height: 50,
      paddingTop: 20,
      paddingBottom: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5
    }
  });

  export default Weather;
