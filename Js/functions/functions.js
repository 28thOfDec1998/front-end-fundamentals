
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


