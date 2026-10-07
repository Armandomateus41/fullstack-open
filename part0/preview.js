import mermaid from 'mermaid'
import traditional from './0.4-nova-nota.md?raw'
import initial from './0.5-carregamento-spa.md?raw'
import single from './0.6-nova-nota-spa.md?raw'

const diagrams = [
  ['0.4 · Envio pelo formulário tradicional', traditional],
  ['0.5 · Abertura de uma SPA', initial],
  ['0.6 · Envio de uma nota na SPA', single],
]
mermaid.initialize({ startOnLoad: false, theme: 'neutral', securityLevel: 'strict', sequence: { wrap: true } })
const container = document.querySelector('#diagrams')
for (const [title, markdown] of diagrams) {
  const section = document.createElement('section')
  section.className = 'diagram'
  const heading = document.createElement('h2')
  heading.textContent = title
  const output = document.createElement('pre')
  output.className = 'mermaid'
  output.textContent = markdown.split('~~~').join('').replace(/^\x60{3}mermaid\s*|\x60{3}\s*$/g, '').trim()
  section.append(heading, output)
  container.append(section)
}
try {
  await mermaid.run({ querySelector: '.mermaid' })
  container.dataset.renderStatus = 'success'
} catch (error) {
  container.dataset.renderStatus = 'error'
  const warning = document.createElement('p')
  warning.textContent = 'Erro ao renderizar diagramas: ' + error.message
  container.append(warning)
}

