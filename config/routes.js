const express=require('express')
const router=express.Router()
const userscontroller=require('../app/controllers/userscontroller')
router.get('/users/:name',userscontroller.list)
module.exports=router