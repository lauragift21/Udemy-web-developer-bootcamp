var express = require("express");

var app = express()


app.get('/', function (req, res) {
  res.send('Hi there, Welcome to my assignment!')
})

app.get("/speak/:animal", function (req, res) {
	sounds = {
		pig: 'oink',
		cat: 'i hate humans',
		dog: 'Whoof Whoof!',
		goldfish: '...'
	}
	var animal = req.params.animal.toLowerCase();
	var sound = sounds[animal];
  res.send("The " + animal + " says '" + sound + "'");
});

app.get('/repeat/:message/:times', function (req, res) {
  var message = req.params.message;
  var times = Number(req.params.times);
  var result = "";
  for (var i = 0; i < times; i++) {
  		result += message + " ";
  	}
  res.send(result);
})




// Indicates that the route does not exist and should always come last.
app.get('*', function (req, res) {
  res.send('Sorry Page not Found! What are you doing with your life??')
})

app.listen(3000, function () {
  console.log('Server started at port 3000')
})

