// conditionals 

const age = 20;
if(age >= 18) {
    console.log("You are an adult.");
}else{
    console.log("You are a minor.");
}


// Ternary operator
const isAdult = age >= 18 ? "You are an adult." : "You are a minor.";
console.log(isAdult);

// Switch statement
const option = 2;
switch(option){
    case 1:
        console.log("Option 1 selected.");
        break;
    case 2:
        console.log("Option 2 selected.");
        break;
    default:
        console.log("Invalid option selected.");
}

// by default switch will not break and will execute all the cases after the matched case
// fall-through behavior


