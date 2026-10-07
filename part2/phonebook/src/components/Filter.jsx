export default function Filter({ value, onChange }) {
  return <label>Filtrar por nome<input value={value} onChange={onChange} placeholder="Digite parte do nome" /></label>
}

