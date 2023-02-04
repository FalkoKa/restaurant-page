import loadHome from './home';

function createHeader() {
  const content = document.querySelector('.content');
  const header = document.createElement('div');
  const main = document.createElement('div');

  header.setAttribute('class', 'header');
  main.setAttribute('class', 'main');

  const nav = document.createElement('nav');
  nav.setAttribute('class', 'navigation');

  const h1 = document.createElement('h1');
  h1.textContent = 'Sushi88';

  content.append(header);
  content.append(main);
  header.append(h1);
  header.append(nav);
  nav.appendChild(createNav('Home'));
  nav.appendChild(createNav('Menu'));
  nav.appendChild(createNav('Contact'));
}

function createNav(text) {
  const nav = document.createElement('button');
  nav.setAttribute('class', text);
  nav.textContent = text;
  return nav;
}

createHeader();
loadHome();
