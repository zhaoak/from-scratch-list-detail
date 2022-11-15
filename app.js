/* Imports */
import { fetchBreeds } from './fetch-utils.js';
import { renderBreedCard, displayErrorMessage } from './render-utils.js';

/* Get DOM Elements */
const breedListEl = document.getElementById('breed-list');

/* State */
let breeds = [];

/* Events */
window.addEventListener('load', async () => {
    breeds = await fetchBreeds();
    displayBreedList();
});

/* Display Functions */
function displayBreedList() {
    if (breeds === -1) {
        // check for errors
        displayErrorMessage();
        return;
    }

    breedListEl.textContent = '';
    for (let breed of breeds) {
        breedListEl.append(renderBreedCard(breed));
    }
}

// (don't forget to call any display functions you want to run on page load!)
