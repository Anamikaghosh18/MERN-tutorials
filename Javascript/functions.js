// reusability of code .....

function add(a, b) {
    console.log(a + b);
}

let num1 = 5;
let num2 = 10;
add(num1, num2); // Output: 15


// function with unlimited arguments

// arguments object -> whatever we pt that get stores
function addNumbers() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    console.log("Sum of numbers: " + sum);
}

addNumbers(1, 2, 3, 4, 5); // Output: Sum of numbers: 15

// spread operator -> to pass unlimited arguments
function multiply(...args) {    
    let product = 1;
    for (let num of args) {
        product *= num;
    }
    console.log("Product of numbers: " + product);
}
multiply(1, 2, 3, 4); // Output: Product of numbers: 24