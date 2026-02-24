const jwt=require('jsonwebtoken');
require("dotenv").config();
exports.middleware=async(req,res,next)=>{
    try{
        const token=req.cookies.token;
        if(!token){
            return res.status(401).json({
                message:"No token found",
                success:false
            })
        }
        try{
           const decoded=jwt.verify(token,process.env.JWT_SECRET);
           req.user=decoded;
           next();
        }catch(error){
            return res.status(401).json({
                message:"Invalid token ",
                success:false
            })
        }
    }catch(error){
        console.error(error);
        res.status(500).json({
            success:false,
            message:"Internal Servor Error"
        })
    }
}
exports.checkauth=(req,res)=>{
        
        return res.status(200).json({
        message:"User verified successfully",
        success:true
    })
}
