const mongoose = require("mongoose"); 
const schema = mongoose.Schema;

const userSchema = new schema ({ 

    name: {
        type: String, 
        required: true
    },

    // lastName: {
    //     type: String, 
    //     required: true
    // },
    
    userName: {
        type: String, 
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true, 
      },
},{timestamps:true}); 

const newUser = mongoose.model("User_Schema", userSchema);
module.exports = newUser; 