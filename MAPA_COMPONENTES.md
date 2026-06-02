# 📋 MAPA DE COMPONENTES E O QUE EDITAR

Aqui você encontra cada componente e o que mudar nele.

---

## 🏠 COMPONENTE: Hero.tsx
**Caminho:** `src/components/landing/Hero.tsx`
**O que é:** Banner principal da landing page

### O que você pode editar:
- ✅ Título principal (h1)
- ✅ Subtítulo/descrição
- ✅ Imagem de fundo
- ✅ Texto do botão CTA
- ✅ Cores de fundo

### Exemplo de mudança:
```tsx
// ANTES:
<h1>Cure suas assaduras em 48 horas</h1>

// DEPOIS:
<h1>Revolucione seu cuidado com a pele</h1>
```

---

## ℹ️ COMPONENTE: About.tsx
**Caminho:** `src/components/landing/About.tsx`
**O que é:** Seção "Sobre o Produto"

### O que você pode editar:
- ✅ Título da seção
- ✅ Descrição longa do produto
- ✅ Lista de características
- ✅ Imagem do produto
- ✅ Cores de destaque

---

## 💪 COMPONENTE: Benefits.tsx
**Caminho:** `src/components/landing/Benefits.tsx`
**O que é:** Lista de benefícios

### O que você pode editar:
- ✅ Título da seção
- ✅ Descrição de cada benefício
- ✅ Ícones dos benefícios
- ✅ Cores e espaçamento

### Estrutura típica:
```tsx
const benefits = [
  {
    title: "Rápido",
    description: "Resultado em 48 horas"
  },
  {
    title: "Seguro",
    description: "Aprovado dermatologicamente"
  },
  // Adicione mais...
]
```

---

## 📸 COMPONENTE: BeforeAfter.tsx
**Caminho:** `src/components/landing/BeforeAfter.tsx`
**O que é:** Galeria de antes/depois

### O que você pode editar:
- ✅ Adicionar novos cases (antes/depois)
- ✅ Descrição de cada case
- ✅ Imagens (coloque em `src/assets/`)
- ✅ Título da seção

### Como adicionar novo case:
```tsx
const cases = [
  {
    id: 1,
    before: "before-case-1.jpg",
    after: "after-case-1.jpg",
    title: "Caso 1"
  },
  {
    id: 2,
    before: "before-case-2.jpg",
    after: "after-case-2.jpg",
    title: "Caso 2"
  },
  // Adicione como acima
]
```

---

## ⭐ COMPONENTE: Testimonials.tsx
**Caminho:** `src/components/landing/Testimonials.tsx`
**O que é:** Depoimentos de clientes

### O que você pode editar:
- ✅ Adicionar/remover depoimentos
- ✅ Nome do cliente
- ✅ Profissão/título
- ✅ Texto do depoimento
- ✅ Foto do cliente
- ✅ Rating/estrelas

### Como adicionar depoimento:
```tsx
const testimonials = [
  {
    name: "Maria Silva",
    role: "Cliente",
    content: "Excelente produto! Recomendo!",
    image: "testimonial-1.jpg",
    rating: 5
  },
  {
    name: "João Santos",
    role: "Dermatologista",
    content: "Aprovei clinicamente",
    image: "testimonial-2.jpg",
    rating: 5
  }
  // Copie o padrão acima
]
```

---

## 📢 COMPONENTE: FinalCTA.tsx
**Caminho:** `src/components/landing/FinalCTA.tsx`
**O que é:** Chamada final à ação (botão de compra)

### O que você pode editar:
- ✅ Mensagem/título
- ✅ Subtítulo/descrição
- ✅ Texto do botão
- ✅ Ofertas/promoções
- ✅ Urgência (ex: "Apenas 10 unidades")

---

## 📰 COMPONENTE: PromoBanner.tsx
**Caminho:** `src/components/landing/PromoBanner.tsx`
**O que é:** Banner com promoção/oferta

### O que você pode editar:
- ✅ Texto de promoção
- ✅ Desconto/oferta
- ✅ Cores de destaque
- ✅ Urgência ("Aproveite hoje!")

---

## 📱 COMPONENTE: Navbar.tsx
**Caminho:** `src/components/landing/Navbar.tsx`
**O que é:** Menu de navegação superior

### O que você pode editar:
- ✅ Logo da marca
- ✅ Itens do menu
- ✅ Links para seções
- ✅ Botão de ação (ex: "Comprar")

### Links internos:
```tsx
<a href="#benefits">Benefícios</a>
<a href="#testimonials">Depoimentos</a>
<a href="#contact">Contato</a>
```

---

## 💬 COMPONENTE: FloatingWhatsApp.tsx
**Caminho:** `src/components/landing/FloatingWhatsApp.tsx`
**O que é:** Botão WhatsApp flutuante

### O que você pode editar:
- ✅ Número de WhatsApp
- ✅ Mensagem padrão
- ✅ Posição do botão
- ✅ Cores

### Exemplo:
```tsx
const whatsappLink = "https://wa.me/5511987654321?text=Olá%20Psotec!"
// Mude o número (5511987654321) para o seu
```

---

## 🔗 COMPONENTE: Footer.tsx
**Caminho:** `src/components/landing/Footer.tsx`
**O que é:** Rodapé da página

### O que você pode editar:
- ✅ Copyright/ano
- ✅ Links importantes
- ✅ Redes sociais
- ✅ Contato
- ✅ Políticas (privacidade, termos)
- ✅ Logotipo

