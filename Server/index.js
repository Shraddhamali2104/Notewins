const express = require('express')
const mongoose = require("mongoose")
const cors = require('cors') // connect Frontend with the backend
const bcrypt = require('bcrypt') // store passwords in the database in the hash format
const dotenv = require('dotenv') //to create environment variables 
const UserModel =require("./model/User");
dotenv.config();

const app = express()
app.use(express.json)
// set the the middleware of express application to pass incoming json payloads

app.use(cors())

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("connected to  mongoDB"))
.catch(err => console.log("failed to connect to MongoDB" , err))
  
app.listen(process.env.PORT,() =>{
    console.log(`Server is running on port ${process.env.PORT}`);
}) 

app.post("/signup",async(req,res) => {
    try{
       const{name,email,username,password } =req.body;
       console.log(name+" "+email+" "+username+" "+password) 
       const existingUser = await UserModel.findOne({email});
       console.log(existingUser)
       if(existingUser){
        return res.status(400).json({error :"Email already exists"});
       }
       const hashedPassword = await bcrypt.hash(password,10);
       const newUser= new UserModel({name , email,username , password:hashedPassword});
       const savedUSer = await newUser.save();
       res.status(201).json(savedUser);

    }
    catch(error){
        res.status(500).json({error:error.message});
    }
    

});