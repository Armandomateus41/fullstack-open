import test from 'node:test'
import assert from 'node:assert/strict'
import { voteFor, findWinner, nextIndex } from '../part1/anecdotes/src/voting.js'

test('votar preserva o estado anterior e os outros votos', () => {
  const original = Object.freeze([2, 0, 1])
  assert.deepEqual(voteFor(original, 1), [2, 1, 1])
  assert.deepEqual(original, [2, 0, 1])
})
test('o vencedor acompanha novos votos e resolve empates de forma estável', () => {
  assert.equal(findWinner([0, 0, 0]), 0)
  assert.equal(findWinner([1, 4, 2]), 1)
  assert.equal(findWinner([4, 4, 2]), 0)
  assert.equal(findWinner([4, 4, 5]), 2)
})
test('o sorteio cobre todos os outros índices sem repetir o atual', () => {
  for (let current = 0; current < 8; current += 1) {
    const choices = new Set()
    for (let offset = 0; offset < 7; offset += 1) choices.add(nextIndex(current, 8, () => offset / 7))
    assert.equal(choices.size, 7)
    assert.ok(!choices.has(current))
    assert.ok([...choices].every(value => value >= 0 && value < 8))
  }
  assert.equal(nextIndex(0, 1, () => 0.9999), 0)
})

