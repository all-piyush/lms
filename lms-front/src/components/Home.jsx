import React, { useState } from 'react'
import {Link, useNavigate } from 'react-router-dom'
import homeimg from '../assets/homeimg.png'
import './Home.css'
const Home = (props) => {
    const [active,setactive]=useState('home');
    const setnewuser=props.setnewuser
    const navigate=useNavigate();
  return (
    <div id="home">
        <div id="home-navbar">
            <div id='home-navbar-heading'>Learnhub</div>
            <div id='home-navbar-middle'>
                <Link to='/' className={active==='home'?'active':''} onClick={()=>setactive('home')}>Home</Link>
                <Link to='#' className={active==='about'?'active':''} onClick={()=>setactive('about')}>About </Link>
                <Link to='#' className={active==='contact'?'active':''} onClick={()=>setactive('contact')}>Contact</Link>
                
            </div>
            <div id="home-navbar-left">
            <button id="login-home" onClick={()=>navigate('/studentlogin')}>Login</button>
            <button id="signup-home" onClick={()=>{setnewuser(true);navigate('/studentlogin')}}>Sign Up</button>
            </div>
        </div>
        <div id='home-main'>
            <img src={homeimg} alt='home-img' id='homeimg'></img>
            <div id='home-main-text'>
                <div>
                <div className='main-text-heading'>Create <span className='highlight'>New Experience</span> </div>
                <div className='main-text-heading'>With Ways Of <span className='highlight'>Perfect</span></div>
                <div className='highlight main-text-heading'>Learning</div>
                </div>
                <div>
                <div id='main-text-sub'>Learn from industry experts and enhance your knowledge </div>
                <div id='main-text-sub'>with our wide range of online courses</div>
                </div>
                <button  id='getstarted' onClick={()=>navigate('/studentlogin')}>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Home
