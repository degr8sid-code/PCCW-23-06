function getUserInfo() {
    return {
      username: 'jsmith',
      email: 'jsmith@example.com',
      fullName: 'John Smith'
    };
  }
  
  // Using destructuring to unpack the returned object
  const { username, email, fullName } = getUserInfo();
  
  console.log(username);  // Output: 'jsmith'
  console.log(email);     // Output: 'jsmith@example.com'
  console.log(fullName);  // Output: 'John Smith'
  