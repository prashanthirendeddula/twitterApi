var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'NIcWVsZp0SEer9cV3sSDudWhq',
  consumer_secret: 'yhmbxVQ9TYmhMHYCSmhpO532BPY44nFkUHg1ytSclruGDhh8RC',
  access_token_key: '1243809897348616203-JnuH8L3orHUaAwBcf9iB0mcDfR5izT',
  access_token_secret: 'cNNerdXEmCilKQeetr1BYWsGlSSYXdqCiwbyHnl0q4Klp'
});
 
var params = {screen_name: '@BillGates'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});
