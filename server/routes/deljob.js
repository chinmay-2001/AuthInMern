const router = require("express").Router();
const { job } = require("../models/job");


router.post("/",async (req,resp)=>{
    try {
        console.log("inside post")
        // student.find().then((result)=>{
        //     resp.send(result)
        // }).catch((err)=>{
        //     console.log(err);
        // })
        console.log(req.body.Company)
        job.deleteOne({Company:req.body.Company}).then((result)=>{
            resp.send(result)
        }).catch((err)=>{
            console.log(err);
        })
        
    } catch (error) {
        console.log(error);
    }
})
module.exports=router;