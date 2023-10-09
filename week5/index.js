// index.js
const { people, sayHi } = require("./module.js");
   
console.log(people);
console.log(sayHi(people[0].name)); // Hi Sidrah!

//print all names
for (const person of people) {
    console.log(sayHi(person.name));
  }