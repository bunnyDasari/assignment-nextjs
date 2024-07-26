import mongoose from "mongoose";

const usersSchma = new mongoose.Schema({
    firstName:String,
    lastName:String,
    password : String,
    email : String
})

export const user = mongoose.models.users || mongoose.model("users",usersSchma)
