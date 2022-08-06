const User = require('../model/model')
const userPage=async(req,res,next)=>{
    try {
       res.status(201).json({
           status:"success",
          
           message:"Welcome to yuor user page"
       })
    } catch (error) {
        next(error)
    }
}

const staffPage=async(req,res,next)=>{
    try {
       res.status(200).json({
           status:"success",

           message:"Welcome to the staff page"
       })
    } catch (error) {
        next(error)
    }
}
const managerPage= async(req,res,next)=>{
    try {
       res.status(200).json({
           status:"success",
           message:"Welcome to the manager page"
       })
    } catch (error) {
        next(error)
    }
}
const adminPage= async(req,res,next)=>{
    try {
       res.status(200).json({
           status:"success",
           data:updatedToDo,
           message:"Welcome to the admin page"
       })
    } catch (error) {
        next(error)
    }
}

const homePage= async(req,res,next)=>{
    try {
        
        res.status(204).json({
            status:"success",
            message:"Welcome to the homepage"
        })
    } catch (error) {
        next(error)
    }
}

module.exports={
    homePage,adminPage,userPage,managerPage,staffPage
}