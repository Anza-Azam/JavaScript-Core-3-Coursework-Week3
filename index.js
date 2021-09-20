// let citiesByPopulation = [
//   { name: "London", population: 8000000 },
//   { name: "Birmingham", population: 1000000 },
//   { name: "Glasgow", population: 600000 },
//   { name: "Manchester", population: 500000 },
// ];

// // Assign variables using array destructuring on this line
// let [london, birmingham, glasgow, manchester] = citiesByPopulation;

// console.log(`${london.name} population is ${london.population}`);
// console.log(`${birmingham.name} population is ${birmingham.population}`);
// console.log(`${glasgow.name} population is ${glasgow.population}`);
// console.log(`${manchester.name} population is ${manchester.population}`);
const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
console.log(y);