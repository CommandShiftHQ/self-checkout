const {
  orange,
  kiwi,
  pineapple,
  apple,
  banana,
  catalogue,
} = require("../data/data");

//import class instead of functions or object
const { SelfCheckout } = require("../checkout");
const { expect, it } = require("@jest/globals");

describe("selfCheckout", () => {
  // create new instance of our class to test on
  const myCheckout = new SelfCheckout();

  it("returns the details of an item from the barcode", () => {
    //change all references to methods to reference out new instance via dot notation
    expect(myCheckout.scan(orange.barcode)).toBe(orange);
  });

  it("adds an item to the basket", () => {
    expect(myCheckout.basket.length).toBe(0);

    //remove 'basket' as argument because we no longer need to pass it in
    myCheckout.addItem(kiwi);

    expect(myCheckout.basket.length).toBe(1);
  });

  it("shows the total price", () => {
    myCheckout.addItem(pineapple);
    expect(myCheckout.totalPrice()).toBe(105);
  });

  it("removes an item from the basket", () => {
    expect(myCheckout.basket.length).toBe(2);

    myCheckout.removeItem(kiwi);

    expect(myCheckout.basket.length).toBe(1);
  });
});
