Vou corrigir o app para que a URL publicada em `https://.../psotec/` abra a página inicial em vez de cair no `NotFound`.

Plano:
1. Ajustar o roteamento no `src/App.tsx` para tratar explicitamente a base `/psotec/` em ambiente GitHub Pages, evitando que `/psotec/` seja interpretado como rota inexistente.
2. Revisar links internos que mandam para `/` para garantir que respeitem a base publicada, principalmente o link da página `NotFound`.
3. Validar a configuração de publicação: `vite.config.ts` deve continuar com `base: "/psotec/"`, e o GitHub Pages deve apontar para a branch `gh-pages`, pasta `/root`.
4. Depois da correção, o próximo deploy deve gerar um bundle novo e o GitHub Pages deve servir os arquivos estáticos corretos.

Detalhes técnicos:
- A mensagem `404 Error: User attempted to access non-existent route: /psotec/` vem do componente `NotFound.tsx`, não do GitHub diretamente.
- Isso significa que o JavaScript carregou, mas o React Router entendeu `/psotec/` como uma rota do app em vez da base do site.
- A branch correta no GitHub Pages é `gh-pages`; a pasta deve ser `/root`, porque o comando `gh-pages -d dist --dotfiles` publica o conteúdo de `dist` diretamente na raiz dessa branch.
- A branch `main` é só o código-fonte e não deve ser usada como origem do Pages para esse projeto Vite.