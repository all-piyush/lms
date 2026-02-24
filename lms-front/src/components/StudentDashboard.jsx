import React from 'react'
import './Studentdashboard.css'
import { IoHomeSharp } from "react-icons/io5";
import { RiGraduationCapFill } from "react-icons/ri";
import { MdAssignment } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { FaRegStar  } from "react-icons/fa";
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const StudentDashboard = () => {
  const api=import.meta.env.VITE_API_URL;
  const [enrolledcourses,setenrolledcourses]=useState([]);
      const fetchcourses=async()=>{
        try{
          const req=await fetch(`${api}/fetch-enrolledcourses`,{
            method:"GET",
            credentials:'include'
          })
          const data=await req.json();
          console.log("yess");
          setenrolledcourses(data.courses);
        }catch(error){
          console.log(error);
        }
      }
      useEffect(()=>{
        fetchcourses();
      },[])
  const [clicked,setclicked]=useState('overview');
  const navigate=useNavigate();
  return (
    <div id="student-dashboard">
      <div id='dashboard-sidebar'>
        <div id="dashboard-heading"><FaGraduationCap></FaGraduationCap>Dashboard</div>
        <div id="sidebar-options">
          <div className={clicked==='overview'?'Active':''} onClick={()=>{setclicked('overview') ;navigate('overview')}}><IoHomeSharp></IoHomeSharp>Overview</div>
          <div className={clicked==='enrolled-courses'?'Active':''}  onClick={()=>{setclicked('enrolled-courses');navigate('enrolled-courses')}}><RiGraduationCapFill></RiGraduationCapFill>Enrolled</div>
          <div className={clicked==='all-courses'?'Active':''} onClick={()=>{setclicked('all-courses');navigate('all-courses')}}><FaRegStar></FaRegStar>All-Courses</div>
          <div className={clicked==='assesments'?'Active':''} onClick={()=>setclicked('assesments')}><MdAssignment></MdAssignment>Assesments</div>
          
        </div>
      </div>
      <br/>
      <Outlet context={{enrolledcourses,setclicked}}></Outlet>
    </div>

  )
}

export default StudentDashboard
