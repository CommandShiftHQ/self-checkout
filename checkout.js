/* 1- As a user, I would like to be able to scan an item using a barcode so its details can be found from products list (test data).
2 - As a user, I would like to be able to add an item to my basket.
3 - As a user, I would like to be able to see the total price of all items in my basket.
4 - As a user, I would like to be able to remove an item from my basket.
 */

const { catalogue } = require("./data/data");

const selfCheckout = {
  basket: [],
  scan: function (customerBarcode) {
    return catalogue.find((item) => item.barcode === customerBarcode);
  },
  addItem: function (item) {
    this.basket.push(item);
  },
  totalPrice: function () {
    return this.basket.reduce((acc, item) => {
      return acc + item.price;
    }, 0);
  },
  removeItem: function (product) {
    const index = this.basket.findIndex((item) => item === product);
    this.basket = this.basket.splice(index, 1);
  },
};

/* 




 */

module.exports = { selfCheckout };
