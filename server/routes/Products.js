const express= require("express")
const route=express.Router()
const {handleProducts}=require("../controllers/Products")

route.post("/",handleProducts)

module.exports=route;