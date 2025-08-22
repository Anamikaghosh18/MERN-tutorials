// const http = require('http');
const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config(); 

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


// bodyperser middleware .................................
const bodyParser = require('body-parser');
app.use(bodyParser.json());




// import the route files 
const personRoutes = require('./routes/personRoutes');
console.log("Person routes loaded");

app.use('/person',personRoutes);

// we define like this bcz when we deploy this then it will give a related port number otherwise it is running locally.....
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server is listening on port : 8000");
});