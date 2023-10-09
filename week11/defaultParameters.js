function greet(name = 'Guest') {
    console.log(`Hello, ${name}!`);
  }
  
  greet();          // Outputs: Hello, Guest!
  greet('Alice');   // Outputs: Hello, Alice!
  greet('Bob');     // Outputs: Hello, Bob!
  