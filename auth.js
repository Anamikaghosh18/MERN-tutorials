const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Person = require('./models/person');

passport.use(new LocalStrategy (
  async (username, password, done) => {
    // authentication logic............
    try{
        console.log("Credentials received", username , password);
        const user = await Person.findOne({username: username});
        if(!user){
            return done(null, false, {message: "Incorrect username"});
        }
        const matchPassword = user.password === password ? true : false;
        if(matchPassword){
            return done(null, user);
        }else{
            return done(null, false , {message: "Invalid password"});
        }
    }catch(error){
        return done(error);
    }
}));

module.exports = passport;
