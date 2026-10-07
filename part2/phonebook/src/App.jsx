import { useEffect, useRef, useState } from 'react'
import personsService from './services/persons.js'
import Filter from './components/Filter.jsx'
import PersonForm from './components/PersonForm.jsx'
import Persons from './components/Persons.jsx'
import Notification from './components/Notification.jsx'

const normalize = value => value.trim().toLocaleLowerCase('pt-BR')

export default function App() {
  const [persons, setPersons] = useState([])
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [loading, setLoading] = useState(true)
  const [busy, setBusy] = useState(false)
  const [notification, setNotification] = useState(null)
  const timer = useRef(null)
  const [confirmation, setConfirmation] = useState(null)

  function confirmAction(message) {
    return new Promise(resolve => setConfirmation({ message, resolve }))
  }

  function answerConfirmation(accepted) {
    confirmation.resolve(accepted)
    setConfirmation(null)
  }

  function notify(message, type = 'success') {
    clearTimeout(timer.current)
    setNotification({ message, type })
    timer.current = setTimeout(() => setNotification(null), 8000)
  }

  useEffect(() => {
    const controller = new AbortController()
    personsService.getAll(controller.signal).then(setPersons).catch(error => {
      if (error.code !== 'ERR_CANCELED') setNotification({ type: 'error', message: 'Não foi possível carregar a agenda. Inicie o servidor local e recarregue a página.' })
    }).finally(() => { if (!controller.signal.aborted) setLoading(false) })
    return () => { controller.abort(); clearTimeout(timer.current) }
  }, [])

  async function save(event) {
    event.preventDefault()
    if (busy || loading || confirmation) return
    const person = { name: name.trim(), number: number.trim() }
    if (!person.name || !person.number) {
      notify('Preencha nome e telefone.', 'error')
      return
    }
    const existing = persons.find(item => normalize(item.name) === normalize(person.name))
    if (existing && existing.number === person.number) {
      window.alert(person.name + ' já está na agenda com esse número.')
      return
    }
    if (existing && !await confirmAction(existing.name + ' já está na agenda. Substituir o telefone?')) return
    setBusy(true)
    try {
      const saved = existing
        ? await personsService.update(existing.id, { ...existing, number: person.number })
        : await personsService.create(person)
      setPersons(current => existing
        ? current.map(item => item.id === saved.id ? saved : item)
        : current.concat(saved))
      notify(existing ? 'Telefone de ' + saved.name + ' atualizado.' : saved.name + ' adicionado(a).')
      setName('')
      setNumber('')
    } catch (error) {
      if (error.response?.status === 404 && existing) {
        setPersons(current => current.filter(item => item.id !== existing.id))
        notify(existing.name + ' foi removido(a) em outra sessão. A agenda foi atualizada.', 'error')
      } else {
        notify('Não foi possível salvar. Confira a conexão com o servidor e tente novamente.', 'error')
      }
    } finally { setBusy(false) }
  }

  async function remove(person) {
    if (busy || confirmation || !await confirmAction('Excluir ' + person.name + '?')) return
    setBusy(true)
    try {
      await personsService.remove(person.id)
      setPersons(current => current.filter(item => item.id !== person.id))
      notify(person.name + ' removido(a).')
    } catch (error) {
      if (error.response?.status === 404) {
        setPersons(current => current.filter(item => item.id !== person.id))
        notify('Esse contato já foi removido em outra sessão.', 'error')
      } else {
        notify('Não foi possível excluir. O contato foi preservado.', 'error')
      }
    } finally { setBusy(false) }
  }

  return <main><a className="back" href="/">← Aplicações e diagramas</a>
    <p className="eyebrow">EXERCÍCIOS 2.6–2.17</p><h1>Agenda de contatos.</h1>
    <p className="intro">Dados de demonstração guardados no servidor local.</p>
    <Notification notification={notification} />
    {confirmation && <section className="panel" role="alertdialog" aria-labelledby="confirmation-title">
      <h2 id="confirmation-title">Confirmar alteração</h2>
      <p>{confirmation.message}</p>
      <div className="actions"><button onClick={() => answerConfirmation(true)}>Confirmar</button><button className="secondary" onClick={() => answerConfirmation(false)}>Cancelar</button></div>
    </section>}
    <div className="cards">
      <section className="panel"><h2>Adicionar ou atualizar</h2>
        <PersonForm name={name} number={number} onNameChange={event => setName(event.target.value)} onNumberChange={event => setNumber(event.target.value)} onSubmit={save} busy={busy || loading} />
      </section>
      <section className="panel"><h2>Contatos</h2>
        <Filter value={filter} onChange={event => setFilter(event.target.value)} />
        {loading ? <p role="status">Carregando contatos…</p> : <Persons persons={persons.filter(person => normalize(person.name).includes(normalize(filter)))} onRemove={remove} busy={busy} />}
      </section>
    </div><footer>Armando Capita · Full Stack Open</footer>
  </main>
}

