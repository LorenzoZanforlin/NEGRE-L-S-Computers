/**
 * NEGRE-LÁS COMPUTERS — catálogo e interações.
 * JavaScript puro; funciona com index.html e style.css.
 * Preços são estimativas para simulação, não ofertas finais.
 */
'use strict';

// Configure um e-mail comercial real para habilitar o formulário.
const EMAIL_COMERCIAL = 'lorenzo.zanforlin@portalsesisp.org.br';

// 1. Catálogo de produtos
const products = [
  {
    id:1,
    name:'AMD Ryzen 7 5700X',
    category:'Processadores',
    brand:'AMD',
    min:900,
    max:1300,
    description:'Processador com 8 núcleos, 16 threads, arquitetura Zen 3 e soquete AM4.',
    benefits:'Bom desempenho em jogos, multitarefa e edição de vídeos.',
    difference:'Ótimo equilíbrio entre desempenho e custo para PCs AM4.',
    audience:'Gamers, criadores de conteúdo e usuários avançados.',
    extra:'TDP de 65 W; não possui vídeo integrado.',
    image: 'img/ryzen-5700x.png'
},
  {
    id:2,
    name:'AMD Ryzen 7 7800X3D',
    category:'Processadores',
    brand:'AMD',
    min:2000,
    max:2800,
    description:'Processador com 8 núcleos, 16 threads e tecnologia 3D V-Cache.',
    benefits:'Taxas de quadros elevadas e excelente desempenho em jogos.',
    difference:'Cache L3 de 96 MB e plataforma AM5.',
    audience:'Gamers competitivos e entusiastas.',
    extra:'TDP de 120 W; utiliza memória DDR5.',
    image: 'img/ryzen-7800x3d.png'
},
  {
    id:3,
    name:'Intel Core i7-14700KF',
    category:'Processadores',
    brand:'Intel',
    min:2200,
    max:3000,
    description:'Processador de alto desempenho para jogos e aplicações exigentes.',
    benefits:'Alto desempenho em jogos e aplicações exigentes.',
    difference:'Muitos núcleos e bom desempenho em tarefas paralelas.',
    audience:'Gamers e profissionais.',
    extra:'Modelo a confirmar; o sufixo KF indica ausência de vídeo integrado.',
    image: 'img/intel-i7-14700kf.png',
    unconfirmed:true
},
  {
    id:4,
    name:'Intel Core i5-12400F',
    category:'Processadores',
    brand:'Intel',
    min:600,
    max:900,
    description:'Processador com 6 núcleos, 12 threads e soquete LGA1700.',
    benefits:'Desempenho sólido em jogos e tarefas cotidianas.',
    difference:'Boa relação entre preço e desempenho.',
    audience:'Estudantes, usuários domésticos e gamers.',
    extra:'Potência base de 65 W; não possui vídeo integrado.',
    image: 'img/intel-i5-12400f.png'
},
  {
    id:5,
    name:'NVIDIA GeForce RTX 5060',
    category:'Placas de vídeo',
    brand:'NVIDIA',
    min:2000,
    max:2800,
    description:'Placa de vídeo com 8 GB GDDR7, voltada para jogos modernos.',
    benefits:'Jogos em Full HD e tecnologias de aprimoramento de imagem.',
    difference:'Suporte a DLSS 4 e recursos de IA da NVIDIA.',
    audience:'Gamers que buscam bom desempenho.',
    extra:'O desempenho depende do jogo, resolução e demais componentes.',
    image: 'img/rtx-5060.png'
},
  {
    id:6,
    name:'NVIDIA GeForce RTX 4090',
    category:'Placas de vídeo',
    brand:'NVIDIA',
    min:10000,
    max:16000,
    description:'Placa de vídeo de alto desempenho com 24 GB GDDR6X.',
    benefits:'Jogos em 4K, renderização 3D, edição de vídeo e IA.',
    difference:'Grande memória e alto poder de processamento gráfico.',
    audience:'Entusiastas e profissionais criativos.',
    extra:'Exige fonte adequada, gabinete espaçoso e boa refrigeração.',
    image: 'img/rtx-4090.png'
},
  {
    id:7,
    name:'Kingston NV2 1 TB NVMe',
    category:'Armazenamento',
    brand:'Kingston',
    min:350,
    max:550,
    description:'SSD M.2 NVMe de 1 TB para arquivos, programas e jogos.',
    benefits:'Inicialização e carregamentos rápidos.',
    difference:'Formato compacto e conexão PCIe 4.0 NVMe.',
    audience:'Gamers, estudantes e profissionais.',
    extra:'Formato M.2 2280; verifique compatibilidade da placa-mãe.',
    image: 'img/kingston-nv2.png'
},
  {
    id:8,
    name:'Gigabyte SSD 480 GB',
    category:'Armazenamento',
    brand:'Gigabyte',
    min:180,
    max:300,
    description:'SSD de 480 GB, provável formato SATA de 2,5 polegadas.',
    benefits:'Melhora inicialização e abertura de programas em comparação com HD.',
    difference:'Instalação simples em computadores compatíveis.',
    audience:'Estudantes e usuários domésticos.',
    extra:'Confirmar modelo e especificações; referência GP-GSTFS31480GNTD.',
    image: 'img/gigabyte-480gb.png',
    unconfirmed:true
},
  {
    id:9,
    name:'Monitor Gamer OLED 240 Hz',
    category:'Monitores',
    brand:'LG (referência)',
    min:3000,
    max:6500,
    description:'Monitor gamer com painel OLED e atualização de 240 Hz.',
    benefits:'Movimentos fluidos, excelente contraste e resposta rápida.',
    difference:'Qualidade de imagem para jogos competitivos e detalhados.',
    audience:'Jogadores, streamers e entusiastas.',
    extra:'Referência visual: LG UltraGear 27GR95QE-B. Tamanho e resolução dependem do modelo.',
    image: 'img/monitor-oled-240hz.png',
    unconfirmed:true
},
  {
    id:10,
    name:'Logitech G PRO X SUPERLIGHT 2',
    category:'Mouses',
    brand:'Logitech',
    min:700,
    max:1100,
    description:'Mouse gamer sem fio de alta precisão (modelo de referência).',
    benefits:'Precisão, baixa latência e movimentos rápidos.',
    difference:'Design leve para jogos competitivos.',
    audience:'Jogadores de FPS e e-sports.',
    extra:'Modelo originalmente solicitado como “Superstrike 2”; confirmar identificação.',
    image: 'img/logitech-superlight2.png',
    unconfirmed:true
},
  {
    id:11,
    name:'SU66 MAX Hall Effect 65% RGB',
    category:'Teclados',
    brand:'Everglide (referência)',
    min:null,
    max:null,
    description:'Teclado gamer compacto de alta performance.',
    benefits:'Recursos voltados à precisão e experiência em jogos, sujeitos a confirmação.',
    difference:'Tecnologia Hall Effect e iluminação RGB, conforme modelo.',
    audience:'Gamers e usuários de teclados compactos.',
    extra:'Confirmar fabricante, modelo e especificações. Preço sob consulta.',
    image: 'img/teclado-su66-max.png',
    unconfirmed:true
  }
];


