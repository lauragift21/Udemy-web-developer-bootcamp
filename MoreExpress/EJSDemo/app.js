var express = require("express");

var app = express()

// tells express that there's apublic folder for all assets
app.use(express.static("public"));

// tells express that the default template enginge is ejs
app.set("view engine", "ejs");

app.get('/', function(req, res){
	res.render("home");

});

app.get('/fallinlovewith/:thing', function(req, res){
	var thing = req.params.thing;
	res.render("love", {thingVar : thing});

});

app.get('/posts', function(req, res){
	var post = [
		{title: "Bants", author: "Susy"},
		{title: "Akah Nnani", author: "And Bae"},
		{title: "Sissy Yemmie", author: "Vlogs"},
	];

	res.render("posts.ejs", {post: posts});
});




app.listen(3000, function () {
  console.log('Server started at port 3000')
})

