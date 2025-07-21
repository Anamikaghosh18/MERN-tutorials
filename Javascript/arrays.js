// arrays 

const arr = [1, 2, 3, 4, 5];

// element cn be changed -> mutable....

// heterogenous 

arr.push({name:"anamika"}) // an object
console.log(indexof())
arr.pop() // remove last element

console.log(arr); 

arr.reverse(); // reverse the array
console.log(arr);



// arrays with highorder functions

const student = ["anamika","anu","sneh"];

// for each doesnot retaurn anything we can perform any task....
student.forEach((val) => console.log(val)); 

student.map((val) => console.log(val)); // map returns a new array with the results of calling a function on every element in the array
student.find((val) => val === "anu"); // find returns the first element in the array that satisfies the provided testing function
student.filter((val) => val.length > 3); // filter returns a new array with all elements that pass the test implemented by the provided function

// 
let newArr = student.slice(1,4)
console.log(newArr)

