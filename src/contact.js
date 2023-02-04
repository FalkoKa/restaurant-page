function createContact() {
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');

  p1.setAttribute('class', 'menu-para');
  p2.setAttribute('class', 'menu-para');

  p1.textContent = 'Phone: +84 (0)919 239 1291';
  p2.textContent =
    '44-46 Đường số 14, Khu đô thị Him Lam, Quận 7, Thành phố Hồ Chí Minh, Vietnam';

  const image = document.createElement('img');
  image.setAttribute('src', './images/map.png');
  image.setAttribute('alt', '.Map Sushi88');
  image.setAttribute('class', 'image-map');

  const div = document.createElement('div');
  div.setAttribute('class', 'contact-div');
  div.appendChild(p1);
  div.appendChild(p2);
  div.appendChild(image);

  return div;
}

function loadContact() {
  const main = document.querySelector('.main');
  main.textContent = '';
  main.append(createContact());
}

export default loadContact;
