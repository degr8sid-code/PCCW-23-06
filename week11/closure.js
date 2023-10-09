function outerFunction(outerVar) {
    // This inner function is a closure
    function innerFunction(innerVar) {
      console.log(`outerVar: ${outerVar}, innerVar: ${innerVar}`);
    }
  
    return innerFunction;
  }
  
  // Create a closure by calling outerFunction with a value for outerVar
  const closure = outerFunction('Hello');
  
  // Invoke the closure, providing a value for innerVar
  closure('World'); // Output: outerVar: Hello, innerVar: World
  