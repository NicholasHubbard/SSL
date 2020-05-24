"use strict"


var fs = require("fs");
var http = require("http");
var path = require("path");
var url = require("url");


// variables to be used throughout the code
var express = require("express");
var request = require("request");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// setting up ejs
let ejs = require("ejs");
const router = express.Router();
app.set("view engine","ejs");
app.engine("ejs",require("ejs").__express);

// variable to create a specific session to be used
const session = require("express-session");
app.use(session({secret:"secret", saveUninitialized:true, resave:true}));
var sess;
var errors=[];

// router for home page
router.get("/",function(req,res){
	sess = req.session;
	res.render("index", {pagename:"Home", sess:sess}); //views/index.ejs

})

// router for about page
router.get("/about", function(req,res){
	sess = req.session;
	res.render("about", {pagename:"About", sess:sess}); //views/about.ejs

})

// router for session "profile" page
router.get("/profile", function(req,res){

	sess = req.session;
	//console.log(sess.loggedin);

	if(typeof(sess)=="undefined" || sess.loggedin!=true){
		errors.push("Not an authenticated user");
		//console.log(errors);
		res.render("index", {pagename:"Home", errors:errors});
		errors = [];
	}else{
		res.render("profile", {pagename:"Profile", sess:sess});
	}
})

// router to logout of the session
router.get("/logout", function(req,res){

	sess = req.session;
	sess.destroy(function(err){
		res.redirect("/");
		errors = [];
	})
})

// router to post information for registration
router.post("/login",function(req,res){

  // console.log("Email: " + req.body.email);
	// console.log("Password: " + req.body.password);

	if(req.body.email == ""){
		errors.push("Email is required")
	}
	if(req.body.password == ""){
		errors.push("Password is required")
	}

	if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(req.body.email)){
		errors.push("Email is not valid")
	}

	if(!/^[a-zA-Z]\w{3,14}$/.test(req.body.password)){
		errors.push("Password is not valid")
	}

	sess = req.session;
	session.email = req.body.email;
	session.password = req.body.password;

	//write your conditional here if matching username and Password, good show profile bad show index with errors
	if(session.email === "mike@aol.com" && session.password === "abc123"){
		sess.loggedin = true;
		res.redirect("profile");
	}else{
		res.redirect("profile");
	}

	//res.redirect("/");
})



app.use(express.static("public"));
app.use("/", router);
var server = app.listen("8080");
