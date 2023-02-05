function createMenu() {
  const div = document.createElement('div');
  div.setAttribute('class', 'menu-div');

  div.appendChild(
    createMenuItem(
      'sushi-role',
      'Sushi Role',
      'This is a yummy Sushi Role',
      './images/sushi_role.jpg',
      'Sushi_Role_picture'
    )
  );
  div.appendChild(
    createMenuItem(
      'nigiri',
      'Nigiri',
      'This is yummy Nigiri',
      './images/sushi.jpg',
      'Nigiri_picture'
    )
  );

  return div;
}

function createMenuItem(cl, name, paragraph, source, altern) {
  const div = document.createElement('div');
  div.setAttribute('class', cl);

  const h2 = document.createElement('h2');
  h2.textContent = name;

  const para = document.createElement('p');
  para.textContent = paragraph;

  const image = document.createElement('img');
  image.setAttribute('src', source);
  image.setAttribute('alt', altern);
  image.setAttribute('class', cl);

  div.appendChild(image);
  div.appendChild(h2);
  div.appendChild(para);

  return div;
}

function loadMenu() {
  const main = document.querySelector('.main');
  main.textContent = '';
  main.append(createMenu());
}

export default loadMenu;
