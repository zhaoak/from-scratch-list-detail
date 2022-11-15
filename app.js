/* Imports */
import { fetchBreeds } from './fetch-utils.js';
import { renderBreedCard } from './render-utils.js';

/* Get DOM Elements */

/* State */

/* Events */
window.addEventListener('load', async () => {
    fetchBreeds();
});
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
