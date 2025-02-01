const express= require("express")
const route=express.Router()
const {handleSignUp,handleLogin,handleForgetPassword,handleResetPassword}=require("../controllers/Auth")
const {verifyLogin,verifySignUp}=require("../middlewares/Authverification")
const {tokenVerification}=require("../middlewares/Auth")

route.post("/Login",verifyLogin,handleLogin)

route.post("/SignUp",verifySignUp,handleSignUp)

route.post("/forget-password",handleForgetPassword)

route.post("/reset-password",handleResetPassword)

route.get("/",tokenVerification,(req,res)=>{
    return res.json({message:"Still Loged In"})
})

module.exports=route;