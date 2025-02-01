const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true,
        default: "ROLE_USER"
    },
    password: {
        type: String,
        required: true,
    },
}, { timestamps: true })

const Users=mongoose.model("users",Schema);

module.exports=Users;