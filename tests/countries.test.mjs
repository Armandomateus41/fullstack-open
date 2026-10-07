import test from 'node:test'
import assert from 'node:assert/strict'
import { filterCountries } from '../part2/countries/src/search.js'

const countries = [
  { name: { common: 'Brazil', official: 'Federative Republic of Brazil' }, translations: { por: { common: 'Brasil' } } },
  { name: { common: 'Japan', official: 'Japan' }, translations: { por: { common: 'Japão' } } },
]
test('busca por nomes em português e inglês, sem distinguir caixa', () => {
  assert.equal(filterCountries(countries, 'BRASIL')[0], countries[0])
  assert.equal(filterCountries(countries, 'Brazil')[0], countries[0])
})
test('ignora acentos e espaços extras e informa ausência de resultados', () => {
  assert.equal(filterCountries(countries, ' japao ')[0], countries[1])
  assert.deepEqual(filterCountries(countries, 'xyz'), [])
})

