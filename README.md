# B Confeitaria — Catálogo Digital (Vitrine)

Site demo de vitrine digital para pitch. Construído a partir de export do Google Stitch, com dados reais confirmados via pesquisa (`prompt_design_stitch.md`). Não é um site de delivery: não existe carrinho, sacola, cupom ou cálculo de frete — cada card tem um botão **"Peça pelo WhatsApp"** que abre uma conversa já com o nome do doce/bolo preenchido.

## Catálogo Demonstrativo

Todos os produtos e preços estão marcados com `exemplo: true` em `js/produtos-data.js`, e o site mostra um aviso fixo no topo: "CATÁLOGO DEMONSTRATIVO". Diferente do lote de restaurantes (que tinham Google Maps/Linktree com pratos citados), a pesquisa para a B Confeitaria não encontrou nenhum catálogo publicado em nenhuma fonte — só um perfil de Instagram (@bconfeitaria) sem cardápio nem Linktree com itens. A ficha confirma apenas: nome do negócio, endereço, contato, tempo de mercado (desde 2015) e as **2 categorias prováveis** do catálogo: "Bolos e Doces para Festa" e "Doces Finos".

**Nenhum nome de doce, sabor, preço ou foto real foi confirmado em fonte primária.** Os 7 itens de exemplo usados aqui (ex. "Bolo de Cacau Intenso", "Macarons Sortidos") são ilustrativos — alguns inspirados nos próprios cards que o Stitch desenhou no export — exatamente como pedido no prompt de design: "cards com 'a partir de R$X' placeholder, itens reais entram depois fora do Stitch". Por isso cada produto também tem `aPartirDe: true`, e o preço exibido no card sempre aparece como "A partir de R$X" (ver `formatPreco()` em `js/main.js`), nunca como preço fechado.

## Dados reais confirmados

- Nome: B Confeitaria (Bruna Saddi)
- Endereço: Rua T61, 270, Qd 125, Lt 10/11 — Setor Bueno, Goiânia-GO
- Em operação desde 2015
- Instagram: [@bconfeitaria](https://instagram.com/bconfeitaria) — 5.651 seguidores. Bio: "por Bruna Saddi | Desde 2015 celebrando doces momentos". Ativo, com posts recorrentes até jul/ago 2026 (teve hiato entre 2024 e 2025, mas retomou)
- Telefone/WhatsApp: (62) 99900-3845
- Nota no Google Maps: não localizada nenhuma ficha — por isso **não há badge de avaliação no site**, diferente de outros clientes do lote. O social proof usado aqui é "desde 2015" (tempo de mercado confirmado), não nota do Google.

**⚠️ Atenção — WhatsApp não confirmado por handshake real:** o número (62) 99900-3845 vem da bio do Instagram @bconfeitaria — confiança alta (fonte primária, perfil oficial), mas **não houve teste real de conversa no wa.me**. Validar com a cliente antes de qualquer uso real.

## O que o export do Stitch precisou de ajuste

O export trouxe 4 telas (`b_confeitaria_home`, `cat_logo_de_del_cias`, `contato_localiza_o`, `nossa_hist_ria`), todas em inglês nos textos de navegação/estrutura ("Home", "Catalog", "Our Story", "Contact", "Encomendar") e com conteúdo fabricado sem respaldo na pesquisa:

- **Sem preço real, cards com preço fechado inventado**: a tela de catálogo (`cat_logo_de_del_cias`) gerava textos poéticos em itálico para cada doce ("Um poema escuro em forma de doce") e não trazia preço nenhum — o botão dizia apenas "Encomendar" sem link real. Aqui, cada card usa descrição objetiva (ingredientes, o que falta confirmar com a confeiteira) e preço como "A partir de R$X", já que o prompt de design pediu explicitamente placeholder de preço, não preço fechado.
- **Nota/avaliação inexistente**: diferente do lote de restaurantes, não há Google Maps com nota pra esse negócio — nenhuma nota foi inventada. O social proof do header/rodapé é só "desde 2015" (dado confirmado na bio do Instagram).
- **Idioma misto**: textos de navegação do export vieram em inglês ("Home", "Catalog", "Our Story", "Contact"). Traduzidos para português: "Catálogo", "Localização", "Contato".
- **Botões sem link real**: os botões "Encomendar" do export não tinham nenhuma ação. Religados: `pedirPeloWhatsapp(produtoId)` abre `wa.me` com o nome do doce preenchido; rodapé aponta pro WhatsApp, Instagram e endereço reais.
- **Sem carrinho/sacola**: nenhuma das telas trazia carrinho de fato (o botão "Encomendar" era decorativo) — mantido sem carrinho: cada card só tem "Peça pelo WhatsApp", sem acumular pedido, sem checkout.
- **"B" como assinatura**: o export usa um `.signature-divider`/`.signature-icon` (monograma "B" estilizado, sem logo real) como ornamento de seção — mantido no rodapé, já que não é uma alegação de marca, só um elemento decorativo do próprio DESIGN.md do Stitch para este cliente.
- **Imagens**: as fotos usadas (hotlinks `lh3.googleusercontent.com`) são as do próprio export do Stitch para este cliente — fotos de bolos/doces geradas por IA, sem nenhuma marca, rosto ou texto de menu embutido. Foram inspecionadas visualmente antes de usar.

## Rodando localmente

```bash
npm install
npm run dev
```

Sobe o Tailwind em modo watch + live-server na porta **5014**.

Para gerar o CSS de produção sem subir servidor:

```bash
npm run build:css
```

## Pendente de validação com a cliente

- Confirmar que (62) 99900-3845 é WhatsApp Business ativo (não houve teste real de conversa).
- Catálogo real completo, com nomes, descrições, fotos e preços de verdade (o que está aqui é só estrutura + 7 itens de exemplo).
- Confirmar se "Bolos e Doces para Festa" e "Doces Finos" são de fato as categorias certas, ou se existem outras (a ficha trata isso como hipótese, não confirmação).
- Logo real da marca (o export do Stitch não trouxe nenhum ativo de logo pra esse cliente, só o monograma "B" decorativo).
