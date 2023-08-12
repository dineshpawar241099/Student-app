const { string } = require('joi');
const mongoose = require('mongoose');
// const { stringify } = require('nodemon/lib/utils');
const userschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required: true
    },
    mobile:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    updatedAt:{
        type:Date,
        default:Date.now()
    }
})
module.exports=mongoose.model("userInfo",userschema);