import React, { useState } from 'react'
import loginimg from '../assets/login.png'
import './Studentlogin.css'
import { useNavigate } from 'react-router-dom'
const Studentlogin = (props) => {
  const navigate=useNavigate();
  const[loading,setloading]=useState(false);
  const newuser=props.newuser;const setnewuser=props.setnewuser;
  const[signup,setsignup]=useState(false);
  const[formdata,setformdata]=useState({email:'',password:''});
  const api=import.meta.env.VITE_API_URL;
  function handleform(e){
    const{name,value}=e.target;
    setformdata((prev)=>({...prev,[name]:value}));
  }
  const handlesubmit=async(e)=>{
    
    e.preventDefault();
    setloading(true);
    try{
    const opt=signup===true?"signup":"login";
    const req=await fetch(`${api}/${opt}`,{
      method:"POST",
      headers:{"Content-Type":"application/json",},
      body:JSON.stringify({name:formdata.name,email:formdata.email,password:formdata.password}),
      credentials:'include'
    })
    const data=await req.json();
    if(data.success===true){
      navigate('/studentdashboard/overview');
    }
    else{
      setformdata({name:"",email:"",password:""});
    }
  }catch(error){
    console.log(error);
  }
    setloading(false);
  }
  return (
    <div id="login">
      <div id='login-container'>
      
      <img src={loginimg} alt='login-img' id='login-img'></img>
      <form id='login-form' onSubmit={handlesubmit}>
        <div id='loginform-heading'>{newuser?"Sign Up":"Login"}</div>
        {newuser && <div><label for='name'>Name</label><br/>
        <input type='text' value={formdata.name} name='name' placeholder='Enter Your Name' onChange={handleform} className='input'></input></div>}
        <div>
        <label for="email">Email</label><br/>
        <input type="email" value={formdata.email} name="email" placeholder="Enter Your Email" onChange={handleform} className='input'></input>
        </div>
        <div>
        <label for="password">Password</label><br/>
        <input type="password" value={formdata.password} name="password" placeholder="Enter Your Password" onChange={handleform} className='input'></input>
        </div>
        <button onClick={()=>{setnewuser(prev=>!prev);setformdata({name:'',password:'',email:''})}} id="newuser">{newuser?"Already Have An Account":"Create An Account"}</button>
        <button type="submit" id='submitlogin' disabled={loading}>{newuser?"Sign Up":"Log In"}</button>
      </form>
      </div>
    </div>
  )
}

export default Studentlogin
