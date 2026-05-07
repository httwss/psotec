
## Objetivo

Toda vez que um cliente concluir o pagamento, você recebe automaticamente um email em **atendimentoaosclientes@gmail.com** com os dados do pedido **já formatados como etiqueta de envio** — pronto para imprimir/copiar e colar na embalagem.

## Como vai funcionar

1. Cliente finaliza compra e paga (Pix, cartão ou boleto).
2. Assim que o pagamento é confirmado, um email é disparado para você.
3. O email contém duas partes:
   - **Bloco "Etiqueta de envio"** — formatado em fonte monoespaçada, no padrão dos Correios:
     ```
     DESTINATÁRIO:
     Nome do Cliente
     Rua Exemplo, 123 - Apto 4
     Bairro - Cidade/UF
     CEP: 00000-000
     Tel: (67) 9xxxx-xxxx
     ```
   - **Bloco "Detalhes do pedido"** — produto, quantidade, frete escolhido, valor total, email/telefone do cliente, ID do pedido e data.

## Pré-requisito: domínio de email

Para enviar emails de forma confiável (sem cair no spam), preciso primeiro configurar um domínio de envio na sua conta. Esse é um passo único — depois disso, todos os emails saem com a sua marca.

Se você ainda não tem um domínio próprio, posso usar um subdomínio gratuito do Lovable. Vou te guiar nessa etapa antes de implementar o resto.

## Etapas técnicas

1. Configurar domínio de email (botão na próxima resposta).
2. Criar template de email "Novo pedido — etiqueta de envio".
3. Modificar a função `process-payment` para que, após confirmar pagamento aprovado, dispare o email para `atendimentoaosclientes@gmail.com` com os dados do pedido salvos na tabela `orders`.
4. Idempotência: usar o `order_id` como chave para evitar duplicação caso o pagamento seja reprocessado.

## Pontos a confirmar

- O email deve ir **só** para `atendimentoaosclientes@gmail.com`, ou também enviar uma confirmação para o cliente?
- Disparar **apenas quando o pagamento é aprovado**, ou também quando o pedido é criado (status pending)? Recomendo só quando aprovado, para você não receber pedidos abandonados.
