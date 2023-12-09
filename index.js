const express = require("express");
const multer = require("multer");
const parser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const cookieParser = require("cookie-parser"); 
const mongoose = require("mongoose");
const xss = require("xss-clean")
const rateLimiting = require("express-rate-limit")
const helmet = require("helmet")
const hpp = require("hpp")
// const { errorHandler, notFound } = require("./Middlewares/error");
require("dotenv").config();
require("./db");

const app = express();

// Cors Policy
const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true, 
  optionSuccessStatus:200
}


// Middlewares
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(xss()); // prevent XSS (cross site scripting) attacks
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" })); // Security headers 
app.use(hpp()); // prevent HTTP param pollution
app.use(rateLimiting({
  windowMs : 10 * 60 * 1000 ,// 10 Minutes
  max: 200 // 200 request send in 10 minutes
})) // reate limiting request



// ROUTES
app.use("/cpx", require("./Routes/cpx"));
// app.use("/auth", require("./routes/authAccount"));
// app.use('/USER' , require('./routes/_user'))
// app.use('/SETTING' , require('./routes/setting'))
// app.use('/ORDER' , require('./routes/order'))
// app.use('/api' , require('./routes/api'))
// app.use('/logout' , require('./routes/logout'))
// app.use('/images' , express.static("uploads"))

// // app.use(notFound)
// // Error Handler Middleware
// app.use(errorHandler)



const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
