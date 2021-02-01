const number = [3, 2, 5, 6]
// const output = [];
// for (let i = 0; i < number.length; i++) {
//     const element = number[i];
//     const result = element * element;
//     output.push(result);
// }
// function square (element){
//     return element * element;

// }
// numbers.map(function())
// console.log(output);
const result = number.map(x=> x * x);
console.log(result);

const bigger = number.filter( x => x > 5);
console.log(bigger);

const isThere = number.find ( x => x > 5);
console.log(isThere);