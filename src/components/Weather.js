import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

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

    function monthFromNumber(number) {
      switch(number) {
        case 0:
        return "January";
        break;
        case 1:
        return "Febuary";
        break;
        case 2:
        return "March";
        break;
        case 3:
        return "April";
        break;
        case 4:
        return "May";
        break;
        case 5:
        return "June";
        break;
        case 6:
        return "July";
        break;
        case 7:
        return "August";
        break;
        case 8:
        return "September";
        break;
        case 9:
        return "October";
        break;
        case 10:
        return "November";
        break;
        case 11:
        return "December";
      }
    }

    function dateFromNumber(number) {
      switch(number) {
        case 1:
        return "1st";
        break;
        case 2:
        return "2nd";
        break;
        case 3:
        return "3rd";
        break;
        case 4:
        return "4th";
        break;
        case 5:
        return "5th";
        break;
        case 6:
        return "6th";
        break;
        case 7:
        return "7th";
        break;
        case 8:
        return "8th";
        break;
        case 9:
        return "9th";
        break;
        case 10:
        return "10th";
        break;
        case 11:
        return "11th";
        break
        case 12:
        return "12th";
        break;
        case 13:
        return "13th";
        break;
        case 14:
        return "14th";
        break;
        case 15:
        return "15th";
        break;
        case 16:
        return "16th";
        break;
        case 17:
        return "17th";
        break;
        case 18:
        return "18th";
        break;
        case 19:
        return "19th";
        break;
        case 20:
        return "20th";
        break;
        case 21:
        return "21st";
        break;
        case 22:
        return "22nd";
        break;
        case 23:
        return "23rd";
        break;
        case 24:
        return "24th";
        break;
        case 25:
        return "25th";
        break;
        case 26:
        return "26th";
        break;
        case 27:
        return "27th";
        break;
        case 28:
        return "28th";
        break;
        case 29:
        return "29th";
        break;
        case 30:
        return "30th";
        break;
        case 31:
        return "31st";
      }
    }

    if (this.state.items.data != null) {
      this.state.items.data.weather.forEach(function(day) {
        const dayNumber = new Date(day.date).getDay()
        const monthNumber = new Date(day.date).getMonth()
        const dateNumber = new Date(day.date).getDate()
        if (day.maxtempC > 15 && day.hourly[3].weatherDesc[0].value === 'Sunny') {(
          textString += dayFromNumber(dayNumber) + " " + dateFromNumber(dateNumber) + " " + monthFromNumber(monthNumber) + " will be " + day.hourly[3].weatherDesc[0].value + " and " + day.maxtempC + '°C' +  " \n")
        }
      });
      return <Text>{textString}</Text>
    }
  }

    render() {
      return (
        <View>
        <Text>
        Nice weather coming up in London:
        {"\n"}{"\n"}
        </Text>
        {this.renderWeatherDesc()}
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
