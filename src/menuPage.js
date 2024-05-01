import rosemaryImg from './img/friesWithRosemarine.png';
import classicImg from './img/normalFries.png';
import mozarellaImg from './img/mozarellaSticks.png';
import curlyImg from './img/curlyFries.png';

const menuPage = {
  items: [
    {
      name: 'Golden Crisp Classics',
      desc: 'Delight in our signature fries, crafted with a secret blend of seasonings for an unforgettable flavor experience.',
      pic: classicImg,
      btn: 'item2Btn',
    },
    {
      name: 'Rosemary Infused Golden Crisps',
      desc: 'Indulge in our tantalizing fries, seasoned with aromatic rosemary.',
      pic: rosemaryImg,
      btn: 'item1Btn',
    },
    {
      name: 'Golden Mozzarella Munchies',
      desc: 'Craving something different? Dive into our crispy mozzarella sticks for a satisfying change of pace!',
      pic: 'mozarellaImg',
      btn: 'item3Btn',
    },
    {
      name: "Twist 'n Crunch",
      desc: 'Looking for a twist? Try our irresistible curly fries for a fun and flavorful alternative!',
      pic: 'curlyImg',
      btn: 'item4Btn',
    },
  ],

  createElements: function () {
    this.menuWrap = document.createElement('div');
    this.menuWrap.setAttribute('id', 'menuWrapper');

    this.items.forEach((item) => {
      this[item.name + 'Wrap'] = document.createElement('div');
      this[item.name] = document.createElement('h2');
      this[item.desc] = document.createElement('p');
      this[item.pic] = document.createElement('img');
      this[item.btn] = document.createElement('button');
    });
    this.addContent();
  },

  addContent: function () {
    this.items.forEach((item) => {
      this[item.name].textContent = item.name;
      this[item.desc].textContent = item.desc;
      this[item.pic].src = item.pic;
      this[item.btn].textContent = 'Order Now';
    });
  },

  appendElements: function () {
    content.appendChild(this.menuWrap);

    this.items.forEach((item) => {
      this[item.name + 'Wrap'].appendChild(this[item.name]);
      this[item.name + 'Wrap'].appendChild(this[item.desc]);
      this[item.name + 'Wrap'].appendChild(this[item.pic]);
      this[item.name + 'Wrap'].appendChild(this[item.btn]);
      this.menuWrap.appendChild(this[item.name + 'Wrap']);
    });
  },

  clearContent: function () {
    for (let i = content.childNodes.length - 1; i >= 0; i--) {
      const node = content.childNodes[i];
      node.remove();
    }
  },

  render: function () {
    this.createElements();
    this.clearContent();
    this.appendElements();
  },
};

export default menuPage;
