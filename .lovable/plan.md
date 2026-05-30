Vou ajustar a publicação para GitHub Pages de forma que nenhum arquivo inexistente como `main.txt` seja chamado e a página não fique branca.

Plano:
1. Procurar no projeto qualquer referência a `main.txt` e remover/corrigir se existir.
2. Ajustar o `index.html` para usar caminhos compatíveis com GitHub Pages em `/psotec/`, incluindo favicon e assets.
3. Revisar `public/404.html` para garantir que o fallback de SPA preserve corretamente `/psotec/`.
4. Validar o resultado gerado em `dist/index.html`, confirmando que ele aponta para `/psotec/assets/...` e não para `/src/main.tsx` nem `main.txt`.

Detalhes técnicos:
- O erro `main txt:1 404` indica que o navegador está tentando baixar um recurso chamado `main.txt` que não existe no GitHub Pages.
- Se o erro persistir depois da correção local, o passo final será republicar o `dist` com `npm run deploy`, porque GitHub Pages pode estar servindo uma versão antiga.