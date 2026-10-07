import Weather from './Weather.jsx'
import { countryName } from './search.js'

export default function Country({ country }) {
  const name = countryName(country)
  return <article className="panel">
    <h2>{name}</h2>
    <p>Capital: {country.capital?.join(', ') || 'Não informada'}</p>
    <p>Área: {country.area.toLocaleString('pt-BR')} km²</p>
    <h3>Idiomas</h3>
    <ul>{Object.entries(country.languages || {}).map(([code, language]) => <li key={code}>{language}</li>)}</ul>
    <img className="flag" src={country.flags.svg || country.flags.png} alt={country.flags.alt || 'Bandeira de ' + name} />
    <Weather key={country.cca3} country={country} />
  </article>
}

