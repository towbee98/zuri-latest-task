const user = require('../model/model');
const User= require('../model/model')
const {generateHash,comparePassword}= require('../utils/password')
const {generateToken}= require('../utils/session')
const signUp = async (req, res, next) => {
  try {
      req.body.password= await generateHash(req.body.password);
    const user = await User.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        role:req.body.role
    })
    res.status(201).json({
        status:"success",
        message:"Sign up successful",
        user
    })
  } catch (error) {
     next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const user= await User.findOne({email:req.body.email}).select('+password')
if(!(await comparePassword(req.body.password,user.password))) return next(new Error('Email and password are not compatible'));
const token=  generateToken({name:user.name,email:user.email,role:user.role})
    res.status(200).json({
        status:"success",
        message:'Login successful',
        token
    });
    
  } catch (error) {
     next(error);
  }
};
const logout = async (req, res, next) => {
  try {
    await blackTokenService.blackListToken(req.token);
    return response.success(res, 200, 'Logout successful');
  } catch (error) {
    return next(error);
  }
};
module.exports = {
  signUp,
  login,
  logout
};
