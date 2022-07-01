const ToDo= require("../model/model")
const createToDo=async(req,res,next)=>{
    try {
        const {title,description}=req.body;
       const newToDo= await ToDo.create({title,description});
       res.status(201).json({
           status:"success",
           data:newToDo,
           message:"ToDo successfully created"
       })
    } catch (error) {
        next(error)
    }
}

const getAllTodo=async(req,res,next)=>{
    try {
       const AllToDos= await ToDo.find();
       res.status(200).json({
           status:"success",
           size:AllToDos.length,
           data:AllToDos,
           message:"All ToDos successfully retrieved"
       })
    } catch (error) {
        next(error)
    }
}
const getToDo= async(req,res,next)=>{
    try {
        const todoID= req.params.id;
       const toDo= await ToDo.findById(todoID)
       if(!toDo) return next(new Error("ToDo not found"))
       res.status(200).json({
           status:"success",
           message:"ToDo retrieved successfully"
       })
    } catch (error) {
        next(error)
    }
}
const updateTodo= async(req,res,next)=>{
    try {
        const toDoID= req.params.id;
        const {title,description}=req.body;
       const updatedToDo=await ToDo.findByIdAndUpdate(toDoID,{title,description},{runValidators:true,new:true})
       if(!updatedToDo) return next(new Error("ToDo not found"))
       res.status(200).json({
           status:"success",
           data:updatedToDo,
           message:"ToDo successfully updated"
       })
    } catch (error) {
        next(error)
    }
}

const removeToDo= async(req,res,next)=>{
    try {
        const toDoID= req.params.id;
        const toDo= await ToDo.findByIdAndDelete(toDoID)
        res.status(204).json({
            status:"success",
            message:"todo successfully deleted"
        })
    } catch (error) {
        next(error)
    }
}

module.exports={
    createToDo,getAllTodo,removeToDo,updateTodo,getToDo
}