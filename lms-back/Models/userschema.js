const mongoose=require('mongoose');
const userschema=new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:["student","instructor","admin"],
        required:true,
    },
    createdat:{
        type:Date,
        default:Date.now,
    }
})
module.exports=mongoose.model("User",userschema);