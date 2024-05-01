import './style.css';
import './img/doubledFries.png';

document.body.style = 'backdrop-filter: blur(2px);';

const content = document.querySelector('#content');

let homePage = {
  createElements: function () {
    this.subContainer = document.createElement('div');

    this.titleMsg = document.createElement('h1');
    this.titleMsg.textContent = "Fry's Fries!";

    this.slogan1 = document.createElement('p');
    this.slogan1.textContent =
      "Food, in the end, in our own tradition, is something holy. It's not about nutrients and calories.";
    this.slogan2 = document.createElement('p');
    this.slogan2.textContent =
      "It's about sharing. It's about honesty. It's about Identity";

    this.viewMenuBtn = document.createElement('button');
    this.viewMenuBtn.textContent = 'View Menu';
  },

  appendElements: function () {
    this.subContainer.appendChild(this.titleMsg);

    this.subContainer.appendChild(this.slogan1);
    this.subContainer.appendChild(this.slogan2);
    content.appendChild(this.subContainer);

    content.appendChild(this.viewMenuBtn);
  },

  render: function () {
    clearContent();
    this.createElements();
    this.appendElements();
  },
};

homePage.render();

function clearContent() {
  for (let i = content.childNodes.length - 1; i >= 0; i--) {
    const node = content.childNodes[i];
    console.log(node);
    node.remove();
  }
}