---

## 🛒 PÁGINA: Checkout.tsx
**Caminho:** `src/pages/Checkout.tsx`
**O que é:** Página de compra/carrinho

### O que você pode editar:
- ✅ Campos do formulário
- ✅ Mensagens de confirmação
- ✅ Preço do produto
- ✅ Promoções/descontos
- ✅ Frete

### Não mexer (cuidado):
- ❌ Lógica de pagamento MercadoPago
- ❌ Integração com banco
- ❌ Validações críticas

---

## 🎉 PÁGINA: ThankYou.tsx
**Caminho:** `src/pages/ThankYou.tsx`
**O que é:** Página de confirmação pós-pagamento

### O que você pode editar:
- ✅ Mensagem de sucesso
- ✅ Instruções pós-compra
- ✅ Próximos passos
- ✅ Link para download/confirmação

---

## 🔑 PÁGINA: Auth.tsx
**Caminho:** `src/pages/Auth.tsx`
**O que é:** Login/Registro

### O que você pode editar:
- ✅ Títulos
- ✅ Labels dos campos
- ✅ Mensagens de erro

### Não mexer:
- ❌ Integração Supabase
- ❌ Validação de email
- ❌ Hash de senha

---

## 📊 PÁGINA: AdminOrders.tsx
**Caminho:** `src/pages/AdminOrders.tsx`
**O que é:** Painel administrativo

### O que você pode editar:
- ✅ Colunas da tabela
- ✅ Filtros exibidos
- ✅ Ordenação

### Não mexer:
- ❌ Consultas ao banco
- ❌ Lógica de permissões

---

## 🎨 ARQUIVO: tailwind.config.ts
**Caminho:** `tailwind.config.ts` (raiz do projeto)
**O que é:** Configuração de cores e temas

### O que você pode editar:
- ✅ Cores personalizadas
- ✅ Tipografia (fonts)
- ✅ Espaçamento
- ✅ Breakpoints responsivos

### Exemplo de mudança:
```typescript
// Adicione sua cor:
colors: {
  primary: '#FF6B6B',
  secondary: '#4ECDC4',
  brand: '#FF0000', // Sua nova cor
}

// Use depois:
// className="bg-brand"
```

---

## 🌐 ARQUIVO: index.css
**Caminho:** `src/index.css`
**O que é:** Estilos globais

### O que você pode editar:
- ✅ Variáveis CSS
- ✅ Estilos globais
- ✅ Animações customizadas

### Exemplo:
```css
:root {
  --primary: #FF6B6B;
  --secondary: #4ECDC4;
}

/* Animação customizada */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

---

## 📁 PASTA: src/assets/
**Caminho:** `src/assets/`
**O que é:** Todas as imagens e mídia

### O que você pode editar:
- ✅ Adicionar novas imagens
- ✅ Remover imagens não usadas
- ✅ Substituir imagens existentes

### Como usar:
```tsx
import logo from '@/assets/psotec-logo.jpeg'

<img src={logo} alt="Logo Psotec" />
```

---

## 📄 ARQUIVO: .env
**Caminho:** `.env` (raiz do projeto)
**O que é:** Variáveis de ambiente

### O que você pode editar:
- ✅ Supabase IDs (quando criar novo projeto)
- ✅ Adicionar chaves de MercadoPago
- ✅ Adicionar tokens de Telegram

### Exemplo:
```env
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_PROJECT_ID=seu-id
VITE_SUPABASE_PUBLISHABLE_KEY=sua-chave

# Adicione depois:
VITE_MERCADOPAGO_PUBLIC_KEY=sua-chave-mp
VITE_TELEGRAM_BOT_TOKEN=seu-token
VITE_TELEGRAM_CHAT_ID=seu-chat-id
```

---

## 📞 COMPONENTES UI (Shadcn)

**Caminho:** `src/components/ui/`

Esses são componentes "puros" que você copia e cola. Exemplos:
- `button.tsx` - Botões
- `card.tsx` - Cards
- `input.tsx` - Inputs
- `dialog.tsx` - Modais

### Como usar:
```tsx
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function MyComponent() {
  return (
    <Card>
      <Button>Clique aqui</Button>
    </Card>
  )
}
```

**Não edite esses arquivos** (use como estão)

---

## 🗂️ RESUMO: O QUE EDITAR

### ✅ SEGURO EDITAR (Interface do usuário)
- Componentes em `src/components/landing/`
- Textos em geral
- Imagens em `src/assets/`
- Cores em `tailwind.config.ts`
- Botões e mensagens
- Links

### ⚠️ CUIDADO (Pode quebrar funcionalidade)
- Lógica em `Checkout.tsx`
- Integrações em `supabase/`
- Validações
- Estados e props

### ❌ NÃO EDITE (Sem entender bem)
- `node_modules/` (não edite aqui!)
- `package.json` (versões de dependências)
- Arquivos de configuração (vite.config.ts, tsconfig.json)
- Código serverless (supabase/functions/)

---

## 🎯 COMECE AQUI

Para iniciante, edite nesta ordem:
1. Textos em `Hero.tsx`
2. Cores em `tailwind.config.ts`
3. Imagens em `src/assets/`
4. Depoimentos em `Testimonials.tsx`
5. Benefícios em `Benefits.tsx`

Cada mudança = 1 aprendizado!

---

**Pronto? Abra um arquivo e comece!** 🚀
