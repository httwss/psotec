## Plano

1. **Corrigir a origem do deploy**
   - Ajustar `package.json` para remover `homepage: "."`, porque isso pode gerar referências relativas incorretas no GitHub Pages.
   - Manter o deploy usando `dist` e preservando `.nojekyll`.

2. **Garantir caminhos corretos no GitHub Pages**
   - Manter `vite.config.ts` com `base: "/psotec/"`.
   - Ajustar o fallback do `public/404.html` se necessário para preservar `/psotec/` em links diretos.

3. **Evitar erro de favicon quebrando a leitura do site**
   - Verificar se `public/favicon.ico` existe e está sendo publicado.
   - Se necessário, adicionar uma referência explícita ao favicon em `index.html` usando o caminho com base correta.

4. **Validar o build final**
   - Rodar uma verificação de build e confirmar que o HTML gerado aponta para `/psotec/assets/...`, não para `/src/main.tsx`.
   - Conferir se `.nojekyll`, `404.html` e `favicon.ico` entram em `dist`.

## Detalhe técnico

O erro em `src/main.tsx:1` no GitHub Pages geralmente significa que o navegador está tentando carregar o arquivo fonte TypeScript direto, em vez dos arquivos compilados de `dist/assets`. Isso acontece quando o deploy não publicou o `dist` correto ou quando os caminhos/base ficam inconsistentes.