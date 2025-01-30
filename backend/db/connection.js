import mongoose from "mongoose";
import dotenv from 'dotenv'
// import e from "express";
dotenv.config({})

const connectDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGO_URL);
        console.log("!! Connected to MongoDB !!!");
        // console.log("Logging connection instance: ", connectionInstance);

    } catch (error) {
        console.log("Error Occured in connectDB:",error);
    }
}


export {connectDB};