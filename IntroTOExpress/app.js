var express = require("express");

var app = express()

// "/" - "HI, there"

app.get('/', function (req, res) {
  res.send('Hello World!')
})

// "/bye" - > "Goodbye!"
app.get('/bye', function (req, res) {
  res.send('Goodbye!')
})


// "/dog" - "Meow"
app.get('/dog', function (req, res) {
  res.send('Meow!')
})

// trying out route param
app.get('/r/:subredditName', function (req, res) {
	var subreddit = req.param.subredditName;
  res.send('Welcome to Reddit')
})


 // Indicates that the route does not exist and should always come last.
app.get('*', function (req, res) {
  res.send('Error Go Back!')
})

app.listen(3000, function () {
  console.log('Server started at port 3000')
})
