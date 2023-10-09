const person = {
    firstName: 'John',
    lastName: 'Doe'
  };
  
  const address = {
    city: 'New York',
    zipCode: '10001'
  };
  
  const combinedInfo = { ...person, ...address };
  
  console.log(combinedInfo);

  
  // overriding properties

  const defaults = {
    theme: 'light',
    fontSize: 16
  };
  
  const userPreferences = {
    theme: 'dark',
    fontFamily: 'Arial'
  };
  
  const mergedSettings = { ...defaults, ...userPreferences };
  
  console.log(mergedSettings);
  