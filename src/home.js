function createHome() {
  const p = document.createElement('p');
  p.textContent = 'Order Online Now!';

  return p;
}

function loadHome() {
  const main = document.querySelector('.main');
  main.textContent = '';
  main.append(createHome());
}

export default loadHome;
