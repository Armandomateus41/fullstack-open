const Part = ({ part }) => <li>{part.name} — {part.exercises}</li>

export default function Course({ course }) {
  return <section className="panel">
    <h2>{course.name}</h2>
    <ul>{course.parts.map(part => <Part key={part.id} part={part} />)}</ul>
    <p className="summary">Total de exercícios: {course.parts.reduce((total, part) => total + part.exercises, 0)}</p>
  </section>
}