// 2. Utilitários e estado
const $ = (selector) => document.querySelector(selector);
const currency = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
const formatMoney = (value) => currency.format(value);
const midpoint = (product) => product.min == null ? null : (product.min + product.max) / 2;
const priceText = (product) => product.min == null
  ? 'Sob consulta'
  : `${formatMoney(product.min)} – ${formatMoney(product.max)}`;

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[character]);
}

let activeCategory = 'Todos';
let cart = [];
let toastTimeout;
let activeDialog = null;
let previousFocus = null;

try {
  const saved = JSON.parse(localStorage.getItem('negreLasCart') || '[]');
  if (Array.isArray(saved)) {
    cart = saved.filter((item) =>
      products.some((product) => product.id === item.id) &&
      Number.isInteger(item.qty) && item.qty >= 1 && item.qty <= 99
    );
  }
} catch (_) {
  cart = [];
}

function toast(message) {
  const element = $('#toast');
  element.textContent = message;
  element.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => element.classList.remove('show'), 2900);
}

// 3. Catálogo: filtros, pesquisa e ordenação
function renderFilters() {
  const categories = ['Todos', ...new Set(products.map((product) => product.category))];
  $('#filters').innerHTML = categories.map((category) => `
    <button class="filter-btn ${activeCategory === category ? 'active' : ''}"
      data-category="${escapeHTML(category)}"
      aria-pressed="${activeCategory === category}">
      ${escapeHTML(category)}
    </button>
  `).join('');
}

