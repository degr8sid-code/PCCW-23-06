// Simple Array Destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, second] = numbers;

console.log(first);  // Output: 1
console.log(second); // Output: 2


// Complex Array Destructuring
const colors = ['red', 'green', 'blue', 'orange'];
const [primary, , secondary, ...rest] = colors;

console.log(primary);   // Output: 'red'
console.log(secondary); // Output: 'blue'
console.log(rest);      // Output: ['orange']
