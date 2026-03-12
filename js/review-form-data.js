/*
  Orden del archivo (formulario de reseña en book-page, overlay 2):
  1. Constantes: clave de localStorage, id del overlay, ids de inputs, títulos de secciones de tags.
  2. Helper el(id): obtener elemento por id.
  3. getReviewFormData: leer formulario y devolver objeto con rating, fechas, tags y texto.
  4. saveReviewFormDataToStorage: guardar datos en localStorage.
  5. clearReviewFormDataFromStorage: borrar datos del formulario en localStorage.
  6. clearReviewFormFields: vaciar inputs y desmarcar tags en el formulario.
  7. restoreReviewFormFromStorage: rellenar formulario con los datos guardados en localStorage.
*/

const REVIEW_FORM_STORAGE_KEY = 'reviewFormData';

const OVERLAY_ID = 'review-form-overlay';

const INPUT_IDS = {
  rating: 'review-rating-input',
  started: 'started',
  finished: 'finished',
  review: 'review'
};

const SECTION_TITLE_BY_KEY = {
  characters: 'Characters',
  plot: 'Plot',
  setting: 'Setting',
  style: 'Style'
};

function el(id) {
  return document.getElementById(id);
}

function getReviewFormData() {
  const inputRating = el(INPUT_IDS.rating);
  const inputStarted = el(INPUT_IDS.started);
  const inputFinished = el(INPUT_IDS.finished);
  const inputMoreThoughts = el(INPUT_IDS.review);

  let rating = 0;
  if (inputRating && inputRating.value !== '') rating = parseFloat(inputRating.value) || 0;

  const started = inputStarted ? inputStarted.value.trim() : '';
  const finished = inputFinished ? inputFinished.value.trim() : '';
  const moreThoughts = inputMoreThoughts ? inputMoreThoughts.value.trim() : '';

  const characters = [];
  const plot = [];
  const setting = [];
  const style = [];
  const tagsBySectionName = { Characters: characters, Plot: plot, Setting: setting, Style: style };

  const sectionElements = document.querySelectorAll('#' + OVERLAY_ID + ' .review-section');
  for (let i = 0; i < sectionElements.length; i++) {
    const sectionEl = sectionElements[i];
    const titleEl = sectionEl.querySelector('.review-section-title p');
    const sectionTitle = titleEl ? titleEl.textContent.trim() : '';
    const tagsForThisSection = tagsBySectionName[sectionTitle];
    if (!tagsForThisSection) continue;
    const selectedTagElements = sectionEl.querySelectorAll('.review-tag.is-selected');
    for (let j = 0; j < selectedTagElements.length; j++) {
      tagsForThisSection.push(selectedTagElements[j].textContent.trim());
    }
  }

  return {
    rating: rating,
    started: started,
    finished: finished,
    characters: characters,
    plot: plot,
    setting: setting,
    style: style,
    moreThoughts: moreThoughts
  };
}

function saveReviewFormDataToStorage(formData) {
  try {
    localStorage.setItem(REVIEW_FORM_STORAGE_KEY, JSON.stringify(formData));
    return true;
  } catch (e) {
    return false;
  }
}

function clearReviewFormDataFromStorage() {
  try {
    localStorage.removeItem(REVIEW_FORM_STORAGE_KEY);
    return true;
  } catch (e) {
    return false;
  }
}

function clearReviewFormFields() {
  const inputStarted = el(INPUT_IDS.started);
  const inputFinished = el(INPUT_IDS.finished);
  const inputMoreThoughts = el(INPUT_IDS.review);
  const inputRating = el(INPUT_IDS.rating);
  const formOverlay = el(OVERLAY_ID);

  if (inputStarted) inputStarted.value = '';
  if (inputFinished) inputFinished.value = '';
  if (inputMoreThoughts) inputMoreThoughts.value = '';
  if (inputRating) inputRating.value = '0';

  if (formOverlay) {
    const selectedTagElements = formOverlay.querySelectorAll('.review-tag.is-selected');
    for (let i = 0; i < selectedTagElements.length; i++) {
      selectedTagElements[i].classList.remove('is-selected');
    }
  }
}

function restoreReviewFormFromStorage() {
  try {
    const storedJson = localStorage.getItem(REVIEW_FORM_STORAGE_KEY);
    if (!storedJson) return;
    const savedData = JSON.parse(storedJson);

    const inputStarted = el(INPUT_IDS.started);
    const inputFinished = el(INPUT_IDS.finished);
    const inputMoreThoughts = el(INPUT_IDS.review);
    if (inputStarted && savedData.started != null) inputStarted.value = savedData.started;
    if (inputFinished && savedData.finished != null) inputFinished.value = savedData.finished;
    if (inputMoreThoughts && savedData.moreThoughts != null) inputMoreThoughts.value = savedData.moreThoughts;

    const formOverlay = el(OVERLAY_ID);
    if (!formOverlay) return;

    const tagSectionKeys = ['characters', 'plot', 'setting', 'style'];
    for (let k = 0; k < tagSectionKeys.length; k++) {
      const sectionKey = tagSectionKeys[k];
      const savedTagTexts = Array.isArray(savedData[sectionKey]) ? savedData[sectionKey] : [];
      const sectionElements = formOverlay.querySelectorAll('.review-section');
      for (let i = 0; i < sectionElements.length; i++) {
        const sectionEl = sectionElements[i];
        const titleEl = sectionEl.querySelector('.review-section-title p');
        const sectionTitle = titleEl ? titleEl.textContent.trim() : '';
        if (sectionTitle !== SECTION_TITLE_BY_KEY[sectionKey]) continue;
        const tagElements = sectionEl.querySelectorAll('.review-tag');
        for (let j = 0; j < tagElements.length; j++) {
          const tagText = tagElements[j].textContent.trim();
          if (savedTagTexts.indexOf(tagText) !== -1) tagElements[j].classList.add('is-selected');
          else tagElements[j].classList.remove('is-selected');
        }
        break;
      }
    }
  } catch (e) {}
}
