# 🔍 ANÁLISE TÉCNICA - PSOTEC

## 🎯 RESUMO EXECUTIVO

**Projeto:** Landing page + E-commerce para produto dermatológico (Psotec)
**Tipo:** React SPA (Single Page Application)
**Status:** Produção
**Stack:** React 18 + TypeScript + Vite + Tailwind CSS + Supabase

---

## 🏗️ ARQUITETURA

```
┌─────────────────────────────────────┐
│       Cliente (React + TS)           │ ← Seu navegador
│  • Landing Pages                     │
│  • Checkout                          │
│  • Admin Dashboard                   │
└──────────────┬──────────────────────┘
               │ HTTP/HTTPS
┌──────────────▼──────────────────────┐
│     Supabase (Backend)               │ ← Banco de dados
│  • PostgreSQL Database               │
│  • Serverless Functions              │
│  • Real-time Subscriptions           │
│  • Storage (Imagens)                 │
└──────────────┬──────────────────────┘
               │
     ┌─────────┼─────────┐
     │         │         │
┌────▼──┐ ┌───▼───┐ ┌───▼────────┐
│ MercadoPago │ Telegram │ SendGrid (Email) │
│ (Pagamentos)│(Notif)  │  (Confirmação)   │
└────────┘ └───────┘ └────────────┘
```

---

## 📦 DEPENDÊNCIAS PRINCIPAIS

### Frontend
```json
{
  "react": "18.3.1",              // Framework UI
  "react-dom": "18.3.1",          // Renderização browser
  "react-router-dom": "6.30.1",   // Roteamento
  "tailwindcss": "3.4.17",        // Estilos
  "zod": "3.25.76",               // Validação de dados
  "react-hook-form": "7.61.1"     // Gerenciar formulários
}
```

### Componentes UI
```json
{
  "@radix-ui/*": "...múltiplos",  // Componentes sem estilo (acessíveis)
  "shadcn/ui": "integrado",       // Componentes estilizados
  "lucide-react": "0.462.0"       // Ícones
}
```

### Backend/Integrações
```json
{
  "@supabase/supabase-js": "2.105.1",        // Cliente Supabase
  "@mercadopago/sdk-react": "1.0.7",         // Pagamentos
  "@tanstack/react-query": "5.83.0"          // Cache de dados
}
```

---

## 🗄️ BANCO DE DADOS (Supabase)

### Tabelas Esperadas
```sql
-- Usuários
users (
  id UUID,
  email VARCHAR,
  phone VARCHAR,
  created_at TIMESTAMP
)

-- Pedidos
orders (
  id UUID,
  user_id UUID,
  total_amount DECIMAL,
  status VARCHAR (pending, paid, shipped),
  created_at TIMESTAMP
)

-- Itens do pedido
order_items (
  id UUID,
  order_id UUID,
  product_name VARCHAR,
  quantity INT,
  price DECIMAL
)
```

---

## 🔌 APIs E INTEGRAÇÕES

### 1. MercadoPago (Pagamentos)
- SDK: `@mercadopago/sdk-react`
- Função: `create-checkout` (cria sessão de compra)
- Webhook: `mp-webhook` (recebe notificação de pagamento)
- Documentação: https://developers.mercadopago.com

### 2. Telegram (Notificações)
- Função: `send-order-telegram`
- Notifica pedidos em tempo real
- Precisa de: Bot Token + Chat ID

### 3. SendGrid (Email - opcional)
- Para confirmação de pedidos
- Configurável em `.env`

---

## 📂 ESTRUTURA DETALHADA

```
src/
├── pages/               → Páginas completas (roteadas)
│   ├── Index.tsx       → Landing page principal
│   ├── Checkout.tsx    → Carrinho + checkout
│   ├── ThankYou.tsx    → Confirmação pós-pagamento
│   ├── Auth.tsx        → Login/Registro
│   └── AdminOrders.tsx → Painel administrativo
│
├── components/
│   ├── landing/        → Seções da landing
│   │   ├── Hero.tsx              (banner + CTA)
│   │   ├── Navbar.tsx            (menu)
│   │   ├── About.tsx             (sobre)
│   │   ├── Benefits.tsx          (benefícios)
│   │   ├── BeforeAfter.tsx       (galeria)
│   │   ├── Testimonials.tsx      (depoimentos)
│   │   ├── FinalCTA.tsx          (call to action)
│   │   ├── PromoBanner.tsx       (promoção)
│   │   ├── FloatingWhatsApp.tsx  (botão whatsapp)
│   │   └── Footer.tsx            (rodapé)
│   │
│   └── ui/             → Componentes genéricos (Shadcn)
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── dialog.tsx
│       └── ... (60+ componentes)
│
├── assets/             → Mídia
│   ├── *-hero.png      (banner)
│   ├── *-case-*.jpg    (antes/depois)
│   ├── testimonial-*.jpg (depoimentos)
│   └── *-logo.jpeg     (logo)
│
├── integrations/
│   └── supabase/
│       ├── client.ts   (inicializa cliente)
│       └── types.ts    (tipos TypeScript)
│
├── hooks/
│   ├── use-mobile.tsx  (detecta mobile)
│   └── use-toast.ts    (notificações)
│
├── config/
│   └── site.ts         (configurações globais)
│
├── lib/
│   └── utils.ts        (funções auxiliares)
│
├── App.tsx             (componente raiz)
├── main.tsx            (ponto de entrada)
└── index.css           (estilos globais)

supabase/
├── functions/          → Serverless functions
│   ├── create-checkout/    (POST) → Cria checkout MercadoPago
│   ├── process-payment/    (POST) → Processa pagamento
│   ├── calc-shipping/      (POST) → Calcula frete
│   ├── get-order/          (GET)  → Busca pedido
│   ├── send-order-telegram/(POST) → Envia notif Telegram
│   └── mp-webhook/         (POST) → Webhook MercadoPago
│
└── migrations/         → SQL migrations
    └── *.sql          (cria tabelas)
```

