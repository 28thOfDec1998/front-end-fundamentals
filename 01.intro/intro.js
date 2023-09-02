console.log(21+23)
console.log((4+6+9) / 77)

// 

let numberOne = 10;
console.log(numberOne);

let numberTwo = 7 * numberOne;
console.log(numberTwo);

// 

let max = 57;

let actual = max -13;

let percentage = actual / max ;

console.log (percentage);

// 


let x = 17;
x += 5; // same as x = x + 5
console.log(x);

let text = 'Hello';
text += ' World';
console.log(text);

// length of value

let textOne = 'Hello';
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

//  Write a function that takes 6 values (a,b,c,d,e,f) as arguments. Sum a and b. Then substract by c. Then multiply by d and divide by e. Finally raise to the power of f and return the result.

function mathOperators(a,b,c,d,e,f){

    return ((((a+b)-c)*d)/e)**f;

}
console.log(mathOperators(6,2,1,4,2,3));


