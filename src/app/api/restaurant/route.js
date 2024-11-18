import { connectionStr } from "@/app/lib/db";
import { restaurantSchema } from "@/app/lib/restaurantsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        // Connect to the database
        await mongoose.connect(connectionStr, { useNewUrlParser: true, useUnifiedTopology: true });
        
        // Fetch data using the restaurant schema
        const data = await restaurantSchema.find();
        console.log("data", data);
        
        // Return the result in the response
        return NextResponse.json({ result: true, data });
        
    } catch (error) {
        console.log("Error:", error);
        
        // Return an error response in case of failure
        return NextResponse.json({ result: false, error: error.message });
    }
}


export async function POST(request) {
    let payload = await request.json();
    console.log("payload", payload);
    await mongoose.connect(connectionStr,{useNewUrlParser: true, useUnifiedTopology: true})
    let restaurant = new restaurantSchema(payload)
    const result = await restaurant.save();
    return NextResponse.json({result: result, success: true})
}