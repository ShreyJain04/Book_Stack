const mongoose = require('mongoose');

const serviceSchema= new mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    subtitle:{
        type:String,
        require:true,
    },
    author:{
        type:String,
        require:true,
    },
    publisher:{
        type:String,
        require:true,
    },
    publishedDate:{
        type:String,
        require:true,
    },
    discription:{
        type:String,
        require:true,
    },
});

const Service= new mongoose.model("Service",serviceSchema);

module.exports= Service;