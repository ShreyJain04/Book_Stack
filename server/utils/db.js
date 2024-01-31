const mongoose= require('mongoose');

const URI= process.env.MONGODB_URI;

const connectDB= async()=>{
    try{
        await mongoose.connect(URI);
        console.log("Connection Successful to DB");
    }catch(err){
        console.error("DataBase Connection failed");
        process.exit(0);
    }
}

module.exports= connectDB;