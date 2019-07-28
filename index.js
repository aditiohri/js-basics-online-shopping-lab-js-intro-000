var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var item = generateCartItem(item)
 getCart().push(item)
 return `${item.itemName} has been added to your cart.`
}

function getRandomInt(min, max) {
  return Math.floor(Math.random(min) * Math.floor(max) + 1);
}

function generateCartItem(item)
return {
  itemName: itemName,
  itemPrice: getRandomInt(1, 100)
}



function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
