import express from "express";          // Express framework for building web applications
import cors from "cors";                // Middleware to enable Cross-Origin Resource Sharing (CORS)
import cookieParser from "cookie-parser"; // Middleware to parse cookies from HTTP requests

//*  Creating an instance of an Express application
const app = express();

// Using CORS middleware to enable cross-origin requests
// Configured to allow requests from the origin specified in the environment variable CORS_ORIGIN
// Also allows credentials (cookies, authorization headers) to be included in the requests
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

//* Middleware to parse incoming JSON requests
// Limits the size of the JSON payload to 60kb
app.use(express.json({ limit: "60kb" }));

// Middleware to parse URL-encoded data from HTTP requests
// 'extended: true' allows for rich objects and arrays to be encoded into the URL-encoded format
// Limits the size of the URL-encoded data to 52kb
app.use(express.urlencoded({ extended: true, limit: "52kb" }));

// Middleware to serve static files from the "public" directory
// Any static assets like HTML, CSS, JavaScript files placed in the "public" directory can be accessed directly
app.use(express.static("public"));

// Middleware to parse cookies attached to the client request object
app.use(cookieParser());


//routes import

import userRouter from "./routes/user.routes.js"

//routes declaration

app.use('/users',userRouter)
//http://localhost:8000/api/v1/users/register
//user ke baad jitte bhi method hai sab user.routes me likhe jayenge http://localhost:8000/api/v1/users ke baad sara access abb user.routes.js file me chala jayega jisse code saaf bhi rahega aue easily maintainable bhi
export {app}