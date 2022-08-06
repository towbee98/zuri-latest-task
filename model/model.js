const mongoose= require("mongoose");

const userSchema= mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        min:[7,'Password cannot be less than 7 characters'],
        max:[15,'Password cannot be more than 15 characters'],
        required:true
    },
    role:{
        type:String,
        enum:['user','staff','manager','admin'],
        default:'user'
    }
})

const user= mongoose.model('user',userSchema)

module.exports=user