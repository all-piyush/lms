import React, { useState } from 'react'
import './Enrolled-Courses.css'
import { FaSearch } from "react-icons/fa";
import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
const Courses = () => {
  const [search,setsearch]=useState('');
  const { enrolledcourses } = useOutletContext();
  return (
    <div id="enrolled">
        <div className="content-heading">Enrolled Courses</div>
        <div className="searchbox">
        <FaSearch id="search-icon"></FaSearch>
        <input type='text' value={search} placeholder='Enter text to search' onChange={(e)=>setsearch(e.target.value)}></input>
        </div>
        <div id="enrolled-courses">
          {enrolledcourses.map((courses)=>{
          return <div className="enrolled-course">
            <img src={courses.course.image}></img>
            <div className='enrolled-course-content'>
            <div className="enrolled-course-content-title">{courses.course.title}</div>
            <div>Taught By: {courses.course.instructor}</div>
            <div>Course Duration: {courses.course.duration}</div>
            <div>Level:{courses.course.level}</div>
            <div>Total Lessons:{courses.course.lessons}</div>
            </div>
          </div>
        })}
        </div>
    </div>
  )
}

export default Courses
