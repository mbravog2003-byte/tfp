/*
 * search-page.js — Página de búsqueda (search.html)
 *
 * Qué hace este archivo:
 * 1. Lee el texto buscado desde la URL (?q=...)
 * 2. Filtra los libros por título o autor
 * 3. Rellena dos bloques: "Resultados de búsqueda" y "Todos los libros"
 *    (el libro con numero 23 no se muestra en la lista)
 */

(function () {
  'use strict';

  // ——— Config ———
  const COVER_IMAGE_PATH = typeof IMG_PORTADA_BASE !== 'undefined' ? IMG_PORTADA_BASE : 'img/';
  const EXCLUDED_BOOK_NUMBER = 23; // This book is not shown on the search page

  /**
   * Returns the full URL for a book cover.
   * If the book already has a path (e.g. "img/1.webp"), returns it; otherwise prepends the folder.
   */
  function getCoverPath(book) {
    const fileName = book.imgPortada || '';
    if (fileName.indexOf('/') !== -1) return fileName;
    return COVER_IMAGE_PATH + fileName;
  }

  /**
   * Escapes special characters so text can be safely inserted into HTML.
   */
  function escapeForHtml(text) {
    if (!text) return '';
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /**
   * Builds the HTML for a book card (image + "Add to list" link).
   */
  function createBookCardHtml(book) {
    const bookNumber = book.numero != null ? book.numero : '';
    const coverPath = getCoverPath(book);
    const title = book.titulo || '';
    const altText = title ? title + ' Book Cover' : 'Book Cover';

    return '<article class="book-card" data-numero="' + escapeForHtml(String(bookNumber)) + '">' +
      '<img src="' + escapeForHtml(coverPath) + '" alt="' + escapeForHtml(altText) + '">' +
      '<a href="#reading-list-overlay">Add to list</a>' +
      '</article>';
  }

  /**
   * Filters the book list: only books whose title or author contains the search text.
   * Search is case-insensitive.
   */
  function filterByText(bookList, searchText) {
    if (!bookList || bookList.length === 0) return [];
    const query = (searchText || '').trim().toLowerCase();
    if (query === '') return [];

    return bookList.filter(function (book) {
      const title = String(book.titulo || '').toLowerCase();
      const author = String(book.autoria || '').toLowerCase();
      const titleMatches = title.indexOf(query) !== -1;
      const authorMatches = author.indexOf(query) !== -1;
      return titleMatches || authorMatches;
    });
  }

  /**
   * Main function: fills the two grids (results and all books).
   */
  function run() {
    // 1) Find the HTML elements where we will write
    const searchInput = document.getElementById('search-input');
    const resultsSection = document.getElementById('search-results-section');
    const resultsHeading = document.getElementById('search-results-heading');
    const resultsGrid = document.getElementById('search-results-grid');
    const allBooksGrid = document.getElementById('all-books-grid');

    if (!resultsGrid || !allBooksGrid) return;
    if (typeof libros === 'undefined') return;

    // 2) Read search text from URL (?q=...) and put it in the input
    let searchText = '';
    try {
      const q = new URLSearchParams(window.location.search).get('q');
      searchText = q != null ? String(q).trim() : '';
    } catch (e) {}
    if (searchInput) searchInput.value = searchText;

    // 3) Book list to show: all except the excluded one (number 23)
    const visibleBooks = libros.filter(function (book) {
      return book.numero !== EXCLUDED_BOOK_NUMBER;
    });

    // 4) Filter by title/author if there is a search
    const matchingBooks = filterByText(visibleBooks, searchText);

    // 5) Fill the grids with HTML
    resultsGrid.innerHTML = matchingBooks.map(createBookCardHtml).join('');
    allBooksGrid.innerHTML = visibleBooks.map(createBookCardHtml).join('');

    // 6) Show or hide "Search results" section depending on whether there is a search
    if (searchText) {
      resultsSection.style.display = '';
      resultsHeading.textContent = 'Search results';
    } else {
      resultsSection.style.display = 'none';
    }

    // 7) Clear button for the input (only exists on search.html)
    const clearBtn = document.getElementById('search-clear-btn');
    if (clearBtn && searchInput) {
      function updateClearButtonVisibility() {
        clearBtn.style.visibility = searchInput.value ? 'visible' : 'hidden';
      }
      updateClearButtonVisibility();
      clearBtn.addEventListener('click', function () {
        searchInput.value = '';
        searchInput.focus();
        updateClearButtonVisibility();
      });
      searchInput.addEventListener('input', updateClearButtonVisibility);
    }
  }

  // Run when the HTML is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();
