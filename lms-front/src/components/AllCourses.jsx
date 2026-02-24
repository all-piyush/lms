import React, { useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useState } from 'react';
import './AllCourses.css'
const AllCourses = () => {
    console.log("hiii");
    const[search,setsearch]=useState('');
    const api=import.meta.env.VITE_API_URL;
    const [courses,setcourses]=useState([]);
        const fetchcourses=async()=>{
          try{
            console.log("yesss");
            const req=await fetch(`${api}/fetchcourses`,{
            method:"GET",
            credentials:'include'
        })
        const data=await req.json();
        if(data.success){setcourses(data.courses)}
          }catch(error){
            console.log(error);
          }
        }

        useEffect(()=>{
            console.log("entr");
            fetchcourses();
        },[])
  return (
      <div id="allcourses">
              <div className="content-heading">All Courses</div>
              <div className="searchbox">
              <FaSearch id="search-icon"></FaSearch>
              <input type='text' value={search} placeholder='Enter text to search' onChange={(e)=>setsearch(e.target.value)}></input>
              </div>
              <div id="all-courses">
                {courses.map((course)=>{
                return <div id="course">
                  <img src={course.image}></img>
                  <div id='course-content'>
                  <div id="course-content-title">{course.title}</div>
                  <div>Taught By: {course.instructor}</div>
                  <div>Course Duration: {course.duration}</div>
                  </div>
                </div>
              })}
              </div>
          </div>
  )
}

export default AllCourses
