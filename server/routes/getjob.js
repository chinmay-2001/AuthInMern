const router = require("express").Router();
const { job } = require("../models/job");

// const { database } =require("../db_rec");


router.post("/",async (req,resp)=>{
    try {
        job.find().then((result)=>{
            resp.send(result)
        }).catch((err)=>{
            console.log(err);
        })
        
    } catch (error) {
        console.log(error);
    }
})
module.exports=router;