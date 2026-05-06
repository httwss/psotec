## Objetivo
Migrar do **Checkout Pro** (redireciona pro site do Mercado Pago) para o **Checkout Transparente** (pagamento processado dentro do seu site, usando MP SDK + Bricks).

## Métodos de pagamento suportados
- **PIX** — gera QR Code + código copia-e-cola direto na sua página de obrigado
- **Cartão de crédito** — formulário tokenizado pelo SDK do MP (até 12x), seu site nunca toca no número do cartão
- **Boleto bancário** — gera linha digitável

## O que muda

### Frontend (`src/pages/Checkout.tsx`)
- Após preencher dados de entrega, em vez de redirecionar pro MP, mostra um **seletor de método de pagamento** (PIX / Cartão / Boleto) renderizado pelos **Payment Brick** do MP (`@mercadopago/sdk-react`).
- Public key (`APP_USR-f58b80f2-...`) usada pra inicializar o SDK no browser — fica no código (é pública por design).
- Submit do Brick → chama nova edge function `process-payment` com o `formData` tokenizado.

### Backend
**Renomear** `create-checkout` → `create-order` (só cria pedido no banco e devolve `order_id`, sem MP preference).

**Nova edge function** `process-payment`:
- Recebe `order_id` + `formData` do Brick (token, método, parcelas, payer)
- Chama `POST https://api.mercadopago.com/v1/payments` com Bearer do `MERCADO_PAGO_ACCESS_TOKEN`
- Atualiza `orders` com `mp_payment_id`, `status`, e (pra PIX/boleto) retorna QR code base64, `qr_code` copia-e-cola, ou linha digitável do boleto

**`mp-webhook`** — sem mudanças, continua atualizando status quando o pagamento aprovar.

### Página de obrigado (`src/pages/ThankYou.tsx`)
- Se PIX → mostra QR Code (imagem base64) + código copia-e-cola + botão "Copiar"
- Se boleto → mostra linha digitável + link pro PDF
- Se cartão aprovado → mensagem de sucesso direta
- Polling existente continua funcionando pra detectar aprovação

### Banco
Adicionar 3 colunas nullable em `orders`:
- `payment_method` (text) — `pix` / `credit_card` / `bolbradesco`
- `pix_qr_code` (text) — base64 do QR
- `pix_qr_code_text` (text) — copia-e-cola
- `boleto_url` (text) — link do PDF

## Detalhes técnicos
- Instalar `@mercadopago/sdk-react`
- Public key armazenada em `src/config/site.ts` (ou hardcoded no Checkout) — **não é segredo**
- Access token continua só no backend (já está como secret)
- CORS já configurado nas funções existentes — replicar padrão
- Fluxo de cartão: Brick tokeniza → manda token → backend cria payment com `token`, `installments`, `payment_method_id`, `issuer_id`, `payer.email`, `transaction_amount`
- Importante: `transaction_amount` no backend é calculado a partir do pedido salvo (nunca confiar em valor vindo do client)

## Riscos
- Boleto e PIX nem sempre estão habilitados em conta nova do MP — vai precisar conferir no painel MP se ambos estão liberados pra essa conta
- Cartões em produção podem exigir validação anti-fraude adicional do MP

## Fora do escopo
- Salvar cartão pra próximas compras
- Assinaturas recorrentes
- Split de pagamento
