// highorder functions -> func which takes a function as an argument ....
function add(a, b, cb) {
    let result = a + b;
    cb(result);
}

// highorder function example
add(5, 10, function(result) {
    console.log("The result is: " + result); // Output: The result is: 15
});


// callback -> jis function ko dusre function k paramter mein pass kiya jata hai
// highorder function -> jis function mein callback function pass kiya jata hai