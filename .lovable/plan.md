## Diagnóstico

O erro **não está nas pastas/branches do GitHub Pages**. Está no `vite.config.ts`:

```ts
base: "/psotec/"   // ← problema
```

Esse valor força o build a gerar caminhos absolutos `/psotec/assets/...`, que:

- ❌ Quebram no Lovable publicado (`psotec-ofc.lovable.app/`) — assets 404
- ❌ Quebram no preview do Lovable — por isso você teve que entrar em `/psotec/` manualmente
- ❌ Quebram no GitHub Pages se o repo não se chamar exatamente `psotec`

Como você quer **os dois lugares**, a solução correta é usar caminhos relativos (`./`), exatamente como o `README.md` do projeto já documenta. Aí o mesmo build funciona em qualquer URL, qualquer repo, qualquer subpasta.

## Mudanças

### 1. `vite.config.ts`
Trocar `base: "/psotec/"` por `base: "./"`.
Resultado: assets ficam como `./assets/index-xxx.js` e funcionam em qualquer host.

### 2. `src/App.tsx`
Simplificar — remover toda a lógica de `routerBasename`. Com base relativo não precisa de basename no React Router. O roteamento volta a ser apenas `<BrowserRouter>` sem prop.

### 3. `public/404.html`
Trocar `pathSegmentsToKeep = 1` para `pathSegmentsToKeep = 0`. Sem subpasta `/psotec/`, o hack SPA do GitHub Pages precisa redirecionar a partir da raiz.

### 4. `index.html`
Já está OK (`<link rel="icon" href="./favicon.ico">` é relativo). Sem mudanças.

### 5. `.lovable/plan.md`
Atualizar para refletir a nova abordagem (base relativo) e remover a explicação antiga sobre `/psotec/`.

## Passo a passo para você depois do deploy

**Lovable**: clicar em Publish — vai funcionar direto em `https://psotec-ofc.lovable.app/`.

**GitHub Pages**:
1. `git add . && git commit -m "fix: base relativo"`
2. `git push origin main`
3. `npm run deploy` (publica `dist/` na branch `gh-pages`)
4. Em **Settings → Pages**:
   - Source: **Deploy from a branch**
   - Branch: **`gh-pages`** / pasta **`/ (root)`**
5. Acessar `https://SEU-USUARIO.github.io/NOME-DO-REPO/` — vai funcionar, **não importa o nome do repo**.

## Sobre as pastas (sua dúvida original)

- **Branch `main`** = código-fonte (React, `src/`). **Nunca** aponte o Pages para ela — Pages não compila TS/JSX, por isso dava `main.tsx 404`.
- **Branch `gh-pages`** = site já compilado (`dist/`). É essa que o Pages deve servir.
- **Pasta `/ (root)`** dentro da `gh-pages` está correta, porque o `gh-pages -d dist` publica o conteúdo do `dist` direto na raiz da branch (não dentro de uma subpasta `/dist`).

Ou seja: a configuração que você já tem (`gh-pages` + `/root`) está certa. Só falta corrigir o `base` do Vite e redeployar.
