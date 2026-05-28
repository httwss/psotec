## Plano para corrigir a tela branca no GitHub Pages

Vou aplicar uma correção focada para o site funcionar corretamente em `https://usuario.github.io/psotec/`.

### 1. Ajustar o roteamento do React
- Atualizar o `BrowserRouter` para usar `basename="/psotec"`.
- Isso faz as rotas `/`, `/checkout`, `/obrigado`, `/auth` e `/admin/pedidos` funcionarem dentro da subpasta `/psotec/`.
- Essa é a causa indicada pelo log atual: o app está tentando abrir `/psotec/` como se fosse uma rota interna e cai no 404.

### 2. Manter a configuração correta do Vite
- Confirmar `base: "/psotec/"` em `vite.config.ts`.
- Isso garante que os arquivos JS/CSS gerados em `dist` sejam carregados do caminho certo no GitHub Pages.

### 3. Manter o fallback para rotas internas
- Manter `public/404.html` com `pathSegmentsToKeep = 1`.
- Isso evita erro 404 ao abrir diretamente links como `/psotec/checkout` ou `/psotec/obrigado`.

### 4. Atualizar documentação se necessário
- Ajustar o README apenas se houver instrução incorreta sobre o caminho/base.

### Resultado esperado
- `https://usuario.github.io/psotec/` abre a página inicial.
- `https://usuario.github.io/psotec/checkout` não dá 404.
- O build publicado no GitHub Pages carrega assets sem tela branca.

### Observação sobre commit/deploy
Não consigo executar commit diretamente no seu GitHub pessoal daqui. Depois da correção, se a integração GitHub do Lovable estiver ativa, as mudanças sincronizam com o repositório. Para publicar no GitHub Pages via script manual, rode localmente:

```bash
npm install
npm run deploy
```

Se a integração GitHub não estiver ativa, também será necessário fazer:

```bash
git add .
git commit -m "fix: github pages routing"
git push
npm run deploy
```