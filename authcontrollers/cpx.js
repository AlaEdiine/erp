const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser"); // cookies
// const { VERIFYUSER } = require("../Models/verifyUser");
const { createError } = require("../Service/Error");
const { CPX } = require("../Models/Colis-postaux")
// const { GenerateToken } = require("../utils/GenerateToken");
// const crypto = require("crypto");
// const SendEmail = require("../utils/SendEmail");
require("dotenv").config();

//TODO:
/**----------------------------------------- 
 *  @desc add cpx
 *  @route /cpx/add
 *  @method POST
 *  @access private
 -------------------------------------------*/

module.exports.ADD_CPX = async (req, res, next) => {
  try {
    // check CPX
     const result = await CPX.findOne({ QrCode: req.body.QrCode });
     if (result) {
      // New Date
      const Day = new Date();
      // Get old date from Schema
     const newday =  result.Date.push(Day.toUTCString())
      const newResult = { ... result , newday }

 
      // Update Schema 
       await CPX.findByIdAndUpdate(result._id , {$set : newResult} , {new : true});

       console.log(newResult);
     }
     else {
    // Save in DB
    const newCpx = new CPX(req.body);
    await newCpx.save();
     }

    // // Hash Password
    // const salt = await bcrypt.genSalt(10);
    // HashPassword = await bcrypt.hash(Data.Password, salt);
    // const dataForm = { ...Data, Password: HashPassword};



    // // Create token validation user and save it to DB
    // const verifyUser = new VERIFYUSER({
    //   userId: newuser._id,
    //   tokens: crypto.randomBytes(32).toString("hex"),
    //   description : "Verify Account"
    // });
    // await verifyUser.save();

    // const token = GenerateToken(newuser);

    return res
      .status(200)
      .json("succes cpx added");
  } catch (err) {
    return next(err);
  }
};