function renderProducts() {
  const term = $('#searchInput').value.trim().toLocaleLowerCase('pt-BR');
  const sort = $('#sortSelect').value;
  const visible = products.filter((product) => {
    const matchesCategory = activeCategory === 'Todos' || product.category === activeCategory;
    const searchable = [product.name, product.category, product.brand, product.description]
      .join(' ').toLocaleLowerCase('pt-BR');
    return matchesCategory && searchable.includes(term);
  });

  if (sort === 'low') visible.sort((a, b) => (midpoint(a) ?? Infinity) - (midpoint(b) ?? Infinity));
  if (sort === 'high') visible.sort((a, b) => (midpoint(b) ?? -Infinity) - (midpoint(a) ?? -Infinity));
  if (sort === 'name') visible.sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));

  $('#productsGrid').innerHTML = visible.map((product) => `
    <article class="product-card">
      <div class="product-image">
        <img src="${escapeHTML(product.image)}"
          alt="Ilustração de ${escapeHTML(product.name)}" loading="lazy">
        <span class="product-badge">${product.unconfirmed ? 'MODELO A CONFIRMAR' : 'ILUSTRAÇÃO'}</span>
      </div>
      <div class="product-info">
        <span class="product-category">${escapeHTML(product.category)}</span>
        <h3>${escapeHTML(product.name)}</h3>
        <p>${escapeHTML(product.description)}</p>
        <span class="price-label">${product.min == null ? 'Preço' : 'Faixa de preço estimada'}</span>
        <strong class="price">${escapeHTML(priceText(product))}</strong>
        <div class="product-actions">
          <button class="details-btn" data-details="${product.id}">Ver detalhes</button>
          <button class="add-btn" data-add="${product.id}">+ Carrinho</button>
        </div>
      </div>
    </article>
  `).join('');
  $('#emptyState').hidden = visible.length > 0;
}

// 4. Carrinho: adicionar, atualizar e persistir
function saveCart() {
  try { localStorage.setItem('negreLasCart', JSON.stringify(cart)); }
  catch (_) { /* O carrinho ainda funciona sem armazenamento persistente. */ }
  renderCart();
}

function addToCart(id) {
  const product = products.find((item) => item.id === id);
  if (!product) return;
  const item = cart.find((entry) => entry.id === id);
  if (item) {
    if (item.qty >= 99) return toast('Limite de 99 unidades por produto.');
    item.qty += 1;
  } else {
    cart.push({ id, qty: 1 });
  }
  saveCart();
  toast('Produto adicionado ao carrinho!');
}

function changeQty(id, delta) {
  const item = cart.find((entry) => entry.id === id);
  if (!item) return;
  item.qty = Math.min(item.qty + delta, 99);
  if (item.qty <= 0) cart = cart.filter((entry) => entry.id !== id);
  saveCart();
}

