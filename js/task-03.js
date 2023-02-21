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
const elementsImg = [];
const makeImageItem = (images) => {
  for (const image of images) {
  
  const itemEl = document.createElement('li');
  itemEl.classList.add('gallery__item');
 
  const imgEl = document.createElement('img');
  imgEl.classList.add('gallery__image');
  imgEl.src = `${image.url}`;
  imgEl.alt = `${image.alt}`;
  imgEl.width = 300;

  itemEl.appendChild(imgEl);
  elementsImg.push(itemEl);
}
}
makeImageItem(images);
gallery.append(...elementsImg);