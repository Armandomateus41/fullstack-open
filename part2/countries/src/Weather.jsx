import { useEffect, useState } from 'react'
import { getWeather } from './services/countries.js'
import { weatherDescription } from './search.js'

export default function Weather({ country }) {
  const [weather, setWeather] = useState(null)
  const [error, setError] = useState(false)
  const [latitude, longitude] = country.capitalInfo?.latlng || []
  useEffect(() => {
    if (latitude === undefined || longitude === undefined) return
    const controller = new AbortController()
    getWeather(latitude, longitude, controller.signal).then(setWeather).catch(error => {
      if (error.code !== 'ERR_CANCELED') setError(true)
    })
    return () => controller.abort()
  }, [latitude, longitude])
  if (latitude === undefined) return <p>Coordenadas da capital não disponíveis.</p>
  if (error) return <p role="alert">O tempo está indisponível no momento. Os dados do país continuam disponíveis.</p>
  if (!weather) return <p role="status">Consultando o tempo…</p>
  const current = weather.current
  const [icon, description] = weatherDescription(current.weather_code)
  return <section>
    <h3>Tempo em {country.capital?.[0]}</h3>
    <p className="weather-icon" role="img" aria-label={description}>{icon}</p>
    <p>{description}</p>
    <p>Temperatura: <strong>{current.temperature_2m} {weather.current_units.temperature_2m}</strong></p>
    <p>Vento: <strong>{current.wind_speed_10m} {weather.current_units.wind_speed_10m}</strong></p>
    <small>Atualização: {current.time.replace('T', ' ')} ({weather.timezone})</small>
    <p className="note">Dados meteorológicos: <a href="https://open-meteo.com/">Open-Meteo</a>, licença CC BY 4.0.</p>
  </section>
}

