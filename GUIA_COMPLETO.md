# 📋 GUIA COMPLETO - PROJETO PSOTEC

## 🎯 O que é este Projeto?

**PSOTEC** é uma landing page + e-commerce para um produto de cuidados com a pele.

**Stack Tecnológico:**
- **Frontend:** React 18 com TypeScript
- **Build Tool:** Vite (muito mais rápido que Webpack)
- **UI Components:** Shadcn/ui + Radix UI
- **Styling:** Tailwind CSS
- **Backend Database:** Supabase (Firebase alternativo)
- **Pagamentos:** MercadoPago SDK
- **Roteamento:** React Router DOM

---

## 📁 ESTRUTURA DE ARQUIVOS (O que cada pasta faz)

```
Psotec/
├── src/
│   ├── pages/                  ⭐ Páginas principais da aplicação
│   │   ├── Index.tsx          (Homepage/Landing)
│   │   ├── Checkout.tsx       (Carrinho de compras)
│   │   ├── ThankYou.tsx       (Confirmação de pedido)
│   │   ├── Auth.tsx           (Login/Registro)
│   │   ├── AdminOrders.tsx    (Painel admin)
│   │   └── NotFound.tsx       (Página 404)
│   │
│   ├── components/
│   │   ├── landing/           ⭐ Componentes da página inicial
│   │   │   ├── Hero.tsx       (Banner principal com CTA)
│   │   │   ├── About.tsx      (Seção Sobre)
│   │   │   ├── Benefits.tsx   (Benefícios do produto)
│   │   │   ├── Testimonials.tsx (Depoimentos)
│   │   │   ├── BeforeAfter.tsx (Antes/Depois)
│   │   │   ├── Footer.tsx     (Rodapé)
│   │   │   ├── Navbar.tsx     (Menu navegação)
│   │   │   ├── PromoBanner.tsx (Banner promocional)
│   │   │   ├── FinalCTA.tsx   (Botão final chamada ação)
│   │   │   └── FloatingWhatsApp.tsx (Botão WhatsApp flutuante)
│   │   │
│   │   └── ui/                Componentes reutilizáveis (Shadcn)
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       └── ... (muitos mais)
│   │
│   ├── assets/                ⭐ Imagens e mídia
│   │   ├── psotec-hero.png
│   │   ├── psotec-logo.jpeg
│   │   ├── before-case-*.jpg  (Fotos antes)
│   │   ├── after-case-*.jpg   (Fotos depois)
│   │   ├── testimonial-*.jpg
│   │   └── ...
│   │
│   ├── integrations/
│   │   └── supabase/          Backend e banco de dados
│   │       ├── client.ts      Conexão com Supabase
│   │       └── types.ts       Tipos TypeScript
│   │
│   ├── config/
│   │   └── site.ts            Configurações globais
│   │
│   ├── lib/
│   │   └── utils.ts           Funções auxiliares
│   │
│   ├── App.tsx                Componente raiz
│   ├── main.tsx               Ponto de entrada
│   └── index.css              Estilos globais
│
├── public/
│   ├── favicon.ico            Ícone do navegador
│   └── robots.txt             SEO
│
├── supabase/
│   ├── functions/             ⭐ Funções serverless (Backend)
│   │   ├── create-checkout/   Cria compra no MercadoPago
│   │   ├── process-payment/   Processa pagamento
│   │   ├── calc-shipping/     Calcula frete
│   │   ├── get-order/         Busca pedido
│   │   ├── send-order-telegram/ Notifica no Telegram
│   │   └── mp-webhook/        Webhook MercadoPago
│   │
│   └── migrations/            Criação de tabelas no DB
│
├── package.json               ⭐ Lista de dependências
├── .env                       ⭐ Variáveis de ambiente (Supabase)
├── vite.config.ts             Configuração build
├── tailwind.config.ts         Configuração Tailwind CSS
├── tsconfig.json              Configuração TypeScript
├── index.html                 HTML principal
└── README.md                  Documentação original
```

---

## 🚀 COMO RODAR NO VS CODE - PASSO A PASSO

### **PASSO 1: Abra a pasta no VS Code**
```
1. File → Open Folder
2. Navegue para: C:\Users\VANESSA STEFANI\Desktop\Psotec
3. Clique em "Select Folder"
```

