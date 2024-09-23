import mongoose from "mongoose";
import { DBName } from "../constant.js";

const connectdb = async () =>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DBName}`);
        console.log("Mongo DB connection successfull!!");
    } catch (error) {
        console.log("Mongo DB connection failed!!",error);
        process.exit(1);
    }
}

export default connectdb