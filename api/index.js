const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const Ut = require("./routes/users");
const postRoute = require("./routes/posts");
const catRoute = require("./routes/categories");


// const bcrypt = require('bcrypt'); 

mongoose.set('strictQuery', true);


dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
    })
    .then(console.log("connected to MongoDB"))
    .catch(err=>console.log(err));

    app.use("/api/auth" , authRoute); 
    app.use("/api/users" ,Ut);
    app.use("/api/posts" ,postRoute); 
    app.use("/api/categories" ,catRoute); 




app.listen("2000" , ()=>{
    console.log("vwvrunni  ng");
});