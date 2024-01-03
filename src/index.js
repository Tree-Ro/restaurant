import css from './style.css';
import createHome from './home.js';
import createMenu from './menu.js';
import createContact from './contact.js';

const content = {
    //Initiates page on load
    init: function () {
        content.cacheDom();
        content.load(createHome());
    },

    cacheDom: function () {
        this.container = document.querySelector('#container');
    },

    //Removes all content on page
    clear: function () {
        for (; this.container.firstChild; ) {
            this.container.removeChild(this.container.firstChild);
        }
    },

    //Appends subpage container
    load: function (namePage) {
        this.clear();
        this.container.appendChild(namePage);
    },
};
console.log(content);
console.log(content.container); //Undefined
content.init(); //TypeError
