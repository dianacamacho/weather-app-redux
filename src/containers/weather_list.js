import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines'


class WeatherList extends Component {
  renderWeather(cityData) {
    const cityId = cityData.city.id;
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
   
    return (
      <tr key={cityId}>
        <td>{name}</td>
        <td>
          <Sparklines height={120} width={180} data={temps}>
            <SparklinesLine color="red" />
          </Sparklines>
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
              <th>Pressure</th>
              <th>Humidity</th>
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