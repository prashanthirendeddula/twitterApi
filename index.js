const express=require('express')
const mongoose=require('mongoose')
const port=3334
const app=express()
const router=require('./config/routes')
const dbsetup=require('./config/database')
app.use("/",router)
//dbsetup
dbsetup()
app.listen(port,()=>{
           console.log('listening on port',port)
}) 