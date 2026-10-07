import test from 'node:test'
import assert from 'node:assert/strict'
import { calculateStatistics } from '../part1/unicafe/src/statistics.js'

test('sem feedback não há divisão por zero', () => {
  assert.deepEqual(calculateStatistics(0, 0, 0), { total: 0, average: 0, positive: 0 })
})
test('o denominador inclui os votos neutros', () => {
  assert.deepEqual(calculateStatistics(2, 1, 1), { total: 4, average: 0.25, positive: 50 })
})
test('avaliações negativas produzem média negativa', () => {
  assert.deepEqual(calculateStatistics(0, 0, 3), { total: 3, average: -1, positive: 0 })
})

