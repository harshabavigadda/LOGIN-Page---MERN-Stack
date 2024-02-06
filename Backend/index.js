const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const models = require('./schema')

const app = express()
app.use(express.json())
app.use(cors({
    credentials : true,
    origin : "http://localhost:3000"
}))

mongoose.connect("mongodb://localhost:27017/datab")

app.post('/signup', (req, res)=>{

    const {name, email, password} = req.body;
    models.findOne({email: email})
    .then(user => {
        if(user){
            res.json("Already registered")
        }
        else{
            models.create(req.body)
            .then(log => res.json(log))
            .catch(err => res.json(err))
        }
    })  
})

app.post('/signin', (req, res)=>{

    const {email, password} = req.body;
    models.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password) {
                res.json("Success");
            }
            else{
                res.json("Pass wrong");
            }
        }
        else{
            res.json("No user found");
        }
    })
})



app.listen(8000, ()=>{
    console.log("server started")
})