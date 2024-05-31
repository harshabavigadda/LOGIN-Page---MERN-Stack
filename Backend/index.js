const express = require('express')
const mongoose = require('mongoose')
//const sql = require('mysql')
const cors = require('cors')
const models = require('./schema')

const app = express()
app.use(express.json())
app.use(cors({
    credentials : true,
    origin : "http://localhost:3000"
}))

mongoose.connect("mongodb://localhost:27017/datab")

/*const db = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    insecureAuth : true,
    database: "data"
})

app.post('/signup',(req,res)=>{
    const val = [
        req.body.name,
        req.body.email,
        req.body.password,
    ]

    const mailq = "SELECT * FROM users WHERE email = ?";
    const mail = req.body.email;

    db.query(mailq, [mail], (err,ress)=>{
        if(err){
            console.log(err);
        return res.json(err);}
        
        if(ress.length > 0){
            return res.json("User found");
        }
        else{
            const insertq = "INSERT INTO users (name, email, password) VALUES (?,?,?)";
            db.query(insertq,val, (err,result)=>{
                if(err){
                    console.log(err);
                return res.json(err);}
                else{
                console.log("INSERTED into DB");
                return res.json("sucess");}
            })
        }
    })
})

app.post('/signin', (req,res)=>{
    const val = [
        req.body.email,
        req.body.password
    ]

    const qu = "SELECT * FROM users WHERE email = ?";
    const m = req.body.email;

    db.query(qu,[m], (err,ress)=>{
        if(err){
            console.log(err);
            return res.json(err);
        }
        if(ress.length == 1){
            const que = "SELECT password FROM users WHERE email = ?"
            db.query(que,m, (err,result)=>{
                if(err){
                    console.log(err);
                    return res.json(err);
                }
                else{
                    if(ress.data != req.password){
                        return res.json("Pass wrong")
                    }
                    else{
                        return res.json("Success")
                    }
                }
            })
        }
        else{
            return res.json("No user found please signup")
        }
    })
})*/

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



app.listen(7000, ()=>{
    console.log("server started")
})