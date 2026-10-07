# Full Stack Open — Partes 0 e 1

Material de estudo de Armando Mateus Capita para o [Full Stack Open](https://fullstackopen.com/).

**Assistência de IA:** as soluções, os diagramas, as frases e os testes deste repositório foram preparados com assistência de OpenAI Codex. Não são apresentados como autoria independente do aluno. A revisão pessoal e o registro das entregas estão pendentes.

## Exercícios

| Pasta | Enunciados | Conteúdo |
|---|---|---|
| [part0](part0/) | 0.4–0.6 | Diagramas HTTP/DOM em Mermaid |
| [part1/courseinfo](part1/courseinfo/) | 1.1–1.5 | Componentes, props e objetos |
| [part1/unicafe](part1/unicafe/) | 1.6–1.11 | Estado e estatísticas de feedback |
| [part1/anecdotes](part1/anecdotes/) | 1.12–1.14 | Sorteio, votação e atualização imutável |

As etapas incrementais estão reunidas na versão final de cada aplicação. As leituras 0.1–0.3 ainda não foram registradas como concluídas.

## Executar

Requer Node.js 24+ e pnpm. Execute na raiz:

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Abra http://127.0.0.1:5178/. A página inicial liga todas as aplicações e os diagramas.

```sh
pnpm test
pnpm build
```

## Verificação em 7 de outubro de 2026

- Seis testes de lógica passaram; build concluído.
- Courseinfo: soma 31.
- Unicafe: estado vazio e cenário 2 good / 1 neutral / 1 bad verificados; média 0,25 e positivo 50%.
- Anecdotes: votos preservados entre frases e atualização da vencedora verificados.
- Três diagramas renderizados no navegador.

O build informa módulos grandes da biblioteca Mermaid, sem impedir o funcionamento da prévia. Consulte [LEIA-ME.txt](LEIA-ME.txt) para detalhes e conceitos.

