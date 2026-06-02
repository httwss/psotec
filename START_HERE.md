# 🎨 PSOTEC - LANDING PAGE + E-COMMERCE

## 📊 SUMÁRIO EXECUTIVO

Este é um **projeto React moderno** para venda de produto de cuidados com a pele (Psotec).

```
┌─────────────────────────────────────────────┐
│  TECNOLOGIA              VERSÃO             │
├─────────────────────────────────────────────┤
│  React                   18.3.1             │
│  TypeScript              5.8.3              │
│  Vite                    5.4.19             │
│  Tailwind CSS            3.4.17             │
│  Supabase (Backend)      2.105.1            │
│  MercadoPago             1.0.7              │
└─────────────────────────────────────────────┘
```

---

## ⚡ INÍCIO RÁPIDO

### 1️⃣ Instalar
```bash
npm install
```
(2-5 minutos)

### 2️⃣ Rodar
```bash
npm run dev
```

### 3️⃣ Abrir
Acesse: **http://localhost:5173**

### 4️⃣ Editar
Abra arquivo em `src/components/landing/` e mude!

---

## 📚 DOCUMENTAÇÃO CRIADA

Criei **7 guias completos** para você aprender tudo:

### 📖 Guias por Tempo Disponível

| Tempo | Guia | O que você aprende |
|-------|------|-------------------|
| ⏱️ 2-3 min | **RESUMO_RAPIDO.md** | Visão geral + comandos básicos |
| ⏱️ 5-10 min | **PASSO_A_PASSO.md** | Como instalar e rodar (detalhado) |
| ⏱️ 15-20 min | **GUIA_COMPLETO.md** | Estrutura completa do projeto |
| ⏱️ 20-30 min | **ANALISE_TECNICA.md** | Arquitetura e tecnologias |
| ⏱️ 15-20 min | **MAPA_COMPONENTES.md** | Cada componente e o que editar |
| ⏱️ 10-15 min | **DICAS_PRATICAS.md** | Best practices e troubleshooting |
| ⏱️ 5 min | **INDICE.md** | Índice e navegação dos guias |

---

## 🎯 POR ONDE COMEÇAR?

### ✅ Seu primeiro passo:
1. Abra arquivo: **RESUMO_RAPIDO.md**
2. Siga os 3 passos
3. Pronto! Sistema rodando

### ✅ Depois:
1. Leia: **PASSO_A_PASSO.md**
2. Edite: Arquivo `src/components/landing/Hero.tsx`
3. Mude: Uma cor em `tailwind.config.ts`
4. Adicione: Uma imagem em `src/assets/`

---

## 🗂️ ESTRUTURA PRINCIPAL

```
Psotec/
├── 📖 DOCUMENTACAO (Guias que criei)
│   ├── RESUMO_RAPIDO.md
│   ├── PASSO_A_PASSO.md
│   ├── GUIA_COMPLETO.md
│   ├── ANALISE_TECNICA.md
│   ├── MAPA_COMPONENTES.md
│   ├── DICAS_PRATICAS.md
│   └── INDICE.md
│
├── 📁 src/
│   ├── components/landing/     ⭐ Edite aqui (textos, imagens)
│   │   ├── Hero.tsx           (Banner principal)
│   │   ├── About.tsx          (Sobre produto)
│   │   ├── Benefits.tsx       (Benefícios)
│   │   ├── BeforeAfter.tsx    (Antes/depois)
│   │   ├── Testimonials.tsx   (Depoimentos)
│   │   ├── Footer.tsx         (Rodapé)
│   │   └── ... (+ 4 mais)
│   │
│   ├── assets/                ⭐ Adicione imagens aqui
│   ├── pages/                 (Checkout, pagamentos)
│   └── ...
│
├── 📄 tailwind.config.ts      ⭐ Edite cores aqui
├── 📄 .env                    ⭐ Variáveis de ambiente
├── 📄 package.json
└── 📄 vite.config.ts
```

---

## 🎨 3 PRINCIPAIS EDIÇÕES

### ✏️ 1. EDITAR TEXTOS

**Arquivo:** `src/components/landing/Hero.tsx`

