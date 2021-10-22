/* 1- As a user, I would like to be able to scan an item using a barcode so its details can be found from products list (test data).
2 - As a user, I would like to be able to add an item to my basket.
3 - As a user, I would like to be able to see the total price of all items in my basket.
4 - As a user, I would like to be able to remove an item from my basket.
 */
const {
  orange,
  kiwi,
  pineapple,
  apple,
  banana,
  catalogue,
} = require("../data/data");
const { selfCheckout } = require("../checkout");
const { expect, it } = require("@jest/globals");

describe("selfCheckout", () => {
  it("returns the details of an item from the barcode", () => {
    expect(selfCheckout.scan(orange.barcode)).toBe(orange);
  });
  ``;

  it("adds an item to the basket", () => {
    expect(selfCheckout.basket.length).toBe(0);

    selfCheckout.addItem(kiwi);

    expect(selfCheckout.basket.length).toBe(1);
  });

  it("shows the total price", () => {
    selfCheckout.addItem(pineapple);
    console.log(selfCheckout.basket);
    expect(selfCheckout.totalPrice()).toBe(105);
  });

  it("removes an item from the basket", () => {
    expect(selfCheckout.basket.length).toBe(2);

    selfCheckout.removeItem(kiwi);

    expect(selfCheckout.basket.length).toBe(1);
  });
});
