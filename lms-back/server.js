const express=require('express');
const app=express();

require("dotenv").config();
app.use(express.json());
const PORT=process.env.PORT||5000;
app.listen(PORT,()=>{
    console.log(`app started at ${PORT}`)
})
app.get('/',(req,res)=>{
    res.send("Backend Server Started");
})
const dbconnect=require('./config/database');
dbconnect();
