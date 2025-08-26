// const http = require('http');
const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config(); 
const passport = require('./auth');

// console.log("Hello world");
// var add = (a,b) => {
//     return a+b;
// }
// console.log(add(7,9));

// 

// ...................when we call a function inside another function...........
// function callback(){
//     console.log("this is a callback fuction");
// }

// const add = function(a,b,callback){
//     var result = a+b ;
//     console.log("result: " + result); // main functio work complete 
//     callback();
// }

// add(3,4,callback);


// ............................lodash...............................

// const _ = require('lodash');

// var data = ["person", "Person", "name", 1, 2,3];
// var filter = _.uniq(data);
// console.log(filter);


// ......server setup and api endpoint......
// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     res.send("hey this is first program");
// });
// app.get('/about', (req, res)=>{
//     var info = {
//         name : "nodejs tutorial",
//         duration : 5 , 
//         is_req :  true,

//     }
//     res.send(info);
// })

// app.listen(8000);


// bodyparser middleware .................................
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// middleware function ...............
const logRequest = (req, res , next) => {
    console.log(`${new Date().toLocaleDateString()} Request made to : ${req.originalUrl}`);
    next(); // move to the next phase 
}
app.use(logRequest);



// the start the authentication -> but we need to take care that which route to authenticate ........
app.use(passport.initialize());
const localAuthMiddleware = passport.authenticate('local', {session: false});
// authetication using middleware
app.get('/', (req,res) => {
    res.send("Welcome to our hotel");
})


// import the route files 
const personRoutes = require('./routes/personRoutes');
const { session } = require('passport');
console.log("Person routes loaded");

app.use('/person',localAuthMiddleware, personRoutes);

// we define like this bcz when we deploy this then it will give a related port number otherwise it is running locally.....
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log("Server is listening on port : 8000");
});