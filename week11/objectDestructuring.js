// Simple Object Destructuring
const person = { firstName: 'John', lastName: 'Doe' };
const { firstName, lastName } = person;

console.log(firstName); // Output: 'John'
console.log(lastName);  // Output: 'Doe'


// Complex Object Destructuring
const employee = {
    name: 'Alice',
    position: 'Software Engineer',
    address: {
      city: 'New York',
      zip: '10001'
    }
  };
  
  const { name, position, address: { city, zip } } = employee;
  
  console.log(name);       // Output: 'Alice'
  console.log(position);   // Output: 'Software Engineer'
  console.log(city);       // Output: 'New York'
  console.log(zip);        // Output: '10001'
  