### **PASSO 2: Instale as dependências**
Abra o terminal integrado (Ctrl + `) e execute:

```bash
npm install
```

**⏳ Isso vai demorar 2-5 minutos na primeira vez**
- Você verá barras de progresso
- Ao final, deve aparecer ✅ added X packages

Se der erro `npm: command not found`, instale Node.js:
- Acesse https://nodejs.org (versão LTS recomendada)
- Reinicie o VS Code após instalar

### **PASSO 3: Inicie o servidor de desenvolvimento**

```bash
npm run dev
```

Você verá algo assim:
```
  VITE v5.4.19  ready in 456 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

### **PASSO 4: Abra no navegador**
- Clique no link `http://localhost:5173/` (ou CTRL + clique)
- Ou abra manualmente: http://localhost:5173

**A aplicação está rodando! 🎉**

---

## 🎨 COMO EDITAR (TEXTOS, IMAGENS E CORES)

### **1. EDITAR TEXTOS DA LANDING PAGE**

Os textos principais estão em: `src/components/landing/`

Exemplo: Editar o título principal (Hero)

```
Abra: src/components/landing/Hero.tsx
```

Procure por textos como:
```tsx
<h1 className="text-4xl font-bold">
  Seu Texto Aqui
</h1>
```

**Após editar, SALVE (Ctrl + S) e o site atualiza automaticamente no navegador!**

Arquivos principais para editar:
- `Hero.tsx` - Título e CTA principal
- `About.tsx` - Seção sobre o produto
- `Benefits.tsx` - Benefícios
- `Testimonials.tsx` - Depoimentos
- `Footer.tsx` - Rodapé

---

### **2. MUDAR IMAGENS**

**Passo A: Adicionar nova imagem**
1. Coloque a imagem em: `src/assets/`
2. No seu componente, importe:
```tsx
import minhaImagem from '@/assets/minha-imagem.jpg'
```
3. Use no JSX:
```tsx
<img src={minhaImagem} alt="Descrição" />
```

**Passo B: Substituir imagem existente**
- Simplesmente substitua o arquivo em `src/assets/` mantendo o mesmo nome
- A aplicação vai usar a nova automaticamente

---

### **3. MUDAR CORES**

As cores estão definidas em: **`tailwind.config.ts`**

Estrutura de cores do Tailwind:
```typescript
colors: {
  primary: '#FF6B6B',    // Vermelho
  secondary: '#4ECDC4',  // Verde água
  // ... mais cores
}
```

**Para usar a cor no componente:**
```tsx
<button className="bg-primary text-white">
  Clique aqui
</button>
```

**Ou editar diretamente no CSS:**
Arquivo: `src/index.css`

```css
:root {
  --primary: #FF6B6B;
  --secondary: #4ECDC4;
}
```

**Cores comuns usadas neste projeto:**
- Tailwind tem paletas prontas: `bg-red-500`, `bg-blue-600`, etc.
- Exemplo: `className="bg-red-500 hover:bg-red-600"`

---

## 📝 ARQUIVOS PRINCIPAIS PARA VOCÊ MEXER

| Arquivo | O que faz | Quando editar |
|---------|-----------|---------------|
| `src/pages/Index.tsx` | Página inicial completa | Estrutura geral do site |
| `src/components/landing/Hero.tsx` | Banner principal | Mudar título/CTA principal |
| `src/assets/` | Todas as imagens | Trocar fotos, logos |
| `tailwind.config.ts` | Configuração de cores | Mudar paleta de cores |
| `src/pages/Checkout.tsx` | Página de compra | Editar fluxo de checkout |
| `.env` | Variáveis de ambiente | Mudar IDs do Supabase |

---

## 🔧 COMANDOS ÚTEIS

```bash
# Rodando desenvolvimento
npm run dev

# Build para produção
npm run build

# Visualizar build
npm run preview

# Executar testes
npm test

# Checar linting (erros de código)
npm run lint
```

---

## 🗄️ BANCO DE DADOS (Supabase)

O projeto usa **Supabase** (tipo Firebase):
- Armazena pedidos, usuários, dados de compras
- Funções serverless fazem processamento automático
- Webhook recebe notificações do MercadoPago

**Para acessar o banco:**
1. Acesse: https://app.supabase.com
2. Login com email usado na criação
3. Selecione projeto: `anyuhgqjmydlauqaukrp`

---

## 🛠️ TROUBLESHOOTING (Problemas Comuns)

**❌ "npm: command not found"**
- Solução: Instale Node.js https://nodejs.org

**❌ "Port 5173 is already in use"**
- Solução: `npm run dev -- --port 5174`

**❌ Mudanças não aparecem**
- Solução: Pressione `Ctrl + Shift + R` (força atualizar)

**❌ Erro no console**
- Solução: Abra Developer Tools (F12), veja o erro em vermelho

---

## 📚 Recursos Úteis

- **React:** https://react.dev
- **Tailwind CSS:** https://tailwindcss.com
- **Shadcn/ui:** https://ui.shadcn.com
- **Supabase:** https://supabase.com/docs
- **MercadoPago:** https://developers.mercadopago.com

---

## 🎓 PRÓXIMOS PASSOS

1. ✅ Rode o projeto com `npm run dev`
2. ✅ Explore os componentes em `src/components/landing/`
3. ✅ Edite um texto simples em `Hero.tsx`
4. ✅ Veja a mudança no navegador em tempo real
5. ✅ Aprenda a editar cores no `tailwind.config.ts`
6. ✅ Substitua uma imagem em `src/assets/`

**Boa sorte! 🚀**
