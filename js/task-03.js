const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryEl = document.querySelector(`.gallery`);

const makeGalleryItem = ({ url, alt }) => `<li class="gallery__item">
  <img class="gallery__image" src="${url}" alt="${alt}">
  </li>`;
const markup = images.map((data) => makeGalleryItem(data)).join(" ");

galleryEl.insertAdjacentHTML("afterbegin", markup);

// -------------------------------------4 варіант-----------

// const galleryEl = document.querySelector(`.gallery`);

// const makeGalleryItem = images
//   .map((image) => `<li class="gallery__item">
//   <img class="gallery__image" src="${image.url}" alt="${image.alt}">
//   </li>`)
//   .join(" ");
//   galleryEl.insertAdjacentHTML("afterbegin", makeGalleryItem);

// ------------------------------------3 варіант----------

// const galleryEl = document.querySelector(`.gallery`);

// const makeGalleryItem = images => {
//   return images.map(image => {
//     const itemEl = document.createElement('li');
//     itemEl.classList.add('gallery__item');

//     const imgEl = document.createElement('img');
//     imgEl.classList.add('gallery__image');
//     imgEl.src = `${image.url}`;
//     imgEl.alt = `${image.alt}`;

//     itemEl.appendChild(imgEl);
//     return itemEl
//   });
// }
// const allGalleryItemsEl = makeGalleryItem(images);
// galleryEl.append(...allGalleryItemsEl);

// -------------------------------------2 варіант-----------

// const galleryEl = document.querySelector(`.gallery`);

// const allGalleryItemsEl = images.map((image) => {
//   const itemEl = document.createElement('li');
//   itemEl.classList.add('gallery__item');

//   const imgEl = document.createElement('img');
//   imgEl.classList.add('gallery__image');
//   imgEl.src = `${image.url}`;
//   imgEl.alt = `${image.alt}`;

//   itemEl.appendChild(imgEl);
//   return itemEl
// });
//     galleryEl.append(...allGalleryItemsEl);

//------------------------------------1 варіант-----------

// const galleryEl = document.querySelector(`.gallery`);

// const allGalleryItemsEl = [];
// const makeImageItem = (images) => {
//   for (const image of images) {

//   const itemEl = document.createElement('li');
//   itemEl.classList.add('gallery__item');

//   const imgEl = document.createElement('img');
//   imgEl.classList.add('gallery__image');
//   imgEl.src = `${image.url}`;
//   imgEl.alt = `${image.alt}`;

//   itemEl.appendChild(imgEl);
//   allGalleryItemsEl.push(itemEl);
// }
// }
//   makeImageItem(images);
//   galleryEl.append(...allGalleryItemsEl);

console.log(galleryEl);
