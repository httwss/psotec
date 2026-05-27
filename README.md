# Psotec — Site institucional e checkout

Landing page + checkout da pomada Psotec. Frontend em **React + Vite + Tailwind + shadcn/ui**; backend (banco, auth, edge functions de checkout/Mercado Pago) roda em **Lovable Cloud (Supabase gerenciado)**.

---

## 🧱 Arquitetura

```
┌──────────────────────────┐        ┌────────────────────────────┐
│  GitHub Pages (estático) │ ─────► │  Lovable Cloud (Supabase)  │
│  React SPA buildado      │  HTTPS │  Auth · DB · Edge Functions│
└──────────────────────────┘        └────────────────────────────┘
```

O GitHub Pages serve **apenas o frontend**. Toda a lógica de pagamento, banco e autenticação continua no Lovable Cloud — o site publicado consome essas APIs via URL do Supabase configurada em `.env`.

---

## 🚀 Rodando localmente

Pré-requisitos: **Node 18+** e **npm** (ou bun/pnpm).

```bash
git clone https://github.com/SEU-USUARIO/SEU-REPO.git
cd SEU-REPO
npm install
cp .env.example .env   # preencha com suas chaves do Lovable Cloud
npm run dev
```

Abra `http://localhost:8080`.

> As variáveis `VITE_SUPABASE_*` ficam no painel do Lovable (Cloud → Settings) ou no arquivo `.env` que o Lovable gera automaticamente quando você desenvolve dentro do editor.

---

## 📦 Publicação no GitHub Pages (passo a passo)

Este projeto já vem **100% configurado** para o GitHub Pages: `base: './'` no Vite, scripts `predeploy`/`deploy`, `404.html` para rotas SPA, `.nojekyll` para assets do Vite.

### 1. Crie um repositório vazio no GitHub
Pode ser público ou privado. Exemplo: `psotec-site`.

### 2. Suba o código
```bash
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPO.git
git push -u origin main
```

### 3. Garanta que o `.env` existe
A pasta `dist/` é gerada com as variáveis embutidas no momento do build. Sem `.env`, o site sobe sem chaves e o backend não funciona.

```bash
cp .env.example .env
# edite com suas chaves reais
```

### 4. Faça o deploy
```bash
npm run deploy
```

Isso:
1. roda `npm run build` (gera `dist/`)
2. publica `dist/` na branch `gh-pages` do seu repo

### 5. Ative o Pages no GitHub
- Vá em **Settings → Pages**
- **Source**: `Deploy from a branch`
- **Branch**: `gh-pages` / `/ (root)` → **Save**
- Aguarde ~1 minuto

Pronto. Acesse `https://SEU-USUARIO.github.io/SEU-REPO/`.

---

## 🌐 Domínio customizado (opcional)

1. Crie o arquivo `public/CNAME` com o domínio:
   ```
   www.seudominio.com.br
   ```
2. No seu provedor de DNS, crie um `CNAME` apontando `www` → `SEU-USUARIO.github.io`.
3. `npm run deploy` novamente.
4. Em **Settings → Pages**, informe o domínio custom e ative **Enforce HTTPS**.

> Como o `base` está como `./` (caminhos relativos), o site funciona em domínio raiz, subdomínio ou subpasta sem reconfigurar.

---

## 🔄 Re-deploy após mudanças

```bash
git add . && git commit -m "minha alteração"
git push
npm run deploy
```

> O `push` para `main` NÃO publica sozinho neste fluxo manual — o `npm run deploy` é quem atualiza a branch `gh-pages`.

---

## 🛠️ Troubleshooting

| Sintoma | Causa provável | Solução |
|---|---|---|
| **Tela branca, console: `Failed to load module`** | `base` incorreto | Confirme `base: './'` em `vite.config.ts` |
| **404 ao recarregar `/checkout` ou `/auth`** | Hack SPA não copiou | Verifique se `public/404.html` está presente e foi para `dist/` |
| **Assets em `_assets/` retornam 404** | Jekyll filtrou pastas com `_` | Confirme que `public/.nojekyll` existe |
| **Site carrega, mas login/checkout falha** | `.env` ausente no build | `cp .env.example .env`, preencher, `npm run deploy` |
| **Mudou variável e não refletiu** | `VITE_*` é embutido no build | Rebuilde: `npm run deploy` |
| **CSS quebrado** | Cache do navegador | Hard refresh (Ctrl+Shift+R) |

---

## 📁 Estrutura

```
src/
├── pages/          # rotas (Index, Checkout, Auth, AdminOrders, ThankYou)
├── components/     # landing/ + ui/ (shadcn)
├── integrations/   # cliente Supabase (auto-gerado)
└── ...
supabase/
└── functions/      # edge functions (rodam no Cloud, não no Pages)
public/
├── 404.html        # redirect SPA
└── .nojekyll       # mantém pastas _assets
```

---

## 📜 Licença

Privado — todos os direitos reservados.
