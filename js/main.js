// B Confeitaria — vitrine digital (sem carrinho, sem sacola).
// Cada card tem um botão "Peça pelo WhatsApp" que abre uma conversa
// já preenchida com o nome do doce/bolo. Nada é acumulado, não existe checkout.

// (62) 99900-3845 — confirmado na bio do Instagram @bconfeitaria como
// contato da confeiteira Bruna Saddi. Não foi possível abrir uma conversa de
// teste no wa.me pra confirmar 100% que é WhatsApp Business ativo — validar
// com a cliente antes de publicar de verdade.
const WHATSAPP_NUMBER = '5562999003845';
const INSTAGRAM_URL = 'https://instagram.com/bconfeitaria';

const WHATSAPP_ICON_SVG = '<svg aria-hidden="true" class="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path></svg>';

function pedirPeloWhatsapp(produtoId) {
    const produto = window.PRODUTOS.find(p => p.id === produtoId);
    if (!produto) return;
    const texto = encodeURIComponent(`Olá! Vim pelo site da B Confeitaria e gostaria de encomendar: ${produto.nome}`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${texto}`, '_blank');
}

function abrirWhatsappGenerico(mensagem) {
    const texto = encodeURIComponent(mensagem || 'Olá! Vim pelo site da B Confeitaria e gostaria de saber mais sobre os bolos e doces.');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${texto}`, '_blank');
}

function abrirInstagram() {
    window.open(INSTAGRAM_URL, '_blank');
}

function irParaContato() {
    const footer = document.getElementById('footer-contato');
    if (footer) footer.scrollIntoView({ behavior: 'smooth' });
}

function irParaCatalogo() {
    const catalogo = document.getElementById('catalogo-container');
    if (catalogo) catalogo.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
    renderCatalogo();

    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => renderCatalogo(e.target.value));
    }
});

function formatPreco(produto) {
    const valor = `R$ ${produto.preco.toFixed(2).replace('.', ',')}`;
    return produto.aPartirDe ? `A partir de ${valor}` : valor;
}

function renderCatalogo(termoBusca) {
    if (!window.PRODUTOS || !window.CATEGORIAS) {
        console.error('Dados do catálogo não carregados (produtos-data.js)');
        return;
    }
    const catalogoContainer = document.getElementById('catalogo-container');
    if (!catalogoContainer) return;
    catalogoContainer.innerHTML = '';
    const termo = (termoBusca || '').trim().toLowerCase();

    Object.keys(window.CATEGORIAS).forEach((catKey) => {
        const cat = window.CATEGORIAS[catKey];
        let produtos = window.PRODUTOS.filter((p) => p.categoria === catKey);
        if (termo) {
            produtos = produtos.filter((p) =>
                (p.nome || '').toLowerCase().includes(termo) ||
                (p.descricao || '').toLowerCase().includes(termo)
            );
        }
        if (produtos.length === 0) return;

        const section = document.createElement('section');
        section.id = catKey;
        section.className = 'scroll-mt-32';
        section.innerHTML = `
            <div class="mb-4">
                <h2 class="font-headline-md text-headline-md text-primary flex items-center gap-2">
                    <span class="material-symbols-outlined">${cat.icone}</span>
                    ${cat.titulo}
                </h2>
                <p class="font-body-md text-body-md text-on-surface-variant">${cat.descricao}</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter" id="${catKey}-grid"></div>
        `;
        catalogoContainer.appendChild(section);
        const grid = document.getElementById(`${catKey}-grid`);
        produtos.forEach((produto) => grid.appendChild(produto.imagem ? createCardComFoto(produto) : createCardSemFoto(produto)));
    });

    if (catalogoContainer.children.length === 0) {
        catalogoContainer.innerHTML = `
            <div class="flex flex-col items-center justify-center text-center py-16 opacity-70">
                <span class="material-symbols-outlined text-5xl mb-3 text-outline">search_off</span>
                <p class="text-on-surface-variant mb-4">Nenhum item encontrado. Tente outra busca.</p>
                <button onclick="document.getElementById('search-input').value=''; renderCatalogo();" class="text-primary underline font-bold">Limpar busca</button>
            </div>
        `;
    }
}

function createCardComFoto(produto) {
    const card = document.createElement('div');
    card.className = 'glass-surface rounded-xl overflow-hidden shadow-[0_10px_30px_-10px_rgba(78,52,46,0.15)] border border-outline-variant/40 flex flex-col';
    card.innerHTML = `
        <div class="relative aspect-square w-full bg-surface-container-high overflow-hidden">
            <img class="w-full h-full object-cover" src="${produto.imagem}" alt="${produto.nome}">
            <div class="absolute top-3 right-3 bg-secondary-container text-on-secondary-container font-label-md text-label-md px-3 py-1 rounded-full shadow-sm">${formatPreco(produto)}</div>
            ${produto.destaque ? '<div class="absolute top-3 left-3 bg-tertiary-container/90 text-on-tertiary-container font-label-md text-label-md px-2 py-1 rounded-md text-xs backdrop-blur-sm">Destaque</div>' : ''}
        </div>
        <div class="p-4 flex flex-col flex-grow">
            <h3 class="font-headline-sm text-headline-sm text-on-surface mb-1">${produto.nome}</h3>
            <p class="font-body-md text-body-md text-on-surface-variant/80 mb-4 flex-grow">${produto.descricao}</p>
            <button onclick="pedirPeloWhatsapp('${produto.id}')" class="w-full flex items-center justify-center gap-2 bg-primary hover:bg-on-primary-container text-on-primary font-label-md text-label-md py-3 rounded transition-all shadow-sm">
                ${WHATSAPP_ICON_SVG}
                Peça pelo WhatsApp
            </button>
        </div>
    `;
    return card;
}

function createCardSemFoto(produto) {
    const card = document.createElement('div');
    card.className = 'glass-surface rounded-xl p-4 shadow-[0_10px_30px_-10px_rgba(78,52,46,0.15)] border border-outline-variant/40 flex flex-col';
    card.innerHTML = `
        <div class="flex justify-between items-start gap-3 mb-1">
            <h3 class="font-headline-sm text-headline-sm text-on-surface">${produto.nome}</h3>
            <span class="shrink-0 bg-secondary-container text-on-secondary-container font-label-md text-label-md px-3 py-1 rounded-full shadow-sm whitespace-nowrap">${formatPreco(produto)}</span>
        </div>
        ${produto.destaque ? '<span class="inline-block w-max mb-2 bg-tertiary-container/30 text-tertiary font-label-md text-label-md px-2 py-1 rounded-md text-xs">Destaque</span>' : ''}
        <p class="font-body-md text-body-md text-on-surface-variant/80 mb-4 flex-grow">${produto.descricao}</p>
        <button onclick="pedirPeloWhatsapp('${produto.id}')" class="w-full flex items-center justify-center gap-2 bg-primary hover:bg-on-primary-container text-on-primary font-label-md text-label-md py-3 rounded transition-all shadow-sm">
            ${WHATSAPP_ICON_SVG}
            Peça pelo WhatsApp
        </button>
    `;
    return card;
}
