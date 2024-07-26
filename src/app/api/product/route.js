import { connectDB } from "@/app/lib/db";
import { user } from "@/app/lib/model/user";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await mongoose.connect(connectDB);
        const data = await user.find();
        return NextResponse.json({ data });
        
    } catch (error) {
        console.log(error)
    }
 
  
}
export async function POST(req) {
    const payload = await req.json();
    await mongoose.connect(connectDB);
    let users = new user(payload);
    const res = await users.save();
    return NextResponse.json({ res, success: "true" });


}