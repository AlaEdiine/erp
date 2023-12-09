const router = require("express").Router();
require("dotenv").config();
// const { createError } = require("../Service/Error");
const { ADD_CPX } = require("../authcontrollers/cpx");
// const { verifyToken, verifyTokenAdmin } = require("../utils/verifyToken");
// const PhotoUpload = require("../Middlewares/PhotoUpload");

// ADD USER
router.post('/add', ADD_CPX)

module.exports = router