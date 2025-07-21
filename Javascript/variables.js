// variables in js 
// var , let , const 

// JS -> loosely typed lang -> data type will be assigned at runtime
var score1 = 10;
var score2 = 20;

console.log(score1 + score2); // 30

// if we are using var then we can reassign the value
// using var we can access the variable outside the scope or block -> g;obal
{
    var marks = 100;
}
console.log(marks); // 100

// let , const -> local scope
let marks2 = 200;
{
    let marks2 = 300; // this is a different variable
    console.log(marks2); // 300
}

// we can access the variable without declarimg it ... 
console.log(age) // undefined
var age = 20; 


const pi = 3.14;
// once assigned cant be reassigned

pi = 3.14159; //... TypeError: Assignment to constant variable.
