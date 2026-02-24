const Course=require('../Models/course');
const mongoose=require('mongoose');
const Enrolled=require('../Models/enrolled');
exports.addcourse=async(req,res)=>{
    try{
        const{title,description,instructor,price,level,lessons,duration,image}=req.body;
        if(!title || !description || !instructor || !price || !level || !lessons || !duration || !image ){
            return res.status(400).json({
                message:"Enter All Details",
                success:false,
            })
        }
        await Course.create({title,description,instructor,price,level,duration,lessons,image});
        return res.status(201).json({
            message:"Create Course Successfully",
            success:true
        })
    }catch(error){
        console.error(error);
        res.status(500).json({
            success:false,
            message:"Internal Servor Error"
        })
    }
}
exports.getcourses=async(req,res)=>{
    try{
        const courses=await Course.find({});
        return res.status(200).json({
            message:"Courses Fetched Successfully",
            courses:courses,
            success:true,
        })
    }catch(error){
        console.error(error);
        res.status(500).json({
            success:false,
            message:"Internal Servor Error"
        })
    }
}
exports.addenrolled=async(req,res)=>{
    try{
        const userid=req.user.userid;
        const {courseid,lessonscompleted,status}=req.body;
        await Enrolled.create({userid,courseid,lessonscompleted,status});
        return res.status(200).json({
            message:"enrolled in course successully",
            success:true
        })
    }catch(error){
        console.error(error);
        res.status(500).json({
            success:false,
            message:"Internal Servor Error"
        })
    }
}
exports.getenrolled=async(req,res)=>{
    try{
        const id=req.user.userid;
        console.log(id);
        const enrolleds=await Enrolled.aggregate([
            {
                $match:{
                    userid:new mongoose.Types.ObjectId(id)
                },
            },
            {
                $lookup:{
                    from:"courses",
                    localField:"courseid",
                    foreignField:"_id",
                    as:"course"
                }
            },{
                $unwind:"$course"
            }
        
        ])
        return res.status(200).json({
            message:"fetched enrolled courses successfully",
            success:true,
            courses:enrolleds
        })


    }catch(error){
        console.error(error);
        res.status(500).json({
            success:false,
            message:"Internal Servor Error"
        })
    }
}