export function renderBreedCard(breed) {
    const breedCardEl = document.createElement('a');
    const breedNameEl = document.createElement('h3');
    const breedImgEl = document.createElement('img');
    const breedTypeEl = document.createElement('h4');
    const breedOriginEl = document.createElement('h4');

    breedCardEl.classList.add('breed-card');
    breedNameEl.classList.add('breed-card-name');
    breedImgEl.classList.add('breed-card-img');
    breedTypeEl.classList.add('breed-card-type');
    breedOriginEl.classList.add('breed-card-origin');

    breedCardEl.href = `./detail/index.html?id=${breed.id}`;
    breedNameEl.textContent = breed.breed;
    breedImgEl.src = breed.image;
    breedImgEl.alt = `An image of a ${breed.breed}.`;
    breedTypeEl.textContent = breed.type;
    breedOriginEl.textContent = breed.origin;

    breedCardEl.append(breedNameEl, breedImgEl, breedTypeEl, breedOriginEl);
    return breedCardEl;
}

export function displayErrorMessage() {
    alert('Could not load information from database.');
}
