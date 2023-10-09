document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('textInput');
    const processButton = document.getElementById('processButton');
    const vowelCounts = document.getElementById('vowelCounts');
  
    processButton.addEventListener('click', () => {
      const inputText = textInput.value.toLowerCase(); // Convert text to lowercase for case-insensitivity
  
      const vowelCountsObj = {
        'a': 0,
        'e': 0,
        'i': 0,
        'o': 0,
        'u': 0,
      };
  
      for (const char of inputText) {
        if ('aeiou'.includes(char)) {
          vowelCountsObj[char]++;
        }
      }
  
      // Display the vowel counts on the web page
      let resultHtml = '<h2>Vowel Counts:</h2>';
      for (const vowel in vowelCountsObj) {
        if (vowelCountsObj.hasOwnProperty(vowel)) {
          resultHtml += `<p>${vowel}: ${vowelCountsObj[vowel]}</p>`;
        }
      }
      
      vowelCounts.innerHTML = resultHtml;
    });
  });
  