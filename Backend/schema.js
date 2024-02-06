const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name:{
        type:String},
    email:{
        type:String},
    password:{
        type:String}
})

const model = mongoose.model("users", schema)

module.exports = model;