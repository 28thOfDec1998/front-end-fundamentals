// length of value

let text = "Hello";
let length = text.length;
console.log(text);
console.log(length);

// strict equality

function strictEquality(numberOne,numberTwo){
    return numberOne === numberTwo;
}
console.log(strictEquality(6,6));

// the type of the value.

function typeOf(valueOne){
    return typeof valueOne
}
console.log(typeOf('Hello'))

//  Write a function called add7 that takes one number and returns that number + 7. 

 function add7(number){
     return number + 7
 }
 console.log (add7(6))

// Write a function called multiply that takes 2 numbers and returns their product.

 function multiply(numberOne, numberTwo){
     return numberOne * numberTwo
 }
 console.log (multiply(2,5))

 // Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.

 function capitalize (string){
     return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
 }
 console.log (capitalize("heLLO"))
 
// Write a function called lastLetter that takes a string and returns the very last letter of that string.

 function lastLetter (string){
     //  When a negative index is used, it counts from the end of the string towards the beginning.
     return string.slice(-1)
 }
 console.log (lastLetter("abcd"))