```tsx
// Procure por:
<h1>Cure suas assaduras em 48h</h1>

// Mude para:
<h1>Seu novo texto aqui</h1>

// Salve: Ctrl + S
// Resultado: Página atualiza automaticamente!
```

---

### 🖼️ 2. ADICIONAR IMAGENS

**Passo 1:** Coloque imagem em `src/assets/`

**Passo 2:** Importe no componente
```tsx
import minhaFoto from '@/assets/minha-foto.jpg'
```

**Passo 3:** Use
```tsx
<img src={minhaFoto} alt="Descrição" />
```

---

### 🎨 3. MUDAR CORES

**Arquivo:** `tailwind.config.ts`

```typescript
colors: {
  primary: '#FF6B6B',      // Mude aqui
  secondary: '#4ECDC4',    // Ou aqui
}
```

**Use no componente:**
```tsx
<button className="bg-primary">Botão</button>
```

---

## 🔧 COMANDOS PRINCIPAIS

```bash
# Desenvolvimento
npm run dev              # Inicia (já faz tudo)

# Produção
npm run build            # Cria versão final

# Verificação
npm run lint            # Checa erros
npm test                # Executa testes
```

---

## 📊 O QUE CADA GUIA EXPLICA

### RESUMO_RAPIDO.md ⭐ COMECE AQUI
- Resumo do projeto em 2 minutos
- 3 comandos essenciais
- Onde editar o quê

### PASSO_A_PASSO.md
- Como instalar Node.js (se necessário)
- Como abrir no VS Code
- Como instalar dependências
- Como rodar o servidor
- Primeiras edições

### GUIA_COMPLETO.md
- Estrutura de pastas completa
- O que cada arquivo faz
- Como editar textos (detalhado)
- Como mudar imagens (detalhado)
- Como mudar cores (detalhado)
- Troubleshooting completo

### ANALISE_TECNICA.md
- Stack tecnológico
- Arquitetura do projeto
- Banco de dados (Supabase)
- Integrações (MercadoPago, Telegram)
- Fluxo de compra
- Segurança

### MAPA_COMPONENTES.md ⭐ PARA EDITAR
- Cada componente explicado
- Exatamente o que mudar em cada um
- Exemplos de mudanças
- O que é seguro editar

### DICAS_PRATICAS.md
- Best practices
- Componentes importantes
- Atalhos do VS Code
- Como debugar
- Recursos úteis

### INDICE.md
- Índice de todos os guias
- Como encontrar tópicos
- Recomendação de leitura

---

## ✅ CHECKLIST - PRIMEIRAS 24 HORAS

