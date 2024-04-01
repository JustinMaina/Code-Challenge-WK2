const prompt = require('prompt-sync')({sigint : true});
//We can create a function with start and end parameters
function generateArray(start, end) {
//Create an empty array to store the characters
 const results = [];
//Now we define the direction the range will take
  const step = start <= end ? 1 : -1;
//Generate the numbers that will be pushed to the array
   for(i = start; i!== end + step; i+= step) {
    results.push(i);
   }  
//Now we return the new generated array
   return results
}
//We can now test the code
const num1 = parseInt(prompt("Enter first number: "))
const num2 = parseInt(prompt("Enter second number: "))
console.log(generateArray(num1, num2))

