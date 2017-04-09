import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines'
import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather(cityData) {
    const cityId = cityData.city.id;
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const pressures = cityData.list.map(weather => weather.main.pressure);
   
    return (
      <tr key={cityId}>
        <td>{name}</td>
        <td>
          <Chart data={temps} color="blue" units="K"/>
        </td>
        <td>
          <Chart data={humidities} color="orange" units="%"/>
        </td>
        <td>
          <Chart data={pressures} color="green" units="hPa"/>
        </td>
      </tr>
    );
  }

  render() {
    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature</th>
              <th>Humidity</th>
              <th>Pressure</th>
            </tr>
          </thead>
          <tbody>
            { this.props.weather.map(this.renderWeather) }
          </tbody>
        </table>
      </div>
    );
  }
}

/* 
  without ES6 destructuring of state object

  function mapStateToProps(state) {
   return { weather: state.weather };
  }
*/ 

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);