function renderCart() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  $('#cartCount').textContent = count;
  $('#cartItems').innerHTML = cart.length ? cart.map((item) => {
    const product = products.find((entry) => entry.id === item.id);
    if (!product) return '';
    const unitPrice = midpoint(product);
    return `
      <div class="cart-item">
        <img src="${escapeHTML(product.image)}" alt="Ilustração de ${escapeHTML(product.name)}">
        <div>
          <h3>${escapeHTML(product.name)}</h3>
          <small>${unitPrice == null ? 'Sob consulta' : `${formatMoney(unitPrice)} (estimado/un.)`}</small>
          <div class="quantity">
            <button data-qty="${product.id}" data-delta="-1"
              aria-label="Diminuir quantidade de ${escapeHTML(product.name)}">−</button>
            <span>${item.qty}</span>
            <button data-qty="${product.id}" data-delta="1"
              aria-label="Aumentar quantidade de ${escapeHTML(product.name)}">+</button>
            <button class="remove" data-remove="${product.id}"
              aria-label="Remover ${escapeHTML(product.name)}">Remover</button>
          </div>
        </div>
      </div>
    `;
  }).join('') : '<p>Seu carrinho está vazio. Explore os produtos!</p>';

  const total = cart.reduce((sum, item) => {
    const product = products.find((entry) => entry.id === item.id);
    return sum + (midpoint(product) ?? 0) * item.qty;
  }, 0);
  $('#cartTotal').textContent = formatMoney(total);
  $('#requestQuote').disabled = cart.length === 0;
}

// 5. Modal de produtos e painel lateral
function openDialog(element) {
  previousFocus = document.activeElement;
  activeDialog = element;
  $('#overlay').hidden = false;
  document.body.classList.add('locked');
  element.inert = false;
  element.setAttribute('aria-hidden', 'false');
  element.classList.add('open');
  (element.querySelector('.close-button') || element).focus();
}

function closeDialog() {
  if (!activeDialog) return;
  activeDialog.classList.remove('open');
  activeDialog.setAttribute('aria-hidden', 'true');
  activeDialog.inert = true;
  $('#overlay').hidden = true;
  document.body.classList.remove('locked');
  activeDialog = null;
  if (previousFocus?.isConnected) previousFocus.focus();
}

function showDetails(id) {
  const product = products.find((entry) => entry.id === id);
  if (!product) return;
  $('#modalContent').innerHTML = `
    <div class="modal-grid">
      <img src="${escapeHTML(product.image)}" alt="Ilustração de ${escapeHTML(product.name)}">
      <div>
        <span class="kicker">${escapeHTML(product.category)}</span>
        <h2>${escapeHTML(product.name)}</h2>
        ${product.unconfirmed ? '<p><strong>⚠ Modelo ou especificações a confirmar.</strong></p>' : ''}
        <p>${escapeHTML(product.description)}</p>
        <p><strong>Benefícios:</strong> ${escapeHTML(product.benefits)}</p>
        <p><strong>Diferenciais:</strong> ${escapeHTML(product.difference)}</p>
        <p><strong>Público-alvo:</strong> ${escapeHTML(product.audience)}</p>
        <p><strong>Informações adicionais:</strong> ${escapeHTML(product.extra)}</p>
        <p><strong>Preço estimado:</strong> ${escapeHTML(priceText(product))}</p>
        <p><small>Imagem ilustrativa, não fotografia do produto.</small></p>
        <button class="btn btn-primary" data-modal-add="${product.id}">Adicionar ao carrinho</button>
      </div>
    </div>
  `;
  openDialog($('#productModal'));
}

// 6. Solicitação de orçamento (sem pagamentos reais)
function fallbackCopy(message) {
  const textarea = document.createElement('textarea');
  textarea.value = message;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.append(textarea);
  textarea.select();
  let copied = false;
  try { copied = document.execCommand('copy'); } catch (_) { /* fallback abaixo */ }
  textarea.remove();
  if (copied) toast('Pedido copiado! Cole no WhatsApp ou e-mail.');
  else window.prompt('Copie seu pedido de orçamento:', message);
}

