import './style.css';
import './img/doubledFries.png';
import homePage from './homePage.js';

document.body.style = 'backdrop-filter: blur(2px);';

const content = document.querySelector('#content');

homePage.render();