- [ ] Leia **RESUMO_RAPIDO.md**
- [ ] Execute **npm install**
- [ ] Execute **npm run dev**
- [ ] Abra site em **http://localhost:5173**
- [ ] Edite um texto em **Hero.tsx**
- [ ] Salve com **Ctrl + S**
- [ ] Veja mudança no navegador
- [ ] Mude uma cor em **tailwind.config.ts**
- [ ] Adicione uma imagem em **src/assets/**

---

## 🆘 PROBLEMAS COMUNS

| Problema | Solução |
|----------|---------|
| ❌ npm: command not found | Instale Node.js: https://nodejs.org |
| ❌ Port 5173 is already in use | `npm run dev -- --port 5174` |
| ❌ Mudanças não aparecem | Pressione Ctrl + Shift + R |
| ❌ Erro no console | Abra F12, veja aba Console |
| ❌ Arquivo não encontrado | Verifique o caminho em `src/` |

---

## 📱 RESPONSIVIDADE

O projeto já é **100% responsivo**:
- ✅ Desktop (1920px+)
- ✅ Tablet (768px-1024px)
- ✅ Mobile (até 640px)

Para testar:
- Pressione **F12** no navegador
- Clique ícone de celular
- Escolha dispositivo

---

## 🚀 DEPLOY (Para o público)

### Build
```bash
npm run build
```

### Deploy no Vercel (Recomendado)
1. Instale: `npm i -g vercel`
2. Execute: `vercel`
3. Siga instruções

### Deploy no Netlify
1. Acesse: https://netlify.com
2. Conecte GitHub
3. Auto-deploya cada push

---

## 📈 PRÓXIMAS FEATURES SUGERIDAS

Depois que dominar edições básicas:
1. Adicionar sistema de cupons
2. Carrinho persistente
3. Email automático
4. Admin dashboard
5. Reviews de clientes
6. WhatsApp API

---

## 🎓 ANTES DE EDITAR

### ✅ Faça:
- Salvar versões (git, backup)
- Ler os guias correspondentes
- Fazer mudanças pequenas
- Testar no navegador
- Consultar documentação oficial

### ❌ Não faça:
- Editar sem entender
- Deletar arquivo importante
- Mexer em `node_modules/`
- Colocar dados sensíveis no código
- Fazer commit sem testar

---

## 📞 SUPORTE

| Dúvida | Consulte |
|--------|----------|
| Como editar X? | **MAPA_COMPONENTES.md** |
| Qual arquivo editar? | **GUIA_COMPLETO.md** |
| Como rodar? | **PASSO_A_PASSO.md** |
| Erro ao rodar | **GUIA_COMPLETO.md** → Troubleshooting |
| Conceitos técnicos | **ANALISE_TECNICA.md** |
| Best practices | **DICAS_PRATICAS.md** |

---

## 🎯 VISÃO GERAL DO FLUXO

```
Cliente acessa site
    ↓
Vê landing page (componentes em landing/)
    ↓
Clica "Comprar"
    ↓
Vai para Checkout
    ↓
Preenche dados
    ↓
Chama MercadoPago
    ↓
Pagamento confirmado
    ↓
Banco atualiza (Supabase)
    ↓
Telegram notifica admin
    ↓
Email enviado para cliente
    ↓
Página de sucesso (ThankYou.tsx)
```

---

## 📊 ESTATÍSTICAS DO PROJETO

```
Total de arquivos           : ~80+
Linhas de código            : ~3000+
Componentes da landing      : 10
Componentes UI (Shadcn)     : 60+
Imagens                     : 16
Dependências                : 50+
Tamanho do bundle (gzip)    : ~250KB
Tempo de build              : ~2s
```

---

## 🔐 SEGURANÇA

- ✅ Chaves sensíveis em `.env` (não commitar)
- ✅ JWT authentication (Supabase)
- ✅ Validação de formulários
- ✅ CORS configurado
- ✅ Sem dados hardcoded

---

## 🎁 BÔNUS

### Atalhos VS Code
- `Ctrl + S` - Salvar
- `Ctrl + /` - Comentar linha
- `Ctrl + F` - Procurar
- `Ctrl + Shift + R` - Atualizar página
- `F12` - Developer Tools

### Cores úteis
- `#FF6B6B` - Vermelho (CTA)
- `#4ECDC4` - Verde-água
- `#FFFFFF` - Branco
- `#000000` - Preto
- `#F5F5F5` - Cinza claro

### Tamanhos tipográficos Tailwind
- `text-xs` - Extra pequeno
- `text-sm` - Pequeno
- `text-base` - Normal
- `text-lg` - Grande
- `text-2xl` - Muito grande
- `text-4xl` - Enorme

---

## 🚀 VAMOS COMEÇAR!

1. **Comece:** Leia `RESUMO_RAPIDO.md` (2 min)
2. **Instale:** Execute `npm install` (5 min)
3. **Rode:** Execute `npm run dev` (30 seg)
4. **Edite:** Abra `src/components/landing/Hero.tsx` (1 min)
5. **Pronto:** Você editou seu primeiro arquivo! 🎉

---

## 📝 NOTAS

- **Data de criação:** 02 de Junho de 2026
- **Versão do projeto:** 1.0.0
- **Status:** Pronto para desenvolvimento
- **Documentação:** Completa ✅

---

## 🙌 VOCÊ CONSEGUE!

Este projeto foi criado para ser **fácil de editar**:
- ✅ Componentes bem organizados
- ✅ Nomes claros
- ✅ Documentação completa
- ✅ Sem código complexo na UI

**Comece agora mesmo. Boa sorte! 🚀**

---

**[👉 CLIQUE AQUI PARA COMEÇAR: RESUMO_RAPIDO.md]**
