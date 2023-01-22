import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const galleryItemsList = galleryItems
  .map((galleryItem) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href=${galleryItem.original}>
    <img
      class="gallery__image"
      src=${galleryItem.preview}
      data-source=${galleryItem.original}
      alt=${galleryItem.description}
    />
  </a>
</div>`;
  })
  .join("");
gallery.insertAdjacentHTML("beforeend", galleryItemsList);

gallery.addEventListener("click", getImg);
function getImg(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const fullscreenImg = basicLightbox.create(`
     <img src="${event.target.dataset.source}" >
  `);
  fullscreenImg.show();
  gallery.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      fullscreenImg.close();
    }
  });
}

console.log(galleryItems);