function buildQuote() {
  if (!cart.length) return toast('Adicione produtos ao carrinho primeiro.');
  const lines = [
    'Olá! Gostaria de solicitar um orçamento na NEGRE-LÁS COMPUTERS:',
    '',
    ...cart.map((item) => {
      const product = products.find((entry) => entry.id === item.id);
      const price = midpoint(product);
      return `${item.qty}x ${product.name} — ${price == null ? 'preço sob consulta' : `referência ${formatMoney(price)}/un.`}`;
    }),
    '',
    `Subtotal estimado (itens com referência de preço): ${$('#cartTotal').textContent}`,
    'Valores sujeitos a confirmação de disponibilidade e preço.'
  ];
  const message = lines.join('\n');
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(message)
      .then(() => toast('Pedido copiado! Cole no WhatsApp ou e-mail.'))
      .catch(() => fallbackCopy(message));
  } else {
    fallbackCopy(message);
  }
}

// 7. Inicialização e eventos da interface
function setup() {
  renderFilters();
  renderProducts();
  renderCart();

  $('#filters').addEventListener('click', (event) => {
    const button = event.target.closest('[data-category]');
    if (!button) return;
    activeCategory = button.dataset.category;
    renderFilters();
    renderProducts();
  });
  $('#searchInput').addEventListener('input', renderProducts);
  $('#sortSelect').addEventListener('change', renderProducts);

  $('#productsGrid').addEventListener('click', (event) => {
    const add = event.target.closest('[data-add]');
    const details = event.target.closest('[data-details]');
    if (add) addToCart(Number(add.dataset.add));
    if (details) showDetails(Number(details.dataset.details));
  });
  $('#modalContent').addEventListener('click', (event) => {
    const button = event.target.closest('[data-modal-add]');
    if (!button) return;
    addToCart(Number(button.dataset.modalAdd));
    closeDialog();
  });
  $('#cartItems').addEventListener('click', (event) => {
    const quantity = event.target.closest('[data-qty]');
    const remove = event.target.closest('[data-remove]');
    if (quantity) changeQty(Number(quantity.dataset.qty), Number(quantity.dataset.delta));
    if (remove) {
      cart = cart.filter((entry) => entry.id !== Number(remove.dataset.remove));
      saveCart();
    }
  });

  $('#openCart').addEventListener('click', () => openDialog($('#cartPanel')));
  $('#closeCart').addEventListener('click', closeDialog);
  $('#closeModal').addEventListener('click', closeDialog);
  $('#overlay').addEventListener('click', closeDialog);
  $('#requestQuote').addEventListener('click', buildQuote);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeDialog();
    if (event.key !== 'Tab' || !activeDialog) return;
    const focusable = [...activeDialog.querySelectorAll(
      'button:not([disabled]), a[href], input, textarea, select, [tabindex]:not([tabindex="-1"])'
    )].filter((element) => element.getClientRects().length);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  document.querySelectorAll('.expand-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const section = document.getElementById(button.dataset.expand);
      section.hidden = !section.hidden;
      button.setAttribute('aria-expanded', String(!section.hidden));
      button.textContent = section.hidden ? 'Saiba mais +' : 'Mostrar menos −';
    });
  });

  const menu = $('#menuToggle');
  menu.addEventListener('click', () => {
    const open = $('#navLinks').classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  });
  document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => {
      $('#navLinks').classList.remove('open');
      menu.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-label', 'Abrir menu');
    });
  });

  $('#contactForm').addEventListener('submit', (event) => {
    event.preventDefault();
    if (!EMAIL_COMERCIAL) {
      toast('Configure EMAIL_COMERCIAL no script.js para habilitar o contato.');
      return;
    }
    const subject = $('#contactSubject').value.trim();
    const body = `Nome: ${$('#contactName').value.trim()}\n` +
      `E-mail: ${$('#contactEmail').value.trim()}\n\n` +
      $('#contactMessage').value.trim();
    window.location.href = `mailto:${EMAIL_COMERCIAL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
  } else {
    document.querySelectorAll('.reveal').forEach((element) => element.classList.add('visible'));
  }
}

document.addEventListener('DOMContentLoaded', setup);
