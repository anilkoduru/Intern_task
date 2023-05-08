const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const { v4: uuidv4} = require('uuid');
const {validate: uuidValidate} = require('uuid');
require('dotenv').config();

const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())

const password = process.env.PASSWORD;
mongoose.connect('mongodb+srv://Intern_0:'+password+'@cluster0.yyuqpae.mongodb.net/UserDBase');

const UserDBaseSchema = new mongoose.Schema({
    id: String,
    username:{
        type:  String,
        require: true
    },
    age:{
        type:  Number,
        require: true
    },
    hobbies:[{
        type:  String,
        require: true
    }]
});

const User = new mongoose.model("User",UserDBaseSchema);

app.get("/api/users",function(req,res){
    User.find().then((data)=>{
        res.status(200).send(data)
    }).catch((err)=> {
        return res.status(500).send("Sorry, There is a server issue");
    });
})

app.get("/api/users/:userId",function(req,res){
    let Id = req.params.userId;
    if(!uuidValidate(Id)){
        return res.status(400).send("The userId is not correct");
    }
    User.findOne({id:Id}).then((data) =>{
        if(data){
            res.status(200).send(data);
        }else{
            return res.status(404).send("There is no such object exists in the database");
        }
    }).catch((err)=> {
        return res.status(500).send("Sorry, There is a server issue");
    });
})

app.post("/api/users",function(req,res){
    if(!req.body.username || !req.body.age || !req.body.hobbies){
        return res.status(400).send("All fields are mandatory");
    }
    const data = new User({
        id : uuidv4(),
        username : req.body.username,
        age : req.body.age,
        hobbies : req.body.hobbies
    })
    User.create(data);
    return res.status(201).send(data);
});

app.put("/api/users/:userId",function(req,res){
    let Id = req.params.userId;
    if(!uuidValidate(Id)){
        return res.status(400).send("The userId is not correct");
    }
    User.findOneAndUpdate({id :Id}, { username: req.body.username, age: req.body.age, hobbies: req.body.hobbies }, { new: true })
    .then((data) => {
        if(data){
            res.status(200).send(data);
        }else{
            return res.status(404).send("User doesn't exists");
        }
    }).catch((err)=> {
        return res.status(500).send("Sorry, There is a server issue");
    });
})

app.delete("/api/users/:userId",function(req,res){
    Id = req.params.userId;
    if(!uuidValidate(Id)){
        return res.status(400).send("The userId is not correct");
    }
    User.findOneAndDelete({id: req.params.userId })
    .then((data) => {
        if(!data){
            return res.status(404).send("User doesn't exists");
        } else {
            return res.status(204).send("Succesfully deleted");
        }
    }).catch((err)=> {
        return res.status(500).send("Sorry, There is a server issue");
    });
})


let port = process.env.PORT;
if (port == null || port == "") {
  port = 4000;
}
app.listen(port,function(){
    console.log("Server started");
});