// arrow functions 

// syntax 
const add = (a, b) => a + b;

const subtract = (c,d) =>{
    return c - d;
}
// 'argument keyword 

function addNumbers() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    console.log("Sum of numbers: " + sum);
}

// hoisting 
sayHey(); // Output: Hey there!

// Hoisting in JavaScript means that functions can be called before they are defined in the code.
// arrow functions do not hoist like regular functions
function sayHey() {
    console.log("Hey there!");
}

// this keyword

// this -> window object
const obj = {
    value = 20,
    myFunc: function() {
        console.log(this.value);
    }

    // in arraw function, this refers to the global object means the browser 
};

