import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"

const connectDB = async () => {
    try{
        const conn=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`DB is connect to the host: ${conn.connection.host}`);
    }
    catch(error){
        console.error("error is",error);
        process.exit(1);
    }
}
export default connectDB;