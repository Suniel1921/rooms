const express = require ('express');
const dotenv = require ('dotenv');
dotenv.config();
const path = require ('path');
const hbs = require ('hbs');
const userData = require ('./models/userSchema');
const database = require ('./database/dbConn');
const owner_room = require ('./models/roomownerdetails');


const routes = require('./routes/main');

const port = process.env.port || 5000;
const app = express();

//setting templte engine
app.set('view engine', 'hbs');

//accessing router path/folder (middleware)
app.use('', routes);

//accessing public folder;
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

//setting up partials folder
hbs.registerPartials('views/partials')








app.listen(port, (req, res)=>{
    console.log(`Server is running on port no : ${port}`);
})