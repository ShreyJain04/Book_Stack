const Service= require("../models/service-model");

const service= async(req,res)=>{
    try{
        const response= await Service.find();
        if(!response){
            res.status(400).json({msg:"service not found"});
            return;      
        }
        res.status(200).json({msg:response});
    }catch(error){
        console.log(`services: ${error}`);
    }
}

module.exports= service;