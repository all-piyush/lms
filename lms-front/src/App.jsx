import './App.css'
import {Routes,Route,Link, useNavigate} from 'react-router-dom'
import Home from './components/Home'
import StudentDashboard from './components/StudentDashboard'
import Studentlogin from './components/Studentlogin'
import Overview from './components/Overview'
import { useEffect, useState } from 'react'
import EnrolledCourses from './components/Enrolled-Courses'
import AllCourses from './components/AllCourses'
function App() {
  const [newuser,setnewuser]=useState(false);
  const[loggedin,setloggedin]=useState(false);
  const navigate=useNavigate();
  const api=import.meta.env.VITE_API_URL;

  const checkauth=async()=>{
    try{
      console.log("yes");
      const req=await fetch(`${api}/checkauth`,{
      method:"GET",
      credentials:'include'
      })
      const data=await req.json();
      if(data.success===true){setloggedin(true);navigate("/studentdashboard/overview");}
    }catch(error){console.log(error);}
  }
  useEffect(()=>{
    checkauth();
  },[loggedin])
  return (
    <>
    
      <Routes>
        <Route path='/' element={<Home setnewuser={setnewuser}></Home>}></Route>
        <Route path='/studentdashboard' element={<StudentDashboard ></StudentDashboard>}>
        <Route path='overview' element={<Overview></Overview>}></Route>
        <Route path='all-courses' element={<AllCourses></AllCourses>}></Route>
        <Route path='enrolled-courses'element={<EnrolledCourses></EnrolledCourses>}></Route>
        </Route>
        <Route path='/studentlogin' element={<Studentlogin newuser={newuser} setnewuser={setnewuser}></Studentlogin>}></Route>
      </Routes>
      
    </>
  )
}

export default App
