const contactPage = {
  createElements: function () {
    this.titleWrapper = document.createElement('h1');
    this.titleWrapper.textContent = 'Contact Us';
    this.titleWrapper.setAttribute('id', 'contactTitle');

    this.contactInfoWrapper = document.createElement('div');
    this.contactInfoWrapper.setAttribute('id', 'contactInfoWrapper');

    this.emailField = document.createElement('p');
    this.emailField.textContent = 'Email: fry@frysfries.com';

    this.phoneNumberField = document.createElement('p');
    this.phoneNumberField.textContent = 'Phone Number: 555-123-465';

    this.adressField = document.createElement('p');
    this.adressField.textContent = 'Adress: 123 Fry Street, Frytown, USA';

    this.socialMediaField = document.createElement('p');
    this.socialMediaField.textContent =
      'Social Media: @FrysFries_Official (Instagram), /FrysFries (Facebook)';
  },

  appendElements: function () {
    content.appendChild(this.titleWrapper);

    this.contactInfoWrapper.appendChild(this.emailField);
    this.contactInfoWrapper.appendChild(this.phoneNumberField);
    this.contactInfoWrapper.appendChild(this.adressField);
    this.contactInfoWrapper.appendChild(this.socialMediaField);

    content.appendChild(this.contactInfoWrapper);
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

export default contactPage;
