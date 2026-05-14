## Revisão geral do Psotec

Avaliei landing page, navegação, checkout e fluxo de pagamento. Abaixo o que sugiro ajustar, agrupado por prioridade.

---

### 🔴 Prioridade alta (consistência e credibilidade)

1. **Inconsistência de copy sobre composição**
   - `Benefits`/`Hero` falam em "fórmula natural" e "ativos botânicos", mas `About` agora diz que contém corticoide.
   - Risco de quebra de confiança e até problema regulatório.
   - **Ação:** remover "fórmula natural" e "ativos botânicos selecionados" de `About.tsx` (feature "Fórmula natural") e padronizar em "Fórmula dermatológica com corticoide na dosagem ideal".

2. **Promessas exageradas / risco ANVISA**
   - Frases como "Chega de sofrer com psoríase", "elimina a descamação", "mudou minha vida" podem ser interpretadas como promessa de cura.
   - **Ação:** suavizar para "alívio dos sintomas", "ajuda a controlar", "reduz" + reforçar disclaimer "*Resultados podem variar. Consulte um dermatologista.*" no rodapé e perto dos depoimentos.

3. **Navbar — link "Comprar" usa estilo WhatsApp (verde)**
   - Confunde: parece levar pro WhatsApp mas vai pro `/checkout`.
   - **Ação:** trocar `variant="whatsapp"` por `variant="hero"` (ou primary) no botão da Navbar.

4. **PromoBadge sobreposto no checkout**
   - O badge fixo "Leve 3 + Frete Grátis" aparece também na página `/checkout` (você está vendo agora) e cobre o botão "Voltar".
   - **Ação:** renderizar `PromoBadge` apenas em `Index.tsx` (já está) — confirmar que não está no `App.tsx`. Caso esteja, remover. (Verifiquei: está só no Index, mas o `FloatingWhatsApp` também aparece — avaliar se ambos no mobile não poluem.)

---

### 🟡 Prioridade média (UX do checkout)

5. **Indicador de progresso ausente**
   - Usuário preenche formulário grande sem saber em que etapa está.
   - **Ação:** adicionar stepper simples no topo: `Dados → Endereço → Pagamento`.

6. **Quantidade escondida na sidebar**
   - O seletor de quantidade está no card "Resumo" à direita, fácil de não notar no mobile.
   - **Ação:** destacar com label "Quantidade" e mover o aviso de frete grátis para logo abaixo do produto, com barra de progresso (ex.: "2 de 3 para frete grátis").

7. **Frete fixo / mockado**
   - `calcShipping` usa valores hardcoded por região. Isso pode gerar prejuízo ou cobrança a maior.
   - **Ação (futura):** integrar API real (Melhor Envio / Correios) ou pelo menos documentar que valores são estimativas.

8. **Validação de telefone e CPF**
   - Telefone aceita qualquer string; CPF não é coletado (Mercado Pago exige para boleto/PIX em alguns casos).
   - **Ação:** máscara `(00) 00000-0000` + campo CPF opcional/obrigatório com validação.

9. **Botão "Continuar para pagamento" não indica que abrirá o widget abaixo**
   - **Ação:** após criar o pedido, desabilitar edição (já faz) + mostrar mensagem clara "✅ Pedido reservado. Escolha a forma de pagamento abaixo ↓".

---

### 🟢 Prioridade baixa (design / polish)

10. **Hero**
    - Headline ótima, mas o badge "Fórmula dermatologicamente testada" + corticoide poderia virar selo de autoridade ("Contém corticoide na dosagem ideal — uso adulto").
    - Considerar remover "+12 mil clientes satisfeitos" se o número não for real.

11. **Seção Benefits**
    - 4 cards iguais em fileira ficam monótonos no desktop. Sugestão: card do meio em destaque ou alternar tamanhos (bento).

12. **BeforeAfter**
    - Adicionar slider interativo de comparação (arrasta antes/depois) em vez de duas imagens lado a lado. Aumenta engajamento.

13. **Testimonials**
    - Adicionar selo "Compra verificada" + data. Considerar carrossel no mobile.

14. **FinalCTA**
    - Dois CTAs com peso visual igual competem. Definir um primário ("Comprar Agora") e o WhatsApp como secundário.

15. **Footer**
    - Falta: CNPJ, política de privacidade, política de troca/devolução, contato. Importante para credibilidade e para anúncios pagos (Meta/Google exigem).

16. **SEO**
    - `index.html` provavelmente tem `<title>` genérico. Definir: `Psotec — Pomada para alívio da psoríase | Compre online` (<60 chars) + meta description focada em benefício.
    - Adicionar JSON-LD `Product` com preço e reviews.

17. **Acessibilidade**
    - Contraste do texto verde sobre fundo claro nos badges (`text-secondary`) pode estar abaixo de WCAG AA.
    - Botões só com ícone (FloatingWhatsApp) precisam `aria-label`.

---

### O que vou implementar (se aprovar)

Por padrão, faria as **prioridade alta (1–4)** + **6, 9, 14 e 15** numa única passada — são mudanças de copy, ajustes pontuais no checkout e melhorias de credibilidade que dão o maior retorno sem reescrever seções inteiras.

Os itens 5, 8, 11, 12 e 13 são features novas (stepper, máscara CPF, slider antes/depois, carrossel) — me diga se quer que eu inclua nesta rodada ou deixe para depois.

### Pontos a confirmar

- Posso suavizar as promessas de cura (item 2) ou prefere manter o tom atual?
- O número "+12 mil clientes" é real?
- Quer que eu já crie páginas de Política de Privacidade e Trocas (item 15) ou só links placeholder?
