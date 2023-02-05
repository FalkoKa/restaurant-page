import loadHome from './home';
import loadContact from './contact';
import loadMenu from './menu';

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

  const homeBtn = document.createElement('button');
  homeBtn.setAttribute('class', 'btn');
  homeBtn.setAttribute('class', 'active');

  homeBtn.textContent = 'Home';
  homeBtn.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(homeBtn);
    loadHome();
  });

  const menuBtn = document.createElement('button');
  menuBtn.setAttribute('class', 'btn');
  menuBtn.textContent = 'Menu';
  menuBtn.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(menuBtn);
    loadMenu();
  });

  const contactBtn = document.createElement('button');
  contactBtn.setAttribute('class', 'btn');
  contactBtn.textContent = 'Contact';
  contactBtn.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(contactBtn);
    loadContact();
  });

  content.append(header);
  content.append(main);
  header.append(h1);
  header.append(nav);
  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);
}

function setActiveButton(button) {
  const buttons = document.querySelectorAll('button');

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove('active');
    }
  });
  button.classList.add('active');
}

createHeader();
loadHome();
