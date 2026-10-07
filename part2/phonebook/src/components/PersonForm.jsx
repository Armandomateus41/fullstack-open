export default function PersonForm({ name, number, onNameChange, onNumberChange, onSubmit, busy }) {
  return <form onSubmit={onSubmit}>
    <label>Nome<input required value={name} onChange={onNameChange} autoComplete="off" /></label>
    <label>Telefone<input required type="tel" value={number} onChange={onNumberChange} autoComplete="off" /></label>
    <button type="submit" disabled={busy}>{busy ? 'Salvando…' : 'Salvar contato'}</button>
  </form>
}

