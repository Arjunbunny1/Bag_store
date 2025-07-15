const mongoose=require("mongoose")
const config=require("config")
const dbgr=require("debug")("development:mongoose");
// nothing is goona print in terminal  unti we set the variables
// $env:DEBUG="development:*" for printing the dbgr("mongoose connected")
// $env:DEBUG="" for not printing


// .connect("mongodb://127.0.0.1:27017/youtube")
mongoose
.connect(`${config.get("MONGODB_URI")}/youtube`)
.then(function()
{
    dbgr("mongoose connected")
})
.catch(function(err){
    console.log(err)
})

module.exports=mongoose.connection;

console.log(process.env.NODE_ENV)