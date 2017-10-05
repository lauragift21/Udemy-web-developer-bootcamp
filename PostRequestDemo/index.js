var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var contacts = ["Gift", "Prosper", "Neo", "Wale", "Ik"]


app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
})

app.post("/addContact", function(req, res){
    var newContact = console.log(req.body);
    contacts.push(newContact);
    res.redirect("/contacts");
})

//contacts
app.get("/contacts", function(req, res){
    res.render("contacts", {contacts: contacts});
})

app.listen(3000, function () {
    console.log('Server started at port 3000')
  })
  