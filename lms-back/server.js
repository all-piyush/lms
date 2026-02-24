const express=require('express');
const cors=require('cors');
const cookieparser=require('cookie-parser');
const app=express();

require("dotenv").config();
app.use(express.json());
app.use(cookieparser());
const PORT=process.env.PORT||5000;
app.use(cors({
    origin:' http://localhost:5173',credentials:true
}))
app.listen(PORT,()=>{
    console.log(`app started at ${PORT}`)
})
app.get('/',(req,res)=>{
    res.send("Backend Server Started");
})
const routes=require('./Routes/routes');
app.use('/api/v1',routes);
const dbconnect=require('./config/database');
dbconnect();
