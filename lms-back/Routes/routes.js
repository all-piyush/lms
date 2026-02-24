const express=require('express');
const router=express.Router();

const {studentlogin,studentsignup}=require("../Controllers/login");
const{addcourse,getcourses,getenrolled, addenrolled}=require("../Controllers/course");
const{checkauth,middleware}=require("../Controllers/checkauth");
router.post('/login',middleware,studentlogin);
router.post('/signup',studentsignup);
router.get('/checkauth',middleware,checkauth);
router.post('/addcourse',addcourse);
router.get('/fetchcourses',getcourses);
router.post('/enroll',middleware,addenrolled);
router.get('/fetch-enrolledcourses',middleware,getenrolled);
module.exports=router;