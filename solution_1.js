const prompt = require('prompt-sync')({sigint:true});
//Function declaration
function swapCase(inputString) {
//Create an array to store our characters to be swapped
 const swappedChars = [];
//Now we iterate through each character in the input string parameter
  for(let i = 0; i < inputString.length; i = i+1) {
//Create a variable that stores each character at index i for iteration    
    const char = inputString.charAt(i);
//Check for uppercase characters first
     if(char === char.toUpperCase()) {
//If uppercase, change to lowercase and push changes to the array
      swappedChars.push(char.toLowerCase());        
     }
//If lowercase, change to uppercase and push changes to the array
     else{
        swappedChars.push(char.toUpperCase());
     }
  }
//Now we join the characters back into a string
      return swappedChars.join('');  
}
//We can now test the code
const inputString = prompt("Enter string: ");
const outputString = (swapCase(inputString));
console.log(outputString)