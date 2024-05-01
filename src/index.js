import './style.css';
import './img/doubledFries.png';
import homePage from './homePage.js';
import menuPage from './menuPage.js';
import contactPage from './contactPage.js';

document.body.style = 'backdrop-filter: blur(2px);';

const content = document.querySelector('#content');

(function () {
  const homeBtn = document.querySelector('#homeBtn');
  const menuBtn = document.querySelector('#menuBtn');
  const contactBtn = document.querySelector('#contactBtn');

  homeBtn.addEventListener('click', () => {
    homePage.render();
  });

  menuBtn.addEventListener('click', () => {
    menuPage.render();
  });

  contactBtn.addEventListener('click', () => {
    contactPage.render();
  });
})();

//homePage.render();
menuPage.render();
