const mongoose = require('mongoose')

// define the mongodb connection url 
// const mongodbURL = 'mongodb://127.0.0.1:27017/hotels' // can replace the database name 
const mongodbURL = 'mongodb+srv://anamika01:rootuser01@hotels.6rdmbsx.mongodb.net/';
// set up the mongodb connection 
mongoose.connect(mongodbURL, {
    useNewUrlParser : true, 
    useUnifiedTopology: true
 });

// get the default connection
// mongoose maintain a default connection object representing the mongodb connection...
const db = mongoose.connection;

db.on('connected', ()=>{
    console.log("connected to the database");
});
db.on('error', () => {
    console.log("There is some error");
});
db.on('disconnected', () =>{
    console.log("Database is disconnected");
});

module.exports = db ;

