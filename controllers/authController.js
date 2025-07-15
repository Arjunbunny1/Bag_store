const usermodel =require("../models/user-model")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const {genrateToken}=require("../utils/genrateToken")
const productModel=require("../models/product-model")

async function registerUser(req,res)
{
     try{
        let {email, password, fullname}=req.body;
        
        let user=await usermodel.findOne({email:email})
        if(user)return res.status(401).send("ACCOUNT ALREADY EXIST !!!")

        bcrypt.genSalt(10,function(err,salt){
            bcrypt.hash(password,salt, async function(err,hash){
                if(err)
                {
                    return res.send(err.message)
                }
                else
                {
                    // res.send(hash)
                    let user=await usermodel.create({
                            email,
                            password:hash,
                            fullname,
                        });
                   let token=genrateToken(user);
                    res.cookie("token",token)
                    // res.send("user created successfully")
                    res.render("index");
                }
            })
        })
    }
    catch(err){

        res.send(err.message);
    }
}


async function loginUser(req, res) {
    let { email, password } = req.body;

    let user = await usermodel.findOne({ email: email });
    if (!user) return res.send("Email or password incorrect");

    bcrypt.compare(password, user.password, async function (err, result) {
        if (result) {
            let token = genrateToken(user);
            res.cookie("token", token);

            // ✅ Fetch products and pass to EJS
            try {
                const products = await productModel.find();
                res.render("shop", { products }); // 💡 Pass products to fix EJS
            } catch (err) {
                console.error("Error loading products:", err);
                res.status(500).send("Error loading shop");
            }
        } else {
            res.send("Email or password incorrect");
        }
    });
}

module.exports = { loginUser };


async function logout(req,res) {
    res.cookie("token","")
    res.redirect("/")
    
}
module.exports={
    registerUser,
    loginUser,
    logout,
}