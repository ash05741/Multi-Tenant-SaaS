import config from "../config/index.js";
import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGO_URI);
        console.log("Connected to MongoDB");
    } catch (err) {
        console.log("Error: ", err.message);
        process.exit(1);
    }
}

export default connectDB;