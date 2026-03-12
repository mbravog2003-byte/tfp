/*
  Orden del archivo:
  1. Carrusel (Swiper) en la página de inicio.
  2. Overlays: guardar y restaurar scroll al abrir/cerrar.
  3. Lista "Want to read": guardar en localStorage y mostrar en overlay.
  4. Profile: pintar libros guardados y permitir borrarlos.
  5. Review: al clic en un tag del formulario, marcar/desmarcar.
*/

// ========== 1. Swiper (carrusel en index) ==========
document.addEventListener("DOMContentLoaded", () => {

  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,

    autoplay: {
        delay: 2500,              // 2.5 segundos
        disableOnInteraction: false,
        pauseOnMouseEnter: true
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

});


// ========== Ruta base para portadas (solo nombre de archivo en data.js; aquí se define la carpeta para transportar el proyecto) ==========
const IMG_PORTADA_BASE = 'img/';

// ========== 2. Overlays: guardar scroll al abrir y restaurarlo al cerrar (X o cierre programático) ==========
const ID_READING_LIST_OVERLAY = 'reading-list-overlay';
const ID_REVIEW_FORM_OVERLAY = 'review-form-overlay';
const LINK_READING_LIST_OVERLAY = '#' + ID_READING_LIST_OVERLAY;
const LINK_REVIEW_FORM_OVERLAY = '#' + ID_REVIEW_FORM_OVERLAY;

function alAbrirOverlay(evento) {
  const selector = 'a[href="' + LINK_READING_LIST_OVERLAY + '"], a[href="' + LINK_REVIEW_FORM_OVERLAY + '"], a[href="#search-overlay"]';
  const openLink = evento.target.closest && evento.target.closest(selector);
  if (!openLink) return;
  window._scrollBeforeOverlay = window.scrollY || window.pageYOffset;
  const href = openLink.getAttribute('href') || '';
  if (href === LINK_READING_LIST_OVERLAY) {
    const el = document.getElementById(ID_READING_LIST_OVERLAY);
    if (el) { el.style.opacity = ''; el.style.visibility = ''; el.style.pointerEvents = ''; }
  } else if (href === LINK_REVIEW_FORM_OVERLAY) {
    const el = document.getElementById(ID_REVIEW_FORM_OVERLAY);
    if (el) { el.style.opacity = ''; el.style.visibility = ''; el.style.pointerEvents = ''; }
  } else if (href === '#search-overlay') {
    const el = document.getElementById('search-overlay');
    if (el) {
      el.style.opacity = '';
      el.style.visibility = '';
      el.style.pointerEvents = '';
      const input = el.querySelector('.search-overlay-input');
      if (input) setTimeout(function () { input.focus(); }, 80);
    }
  }
}

function alCerrarOverlayConCruz(evento) {
  const cross = evento.target.closest && evento.target.closest('a.cross-icon');
  if (!cross) return;
  const overlay = cross.closest && cross.closest('.reading-list-overlay, .form-overlay, .search-overlay');
  if (!overlay) return;
  evento.preventDefault();
  overlay.style.opacity = '0';
  overlay.style.visibility = 'hidden';
  overlay.style.pointerEvents = 'none';
  const scrollGuardado = window._scrollBeforeOverlay;
  const scrollActual = window.scrollY || window.pageYOffset;
  const scrollY = scrollGuardado != null ? scrollGuardado : scrollActual;
  const urlSinHash = window.location.pathname + window.location.search;
  if (history.replaceState) {
    history.replaceState(null, '', urlSinHash);
  } else {
    window.location.hash = '';
  }
  window.scrollTo(0, scrollY);
}

document.addEventListener('click', alAbrirOverlay, true);
document.addEventListener('click', alCerrarOverlayConCruz);

function alCerrarSearchOverlayAlClicFondo(evento) {
  const overlay = document.getElementById('search-overlay');
  if (!overlay || !overlay.classList.contains('search-overlay')) return;
  if (evento.target !== overlay) return;
  evento.preventDefault();
  overlay.style.opacity = '0';
  overlay.style.visibility = 'hidden';
  overlay.style.pointerEvents = 'none';
  const scrollGuardado = window._scrollBeforeOverlay;
  const scrollActual = window.scrollY || window.pageYOffset;
  const scrollY = scrollGuardado != null ? scrollGuardado : scrollActual;
  if (history.replaceState) history.replaceState(null, '', window.location.pathname + window.location.search);
  else window.location.hash = '';
  window.scrollTo(0, scrollY);
}
document.addEventListener('click', alCerrarSearchOverlayAlClicFondo, true);

// ========== 3. Want to read: lista en localStorage (compartido por overlay y profile) ==========
const WANT_TO_READ_STORAGE_KEY = 'wantToReadBooks';
const LIST_NAME_WANT_TO_READ = 'Want to read';

function getWantToReadFromStorage() {
  try {
    const raw = localStorage.getItem(WANT_TO_READ_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveWantToRead(arr) {
  try {
    localStorage.setItem(WANT_TO_READ_STORAGE_KEY, JSON.stringify(arr));
  } catch (e) {}
}


// ========== 3 (cont.). Want to read: añadir libros desde el overlay (index y book-page). Requiere data.js (libros). ==========
// El siguiente código solo se ejecuta en index y book-page, donde existe la variable "libros" (data.js).
// En Profile no se carga data.js, así que "libros" no existe; por eso se comprueba antes.
if (typeof libros !== 'undefined') {

  function getBookByNumero(numero) {
    const n = parseInt(numero, 10);
    if (isNaN(n)) return null;
    return libros.find(function (b) { return b.numero === n; }) || null;
  }

  function getSelectedNumero(link) {
    const card = link.closest && link.closest('.book-card');
    if (card) {
      const num = card.getAttribute('data-numero');
      if (num !== null && num !== '') return parseInt(num, 10);
    }
    const container = link.closest && link.closest('[data-numero]');
    if (container) {
      const num = container.getAttribute('data-numero');
      if (num !== null && num !== '') return parseInt(num, 10);
    }
    return null;
  }

  function addToWantToRead(book) {
    if (!book || !book.imgPortada) return false;
    const list = getWantToReadFromStorage();
    if (list.some(function (b) { return b.numero === book.numero; })) return false;
    list.push({
      numero: book.numero,
      imgPortada: book.imgPortada,
      titulo: book.titulo,
      autoria: book.autoria || '',
      fechaPublicacion: book.fechaPublicacion || '',
      sinopsis: book.sinopsis || ''
    });
    saveWantToRead(list);
    return true;
  }

  function updateOverlayFeedback(overlay, selectedNumero) {
    if (!overlay || selectedNumero == null) return;
    overlay.querySelectorAll('.added-feedback').forEach(function (el) { el.classList.remove('is-visible'); });
    overlay.querySelectorAll('.add-to-list-button a').forEach(function (a) { a.classList.remove('is-disabled'); });
    const list = getWantToReadFromStorage();
    const alreadyAdded = list.some(function (b) { return b.numero === selectedNumero; });
    const rows = overlay.querySelectorAll('.reading-list-item');
    for (let i = 0; i < rows.length; i++) {
      const listNameSpan = rows[i].querySelector('.list-name span');
      if (listNameSpan && listNameSpan.textContent.trim() === LIST_NAME_WANT_TO_READ) {
        const feedback = rows[i].querySelector('.added-feedback');
        const addLink = rows[i].querySelector('.add-to-list-button a');
        if (alreadyAdded) {
          if (feedback) feedback.classList.add('is-visible');
          if (addLink) addLink.classList.add('is-disabled');
        } else {
          if (addLink) addLink.classList.remove('is-disabled');
        }
        break;
      }
    }
  }

  function alClicEnAddToList(evento) {
    const link = evento.target.closest && evento.target.closest('a[href="' + LINK_READING_LIST_OVERLAY + '"]');
    if (!link) return;
    const card = link.closest && link.closest('.book-card');
    const fromCardOrBook = card || link.closest('[data-numero]');
    if (!fromCardOrBook) return;
    const numero = getSelectedNumero(link);
    if (numero != null) window._selectedBookNumero = numero;
    const overlay = document.getElementById(ID_READING_LIST_OVERLAY);
    if (overlay) updateOverlayFeedback(overlay, numero);
  }

  function alClicEnWantToRead(evento) {
    const link = evento.target.closest && evento.target.closest('a[href="' + LINK_READING_LIST_OVERLAY + '"]');
    if (!link) return;
    if (link.classList.contains('is-disabled')) {
      evento.preventDefault();
      return;
    }
    const overlay = link.closest && link.closest('#' + ID_READING_LIST_OVERLAY);
    if (!overlay) return;
    const item = link.closest && link.closest('.reading-list-item');
    if (!item) return;
    const listNameSpan = item.querySelector('.list-name span');
    const listName = listNameSpan ? listNameSpan.textContent.trim() : '';
    if (listName !== LIST_NAME_WANT_TO_READ) return;
    if (window._selectedBookNumero == null) return;

    evento.preventDefault();
    const scrollGuardado = window._scrollBeforeOverlay;
    const scrollActual = window.scrollY || window.pageYOffset;
    const scrollY = scrollGuardado != null ? scrollGuardado : scrollActual;
    const book = getBookByNumero(window._selectedBookNumero);
    window._selectedBookNumero = null;
    if (book) {
      const saved = addToWantToRead(book);
      if (saved) {
        overlay.querySelectorAll('.added-feedback').forEach(function (el) { el.classList.remove('is-visible'); });
        const feedback = item.querySelector('.added-feedback');
        if (feedback) feedback.classList.add('is-visible');
      }
    }
    if (history.replaceState) history.replaceState(null, '', window.location.pathname + window.location.search);
    else window.location.hash = '';
    window.scrollTo(0, scrollY);
  }

  document.addEventListener('click', alClicEnAddToList);
  document.addEventListener('click', alClicEnWantToRead);
}


// ========== 4. Profile Want to read: pinta libros guardados y permite borrarlos. Escucha storage para actualizar sin recargar. ==========
function formatNumber(n) {
  return n < 10 ? '0' + n : String(n);
}

function borrarLibroDeLaLista(article) {
  const numeroAttr = article.getAttribute('data-numero');
  const bookNumero = numeroAttr !== null && numeroAttr !== '' ? parseInt(numeroAttr, 10) : null;
  if (bookNumero == null) return;
  const list = getWantToReadFromStorage().filter(function (b) { return b.numero !== bookNumero; });
  saveWantToRead(list);
  const prev = article.previousElementSibling;
  if (prev && prev.tagName === 'HR' && prev.classList.contains('reading-list-separator')) {
    prev.remove();
  }
  article.remove();
}

function createArticle(book, index) {
  const num = 4 + index;
  const hr = document.createElement('hr');
  hr.className = 'reading-list-separator';

  const article = document.createElement('article');
  article.className = 'book-list-container';
  article.setAttribute('data-added', 'true');
  article.setAttribute('data-numero', String(book.numero != null ? book.numero : ''));
  article.setAttribute('data-img-portada', book.imgPortada || '');
  article.setAttribute('data-titulo', book.titulo || '');

  article.innerHTML =
    '<div class="book-list">' +
      '<span class="list-number">' + formatNumber(num) + '</span>' +
      '<div class="book-list-book-cover">' +
        '<img src="' + ((book.imgPortada && book.imgPortada.indexOf('/') !== -1) ? book.imgPortada : (IMG_PORTADA_BASE + (book.imgPortada || ''))).replace(/"/g, '&quot;') + '" alt="' + (book.titulo || '').replace(/"/g, '&quot;') + ' Book Cover">' +
      '</div>' +
    '</div>' +
    '<div class="list-actions">' +
      '<div class="list-details">' +
        '<h2>' + (book.titulo || '').replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</h2>' +
        '<p>' + (book.autoria || '').replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</p>' +
        '<p>' + (book.fechaPublicacion || '').replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</p>' +
        '<p class="want-to-read-sinopsis">' + (book.sinopsis || '').replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</p>' +
      '</div>' +
      '<div class="book-list-actions">' +
        '<a href="' + LINK_READING_LIST_OVERLAY + '">Move to list</a>' +
        '<button type="button" class="book-list-button">Delete book</button>' +
      '</div>' +
    '</div>';

  const deleteBtn = article.querySelector('.book-list-button');
  if (deleteBtn) {
    deleteBtn.addEventListener('click', function () {
      borrarLibroDeLaLista(article);
    });
  }

  return { hr: hr, article: article };
}

function renderAddedBooks() {
  const container = document.querySelector('.want-to-read-list .list-container');
  if (!container) return;

  const existingAdded = container.querySelectorAll('[data-added="true"]');
  for (let i = 0; i < existingAdded.length; i++) {
    const el = existingAdded[i];
    const prev = el.previousElementSibling;
    if (prev && prev.tagName === 'HR') prev.remove();
    el.remove();
  }

  const list = getWantToReadFromStorage();
  for (let j = 0; j < list.length; j++) {
    const pair = createArticle(list[j], j);
    container.appendChild(pair.hr);
    container.appendChild(pair.article);
  }
}

function initProfileWantToRead() {
  renderAddedBooks();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initProfileWantToRead);
} else {
  initProfileWantToRead();
}

function alCambiarStorage(evento) {
  if (evento.key === WANT_TO_READ_STORAGE_KEY) {
    renderAddedBooks();
  }
}

window.addEventListener('storage', alCambiarStorage);


// ========== 5. Book-page: review-tags en overlay 2 — al hacer clic, marcar/desmarcar tag ==========
function alClicEnReviewTag(evento) {
  const tag = evento.target && evento.target.closest && evento.target.closest('.review-tag');
  if (!tag) return;
  tag.classList.toggle('is-selected');
}

document.addEventListener('click', alClicEnReviewTag);


// ========== 6. PWA: registro del Service Worker ==========
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('sw.js').then(function (reg) {
      // Registro correcto
    }).catch(function (err) {
      console.warn('Service Worker no registrado:', err);
    });
  });
}
