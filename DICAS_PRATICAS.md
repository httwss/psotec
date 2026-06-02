# 💡 DICAS E BOAS PRÁTICAS

## 🎯 ANTES DE COMEÇAR

Leia nesta ordem:
1. **RESUMO_RAPIDO.md** (2 min) - Visão geral rápida
2. **PASSO_A_PASSO.md** (5 min) - Como instalar e rodar
3. **GUIA_COMPLETO.md** (10 min) - Detalhes completos
4. **ANALISE_TECNICA.md** (15 min) - Para entender a arquitetura
5. **Este arquivo** - Dicas práticas

---

## 🎨 PRINCIPAIS COMPONENTES PARA EDITAR

### 1. Hero.tsx (Banner Principal)
**Arquivo:** `src/components/landing/Hero.tsx`

```tsx
// O que procurar:
<h1>Seu título aqui</h1>
<p>Sua descrição</p>
<button>Seu botão CTA</button>
```

**Editar:**
- Título principal
- Descrição
- Texto do botão "Comprar"
- Imagem de background

---

### 2. About.tsx (Seção Sobre)
**Arquivo:** `src/components/landing/About.tsx`

Para adicionar/mudar:
- Descrição do produto
- Benefícios principais
- Imagem explicativa

---

### 3. Benefits.tsx (Benefícios)
**Arquivo:** `src/components/landing/Benefits.tsx`

Estrutura típica:
```tsx
const benefits = [
  { title: "Benefício 1", description: "..." },
  { title: "Benefício 2", description: "..." },
  // Adicione mais aqui
]
```

---

### 4. BeforeAfter.tsx (Antes/Depois)
**Arquivo:** `src/components/landing/BeforeAfter.tsx`

Para adicionar galeria:
```tsx
const cases = [
  {
    id: 1,
    before: "before-case-1.jpg",
    after: "after-case-1.jpg",
    title: "Caso 1"
  },
  // Adicione mais casos aqui
]
```

---

### 5. Testimonials.tsx (Depoimentos)
**Arquivo:** `src/components/landing/Testimonials.tsx`

Para adicionar depoimentos:
```tsx
const testimonials = [
  {
    name: "João Silva",
    role: "Cliente",
    content: "Adorei o produto!",
    image: "testimonial-1.jpg"
  },
  // Adicione mais aqui
]
```

---

## 🖼️ TRABALHANDO COM IMAGENS

### ✅ Boas Práticas

1. **Otimize antes de adicionar**
   - Use TinyPNG.com (comprime sem perder qualidade)
   - Mantenha imagens < 1MB cada

2. **Nomes descritivos**
   ```
   ✅ before-case-1.jpg
   ❌ img1.jpg
   
   ✅ psotec-logo.png
   ❌ logo.png
   ```

3. **Formatos corretos**
   - `.jpg` - Fotos (comprimidas)
   - `.png` - Logos/ícones (transparência)
   - `.webp` - Web otimizado (melhor)

4. **Responsividade**
   ```tsx
   // Use classes do Tailwind:
   <img 
     src={foto} 
     alt="Descrição" 
     className="w-full h-auto object-cover"
   />
   ```

---

## 🎨 TRABALHANDO COM CORES

### Sistema de Cores Tailwind

**Opção 1: Cores predefinidas**
```tsx
<div className="bg-red-500">Fundo vermelho</div>
<div className="bg-blue-600">Fundo azul escuro</div>
<div className="text-green-400">Texto verde</div>
```

**Escalas de cores:**
- 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950
- Exemplo: `bg-blue-500` (médio), `bg-blue-900` (escuro)

**Opção 2: Cores customizadas**
Edite `tailwind.config.ts`:
```typescript
colors: {
  primary: '#FF6B6B',      // Seu vermelho
  secondary: '#4ECDC4',    // Seu azul
  success: '#51CF66',      // Verde
  warning: '#FFB92C',      // Amarelo
  danger: '#FF6B6B'        // Vermelho
}
```

Depois use:
```tsx
<button className="bg-primary hover:bg-primary/90">
  Comprar
</button>
```

### Transparência
```tsx
<div className="bg-primary/50">50% transparente</div>
<div className="bg-primary/25">75% transparente</div>
```

### Gradientes
```tsx
<div className="bg-gradient-to-r from-primary to-secondary">
  Fundo gradiente
</div>
```

---

## ✏️ EDITAR TEXTOS - CHECKLISTA

- [ ] Abra o arquivo `.tsx`
- [ ] Procure pelo texto (Ctrl + F)
- [ ] Altere mantendo a formatação
- [ ] Salve (Ctrl + S)
- [ ] Verifique no navegador

**Exemplo:**
```tsx
// ANTES:
<h2 className="text-2xl font-bold">
  Cure seus problemas de pele em 48 horas
</h2>

// DEPOIS:
<h2 className="text-2xl font-bold">
  Resultado visível em 48 horas
</h2>
```

