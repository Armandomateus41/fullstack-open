import axios from 'axios'

export async function getCountries(signal) {
  const response = await axios.get('https://studies.cs.helsinki.fi/restcountries/api/all', { signal })
  return response.data
}

export async function getWeather(latitude, longitude, signal) {
  const response = await axios.get('https://api.open-meteo.com/v1/forecast', {
    signal,
    params: { latitude, longitude, current: 'temperature_2m,wind_speed_10m,weather_code', timezone: 'auto' },
  })
  return response.data
}

