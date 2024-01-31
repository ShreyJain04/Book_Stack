
const dotenv = require("dotenv");
dotenv.config({
    path:'/.env'
})


const mongoose= require('mongoose');

const connectDB= async()=>{
    console.log(process.env.MONGODB_URI);
    try{
        
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connection Successful to DB");        
    }catch(err){
        console.error("DataBase Connection failed");
        process.exit(0);
    }
}

module.exports= connectDB;