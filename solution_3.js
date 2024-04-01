const prompt = require('prompt-sync') ({sigint : true});
//Function declaration
function primeNumbers(num) {
  const primeNumbersArray = array.filter((num) => {
//If the number is less than or equal to 1, return false (not a prime number) since 1 is not a prime number    
  if(num <= 1) {
    return false;
  } 
  //We now check the numbers' divisibility from 2 to the square root of the number
  for(let i = 2; i <= num; i = i+1) {
//Basically, if the number is divisible by i, it's not a prime number, so false is returned         
     if(num % i === 0) {
        return false;
     }
//If it isn't divisible, we return true, as it is a prime number     
     else{
        return true;
     }
    }
    return primeNumbersArray;
   })  
  }   
//Now we declare a variable to store the user input    
let input;
//Create an empty array that will have the numbers to be iterated over
 let numbersArray = [];
 console.log(prompt("Enter numbers to be added to the array for prime number evaluation: "));
 while(input != 0) {
  input = parseInt(prompt("Enter number: "));
//We now add a condition that checks if the user input is a number and not any other data type
   if(isNaN(input)) {
//If it isn't, a error message is provided    
    console.log("Please enter valid numbers")
   }
//Otherwise, the input is pushed from the variable to the array   
   else{
   numbersArray.push(input);
   }
  }
//Accepts the user inputs while adding them to the empty array until the user keys in 0, which halts any more inputs
//We now remove the 0 we used to end the loop  
numbersArray.pop()
console.log(`The prime numbers are [${primeNumbers(numbersArray)}]`)
