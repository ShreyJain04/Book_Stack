if(process.env.NODE_ENV!="production"){
    require("dotenv").config()
}

const mongoose= require('mongoose');

const connectDB= async()=>{
    
    try{
        
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connection Successful to DB");        
    }catch(err){
        console.error("DataBase Connection failed");
        process.exit(0);
    }
}

module.exports= connectDB;