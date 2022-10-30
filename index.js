const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const dotenv=require("dotenv").config()
const app=express()
mongoose.connect(process.env.DATABASE,(err)=>{
    if(!err){
        console.log("Database connected");
    }else{
        console.log(err);
    }
})
app.use(express.json({limit:'50mb'}))
app.use(express.urlencoded({extended:false}))
app.use(express.urlencoded({limit:'50mb'}))
app.use(cors())
app.listen(process.env.PORT,(err)=>{
    if(!err){
        console.log(`Server connected on ${process.env.PORT}`);
    }else{
        console.log(err);
    }
})
app.post("/details",(req,res)=>{
    console.log(req.body);
})

