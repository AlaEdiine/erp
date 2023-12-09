const mongoose    = require('mongoose')
require("dotenv").config();
// const url = 'mongodb://localhost:27017/newdata'
const url = process.env.MONGO_URL

mongoose.connect(url , 
  {
    }).then(con =>{
  
   if (con){
    console.log('Succed MongoDB Atals Connected in 0.005 ms ------ ERP ONP')
   }
   else {
    console.log("Error connected MongoDB")
   }
    
    })


