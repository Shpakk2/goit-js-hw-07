import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery')

galleryContainer.insertAdjacentHTML('beforeend', createGalleryItem(galleryItems))

function createGalleryItem(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<li class="gallery__item"><a  href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`
    }).join("")
}

let lightbox = new SimpleLightbox('.gallery a', {captionsData: "alt", captionPosition: "bottom", captionDelay: 250});
