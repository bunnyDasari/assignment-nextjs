

import { connectDB } from "@/app/lib/db";
import { user } from "@/app/lib/model/user";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(req,data){
   const userId = data.params.productid
   const filter = {_id : userId}
   const payload = await req.json();
   console.log(payload)
   await mongoose.connect(connectDB);
   const result = await user.findOneAndUpdate(filter,payload);
   return NextResponse.json({result,success : true})
}
export async function GET(req,data){
    const userId = data.params.productid
    const filter = {_id : userId}
    await mongoose.connect(connectDB);
    const result = await user.findOneAndUpdate(filter);
    return NextResponse.json({result,success : true})
 }
 export async function DELETE(req,data){
    const userId = data.params.productid
    const filter = {_id : userId}
    await mongoose.connect(connectDB);
    const result = await user.deleteOne(filter);
    return NextResponse.json({result,success : true})
 }