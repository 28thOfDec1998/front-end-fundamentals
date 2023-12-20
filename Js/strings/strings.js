

// Return the nth character of 'string'.

function nthString(value,number){
    return value [number];
}
console.log(nthString('Hello',1));

// Write a function that takes a string  as argument. Remove the first 3. Return the result

function removeLetter(string){
    return string.slice(3);
}
console.log(removeLetter('Hello'));

 // Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.

 function capitalize (string){
     return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
 }
 console.log (capitalize('heLLO'));

// Write a function called lastLetter that takes a string and returns the very last letter of that string.

 function lastLetter (string){
     //  When a negative index is used, it counts from the end of the string towards the beginning.
     return string.slice(-1);
 }
 console.log (lastLetter('abcd'));

//  Write a function that takes a string as argument. Get the first 3. Return the result.

function firstLetter(string){
    return string.slice(0,3);
}
console.log(firstLetter('hello'));

// Write a function that takes a string as argument. Extract the first half. Return the result

function halfString(str){
    if(str.length % 2 == 0){
        return str.slice(0, str.length/2);
    }
    return str;
}
console.log(halfString('helloo'));

