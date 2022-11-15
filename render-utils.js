export function renderBreedCard(breed) {
    // create elements
    const breedCardEl = document.createElement('a');
    const breedNameEl = document.createElement('h3');
    const breedImgEl = document.createElement('img');
    const breedTypeEl = document.createElement('h4');
    const breedOriginEl = document.createElement('h4');

    // add classes
    breedCardEl.classList.add('breed-card');
    breedNameEl.classList.add('breed-card-name');
    breedImgEl.classList.add('breed-card-img');
    breedTypeEl.classList.add('breed-card-type');
    breedOriginEl.classList.add('breed-card-origin');

    // set contents
    breedCardEl.href = `./detail/index.html?id=${breed.id}`;
    breedNameEl.textContent = breed.breed;
    breedImgEl.src = breed.image;
    breedImgEl.alt = `An image of the ${breed.breed} breed.`;
    breedTypeEl.textContent = breed.type;
    breedOriginEl.textContent = breed.origin;

    // append and return
    breedCardEl.append(breedNameEl, breedImgEl, breedTypeEl, breedOriginEl);
    return breedCardEl;
}

export function renderBreedDetails(breed) {
    // create elements
    const breedDetailContainer = document.createElement('section');
    const breedImgEl = document.createElement('img');
    const breedNameEl = document.createElement('h1');
    const breedTypeOriginContainerEl = document.createElement('div');
    const breedTypeEl = document.createElement('p');
    const breedOriginEl = document.createElement('p');
    const breedCoatLengthEl = document.createElement('p');
    const breedCoatPatternEl = document.createElement('p');
    const br = document.createElement('br');
    const breedVerdictLabelEl = document.createElement('h2');
    const breedVerdictEl = document.createElement('h4');

    // set contents
    breedImgEl.src = breed.image;
    breedNameEl.textContent = breed.breed;
    breedTypeEl.textContent = `Type: ${breed.type}`;
    breedOriginEl.textContent = `Origin: ${breed.origin}`;
    breedCoatLengthEl.textContent = `Coat Length: ${breed.coat_length}`;
    breedCoatPatternEl.textContent = `Coat Pattern: ${breed.coat_pattern}`;
    breedVerdictLabelEl.textContent = 'VERDICT:';
    breedVerdictEl.textContent = breed.verdict;

    // add classes
    breedDetailContainer.classList.add('breed-detail-container');
    breedImgEl.classList.add('breed-detail-image');
    breedNameEl.classList.add('breed-name-display');
    breedTypeOriginContainerEl.classList.add('breed-type-origin-container');
    breedTypeEl.classList.add('breed-text-styling');
    breedOriginEl.classList.add('breed-text-styling');
    breedCoatLengthEl.classList.add('breed-text-styling');
    breedCoatPatternEl.classList.add('breed-text-styling');
    breedVerdictLabelEl.classList.add('verdict-text-label');
    breedVerdictEl.classList.add('verdict-text');

    // append and return
    breedTypeOriginContainerEl.append(breedTypeEl, breedOriginEl);
    breedDetailContainer.append(
        breedImgEl,
        breedNameEl,
        breedTypeOriginContainerEl,
        breedCoatLengthEl,
        breedCoatPatternEl,
        br,
        breedVerdictLabelEl,
        breedVerdictEl
    );
    return breedDetailContainer;
}

export function displayErrorMessage() {
    alert('Could not load information from database.');
}
