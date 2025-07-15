const jwt=require("jsonwebtoken")
const usermodel=require("../models/user-model")

async function isloggedin(req,res,next) {
    if(!req.cookies.token)
    {
         req.flash("error", "you need to log in first")
         return res.redirect("/");
    }
    
    try{
        let decoded=jwt.verify(req.cookies.token,process.env.JWT_KEY);
        let user=await usermodel
        .findOne({email:decoded.email})
        .select("-password")

        req.user=user;
        next()
    }
    catch(err){
        req.flash("something went wrong")
        res.redirect("/")
    }
    
}

module.exports={
    isloggedin,
}