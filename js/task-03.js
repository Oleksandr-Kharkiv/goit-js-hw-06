const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector(`.gallery`);

const makeGalleryItem = images
  .map((image) => `<li class="gallery__item">
  <img class="gallery__image" src="${image.url}" alt="${image.alt}">
  </li>`)
  .join(" ");
  gallery.insertAdjacentHTML("afterbegin", makeGalleryItem);

// ------------------------------------3 варіант----------

// const gallery = document.querySelector(`.gallery`);

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
// const allGalleryItem = makeGalleryItem(images);
// gallery.append(...allGalleryItem);

// -----------------------------------2 варіант-----------

// const gallery = document.querySelector(`.gallery`);

// const allGalleryItem = images.map((image) => {
//   const itemEl = document.createElement('li');
//   itemEl.classList.add('gallery__item');
 
//   const imgEl = document.createElement('img');
//   imgEl.classList.add('gallery__image');
//   imgEl.src = `${image.url}`;
//   imgEl.alt = `${image.alt}`;

//   itemEl.appendChild(imgEl);
//   return itemEl
// });
//     gallery.append(...allGalleryItem);

    //------------------------------------1 варіант-----------

// const gallery = document.querySelector(`.gallery`);

// const allGalleryItem = [];
// const makeImageItem = (images) => {
//   for (const image of images) {

//   const itemEl = document.createElement('li');
//   itemEl.classList.add('gallery__item');
 
//   const imgEl = document.createElement('img');
//   imgEl.classList.add('gallery__image');
//   imgEl.src = `${image.url}`;
//   imgEl.alt = `${image.alt}`;

//   itemEl.appendChild(imgEl);
//   allGalleryItem.push(itemEl);
// }
// }
//   makeImageItem(images);
//   gallery.append(...allGalleryItem);
  
console.log(gallery)