require("dotenv").config();
const express = require('express');
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const { connectToDB } = require("./database/db");
const userRouter = require("./routes/userRoutes");


const app = express();

app.use(express.json());
app.use(cookieParser())
app.use(morgan("tiny"))
app.use(express.urlencoded({extended: true}));

connectToDB();

app.use('/auth', userRouter)



const PORT = process.env.PORT || 5000;
console.log(PORT)
app.listen(PORT, ()=>{
    console.log("Server is listening on port " + PORT)
})