// 1. Named function
function add (a,b) {
    return a+b;
}

// 2. anon function
let addNew = function (a,b) {
    return a+b;
}
// 3. arrow function with argument
let addOther = (a,b) => a + b;
addOther(2,4)
// 4. a more syntactic way to write this function
const myFunc = () => "value";

// 5. arrow function with arguments
const multiplier = (item, multi) => item * multi;
multiplier(4, 2);

// 6. with return keyword
const getAge = (year) => {
    return 2022 - year;
   };
   
// 7. implicit return
const getAgee = (year) => 2023 - year;
   
console.log(`My name is ${name} and I am ${getAge(yearOfBirth)} years old`);
   