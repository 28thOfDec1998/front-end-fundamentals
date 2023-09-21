// Check if a number is odd or even in JavaScript
function isEvenOrOdd(number){

    document.getElementById("theNumber").innerHTML = "The Number Is: " + arguments[0]

    if(number%2 === 0){
        return document.getElementById("oddOrEven").innerHTML = "The Number Is Even"
    }else{
        return document.getElementById("oddOrEven").innerHTML = "The Number Is Odd"
    }
}
// console.log(isEvenOrOdd(5));
isEvenOrOdd(5);
// Arrow Ver.
EvenOrOddArrow = (numberArrow) =>{
    if (numberArrow%2 === 0){
        return 'Even';
    }else{
        return 'Odd';
    }
}
console.log(EvenOrOddArrow(2));

// Check if input variable is a number or not
isNumber = (number2) => {

    document.getElementById("checkNumber").innerHTML = "The Parameter Is: " + number2;

    // isNaN() method returns true if a value is Not-a-Number.
    if(isNaN(number2)){
        return document.getElementById("numberOrNot").innerHTML = "Not a Number";
    }else{
        return document.getElementById("numberOrNot").innerHTML = "Valid Number";
    }
}
isNumber('Hello');

// Find the largest of two number
findLargest = (firstNumber,secondNumber) =>{
    document.getElementById("twoNumbers").innerHTML = "The First Parameter is: " + firstNumber +" "+ " & The Second Parameter Is: "+ secondNumber;

    if(firstNumber>secondNumber){
        return document.getElementById("largestNumber").innerHTML = "First Number Is The Largest";
    }
    else if (firstNumber<secondNumber){
        return document.getElementById("largestNumber").innerHTML = "Second Number Is The Largest";
    }else{
        return document.getElementById("largestNumber").innerHTML = "Both Are Equal";
    }
}
findLargest(10,5);

// Find the largest of three number
findLargestNum = (firstNum,secondNum,thirdNum) =>{
    document.getElementById("threeNumbers").innerHTML = "The First Parameter is: " + firstNum +" "+ " The Second Parameter Is: "+ secondNum +" "+ " & The Third Parameter Is: "+ thirdNum;

    if(firstNum>secondNum && firstNum>thirdNum  ){
        return document.getElementById("bigNumber").innerHTML = "First Number Is The Largest";
    }
    else if (thirdNum<secondNum){
        return document.getElementById("bigNumber").innerHTML = "Second Number Is The Largest";
    }else{
        return document.getElementById("bigNumber").innerHTML = "Third Number Is The Largest";
    }
}
findLargestNum(10,5,12);