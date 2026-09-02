/**
 * CATÁLOGO - B Confeitaria (Bruna Saddi)
 *
 * FORMATO DE CADA PRODUTO:
 * {
 *   id, categoria (bolos-festa|doces-finos), nome, descricao, preco,
 *   aPartirDe: true,        // preço é sempre "a partir de", como pedido no
 *                            // prompt de design (bolos/doces sob encomenda
 *                            // variam de tamanho) — ver formatPreco() em main.js
 *   imagem: "https://..." ou null,
 *   destaque: false,
 *   exemplo: true            // true = item de demonstração
 * }
 *
 * IMPORTANTE: TODOS os itens abaixo são EXEMPLOS (exemplo: true) — a ficha de
 * pesquisa (prompt_design_stitch.md) confirma só o nome do negócio, endereço,
 * contato, tempo de mercado (desde 2015) e as 2 categorias prováveis do
 * catálogo ("Bolos e Doces para Festa" e "Doces Finos"). NENHUM nome de doce,
 * sabor, preço ou foto real foi confirmado em fonte primária — diferente do
 * lote de restaurantes, aqui não havia cardápio/Linktree com itens para
 * espelhar, só um perfil de Instagram sem catálogo. Por isso, os nomes de
 * produto usados aqui são ilustrativos (alguns inspirados nos próprios
 * cards que o Stitch desenhou no export, ex. "Bolo de Cacau Intenso",
 * "Macarons Suspiro"), exatamente como o prompt de design pediu: "cards com
 * 'a partir de R$X' placeholder, itens reais entram depois fora do Stitch."
 *
 * As fotos usadas são os hotlinks (lh3.googleusercontent.com) do próprio
 * export do Stitch para este cliente — fotos de doces/bolos geradas por IA,
 * sem nenhuma marca, rosto ou texto de menu embutido. Ver README para a
 * lista completa de ajustes feitos no export.
 */

window.CATEGORIAS = {
    'bolos-festa': {
        titulo: 'Bolos e Doces para Festa',
        icone: 'cake',
        descricao: 'Bolos decorados e doces para aniversários, casamentos e celebrações — sob encomenda, com o carinho da B Confeitaria.'
    },
    'doces-finos': {
        titulo: 'Doces Finos',
        icone: 'cookie',
        descricao: 'Trufas, macarons e doces finos artesanais, em caixas para presente ou para se presentear.'
    }
};

