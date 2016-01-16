
//setting stuff up
var mongoose = require('mongoose');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use("/static", express.static("public"));

mongoose.connect(
	process.env.MONGOLAB_URI ||
  	process.env.MONGOHQ_URL ||
  	'mongodb://localhost/dystopia-now');

//routes and stuff
app.get('/', function (request, response) {
	response.render("home");
}); 

app.get("/signup", function (request, response) {
	response.render("signup");
});


app.listen(process.env.PORT || 5000, function (request, response) {
	console.log("The harvest is over, the summer is ended, and we are not saved");
});
