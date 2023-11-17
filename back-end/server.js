const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');



const app = express();

app.use(cors());
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/Login')
const UserSchema = new mongoose.Schema({
    enrollmentNo:String,
    password:String

})

const UserModel = mongoose.model("users",UserSchema);

app.post("/login",(req,res)=>{
    const {enrollmentNo,password} = req.body;
    UserModel.findOne({enrollmentNo:enrollmentNo})
    .then(user=>{
        if(user){
            if(user.password === password){
               res.json("Login successfull")
            }

            else{

                res.json("The password is incorrect");

            }
        }

        else{
            res.json("No record existed");
        }
    })
})

app.listen(3001,()=>{
    console.log('Server is running');
})

app.post('/change-Pin',(req,res)=>{
    const {oldPass,newPass} = req.body;
    UserModel.findOne({password:oldPass})
    .then(user=>{
        if(user){
            res.json('Correct password');
            UserModel.updateOne({password:newPass})
        }
        else{
            res.json('Incorrect password');
        }
    })
})

