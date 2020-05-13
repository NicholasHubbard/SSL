// global variables to define shortcuts within app.js  
var fs = require("fs");
var http = require("http");
var path = require("path"); 
var url = require("url");


// http createServer funtion to create webpage
http.createServer(function(req, res){


	var parsed = url.parse(req.url);
	var filename = path.parse(parsed.pathname);
	
	// filename declare name
	var filen = "";

	// conditional to define the filen to fit within the webpage
	if(filename.name == ""){
		filen = "index"
	}else{
		filen = filename.name;
	}
	

	// pathname to pull file from folder
	fs.readFile(filen + ".html", function(err, data){

		res.writeHead(200);
		res.write("<script>var name = filen; </script>");
		res.end(data);

	})


}).listen("8080") // pathway within vagrantfile