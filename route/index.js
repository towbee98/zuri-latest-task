const router= require("express").Router()
const authRouter= require('../route/authRoute')
router.use('/auth',authRouter)
//router.use('/',homePage)
module.exports=router;