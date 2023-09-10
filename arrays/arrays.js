// The length property returns the length (size) of an array:
const names = ["Mike","Kelvin","Jack"];
let size = names.length;

document.getElementById("lenght").innerHTML = "The size of array is: " + size;

// The JavaScript method toString() converts an array to a string of (comma separated) array values.
const cats = ["Red Cat","Goofy Cat","Cute Cat"];
let str = cats.toString();
document.getElementById("toString").innerHTML = str;

// The join() method also joins all array elements into a string.
let str2 = cats.join(" ^ ");
document.getElementById("join").innerHTML = str2;

// The pop() method removes the last element from an array:
const dogs = ["Black Dog","Doggo","Good Boi"];
document.getElementById("popArray").innerHTML = dogs;
dogs.pop();
document.getElementById("pop").innerHTML = dogs;
// The pop() method returns the value that was "popped out":
let removeLast = dogs.pop();
document.getElementById("popOut").innerHTML = removeLast;

// The push() method adds a new element to an array (at the end):
const birds = ["Red Bird","Cute Bird","Goofy Bird"];
birds.push("Angry Bird");
// The push() method returns the new array length:
document.getElementById("push").innerHTML = birds + " ---->  " + "Lenght Of Array Is: " + birds.push("Angry Bird");

// The shift() method removes the first array element and "shifts" all other elements to a lower index.




