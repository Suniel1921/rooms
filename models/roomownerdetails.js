const mongoose = require ('mongoose');

const roomownerdetails = mongoose.Schema({
    address : {
        type : String,
        required : true,
    },
    city : {
        type : String,
        required : true,
    },
    roomrent : {
        type : String,
        required : true,
    },
    contactno:{
        type : Number,
        required : true,

    },
    image : {
        type : String,
        required : true,
    },
})

const room_owner = mongoose.model('owner_room_Data', roomownerdetails);

module.exports = room_owner;