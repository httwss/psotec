## Diagnóstico

O check `Deploy to GitHub Pages / build (push)` falhou em **21s** — tempo curto, típico de erro em `npm ci` (instalação de dependências), não no build do Vite.

Causas prováveis, em ordem:

1. **`npm ci` falhando por incompatibilidade `package-lock.json` × `package.json`** — o projeto tem `bun.lock`, `bun.lockb` e `package-lock.json`. Se o lockfile estiver desatualizado, `npm ci` aborta em segundos. O log do Actions confirma isso facilmente.
2. **Secrets vazios sobrescrevendo `.env`** — o workflow passa `VITE_SUPABASE_*` a partir de `secrets.*`. Se você ainda não cadastrou esses Secrets no repositório, o GitHub injeta strings vazias, que vencem o `.env` commitado. Isso geralmente não derruba o build do Vite, mas vale eliminar.
3. **Nome do repo ≠ `Psotec`** — não derrubaria o build, mas quebraria os caminhos em produção (assets carregariam de `/Psotec/...`).

## Plano

### 1. Ajustar `.github/workflows/deploy.yml`

- Trocar `npm ci` por `npm install` (tolerante a lockfile fora de sync) **ou** rodar `npm install --package-lock-only` antes. Vou usar a primeira opção, mais simples.
- Remover o bloco `env:` com `VITE_SUPABASE_*` — o `.env` já está commitado no repo (não está no `.gitignore`) e o Vite lê dele no build. Isso elimina a dependência de Secrets manuais no GitHub.

### 2. Pedir confirmação do nome do repo

Se o repositório no GitHub **não** se chama exatamente `Psotec` (com P maiúsculo), o `base: "/Psotec/"` no `vite.config.ts` precisa ser ajustado pro nome real. Vou perguntar antes de mexer.

### 3. Se ainda falhar após o push

Você cola aqui o trecho final do log do Actions (a aba "Details" do check vermelho → último passo com `Error:`) e eu corrijo cirurgicamente.

## Arquivos a alterar

- `.github/workflows/deploy.yml` — trocar `npm ci` por `npm install`, remover bloco `env` de Secrets.
- `vite.config.ts` — somente se o nome do repo for diferente de `Psotec`.

## O que NÃO vou mexer

- `.env`, `src/integrations/supabase/client.ts`, `App.tsx`, `tsconfig.json` — já estão corretos.