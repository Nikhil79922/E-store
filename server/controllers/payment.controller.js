const {razorpayInstance}  = require("../config/razorpay.config");
const crypto=require("crypto");

exports.createOrder= async(req,res)=>{
    //Do not accept amount from Client , Production Grade integration
    const {courseId, amount}=req.body;
const razorpay=razorpayInstance();
    //Fetch the curse data from the CourseId , including the course data.
    
    //Create Order 
    const option={
        amount:amount * 100, //razor pay treat 100 as 1.00 and same for all the value.
        currency:"INR",
        receipt:`receipt_order_1`
    }
    try {
        console.log(option)
        razorpay.orders.create(option,(error,order)=>{
            if(error){
                console.log("Error at CreateOrdr :: ",error)
        res.status(500).json({success:false,message:error.message})
            }
            return res.status(200).json(order);
        })
    } catch (error) {
        console.log("Error at CreateOrdr :: ",error)
        res.status(500).json({success:false,message:error.message})
    }
}


exports.verifyPayment = async(req,res)=>{
    console.log("req.body==>",req.body)
    const {razorpay_order_id, razorpay_payment_id,razorpay_signature}=req.body;
    
     const secret= process.env.RAZORPAY_KEY_SECRET;
     
     //Create hmac Object 
     const hmac = crypto.createHmac("sha256",secret);
     console.log(hmac);

     hmac.update(razorpay_order_id + "|" + razorpay_payment_id);

     const generateSignature = hmac.digest("hex");
     
     if(generateSignature===razorpay_signature){
       return res.status(500).json({success:true,message:"Payment SuccessFull"}) 
     }else{
       return res.status(500).json({success:false,message:"Payment Failed Signature didn't matched"})
     }

}


exports.razorpayWebhookController = async (req, res) => {
  const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;

  try {
    // 1️⃣ Verify Signature
    const razorpaySignature = req.headers["x-razorpay-signature"];

    const expectedSignature = crypto
      .createHmac("sha256", webhookSecret)
      .update(req.body)
      .digest("hex");

    if (expectedSignature !== razorpaySignature) {
      console.error("❌ Invalid webhook signature");
      return res.status(400).json({ success: false });
    }

    // 2️⃣ Parse event
    const event = JSON.parse(req.body.toString());
    console.log((event))
    console.log(JSON.stringify(event.payload))

    console.log("✅ Razorpay Webhook Event:", event.event);

    // 3️⃣ Handle events
    // switch (event.event) {
    //   case "payment.captured": {
    //     const payment = event.payload.payment.entity;
    //     const orderId = payment.order_id;

    //     await Order.findOneAndUpdate(
    //       { razorpayOrderId: orderId },
    //       {
    //         status: "PAID",
    //         razorpayPaymentId: payment.id,
    //       }
    //     );

    //     break;
    //   }

    //   case "payment.failed": {
    //     const payment = event.payload.payment.entity;

    //     await Order.findOneAndUpdate(
    //       { razorpayOrderId: payment.order_id },
    //       { status: "FAILED" }
    //     );

    //     break;
    //   }

    //   default:
    //     console.log("Unhandled event:", event.event);
    // }

    // 4️⃣ Respond QUICKLY
    res.status(200).json({ received: true });

  } catch (err) {
    console.error("Webhook error:", err);
    res.status(500).json({ success: false });
  }
};
