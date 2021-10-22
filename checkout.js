const { catalogue } = require("./data/data");

/*class basic structure to work from

class SelfCheckout {

    constructor() {
        properties go here
    }

    methods go here
}
 */
class SelfCheckout {
  //we dont need to pass any parameters into the constructor because every instance of SelfCheckout will start with the same basket value - an empty array.
  //If we wanted to give the instances any individual properties, like a name or a store in which it is located, we would have that as a parameter on the constructor and set it to a property. Then it would be passed in when we create the instance (see line 16 of tests)
  constructor() {
    this.basket = [];
  }

  scan(customerBarcode) {
    return catalogue.find((item) => item.barcode === customerBarcode);
  }

  // we no longer need to pass 'basket' or 'trolley' into our code because the basket is part of the class and can be accessed using 'this'
  addItem(item) {
    this.basket.push(item);
  }
  totalPrice = function () {
    return this.basket.reduce((acc, item) => {
      return acc + item.price;
    }, 0);
  };
  removeItem = function (product) {
    const index = this.basket.findIndex((item) => item === product);
    this.basket = this.basket.splice(index, 1);
  };
}

module.exports = { SelfCheckout };
