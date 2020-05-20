"use strict"


var fs = require("fs");
var http = require("http");
var path = require("path");
var url = require("url");



var express = require("express");
var request = require("request");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


let ejs = require("ejs");
const router = express.Router();
app.set("view engine","ejs");
app.engine("ejs",require("ejs").__express);


router.get("/",function(req,res){

	res.render("index", {pagename:"Home"}); //views/index.ejs

})

router.get("/about", function(req,res){

	res.render("about", {pagename:"About"}); //views/about.ejs

})

// router to post information for registration
router.post("/login",function(req,res){

	// console.log("First Name: " + req.body.firstname);
	// console.log("Last Name: " + req.body.lastname);

	// Declaring two arrays to be used
	var errors=[];
	var success=[];

	// Validation for firstname
	if(req.body.firstname == ""){
		errors.push("First Name is required")
	}else{
		success.push(req.body.firstname)
	}

	// Validation for lastname
	if(req.body.lastname == ""){
		errors.push("Last Name is required")
	}else{
		success.push(req.body.lastname)
	}

	// Validation for address
	if(req.body.address == ""){
		errors.push("Address is required")
	}else{
		success.push(req.body.address)
	}

	// Validation for city
	if(req.body.city == ""){
		errors.push("City is required")
	}else{
		success.push(req.body.city)
	}

	// Validation for state
	if(req.body.state == ""){
		errors.push("State is required")
	}else{
		success.push(req.body.state)
	}

	// Validation for Zip Code
	if(req.body.zip== "" || isNaN(req.body.zip) || req.body.zip.length < 5){
		errors.push("Zip is required")
	}else{
		success.push(req.body.zip)
	}

	// Validation for age
	if(req.body.age == 0){
		errors.push("Age is required")
	}else{
		success.push(req.body.age)
	}

	// Validation for radio button
	if(!req.body.gender){
		errors.push("Gender is required")
	}else{
		success.push(req.body.gender)
	}

	// Validation for Terms of Service consent
	if(!req.body.consent){
		errors.push("Please agree to terms of service")
	}else{
		success.push("Agreed to terms of Service")
	}

	// Validation for Bio
	if(req.body.bio == ""){
		errors.push("Bio is required")
	}else{
		success.push(req.body.bio)
	}

	// Console.logs to see errors and success before res.render
	console.log(errors)
	console.log(success)

	// res.render to change the data passed for index.ejs
	res.render("index", {pagename:"Home", success:success, errors:errors});

	//res.redirect("/");
})



app.use(express.static("public"));
app.use("/", router);
var server = app.listen("8080");
