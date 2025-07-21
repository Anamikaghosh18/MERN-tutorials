// Logical operators in JavaScript

let age = 25;
const gender = "male";
 

// all condtitions should true......
if(age >= 18 && gender == "male"){
    console.log("eligible");
}else{
    console.log("not eligible");
}

// atleast one condtion should be true......
let isActive = true;
let isLoggedIn = false;

if(isActive || isLoggedIn){
    console.log("User is active or logged in.");
} else {
    console.log("User is neither active nor logged in.");
}


const num = 10;
if(num % 2 == 0){
    console.log("even");

}else{
    console.log("odd");
}