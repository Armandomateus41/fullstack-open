export default function Persons({ persons, onRemove, busy }) {
  if (!persons.length) return <p>Nenhum contato encontrado.</p>
  return <ul className="items">{persons.map(person => <li key={person.id}>
    <span><strong>{person.name}</strong><br />{person.number}</span>
    <button className="secondary" disabled={busy} onClick={() => onRemove(person)} aria-label={'Excluir ' + person.name}>Excluir</button>
  </li>)}</ul>
}

