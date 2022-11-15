/* Imports */
import { fetchBreedData } from '../fetch-utils.js';
import { renderBreedDetails, displayErrorMessage } from '../render-utils.js';

/* get DOM Elements */
const breedTitlebarEl = document.getElementById('breed-name-titlebar');
const breedDetailEl = document.getElementById('breed-detail-area');

/* State */
let breedDetails = {};

/* Events */
window.addEventListener('load', async () => {
    // grab id from URL
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    // fetch breed data using id
    breedDetails = await fetchBreedData(id);
    console.log(breedDetails);
});

/* Display Functions */
