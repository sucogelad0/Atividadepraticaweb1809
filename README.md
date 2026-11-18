# EventPass | Starter dos estudantes

**Aplicação presencial:** 18/11/2026. **Entrega:** até 19/11/2026 às 12h (horário de Recife), via Google Forms.

Node.js 20+, npm, Docker Desktop ou Docker Engine com Compose v2 (suporte a `--wait`), VS Code e cliente HTTP. Portas locais: API 3001, PostgreSQL 5433. Banco descartável, exclusivo da atividade.

## Setup

Na raiz, com Docker ativo:

```bash
npm run setup
npm run dev
```

O setup cria `.env` se ausente, sobe o banco, aguarda o healthcheck, instala dependências, gera Prisma Client, aplica migrations existentes e executa o seed. **O seed apaga os dados anteriores deste banco e recria as fixtures com IDs estáveis.** Não o execute novamente se precisar preservar dados da atividade.

### Alternativa manual

1. Copie `.env.example` para `.env` (`cp .env.example .env` ou `Copy-Item .env.example .env`).
2. `docker compose up -d --wait` (se a versão não suportar `--wait`, use `docker compose up -d`, espere o banco ficar saudável com `docker compose ps`).
3. `npm install`
4. `npm run prisma:generate`
5. `npm run prisma:deploy`
6. `npm run db:seed`
7. `npm run dev`

Verifique `GET http://localhost:3001/health` (200). O seed imprime o dia principal (amanhã, horário de Recife). Use esse dia nos exemplos de data. `npx prisma studio` permite consultar os dados. Para verificar compilação: `npm run build`.

## Organização

`src/application` (routes, controllers, validators), `src/infrastructure` (repositories, services, Prisma, app Express), `src/shared` (tipos e tratamento de erros). Imports locais com extensão `.js` no TypeScript (NodeNext).

Os cinco endpoints avaliativos inicialmente respondem 501. Implemente todos os métodos pertinentes; consulte o Notion para regras, contratos e entrega. O schema inicial é executável, porém deve ser revisado à luz dos requisitos. Após corrigir o schema, use `npx prisma migrate dev --name fix-data-model` e `npm run prisma:generate`; preserve a migration inicial e entregue a nova migration. Não altere o seed para mascarar problemas. Não utilize `.env` ou credenciais reais na entrega.

Veja `AGENTS.md` para a política de IA. O endpoint health não é avaliado.
