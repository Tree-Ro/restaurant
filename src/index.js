import './style.css';
import doubledFries from './img/doubledFries.png';

const content = document.querySelector('#content');

let welcomeMsg = document.createElement('h1');
welcomeMsg.textContent = "Welcome to Fry's Fries!";
content.appendChild(welcomeMsg);

let slogan = document.createElement('p');
slogan.textContent =
    "Food, in the end, in our own tradition, is something holy. It's not about nutrients and calories. It's about sharing. It's about honesty. It's about Identity";
content.appendChild(slogan);

let viewMenuBtn = document.createElement('button');
viewMenuBtn.textContent = 'View Menu';
content.appendChild(viewMenuBtn);

const backgroundImage = new Image();
backgroundImage.src = doubledFries;
