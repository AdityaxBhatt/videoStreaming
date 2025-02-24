import dotenv from "dotenv"
import mongoose from "mongoose"
import connectDB from "./db/connection.js"
import {app} from "./app.js"

dotenv.config({
    path: './env'
})

app.get('/',(req,res)=>{
    res.send("This server is working");
})

connectDB()
.then(()=>{
    app.on('error',(err)=>{
        console.log("Err:",err);
        throw err;
    })
    app.listen(process.env.PORT || 4000,()=>{
        console.log(`Server is running at port: ${process.env.PORT || 4000}`);
    })
})
.catch((err)=>{
    console.log("Mongo db connection failed",err);
})
