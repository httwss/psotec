Plano para parar o erro `main.tsx:1` / `main.txt:1` no GitHub Pages:

1. Adicionar deploy automático para a branch correta
   - Criar `.github/workflows/deploy-gh-pages.yml`.
   - Quando houver push na `main`, o GitHub Actions vai:
     - instalar dependências
     - gerar o build `dist/`
     - copiar `.nojekyll`
     - publicar o conteúdo compilado na branch `gh-pages`

2. Garantir que o GitHub Pages receba arquivos compilados, não código-fonte
   - A branch `main` continuará recebendo código-fonte, porque é assim que projetos React/Vite funcionam.
   - A branch `gh-pages` receberá automaticamente os arquivos finais: `index.html`, `assets/*.js`, `assets/*.css`, `404.html`, etc.
   - Isso elimina o erro de o navegador tentar abrir `/src/main.tsx` ou `main.txt` direto.

3. Ajustar documentação mínima do projeto
   - Atualizar `.lovable/plan.md` ou README para deixar claro:
     - `main` = código-fonte
     - `gh-pages` = site compilado
     - GitHub Pages deve apontar para `gh-pages` / `/ (root)` ou usar GitHub Actions, dependendo da configuração escolhida no GitHub

4. Manter os ajustes atuais de Vite
   - Manter `base: "./"`, porque isso permite funcionar tanto no Lovable quanto no GitHub Pages.
   - Não voltar para `/psotec/`, porque isso quebra quando o repo ou domínio muda.

Detalhe importante: eu não consigo publicar diretamente na sua branch remota `gh-pages` daqui, mas consigo colocar no projeto o workflow que faz isso automaticamente no GitHub assim que você enviar a `main` para o repositório.