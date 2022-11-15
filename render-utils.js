export function renderBreedCard(breed) {
    const breedCardEl = document.createElement('div');
    const breedNameEl = document.createElement('h5');
    const breedImgEl = document.createElement('img');
    const breedTypeEl = document.createElement('h6');
    const breedOriginEl = document.createElement('h6');

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
