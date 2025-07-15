const express= require("express")
const app=express()
const cookieParser=require("cookie-parser")
const path=require("path")
const ownerRouter=require("./routes/ownerRouter")
const userRouter=require("./routes/userRouter")
const productRouter=require("./routes/productRouter")
const indexRouter=require("./routes/index")

const expressSession=require("express-session")
const flash=require("connect-flash")

require("dotenv").config();
// now we can use all these declared in .env file because of this
// we just process.env.jobhinaam hai

const db=require("./config/mongoose-connection")

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(expressSession({
    resave:false,
    saveUninitialized:false,
    secret:process.env.EXPRESS_SESSION_SECRET,
}))
app.use(flash())
app.use(express.static(path.join(__dirname,"public")))
app.set("view engine","ejs");


app.use("/",indexRouter)
app.use("/users", userRouter)
app.use("/owners", ownerRouter)
app.use("/products", productRouter)

app.listen(8000,()=>console.log("Server has started at port 8000"))

