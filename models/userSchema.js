const mongoose = require ('mongoose');
const bcrypt = require ('bcrypt');

const userSchema = mongoose.Schema({
    name : {
        type: String,
        requred : true,
    },
    email : {
        type : String,
        requred : true,
    },
    password : {
        type : String,
        requred : true,
    },
  

    phone : {
        type : Number,
        required : true,
    },

})

userSchema.pre('save',async function(next){
    this.password = await bcrypt.hash(this.password, 10)
    next();
})



const userData = mongoose.model('harmoRoomsUserData', userSchema);
module.exports = userData;