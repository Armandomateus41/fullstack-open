// Implementação com assistência de OpenAI Codex para estudo e revisão.
const Header = ({ course }) => <h1>{course}</h1>
const Part = ({ part }) => <p>{part.name} <strong>{part.exercises}</strong></p>
const Content = ({ parts }) => (
  <div>{parts.map(part => <Part key={part.name} part={part} />)}</div>
)
const Total = ({ parts }) => (
  <p className="summary">Number of exercises {parts.reduce((total, part) => total + part.exercises, 0)}</p>
)

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      { name: 'Fundamentals of React', exercises: 10 },
      { name: 'Using props to pass data', exercises: 7 },
      { name: 'State of a component', exercises: 14 },
    ],
  }
  return (
    <main>
      <a className="back" href="/">← Aplicações e diagramas</a>
      <p className="eyebrow">EXERCÍCIOS 1.1–1.5</p>
      <Header course={course.name} />
      <section className="panel"><Content parts={course.parts} /><Total parts={course.parts} /></section>
      <footer>Header, Content, Part e Total recebem dados por props. Implementação assistida por OpenAI Codex.</footer>
    </main>
  )
}
export default App

