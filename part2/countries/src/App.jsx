import { useEffect, useState } from 'react'
import { getCountries } from './services/countries.js'
import { countryName, filterCountries } from './search.js'
import Country from './Country.jsx'

export default function App() {
  const [countries, setCountries] = useState([])
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  useEffect(() => {
    const controller = new AbortController()
    getCountries(controller.signal).then(setCountries).catch(error => {
      if (error.code !== 'ERR_CANCELED') setError(true)
    }).finally(() => { if (!controller.signal.aborted) setLoading(false) })
    return () => controller.abort()
  }, [])
  const matches = filterCountries(countries, query)
  const detail = selected || (matches.length === 1 ? matches[0] : null)
  return <main><a className="back" href="/">← Aplicações e diagramas</a>
    <p className="eyebrow">EXERCÍCIOS 2.18–2.20</p><h1>Países, de perto.</h1>
    <p className="intro">Busque em português ou inglês para descobrir a capital, os idiomas e o tempo atual.</p>
    <label>Buscar país<input value={query} placeholder="Ex.: Brasil, Portugal, Finland" onChange={event => { setQuery(event.target.value); setSelected(null) }} /></label>
    {loading ? <p role="status">Carregando países…</p> : error ? <p role="alert">Não foi possível carregar os países. Tente recarregar a página.</p> :
      detail ? <Country country={detail} /> :
      matches.length > 10 ? <p>Há mais de 10 resultados. Digite um nome mais específico.</p> :
      matches.length === 0 ? <p>Nenhum país encontrado.</p> :
      <ul className="items">{matches.map(country => <li key={country.cca3}><span>{countryName(country)}</span><button onClick={() => setSelected(country)} aria-label={'Mostrar ' + countryName(country)}>Mostrar</button></li>)}</ul>}
    <footer>Armando Capita · Full Stack Open · Países: API disponibilizada pelo curso.</footer>
  </main>
}

