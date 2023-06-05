
// const routes = require ('express').Router();
const express = require('express');
const routes = express.Router();

const userData = require('../models/userSchema');
const bcrypt = require ('bcrypt');
const room_owner = require ('../models/roomownerdetails');




//middleware
routes.use(express.urlencoded({extended: false}));



//get methods

routes.get('/',async(req , res)=>{
    const show_Room_Data = await room_owner.find({});
    console.log(show_Room_Data);
    res.render('index',{
        show_Room_Data : show_Room_Data,
    });
})

//For rendering become a owner
// routes.get('/becomeaowner',(req,res)=>{
//     res.render('becomeaowner');
// })

//for rendering register page
routes.get('/register',(req, res)=>{
    res.render('register');
})

//for rendering login page
routes.get('/login', (req, res)=>{
    res.render('login')
})

//post methods (for registe)
routes.post('/register',async(req, res)=>{
    try {
        const sendData = await userData(req.body);
        const validEmail = await userData.findOne({email : sendData.email});
        if(validEmail){
            res.render('register',{
                message : 'Email Alredy Exit !'
            })        
        }
        else{
            await sendData.save();
            res.render('login');
           
        }        
        
    } catch (error) {
        res.status(400).send(`${error}`)
        
    }
})


//post method (for login)

routes.post('/login',async(req, res)=>{
    try {
        const userPassword = req.body.password;
        const checkEmail = req.body.email;
        const databaseData = await userData.findOne({email: checkEmail});
        // if(databaseData.password === userPassword){
        //     res.render('index');
        // }
        const isMatch = await bcrypt.compare(userPassword, databaseData.password);
        if(isMatch){
            res.render('becomeaowner');
        }


        else{
            res.render('login',{
                message : 'Invalid Email or Password !'
            })
        }
        
    } catch (error) {
        // res.status(400).send(`${error}`)
        res.render('login',{
            message : 'Invalid Email or Password !',
        })

        
    }
})


//post method for room owner details
routes.post('/become_owner',async(req, res)=>{
    try {
        const owner_Data = await room_owner(req.body);
        await owner_Data.save();
        res.render('becomeaowner',{
            message : 'Thanks for posting your room. we will approve it soon.. 😊'
        })
        
    } catch (error) {
        res.status(400).send(`${error}`)
        
    }
})







module.exports = routes;