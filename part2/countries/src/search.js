export const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-BR').trim()
export const countryName = country => country.translations?.por?.common || country.name.common
export function filterCountries(countries, query) {
  const term = normalize(query)
  return countries.filter(country => [countryName(country), country.name.common, country.name.official].some(name => normalize(name).includes(term)))
}
export function weatherDescription(code) {
  if (code === 0) return ['☀️', 'Céu limpo']
  if ([1, 2, 3].includes(code)) return ['☁️', 'Parcialmente nublado ou encoberto']
  if ([45, 48].includes(code)) return ['🌫️', 'Nevoeiro']
  if ([51, 53, 55, 56, 57].includes(code)) return ['🌦️', 'Garoa']
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return ['🌧️', 'Chuva']
  if ([71, 73, 75, 77, 85, 86].includes(code)) return ['🌨️', 'Neve']
  if ([95, 96, 99].includes(code)) return ['⛈️', 'Trovoadas']
  return ['🌡️', 'Condições disponíveis']
}

