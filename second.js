function addTwoNumbers(num1, num2) {
  console.log(num1 + num2 + null);
}

addTwoNumbers(1, 2);

function userLoginMsg(username) {
  if (!username) {
    console.log("Please Enter username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(userLoginMsg("Amaan"));
console.log(userLoginMsg());

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}
console.log(calculateCartPrice(200, 300, 400, 500));

const product = {
  product_name: "foo",
  price: 22,
};

function handleObject(anyObject) {
  console.log(`${product.product_name}'s price is ${product.price}`);
}
handleObject(product);


// another way to define function in js
const addTwoNum = function (num1, num2) {
  return num1 + num2;
};


console.log(addTwoNum(4,5));
