import React from 'react'
import './Overview.css'
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom';
const Overview = () => {
    const { enrolledcourses,setclicked } = useOutletContext();
    const navigate=useNavigate();
    const completed=enrolledcourses.filter((courses)=>courses.status==='completed')
    const pending=enrolledcourses.filter((courses)=>courses.status==='dropped')
    const active=enrolledcourses.filter((courses)=>courses.status==='active')
  return (
            
            <div id="dashboard-content">
              <div>
                <div id="content-heading">Welcome Student!</div>
                <div id='content-subheading'>Let's Create Something New Today</div>
              </div>
              <div id="dashboard-progress">
                <div>
                  <div className="dashboard-progress-innera">Total Enrolled Courses</div><br/>
                  <div className="dashboard-progress-innerb">{enrolledcourses.length}</div>
                </div>
                <div>
                  <div className='dashboard-progress-innera'>Total Course Completed</div><br/>
                  <div className='dashboard-progress-innerb'>{completed.length}</div>
                </div>
                <div>
                  <div className='dashboard-progress-innera'>Total Active Courses</div><br/>
                  <div className='dashboard-progress-innerb'>{active.length}</div>
                </div>
                <div>
                  <div className='dashboard-progress-innera'>Total Dropped Courses</div><br/>
                  <div className='dashboard-progress-innerb'>{pending.length}</div>
                </div>
              </div>
              <b id='thumbnails-heading'>Enrolled Courses :-</b>
              <div id="thumbnails">
                {enrolledcourses.map((courses)=>{
                return <div className="thumbnail">
                  <img src={courses.course.image}></img>
                  <div className='thumbnail-content'>
                  <div className="thumbnail-content-title" onClick={()=>{navigate('/studentdashboard/enrolled-courses');setclicked('enrolled-courses')}}>{courses.course.title}</div>
                  <div>Course Duration: {courses.course.duration}</div>
                  <div>Course Status: <i>{courses.status}</i></div>
                  </div>
                </div>
              })}
              </div>
            </div>
  )
}

export default Overview