---

## 🔄 FLUXO DE COMPRA

```
1. Usuário acessa landing
   ↓
2. Clica "Comprar Agora"
   ↓
3. Vai para página Checkout
   ↓
4. Preenche dados (nome, email, endereço)
   ↓
5. Clica "Finalizar Compra"
   ↓
6. Função: create-checkout()
   ├→ Cria pedido no banco
   ├→ Chama MercadoPago API
   └→ Retorna link de checkout
   ↓
7. MercadoPago carrega (paga lá)
   ↓
8. Webhook recebe confirmação
   ├→ Atualiza status do pedido
   └→ Envia Telegram ao admin
   ↓
9. Usuário redireciona para ThankYou.tsx
   ↓
10. Email de confirmação enviado
```

---

## 🎨 SISTEMA DE CORES (Tailwind)

Definido em: `tailwind.config.ts`

```typescript
theme: {
  colors: {
    // Cores personalizadas do projeto
    primary: '#FF6B6B',      // Vermelho (CTA)
    secondary: '#4ECDC4',    // Verde-água
    accent: '#FFE66D',       // Amarelo
    // ... mais cores
  }
}
```

**Uso nos componentes:**
```tsx
<button className="bg-primary text-white hover:bg-primary/90">
  Comprar
</button>

<p className="text-secondary">Texto em verde-água</p>
```

---

## 🚨 VARIÁVEIS DE AMBIENTE (.env)

```bash
# Supabase
VITE_SUPABASE_URL=https://anyuhgqjmydlauqaukrp.supabase.co
VITE_SUPABASE_PROJECT_ID=anyuhgqjmydlauqaukrp
VITE_SUPABASE_PUBLISHABLE_KEY=eyJh... (sua chave)

# MercadoPago (adicionar depois)
VITE_MERCADOPAGO_PUBLIC_KEY=... (seu token)

# Telegram (adicionar depois)
VITE_TELEGRAM_BOT_TOKEN=... (seu token)
VITE_TELEGRAM_CHAT_ID=... (seu chat id)
```

---

## 📊 PERFORMANCE

- **Build time:** ~2s (Vite é rápido)
- **Bundle size:** ~250KB (gzipped)
- **Lighthouse:** Almeja 90+

Otimizações:
- Code splitting automático (Vite)
- Lazy loading de imagens
- Tree-shaking de dependências não usadas

---

## 🧪 TESTES

Configuração: Vitest + React Testing Library

```bash
npm run test          # Executa uma vez
npm run test:watch   # Modo watch
```

Exemplo de teste:
```typescript
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

test('Hero component renders', () => {
  render(<Hero />)
  expect(screen.getByText(/cure/i)).toBeInTheDocument()
})
```

---

## 🔐 SEGURANÇA

- **Variáveis sensíveis:** Em `.env` (nunca commitar!)
- **Chaves de API:** Apenas public key no frontend
- **Autenticação:** Supabase Auth (JWT)
- **CORS:** Configurado no Supabase

---

## 📈 PRÓXIMAS FEATURES SUGERIDAS

1. ✅ Sistema de cupons desconto
2. ✅ Carrinho persistente (LocalStorage)
3. ✅ Email de notificação automático
4. ✅ Admin dashboard com gráficos
5. ✅ Reviews de clientes
6. ✅ Integração WhatsApp API

---

## 🚀 DEPLOY

### Opção 1: Vercel (Recomendado)
```bash
npm i -g vercel
vercel
```

### Opção 2: GitHub Pages + GitHub Actions
Commit → Automático deploy

### Opção 3: Netlify
Conecta GitHub e auto-deploya

---

## 📞 SUPORTE

| Problema | Solução |
|----------|---------|
| Port 5173 ocupada | `npm run dev -- --port 5174` |
| Erro de importação | Limpe `node_modules` e reinstale |
| Supabase connection | Verifique `.env` credentials |
| MercadoPago erro | Confira API keys no `.env` |

---

**Criado:** 2 de Junho de 2026
**Última atualização:** Análise inicial completa
