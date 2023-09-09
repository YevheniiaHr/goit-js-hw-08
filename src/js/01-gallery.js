// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line
 
console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery');
const markup = createMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', markup);



function createMarkup (arr){
	return arr.map(({original, preview, description}) => `<li class="gallery__item">
	<a class="gallery__link" href="${original}">
	  <img class="gallery__image" 
	  src="${preview}" 
	  alt="${description}">
	</a></li>`	
	).join('');
};

const lightbox =   new SimpleLightbox 
    ('.gallery a', {
        captionsData: 'alt', 
        captionPosition: 'bottom', 
        captionDelay: 250
    }
)