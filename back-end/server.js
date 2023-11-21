const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


const port = process.env.PORT||3001



const app = express();

app.use(cors());
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/Login')
let UserSchema = new mongoose.Schema({
    enrollmentNo:String,
    password:String,
    name:String

})

const UserModel = mongoose.model("users",UserSchema);

app.post("/login",(req,res)=>{
    const {enrollmentNo,password} = req.body;
    UserModel.findOne({enrollmentNo:enrollmentNo})
    .then(user=>{
        if(user){
               if(user.password === password){
               res.json("Login successfull");   
               
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

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
})

app.get('/',(req,res)=>
res.send('Server is ready')
)

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


app.get('/name',(req,res)=>{
    const enrollmentNo = localStorage.getItem("enrollmentNo");
    UserModel.findOne({enrollmentNo:enrollmentNo})
    .then(user=>{res.json(user.name)})
})

