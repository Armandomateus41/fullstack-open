// Implementação e frases originais preparadas com assistência de OpenAI Codex.
import { useState } from 'react'
import { findWinner, nextIndex, voteFor } from './voting.js'

const anecdotes = [
  'Um teste útil protege um comportamento que alguém pode quebrar amanhã.',
  'O código fica mais fácil de manter quando cada função deixa clara a sua intenção.',
  'Antes de otimizar, descubra onde o tempo está sendo gasto.',
  'O melhor nome de variável economiza uma explicação no próximo review.',
  'Um bug reproduzível já trouxe metade das pistas de que você precisa.',
  'Uma mudança pequena pode ensinar mais do que uma reescrita sem medida.',
  'Se a rede falhar, o usuário ainda merece uma resposta compreensível.',
  'Simplicidade também é decidir o que não precisa entrar nesta versão.',
]
const Anecdote = ({ title, text, votes }) => (
  <section className="panel"><h2>{title}</h2><blockquote>{text}</blockquote><p className="badge">{votes} voto(s)</p></section>
)
const App = () => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(() => Array(anecdotes.length).fill(0))
  const winner = findWinner(votes)
  return (
    <main>
      <a className="back" href="/">← Aplicações e diagramas</a>
      <p className="eyebrow">EXERCÍCIOS 1.12–1.14</p>
      <h1>Frases de programação</h1>
      <Anecdote title="Frase em destaque" text={anecdotes[selected]} votes={votes[selected]} />
      <div className="actions">
        <button type="button" onClick={() => setVotes(previous => voteFor(previous, selected))}>Votar</button>
        <button type="button" className="secondary" onClick={() => setSelected(previous => nextIndex(previous, anecdotes.length))}>Próxima frase</button>
      </div>
      <Anecdote title="Mais votada" text={anecdotes[winner]} votes={votes[winner]} />
      <footer>Os votos pertencem a cada frase. Em empate, aparece a primeira colocada no conjunto. Frases originais e implementação assistidas por OpenAI Codex.</footer>
    </main>
  )
}
export default App

