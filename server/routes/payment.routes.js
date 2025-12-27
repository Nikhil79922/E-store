const express =require("express");
const { createOrder, verifyPayment, razorpayWebhookController } = require("../controllers/payment.controller");
const route=express.Router();

route.post("/createOrder",createOrder)
route.post("/verifyPayment",verifyPayment)
route.post("/webhook",razorpayWebhookController)

module.exports=route