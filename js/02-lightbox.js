import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const galleryItemsList = galleryItems
  .map((galleryItem) => {
    return `<a class="gallery__item" href=${galleryItem.original}>
  <img class="gallery__image" src=${galleryItem.preview} alt=${galleryItem.description} />
</a>`;
  })
  .join("");
gallery.insertAdjacentHTML("beforeend", galleryItemsList);
new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
console.log(galleryItems);
