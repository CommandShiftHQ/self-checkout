/* 1- As a user, I would like to be able to scan an item using a barcode so its details can be found from products list (test data).
2 - As a user, I would like to be able to add an item to my basket.
3 - As a user, I would like to be able to see the total price of all items in my basket.
4 - As a user, I would like to be able to remove an item from my basket.
 */

const { catalogue } = require('./data/data')

let basket = [];
const scan = function (customerBarcode) {
    return catalogue.find(item => item.barcode === customerBarcode)
}
const addItem = function (item, trolley) {
    trolley.push(item)
}
const totalPrice = function (trolley) {
    return trolley.reduce((acc, item) => {
        return acc + item.price
    }, 0)
}
const removeItem = function (product, trolley) {
     const index = trolley.findIndex(item => item === product);
    trolley = trolley.splice(index, 1) 
    // return trolley = trolley.filter(item => item !== product)
}


module.exports = { scan, basket, addItem, totalPrice, removeItem }