// module.js
const people = [
    { name: "Sidrah", age: 30, city: "Calgary" },
    { name: "Maria", age: 32, city: "San Francisco" },
    { name: "Carl", age: 40, city: "Tokyo" },
   ];
   
   const sayHi = (name) => `Hi ${name}!`
   
   module.exports = { people, sayHi };
   