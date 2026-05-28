## Corrigir tela branca no GitHub Pages

O site está em `https://usuario.github.io/psotec/`, então o `base: "./"` atual não resolve corretamente os assets em rotas internas. Vou trocar para `base: "/psotec/"`.

### Mudanças

1. **`vite.config.ts`** — trocar `base: "./"` por `base: "/psotec/"`.

2. **`public/404.html`** — ajustar `pathSegmentsToKeep = 1` para o hack de SPA funcionar em subpasta (preserva `/psotec/` ao redirecionar rotas como `/psotec/checkout`).

3. **Rebuild + redeploy** — rodar `npm run deploy` para publicar a branch `gh-pages` com os caminhos corrigidos.

### Observações

- Não consigo fazer "commit automático" para o seu repo GitHub a partir daqui — o Lovable não tem credenciais do seu GitHub pessoal. O que posso fazer:
  - Aplicar as mudanças no código do projeto (sincroniza automaticamente com o repo Lovable↔GitHub se você tem a integração nativa do Lovable ativada em **GitHub → Connect**).
  - Ou você roda `git add . && git commit -m "fix: base path /psotec/" && git push` + `npm run deploy` localmente após eu aplicar.

- Se o repo na verdade não se chama `psotec`, me diga o nome exato — o `base` precisa bater com o slug da URL.

- Se um dia mudar para domínio custom ou `usuario.github.io` (raiz), volta para `base: "/"`.
