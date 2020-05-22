var http = require('http'); // Error 1 (missing p)
var myname = function(){ // Error 2 (function spelled wrong, missing i)
    str = ("Here is my IP address");
    return(str); // Error 10 (need to return the function for it to be referenced.  Console.log pushed back an Undefined)
}

// Error 8 (async function) - You can have async here if line 27 has var result = await promise
function callHttpbin() {  // Error 3 (missing n)
  let promise = new Promise((resolve, reject) => {
    http.get(
     'http://httpbin.org/ip',
     function(response) {
      var str="";
      response.setEncoding('utf8');
      response.on('data', function(data){
      str += data;
     });
     response.on('end', function() {
      var result = JSON.parse(str);
      myips = result.origin;
      resolve(myips); // Error 5 (was missing argument)
     });
     }
    );
  });

  var result = promise; // Error 8 (no await needed)
  return(result); // Error 6 (return)
}


async function executeAsyncTask(){ // Error 9 (missing async)
  const valueA = await callHttpbin();
  const valueB = myname();
  console.log(valueB+" "+valueA)
} // Error 4 (missing closing bracket)

executeAsyncTask(); // Error 7 (there was no executeAsyncTask() function)

// Output Here is my IP address 149.24.160.1, 149.24.160.1
