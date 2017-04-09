import axios from 'axios';

const API_KEY = "da24829670b77e8c573a24a1543be0e7";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  // axios returns a promise, not the data yet

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}