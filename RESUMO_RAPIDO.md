# 🚀 RESUMO RÁPIDO - PSOTEC

## ⚡ 3 PASSOS PARA COMEÇAR

### 1️⃣ INSTALAR
```bash
npm install
```
(vai demorar 2-5 minutos)

### 2️⃣ RODAR
```bash
npm run dev
```
Vai aparecer: `http://localhost:5173/` → Clique no link

### 3️⃣ EDITAR
Abra arquivo em `src/components/landing/` e comece a mexer!

---

## 📁 ARQUIVOS PRINCIPAIS

| Arquivo | Função |
|---------|--------|
| `src/components/landing/Hero.tsx` | Título principal |
| `src/components/landing/About.tsx` | Seção sobre |
| `src/components/landing/Benefits.tsx` | Benefícios |
| `src/components/landing/Testimonials.tsx` | Depoimentos |
| `src/components/landing/BeforeAfter.tsx` | Antes/depois |
| `src/assets/` | Imagens (coloque aqui) |
| `tailwind.config.ts` | Cores do site |

---

## 🎨 EDITAR CORES

Arquivo: `tailwind.config.ts`

```typescript
colors: {
  primary: '#FF6B6B',     // Mude aqui
  secondary: '#4ECDC4',
}
```

No componente: `className="bg-primary"` ou `className="text-secondary"`

---

## 🖼️ EDITAR IMAGENS

1. Coloque em: `src/assets/`
2. Importe no componente:
```tsx
import foto from '@/assets/sua-foto.jpg'
```
3. Use:
```tsx
<img src={foto} alt="Descrição" />
```

---

## ✏️ EDITAR TEXTOS

Arquivo: `src/components/landing/Hero.tsx`

Procure por `<h1>`, `<p>`, etc e mude o texto. Exemplo:

```tsx
// ANTES:
<h1>Cure suas assaduras em 48h</h1>

// DEPOIS:
<h1>Seu novo texto aqui</h1>
```

**Salve (Ctrl+S) → Site atualiza automaticamente**

---

## 🔧 COMANDOS

```bash
npm run dev          # Desenvolvimento
npm run build        # Build produção
npm run preview      # Visualizar build
npm test            # Rodar testes
npm run lint        # Checar erros
```

---

## 🆘 PROBLEMAS?

❌ **npm: command not found**
→ Instale Node.js: https://nodejs.org

❌ **Port 5173 is already in use**
→ `npm run dev -- --port 5174`

❌ **Mudanças não aparecem**
→ Ctrl + Shift + R (força atualizar navegador)

---

## 📚 VEJA TAMBÉM
- Guia completo: `GUIA_COMPLETO.md`
- Documentação oficial: `README.md`
