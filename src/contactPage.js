const contactPage = {
  createElements: function () {},

  appendElements: function () {},

  clearContent: function () {
    for (let i = content.childNodes.length - 1; i >= 0; i--) {
      const node = content.childNodes[i];
      node.remove();
    }
  },

  render: function () {},
};

export default contactPage;
