const mongoose=require('mongoose')
const Schema=mongoose.Schema
var Twitter = require('twitter');

const userSchema=new Schema({
    username:{
        type:String,
        required:true
    },
    tweets:[
        String
    ]
})
userSchema.pre('save',function(next){
    const user=this
    var client = new Twitter({
        consumer_key: 'NIcWVsZp0SEer9cV3sSDudWhq',
        consumer_secret: 'yhmbxVQ9TYmhMHYCSmhpO532BPY44nFkUHg1ytSclruGDhh8RC',
        access_token_key: '1243809897348616203-JnuH8L3orHUaAwBcf9iB0mcDfR5izT',
        access_token_secret: 'cNNerdXEmCilKQeetr1BYWsGlSSYXdqCiwbyHnl0q4Klp'
      });
       
      var params = {screen_name: user.username};
      client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            const tweet1=tweets.map(tweet=>tweet.text)
          user.tweets=tweet1;
          console.log(tweet1)
          next()
   
        }else{
            next()
        }

      });

      
})
const User=mongoose.model('User',userSchema)
module.exports=User