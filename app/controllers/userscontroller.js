const mongoose=require('mongoose')
const User=require('../model/user')
module.exports.list=(req,res)=>{
    const name=req.params.name
    User.findOne({name})
       .then((user)=>{
           if(user){
            res.json(user)

           }else{
            const user=new User({username:name})
            user.save()
                 .then((tweets)=>{
                     res.json(tweets)
                     console.log(tweets)
                 })
                 .catch((err)=>{
                     res.json(err)
                 })
           }
           

        })
       .catch((err)=>{
           res.send(err)
       })
}

