const mongoose = require('mongoose');
const menuSchema = new mongoose.Schema({
    name: {
    type: String,
    required : true,
    },

    price: {
        type : Number,
        required : true , 
    },
    
    is_Prepared :{
        type : Boolean, 
        
    }
});
const menu = mongoose.model('Menu', menuSchema);
module.expoerts = menu;