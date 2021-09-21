let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];


 console.log("QTY " + "     ITEM    " + "                  TOTAL ");
let price= order.map(({ quantity, itemName, unitPrice },index) => {
  
  if (index === 2) {
    console.log(
      `${quantity}        ${itemName}              ${(
        unitPrice * quantity
      ).toFixed(2)}`
    );
  }
  else if (index === 3) {
    console.log(
      `${quantity}        ${itemName}          ${(
        unitPrice * quantity
      ).toFixed(2)}`
    );
  }
    else  if (index >3) {
    console.log(
      `${quantity}        ${itemName}                ${(
        unitPrice * quantity
      ).toFixed(2)}`
    );
  } else {
    console.log(
      `${quantity}        ${itemName}                 ${(
        unitPrice * quantity
      ).toFixed(2)}`
    );
  }})


const [a, b, c, d, e, f] = order;
const items = [a, b, c, d, e, f];
let prices = items.map(element => parseFloat((element.unitPrice * element.quantity).toFixed(2)))
console.log("\n" +
    "Total Price: " +
    prices.reduce((totalPrice, curr) => totalPrice + curr)
);