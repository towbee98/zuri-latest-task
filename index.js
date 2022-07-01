const express= require("express")
const mongoose=require("mongoose");
const router= require("./route/route")

require("dotenv").config()
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Database connected successfully")
}).catch(err=>{
    console.log(err)
})
const PORT= process.env.PORT || 4343
const app = express()

app.use(express.json())
app.use("/api/v1/todos",router)

app.use("/*",(req,res,next)=>{
    res.status(404).json({
        status:'FAIL',
        message:"Route not found"
    })
})

app.use((err,req,res,next)=>{
    const status=err.status || 500;
   const message=err.message ;
    res.status(status).json({
        status:"error",
        message:message
    })
})

app.listen(PORT,()=>{
    console.log("Server running at port "+ PORT)
})