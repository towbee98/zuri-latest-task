const router= require("express").Router()
const {signup,login,logout,forgetPassword,resetPassword}= require('../controller/authController')
router.route("/signup").post(signup)
router.route("/login").post(login)
router.route("/forgetpassword").post(forgetPassword);
router.route("/password/:resetToken").post(resetPassword)

module.exports= router;