# Full Stack Open — Armando Capita

Material de estudo de Armando Mateus Capita para o [Full Stack Open](https://fullstackopen.com/).

**Assistência de IA:** as soluções, os diagramas, as frases e os testes deste repositório foram preparados com assistência de OpenAI Codex. Não são apresentados como autoria independente do aluno. Armando confirmou as leituras e aproximadamente duas horas de estudo em cada uma das Partes 0, 1 e 2.

## Exercícios

| Pasta | Enunciados | Conteúdo |
|---|---|---|
| [part0](part0/) | 0.4–0.6 | Diagramas HTTP/DOM em Mermaid |
| [part1/courseinfo](part1/courseinfo/) | 1.1–1.5 | Componentes, props e objetos |
| [part1/unicafe](part1/unicafe/) | 1.6–1.11 | Estado e estatísticas de feedback |
| [part1/anecdotes](part1/anecdotes/) | 1.12–1.14 | Sorteio, votação e atualização imutável |
| [part2/courseinfo](part2/courseinfo/) | 2.1–2.5 | Coleções e módulos reutilizáveis |
| [part2/phonebook](part2/phonebook/) | 2.6–2.17 | Agenda com Axios e JSON Server |
| [part2/countries](part2/countries/) | 2.18–2.20 | Busca de países e tempo nas capitais |

As etapas incrementais estão reunidas na versão final de cada aplicação. Em 7 de outubro de 2026, o painel oficial confirmou o envio das Partes 0, 1 e 2: 40 atividades (incluindo as leituras 0.1–0.3) e 6 horas de estudo informadas pelo aluno. As demais partes do curso continuam pendentes.

## Executar

Requer Node.js 24+ e pnpm. Execute na raiz:

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Abra http://127.0.0.1:5178/. A página inicial liga todas as aplicações e os diagramas.

Para a agenda da Parte 2, abra outro terminal na raiz e execute `pnpm server`.
O servidor fica em 127.0.0.1:3001 e usa somente contatos fictícios de demonstração.
O Vite encaminha `/api-phonebook` para esse servidor. O comando build compila o
frontend; uma publicação real da agenda também exige hospedar a API.
Países usam a API pública do curso. O tempo usa Open-Meteo, sem chave, com crédito ao provedor.

```sh
pnpm test
pnpm build
```

## Verificação em 7 de outubro de 2026

- Oito testes de lógica passaram; build concluído.
- Courseinfo: soma 31.
- Unicafe: estado vazio e cenário 2 good / 1 neutral / 1 bad verificados; média 0,25 e positivo 50%.
- Anecdotes: votos preservados entre frases e atualização da vencedora verificados.
- Três diagramas renderizados no navegador.
- Parte 2 Courseinfo: totais 42 e 10 verificados.
- Agenda: cadastro, persistência após recarregar, filtro sem distinguir caixa,
  atualização, cancelamento de exclusão, exclusão e erro de registro já removido.
- Países: mais de 10 resultados, busca sem resultados, busca em português,
  seleção por botão e dados reais do tempo em Brasília e Londres.

O build informa módulos grandes da biblioteca Mermaid, sem impedir o funcionamento da prévia. Consulte [LEIA-ME.txt](LEIA-ME.txt) para detalhes e conceitos.

