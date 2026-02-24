const mongoose=require('mongoose');
const Course=require('../Models/course');
const User=require('../Models/userschema');
const enrolledcourses=new mongoose.Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectID,ref:'User',required:true
    },
    courseid:{
        type:mongoose.Schema.Types.ObjectID,ref:'Courses',required:true
    },
    lessonscompleted:{
        type:"String",
        required:true,
    },
    status:{
        type:"String",
        enum:["active","completed","dropped"],
        default:"active"
    },
    enrolledat:{
        type:Date,
        default: new Date
    },
    lastaccessed:{
        type:Date,
    }
})
module.exports=mongoose.model("Enrolled",enrolledcourses);