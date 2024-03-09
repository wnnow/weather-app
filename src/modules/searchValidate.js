import { getWeather } from './fetchWeather.js';

const searchSubmitBtn = document.querySelector('#submit-location-btn');
const form = document.querySelector('#location-form');
const searchInput = document.querySelector('#location-search');
const searchErrorText = document.querySelector('#location-search-error-text');

searchInput.addEventListener('input', (event) => {
  if (!searchInput.validity.valid) {
    searchErrorText.textContent = 'Please enter this field';
  } else {
    searchErrorText.textContent = '';
  }
});

export { searchSubmitBtn, form, searchErrorText, searchInput };
