
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var config = require("./database/config");
var port = process.env.PORT || 3000; 

 
mongoose.connect(config.database, function(err) {
	if(err) {
		console.log(err);
	}else {
		console.log('Connected with database');
	}
});
 

var app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));


app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
	res.render('index', {
		title: 'Home',
		className: 'home'
	});	
});



app.listen(port, function (err) {
  if(err){
      console.log(err);
  } else {
      console.log("https://todolist-vubon.c9users.io");
  }
});