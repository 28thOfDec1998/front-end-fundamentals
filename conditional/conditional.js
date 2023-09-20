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

