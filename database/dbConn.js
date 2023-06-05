const mongoose = require ('mongoose');

// mongoose.connect(process.env.dbConn)
mongoose.connect('mongodb+srv://anil:anil1921@cluster0.634sltj.mongodb.net/harmoRooms?retryWrites=true&w=majority')
.then(()=>{
    console.log(`Database Connected !`);
})
.catch((error)=>{
    console.log(`Database Not Connected ! ${error}`)
})