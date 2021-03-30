//require express
const express = require('express');

const app = express();

const connectDB = require('./config/connectDB');

//require .env
require('dotenv').config();

//PORT
const PORT = process.env.PORT

//Connect DataBase
connectDB();


// middleware global
app.use(express.json({limit: '50mb'}));

// router
app.use("/api/user", require("./routes/user"));

//Connect Server
app.listen(PORT,(err) =>
err ? console.error(err) 
: console.log(`Running Server http://localhost:${PORT}`) )