// Implementação com assistência de OpenAI Codex para estudo e revisão.
import { useState } from 'react'
import { calculateStatistics } from './statistics.js'

const Button = ({ onClick, text }) => <button type="button" onClick={onClick}>{text}</button>
const StatisticLine = ({ text, value }) => <tr><th scope="row">{text}</th><td>{value}</td></tr>
const Statistics = ({ good, neutral, bad }) => {
  const { total, average, positive } = calculateStatistics(good, neutral, bad)
  if (total === 0) return <p className="muted">No feedback given</p>
  return (
    <table aria-label="Feedback statistics"><tbody>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={total} />
      <StatisticLine text="average" value={average.toFixed(2)} />
      <StatisticLine text="positive" value={positive.toFixed(2) + ' %'} />
    </tbody></table>
  )
}
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  return (
    <main>
      <a className="back" href="/">← Aplicações e diagramas</a>
      <p className="eyebrow">EXERCÍCIOS 1.6–1.11 · UNICAFE</p>
      <h1>give feedback</h1>
      <div className="actions">
        <Button text="good" onClick={() => setGood(value => value + 1)} />
        <Button text="neutral" onClick={() => setNeutral(value => value + 1)} />
        <Button text="bad" onClick={() => setBad(value => value + 1)} />
      </div>
      <section className="panel"><h2>statistics</h2><Statistics good={good} neutral={neutral} bad={bad} /></section>
      <footer>Good = +1, neutral = 0, bad = −1. O estado é reiniciado ao recarregar a página. Implementação assistida por OpenAI Codex.</footer>
    </main>
  )
}
export default App