window.PRODUTOS = [
    {
        id: 'bolo-decorado-festa',
        categoria: 'bolos-festa',
        nome: 'Bolo Decorado para Festa',
        descricao: 'Bolo cenográfico com cobertura trabalhada à mão, para aniversários e datas especiais. Sabor, tamanho e decoração reais a combinar com a confeiteira.',
        preco: 180.00,
        aPartirDe: true,
        imagem: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD14cxAfN8lpb-X0J44c0JOItByzz6JT38dOhqjbgrAxO02O8o7xzm3i5NyoYRFm6A0sqOuUQy3IpfPxtKGvtEzBHUVOESnEQ2iiIszlcP9IkWvqX7Bc4a31KhnCUKMCxsDmrJ37T0xZAoWwxzBaVcAHa4v_q6p9TJfsXuS56FHhmzIulHtKd5VqUKoMu-SKyZGjZFFfm8h4MbR9B4S7LEGo1fgczfZobdDYXIdcJ0OvqME4W4phWXR',
        destaque: true,
        exemplo: true
    },
    {
        id: 'bolo-de-cacau-intenso',
        categoria: 'bolos-festa',
        nome: 'Bolo de Cacau Intenso',
        descricao: 'Camadas de cacau com ganache aveludada — exemplo de bolo de festa em versão mais sóbria, sem decoração cenográfica.',
        preco: 150.00,
        aPartirDe: true,
        imagem: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOANxrIuJqv_EJGYExKJ_gAb7f4M4hr-6HxhKhG5KUXuLYO1bfOrU0MxEYBZXPVsaupckJOXlaFwFIKL4bZizINXhex2bytJwFB4tmiM3122G46rHK8GI6R35jwB70GH8EQ5P87tLqQe5l3KYBb4ZfARTN6tiCO8zfcSBenuxqBn_I-Hn_85MO31iHpJb6yr3b7bpN_9Eu43XhYGvWLtpHi-PLiGmA_KQprZBkV4_IRKp1Zn5tbXbG',
        destaque: false,
        exemplo: true
    },
    {
        id: 'bolo-naked-cake',
        categoria: 'bolos-festa',
        nome: 'Naked Cake',
        descricao: 'Bolo com cobertura parcial, recheio à mostra entre as camadas e finalização com frutas ou flores. Exemplo de variação de estilo — sem foto real ainda.',
        preco: 160.00,
        aPartirDe: true,
        imagem: null,
        destaque: false,
        exemplo: true
    },
    {
        id: 'macarons-sortidos',
        categoria: 'doces-finos',
        nome: 'Macarons Sortidos (caixa)',
        descricao: 'Seleção de macarons em cores e sabores variados, para presente ou consumo próprio. Sabores reais e tamanho da caixa a definir com a confeitaria.',
        preco: 45.00,
        aPartirDe: true,
        imagem: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxaiL_RIqUlPSsl-fJir6tDXXbOL_E5Brlaq6_CmmeBBDe9SUl0XN0ofkeYUzPF85eDAjXWdKXhc5HY_navNrhIP0eIUHi5DOEfyxb7j5U-3rHgpfmzlS-xbGOr9iAL6SZT_mhDWo_AYDtoPLy3mIat9Px1fxtZjqXw1ISWZJfGpNQXsRjUvKeHaoWpZrFpgCtwULytqSV5EZz8jYsFk3vTkerNx-XaZ234qUMKRaNp8FT0L_v-2_g',
        destaque: true,
        exemplo: true
    },
    {
        id: 'trufas-artesanais',
        categoria: 'doces-finos',
        nome: 'Trufas Artesanais (caixa)',
        descricao: 'Trufas finas em chocolate, feitas à mão — ótimas para presentear. Sabores e composição da caixa reais a definir com a confeitaria.',
        preco: 38.00,
        aPartirDe: true,
        imagem: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvltkGGw_N-8DIaoMwxe0FdNuwaEwyFnbuqVOYqlU20ZMEM8VNGoB5tqIcc4synQ8OdhzofbadwDFdRoQ5UeDvHgwfx6P5LVro7XbtRiRCSiH1mez9rpNLQF8s0Iqpm6Uzs94qdnybCIeguun-zWeJr5JP075HF6WW_CpwqC8n6-q8pi7xqdsWAl0al-gZyq5jZ_fhWEoKYooLc7OrcXocKXsg1-t_iO5NbQ5pi-JOSAE3VxrvwS-d',
        destaque: false,
        exemplo: true
    },
    {
        id: 'torta-frutas-vermelhas',
        categoria: 'doces-finos',
        nome: 'Torta de Frutas Vermelhas',
        descricao: 'Massa amanteigada, creme e frutas vermelhas frescas. Exemplo de doce fino individual ou para compartilhar.',
        preco: 55.00,
        aPartirDe: true,
        imagem: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4_DZUmdj7F_h_EByNM3r_RY11SbrFOFmIG8T082FFY03AHeCw7cU4IZlMKpaC-lqu0K5koAku9vNygJP2obJz-kkSN3ekSUkiuyMyc81LhUn8kw-wEoH-NX45-kNmTBBz54PxfPgcSVJLR34gYXQQRBi0zTo7QjWM8CSXHANA5uOl2o7gBa-_34Xoeq28O7vMAoXBrv3oREUiAje-j7QCAV0m2Pfwt6Dmdz9YJpnxg5__mh75VqEj',
        destaque: false,
        exemplo: true
    },
    {
        id: 'caixa-brigadeiros-gourmet',
        categoria: 'doces-finos',
        nome: 'Caixa de Brigadeiros Gourmet',
        descricao: 'Brigadeiros artesanais em sabores variados, em caixa para presente. Exemplo de item de doces finos — sem foto real ainda.',
        preco: 32.00,
        aPartirDe: true,
        imagem: null,
        destaque: false,
        exemplo: true
    }
];