---

## 🔗 ADICIONAR LINKS

### Links externos
```tsx
<a href="https://seu-site.com" target="_blank" rel="noopener">
  Clique aqui
</a>
```

### Links internos (React Router)
```tsx
import { Link } from 'react-router-dom'

<Link to="/checkout">
  Ir para checkout
</Link>
```

### Links para WhatsApp
```tsx
<a href="https://wa.me/5511999999999?text=Olá">
  Fale conosco
</a>
```
(Mude o número para o seu)

---

## 🔴 COMPONENTES IMPORTANTES

### Botões
```tsx
import { Button } from "@/components/ui/button"

// Primário (principal)
<Button className="bg-primary">Comprar</Button>

// Secundário
<Button variant="outline">Mais Informações</Button>

// Com tamanho
<Button size="lg">Grande</Button>
<Button size="sm">Pequeno</Button>
```

### Cards
```tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>Título do Card</CardTitle>
  </CardHeader>
  <CardContent>
    Conteúdo aqui
  </CardContent>
</Card>
```

### Inputs/Formulários
```tsx
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

<form>
  <Input type="email" placeholder="seu@email.com" />
  <Input type="text" placeholder="Seu nome" />
  <Button type="submit">Enviar</Button>
</form>
```

---

## 🚀 DEPLOY (Para produção)

### Build para produção
```bash
npm run build
```

Cria pasta `dist/` com arquivos otimizados.

### Deploy no Vercel (Recomendado)
1. Instale Vercel CLI: `npm i -g vercel`
2. Execute: `vercel`
3. Siga as instruções

### Deploy no Netlify
1. Vá para https://netlify.com
2. Conecte seu GitHub
3. Autorize
4. Pronto! Auto-deploya cada push

---

## 🧠 CONCEITOS IMPORTANTES

### Props (Propriedades)
```tsx
// Componente pai
<Hero title="Meu Título" subtitle="Meu subtítulo" />

// Componente Hero
function Hero({ title, subtitle }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  )
}
```

### State (Estado)
```tsx
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Clicado {count} vezes
    </button>
  )
}
```

### useEffect (Efeito colateral)
```tsx
import { useEffect, useState } from 'react'

function Component() {
  useEffect(() => {
    // Roda quando componente monta
    console.log('Componente carregou!')
    
    // Limpeza (opcional)
    return () => console.log('Componente desmontou')
  }, []) // Dependências
}
```

---

## 🐛 DEBUG - FINDING ERRORS

### Abra Developer Tools
Pressione: **F12** ou **Ctrl + Shift + I**

### Veja erros
Vá para aba **Console** (vermelho = erro)

### Inspecione elementos
Abra **Elements** e clique em elementos para ver CSS

### Network
Veja requisições HTTP (chamadas ao banco)

---

## 📱 TESTAR RESPONSIVIDADE

### No VS Code
Pressione: **Ctrl + Shift + M** (Mobile mode)

### Chrome DevTools
1. F12
2. Clique ícone de celular (canto superior esquerdo)
3. Escolha dispositivo

---

## 🔐 SEGURANÇA - O QUE NÃO FAZER

❌ **NUNCA** coloque dados sensíveis no código:
```tsx
// ❌ ERRADO
const apiKey = "sk-1234567890abcdef"
const password = "minha_senha_123"
```

✅ **USE** variáveis de ambiente:
```tsx
// ✅ CORRETO
const apiKey = import.meta.env.VITE_API_KEY
```

No `.env`:
```
VITE_API_KEY=sk-1234567890abcdef
```

---

## 📞 HELP & RESOURCES

| Recurso | Link |
|---------|------|
| React Docs | https://react.dev |
| Tailwind CSS | https://tailwindcss.com/docs |
| Shadcn/ui | https://ui.shadcn.com |
| TypeScript | https://www.typescriptlang.org |
| Supabase | https://supabase.com/docs |
| MDN Web Docs | https://developer.mozilla.org |

---

## ⚡ ATALHOS DO VS CODE

| Atalho | O que faz |
|--------|----------|
| Ctrl + S | Salvar |
| Ctrl + Z | Desfazer |
| Ctrl + Y | Refazer |
| Ctrl + F | Procurar |
| Ctrl + H | Procurar e substituir |
| Ctrl + / | Comentar linha |
| Alt + ↑/↓ | Mover linha |
| Shift + Alt + ↓ | Duplicar linha |

---

## 🎓 RESUMO DO FLUXO DE EDIÇÃO

```
1. Editar arquivo
   ↓
2. Ctrl + S (salvar)
   ↓
3. Ver mudança no navegador (automático)
   ↓
4. F12 se houver erro
   ↓
5. Correção e repetir
```

**Isso é todo o fluxo! 🚀**

---

**Dúvidas? Releia os arquivos correspondentes ou consulte a documentação oficial dos frameworks!**
