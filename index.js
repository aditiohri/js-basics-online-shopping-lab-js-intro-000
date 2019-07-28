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
  if (!getCart().length) {
    return `Your shopping cart is empty.`
  }
  if (getCart().length === 1) {
    return `In your cart, you have ${getCart().itemName} at ${getCart().itemPrice}.`
  }
  if (getCart().length === 2) {
    return `In your cart, you have ${getCart().itemName[0]} at ${getCart().itemPrice[0]}, and ${getCart().itemName[1]} at ${getCart().itemPrice[1]}.`
  }
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
