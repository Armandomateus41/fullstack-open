import Course from './Course.jsx'

const courses = [
  { id: 1, name: 'Half Stack application development', parts: [
    { id: 1, name: 'Fundamentals of React', exercises: 10 },
    { id: 2, name: 'Using props to pass data', exercises: 7 },
    { id: 3, name: 'State of a component', exercises: 14 },
    { id: 4, name: 'Redux', exercises: 11 },
  ] },
  { id: 2, name: 'Node.js', parts: [
    { id: 1, name: 'Routing', exercises: 3 },
    { id: 2, name: 'Middlewares', exercises: 7 },
  ] },
]

export default function App() {
  return <main><a className="back" href="/">← Aplicações e diagramas</a>
    <p className="eyebrow">EXERCÍCIOS 2.1–2.5</p><h1>Cursos e módulos.</h1>
    {courses.map(course => <Course key={course.id} course={course} />)}
    <footer>Armando Capita · Full Stack Open</footer>
  </main>
}

