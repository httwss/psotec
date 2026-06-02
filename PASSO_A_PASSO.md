# ▶️ COMO INSTALAR E RODAR - PASSO A PASSO COM SCREENSHOTS

## ✅ PRÉ-REQUISITOS

- [x] Node.js instalado (https://nodejs.org) - versão 18+
- [x] VS Code instalado (https://code.visualstudio.com)
- [x] Pasta `Psotec` no Desktop

Se Node não estiver instalado, baixe em: https://nodejs.org

---

## 🎬 PASSO 1: ABRIR PASTA NO VS CODE

### Opção A: Pelo VS Code
1. Abra VS Code
2. Menu → **File** → **Open Folder**
3. Navegue até: `C:\Users\VANESSA STEFANI\Desktop\Psotec`
4. Clique **Select Folder**

### Opção B: Pelo Explorer
1. Vá para Desktop
2. Clique direito na pasta `Psotec`
3. **Open with Code**

**Resultado esperado:** Você vê a estrutura de pastas na esquerda

```
📁 Psotec
├── 📁 src
├── 📁 public
├── 📁 supabase
├── 📄 package.json
├── 📄 .env
└── ... outros arquivos
```

---

## 🎬 PASSO 2: ABRIR TERMINAL INTEGRADO

Pressione: **`Ctrl + `** (backtick)

Ou:
1. Menu → **Terminal** → **New Terminal**

**Você verá algo assim:**
```
PS C:\Users\VANESSA STEFANI\Desktop\Psotec>
```

---

## 🎬 PASSO 3: INSTALAR DEPENDÊNCIAS

No terminal, digite:
```bash
npm install
```

**Pressione ENTER**

**O que vai acontecer:**
```
npm notice 
npm notice New minor version of npm available: 10.2.4 → 10.8.1
npm notice To update run: npm install -g npm@10.8.1
npm notice 
npm warn deprecated ...

added 500+ packages, and audited 501 packages in 2m45s
```

⏳ **Vai demorar 2-5 minutos** (primeira vez é mais lento)

✅ **Sucesso:** Aparece "added XXX packages"

---

## 🎬 PASSO 4: INICIAR SERVIDOR DE DESENVOLVIMENTO

Digite no terminal:
```bash
npm run dev
```

**Pressione ENTER**

**Você verá:**
```
  VITE v5.4.19  ready in 456 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

🎉 **SERVIDOR RODANDO!**

---

## 🎬 PASSO 5: ABRIR NO NAVEGADOR

### Opção A: Clique no link
Na mensagem acima, mantenha **CTRL + clique** em `http://localhost:5173/`

### Opção B: Manual
1. Abra o navegador (Chrome, Edge, Firefox)
2. Digite na barra de endereço: `http://localhost:5173`
3. Pressione **ENTER**

**Resultado:** A landing page carrega! 🚀

---

## ✏️ AGORA EDITE UM ARQUIVO

Vamos editar o título principal:

### Passo 1: Abra o arquivo
No VS Code, abra:
```
src → components → landing → Hero.tsx
```

### Passo 2: Procure pelo título
Procure por algo como:
```tsx
<h1 className="text-4xl font-bold">
  Cure suas assaduras em 48h
</h1>
```

### Passo 3: Mude o texto
```tsx
<h1 className="text-4xl font-bold">
  MEU NOVO TÍTULO AQUI
</h1>
```

### Passo 4: SALVE
Pressione: **Ctrl + S**

**Resultado:** No navegador, a página atualiza AUTOMATICAMENTE! ⚡

---

## 🖼️ ADICIONAR NOVA IMAGEM

### Passo 1: Coloque a imagem
1. Vá para pasta: `src/assets/`
2. Arraste sua imagem lá (ex: `minha-foto.jpg`)

### Passo 2: Importe no componente
Abra um arquivo `.tsx` e adicione:
```tsx
import minhaFoto from '@/assets/minha-foto.jpg'
```

### Passo 3: Use a imagem
```tsx
<img src={minhaFoto} alt="Descrição da foto" />
```

### Passo 4: SALVE
Ctrl + S

---

## 🎨 MUDAR CORES

### Arquivo a editar:
```
tailwind.config.ts
```

### Exemplo:
```typescript
colors: {
  primary: '#FF6B6B',      // Mude para: '#FF0000' (vermelho puro)
  secondary: '#4ECDC4',    // Mude para: '#0000FF' (azul)
}
```

### Depois use nos componentes:
```tsx
<button className="bg-primary">Botão</button>
```

---

## 🔧 COMANDOS ÚTEIS

| Comando | O que faz |
|---------|-----------|
| `npm run dev` | Inicia desenvolvimento (já está rodando) |
| `npm run build` | Cria versão para produção |
| `npm run preview` | Visualiza como fica em produção |
| `npm test` | Executa testes |
| `npm run lint` | Verifica erros de código |

---

## 🆘 ERROS COMUNS

### ❌ "npm: command not found"
**Causa:** Node.js não está instalado
**Solução:** 
1. Baixe https://nodejs.org
2. Instale (versão LTS recomendada)
3. Reinicie o terminal/VS Code
4. Tente novamente

### ❌ "Port 5173 is already in use"
**Causa:** Outra aplicação usa a porta
**Solução:** Digite isso no terminal:
```bash
npm run dev -- --port 5174
```
Vai rodar em `http://localhost:5174`

### ❌ "Module not found"
**Causa:** Dependências não instaladas
**Solução:**
```bash
npm install
```

### ❌ Mudanças não aparecem no navegador
**Solução:** 
- Pressione **Ctrl + Shift + R** (força atualizar)
- Ou F5
- Ou limpe cache (DevTools → Settings → Desabilitar cache)

### ❌ "Cannot find module '@/assets/...'"
**Causa:** Caminho errado
**Solução:** Verifique se o arquivo realmente existe em `src/assets/`

---

## 🎓 PRÓXIMAS ATIVIDADES

1. ✅ Rode `npm run dev` com sucesso
2. ✅ Abra no navegador
3. ✅ Edite um texto em `Hero.tsx`
4. ✅ Veja a mudança em tempo real
5. ✅ Mude uma cor no `tailwind.config.ts`
6. ✅ Adicione uma imagem
7. ✅ Explore os outros componentes

---

## 📚 ARQUIVOS IMPORTANTES

| Arquivo | Editar para |
|---------|-----------|
| `src/components/landing/Hero.tsx` | Mudar banner principal |
| `src/components/landing/About.tsx` | Mudar seção sobre |
| `src/components/landing/Benefits.tsx` | Mudar benefícios |
| `src/components/landing/Testimonials.tsx` | Mudar depoimentos |
| `src/components/landing/Footer.tsx` | Mudar rodapé |
| `src/assets/` | Adicionar/mudar imagens |
| `tailwind.config.ts` | Mudar cores globais |
| `.env` | Variáveis de ambiente |

---

## 🎯 ESTRUTURA PARA LEMBRAR

```
Para editar TEXTOS:
  → src/components/landing/*.tsx

Para editar IMAGENS:
  → src/assets/  (colocar lá)
  → depois importar nos componentes

Para editar CORES:
  → tailwind.config.ts

Após qualquer mudança:
  → Ctrl + S (salvar)
  → Navegador atualiza automaticamente
```

---

## ⚡ DICA DE OURO

O **Hot Module Reloading (HMR)** do Vite é INCRÍVEL:
- Você edita arquivo
- Salva (Ctrl + S)
- Em menos de 1 segundo o navegador atualiza
- Sem perder o estado da aplicação

Isso torna o desenvolvimento MUITO rápido! 🚀

---

**Pronto para começar? Rode `npm install` agora! 🚀**
