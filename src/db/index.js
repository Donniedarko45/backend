import mongoose from "mongoose";

import { DB_NAME } from "../constants.js";

// Defining an asynchronous function to connect to the MongoDB database
const connectDB = async () => {
    try {
        // Attempting to establish a connection to the MongoDB database
        // The connection string is constructed using the MONGODB_URL environment variable and the database name
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        
        // Logging a success message with the host of the MongoDB server
        console.log(`\n MongoDB connected !! DB HOST : ${connectionInstance.connection.host}`);
    } catch (error) {
        // Logging an error message if the connection fails
        console.log("MONGODB connection FAILED: ", error);
        
        // Exiting the process with a failure code (1)
        process.exit(1);
    }
}

export default connectDB;
