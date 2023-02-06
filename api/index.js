const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const Ut = require("./routes/users");
const postRoute = require("./routes/posts");
const catRoute = require("./routes/categories");
const multer = require("multer");

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


    const storage = multer.diskStorage({
        destination: (req,file,cb)=>{
            cb(null,"images");
        },
        filename: (req,file,cb)=>{
            cb(null , req.body.name);
        },
    });

    const upload = multer({storage: storage});
    app.post("/api/upload" , upload.single("file") , (req,res)=>{
        res.status(200).json("File has been uploaded");
    });


    app.use("/api/auth" , authRoute); 
    app.use("/api/users" ,Ut);
    app.use("/api/posts" ,postRoute); 
    app.use("/api/categories" ,catRoute); 




app.listen("2000" , ()=>{
    console.log("run out Ko");
});