# Plano: Publicar no GitHub Pages

Deploy **manual via `gh-pages`** em **domínio raiz** (usuario.github.io ou domínio custom), com **hack 404.html** para rotas SPA.

## ⚠️ Avisos importantes

1. **Backend continua no Lovable Cloud.** Edge Functions, banco e Auth NÃO vão pro Pages — só o frontend estático. O site no Pages chama o Supabase via URL já configurada.
2. **Variáveis `VITE_*`** são embutidas no `build`. Como `.env` não vai pro Git, quem clonar o repo precisa recriar o arquivo antes de `npm run deploy`. Vou criar `.env.example` documentando isso.
3. **Mercado Pago / webhooks** seguem apontando pro domínio do Supabase — funcionam normalmente.

## Mudanças

### 1. Instalar dependência
```
npm install --save-dev gh-pages
```

### 2. `vite.config.ts`
Adicionar `base: './'` (caminhos relativos — funciona tanto em raiz quanto subpasta sem reconfigurar).

### 3. `package.json`
- Adicionar `"homepage": "."`
- Adicionar scripts:
  - `"predeploy": "npm run build"`
  - `"deploy": "gh-pages -d dist"`

### 4. `public/404.html` (novo)
Cópia do `index.html` com pequeno script que reescreve a URL pro `index.html` preservando o path — resolve reload em `/checkout`, `/auth`, etc. (técnica do spa-github-pages do rafgraph).

### 5. `index.html`
Injetar o script-irmão que lê a URL reescrita pelo `404.html` e devolve pro React Router antes do `main.tsx` montar.

### 6. `public/.nojekyll` (novo, vazio)
Impede o Jekyll do Pages de ignorar arquivos com `_` (ex: `_assets` do Vite).

### 7. `.env.example` (novo)
Template das variáveis `VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY`, `VITE_SUPABASE_PROJECT_ID` para quem clonar o repo.

### 8. `README.md`
Reescrever com:
- Stack e arquitetura (frontend Pages + backend Lovable Cloud)
- Setup local (`npm install`, criar `.env`, `npm run dev`)
- Passo a passo de publicação:
  1. Criar repo no GitHub e fazer push
  2. `npm install`
  3. Criar `.env` com base no `.env.example`
  4. `npm run deploy` (builda + publica branch `gh-pages`)
  5. No GitHub: **Settings → Pages → Source: branch `gh-pages` / root**
  6. Aguardar ~1 min e acessar `https://usuario.github.io/repo/` ou domínio custom
- Como configurar **domínio custom** (CNAME em `public/CNAME`)
- Troubleshooting: tela branca (checar `base`), 404 ao recarregar (checar 404.html), assets faltando (checar `.nojekyll`), variáveis (rebuildar)

## Detalhes técnicos do SPA 404 hack

`404.html` faz `location.replace` com query string codificada do path original. O script em `index.html` decodifica e chama `history.replaceState` antes do React montar, então o `BrowserRouter` recebe a rota correta. Sem flicker visível na maioria dos casos.

## O que NÃO muda
- `src/integrations/supabase/client.ts` (autogerado)
- Rotas, componentes, edge functions
- Auth e fluxo de checkout
