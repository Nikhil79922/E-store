const mongoose=require("mongoose")

async function DBconnection(ConnectString){
    mongoose.connect(ConnectString).then(()=>console.log("MongoDB connected")).catch((err)=>console.log("Error occur during MongoDB connection"+err))
}
module.exports=DBconnection;  