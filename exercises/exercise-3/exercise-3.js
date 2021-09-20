let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

const [a, b, c, d, e, f] = order;

const orders = [a, b, c, d, e, f];

const itemN = orders.map((ele) => ele.itemName);
const quantity = orders.map((elem) => elem.quantity);
const price = orders.map((el) => el.unitPrice);
const actualP = orders.map(ele => parseFloat((ele.unitPrice * ele.quantity).toFixed(2)))
console.log('QTY '+'ITEM    '+'           TOTAL ')
price.forEach((actualPrice, index) => {
  if (index === 2) {
    console.log(
      quantity[index]+"   "+itemN[index] + "       " + (quantity[index] * actualPrice).toFixed(2)
    );
  } else if (index === 3) {
    console.log(
      quantity[index] +
        "   " +
        itemN[index] +
        "   " +
        (quantity[index] * actualPrice).toFixed(2)
    );
  } else if (index >3) {
    console.log(
      quantity[index] +
        "   " +
        itemN[index] +
        "         " +
        (quantity[index] * actualPrice).toFixed(2)
    );
  } else
    console.log(
      quantity[index] +
        "   " +
        itemN[index] +
        "          " +
        (quantity[index] * actualPrice).toFixed(2)
    );
});

console.log('\n'+'Total Price: '+actualP.reduce((totalPrice,curr)=>totalPrice+curr))