const express=require("express");
const app=express()

const PORT=3000;
app.get("/",(req,res)=>{
    console.log("Hello This is welcome page");
    res.send("Welcome to Dashboard Part 2");
})
app.listen(PORT,(req,res)=>{
    console.log(`Server running at port ${PORT}`);
})
