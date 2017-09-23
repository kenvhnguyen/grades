var book = require("./lib/grades").book; 
var express = require("express");
var app = express();
app.get("/", function(req, res){
	res.send("Hello, you!");
});
app.get("/grade", function(req, res){
	//res.send("You are trying to get grade average");
	var grades = req.query.grades.split(";");
	for (var i=0; i < grades.length; i++) {
		book.addGrade(parseInt(grades[i]));
	}
	var average = book.getAverage();
	res.send("Your average grade is " + average + ". Grade: "+ book.getLetterGrade());
});
app.listen(3000);
console.log("Server ready ...");
