const express = require("express")
const router = express.Router()
const {isloggedin}=require("../middleware/isLoggedin");
const productModel = require("../models/product-model");


router.get("/",function(req,res){
    let error=req.flash("error");
    res.render("index",{error})
})

// router.get("/shop",isloggedin,async function(req,res){
//     let products=productModel.find();
//     res.render("shop",products)
// })
router.get("/shop", isloggedin, async function (req, res) {
    try {
        const products = await productModel.find();
        res.render("shop", { products }); // Correctly pass products to EJS
    } catch (err) {
        console.error(err);
        res.redirect("/?error=Unable to fetch products");
    }
});


module.exports=router