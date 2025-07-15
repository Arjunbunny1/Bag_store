const express = require("express")
const router = express.Router()
const ownerModel=require("../models/owner-model")
// console.log(process.env.NODE_ENV)
// we set NODE_ENV=develoment, so that some function run only during development phase
// $env:NODE_ENV="development"



if(process.env.NODE_ENV==="development")
{
   router.post("/create",async function(req,res){
    let owners=await ownerModel.find()
    if(owners.length>0){
        return res
        .status(503)
        .send("You don't have permission to create new owner")
    }
    let {fullname, email, password}=req.body;
    let createOwner =await ownerModel.create({
        fullname,
        email,
        password
    }) 
    res.status(201).send(createOwner)
   }) 
}
router.get("/admin",function(req,res){
    //  res.send("hey owner")  
     let success=req.flash("success");
     res.render("createproducts", { success}); 
})


module.exports=router
