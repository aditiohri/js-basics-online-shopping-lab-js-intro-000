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

function generateCartItem(itemName) {
return {
  itemName: itemName,
  itemPrice: getRandomInt(1, 100)
}
}


function viewCart() {
  // write your code here
  if (!cart.length) {
    return `Your shopping cart is empty.`
  }

if (cart.length === 1) {
  return `In your cart, you have ${cart.itemName} at ${cart.itemPrice}.`
}

if (cart.length === 2) {
  return `In your cart, you have ${cart.itemName[0]} at ${cart.itemPrice[0]}, and ${cart.itemName[1]} at ${cart.itemPrice[1]} `
}

else {
  
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
