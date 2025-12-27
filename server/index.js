const express= require("express")
require('dotenv').config()
var cors = require('cors')
const app=express();
const port = process.env.PORT;

//Imports
const DBconnection=require("./config/DBconnection")
const AuthRoute=require("./routes/Auth");
const ProductRoute=require("./routes/Products");
const paymentRoute=require("./routes/payment.routes")

//Connecting Database
DBconnection("mongodb://localhost:27017/E-Commernce")

app.post(
    "/api/webhook",
    express.raw({ type: "application/json" }),
  );


//Middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Hello World")
})

//Routing
app.use("/auth",AuthRoute)
app.use("/products",ProductRoute)
app.use("/api",paymentRoute)

app.listen(port,(req,res)=>{
    console.log(`Server is running on port ${port}`)
})
