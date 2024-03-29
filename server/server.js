require("dotenv").config();
const express = require("express");
const app = express();
const PORT= 3000;
const authRoute= require("./router/auth-router");
const contactRoute= require("./router/contact-router");
const serviceRoute= require("./router/service-router");
const connectDB= require("./utils/db");
const errorMiddleware = require("./midllewares/error-middleware");
const cors= require('cors')


const corsOption={
    // origin:"http://localhost:5173",
    origin:"https://shreyjain04.github.io",
    methods:"GET, POST, PUT, PATCH, HEAD",
    credentials:true,
}

app.use(cors(corsOption));

//Middleware :{for parsing json data from requests}
app.use(express.json());

app.use("/api/auth",authRoute);
app.use("/api/form",contactRoute);
app.use("/api/data",serviceRoute);

app.use(errorMiddleware);

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    });
});

