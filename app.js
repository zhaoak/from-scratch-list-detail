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
    // check for errors
    if (breeds === -1) {
        displayErrorMessage();
        return;
    }
    console.log(breeds);
    breedListEl.textContent = '';
    for (let breed of breeds) {
        breedListEl.append(renderBreedCard(breed));
    }
}

// (don't forget to call any display functions you want to run on page load!)
