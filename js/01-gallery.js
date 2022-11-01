import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery')

galleryContainer.insertAdjacentHTML('beforeend', createGalleryItem(galleryItems))
 
galleryContainer.addEventListener('click', openGalleryItem)

function openGalleryItem (event) {
    if (!event.target.classList.contains('gallery__image')) {
    return
    }
    event.preventDefault()
    const instance = basicLightbox.create(`<img width="100vw" height="100vh" src="${event.target.dataset.source}">`)
        instance.show();

    window.addEventListener('keydown', e => {
        if (e.code === 'Escape') {
        instance.close()
        }
    })
}

function createGalleryItem(galleryItems) { 
    return galleryItems.map(({preview, original, description}) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>`
    })
    .join("")
}