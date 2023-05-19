const express = require('express');
const bodyParser = require('body-parser'); //middleware module for parsing all incoming JSON requests
const app = express();

//use the 'json' function
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public')); //will launch the index.html file in the public folder

//EXAMPLE OF A GET ROUTE
//'GET' method will call the URL provided and return a result
// '/' == URL
//req == request
//res == result
app.get('/', (req, res)=>{
    res.send("hello express web server!");
});

//EXAMPLE OF A POST ROUTE
//first argument is URL
//second argument is a function with 2 args: req and result
app.post('/hello', (req, res)=>{
    let body = req.body;
    body.message = "Hello" + body.name;

    res.json(body); //returns json body in response
})

//listen to requests on a specific port
app.listen(3000, ()=>{
    console.log("Server listening on port 3000");
})

//test running this by typing 'node server' in terminal
//test app.get route in browser by typing 'localhost:3000' into a browser
//test app.post /hello in browser by typing 'localhost:3000/hello' into a browser -- will give an error since it's a POST and not a GET
//test app.post /hello using POSTMAN by selecting 'POST' to 'http://localhost:3000/hello' 
//  in the Header, set the Content-Type to application/JSON
//  in the Body, select 'raw' and type {"name": "Sarah G"}
//  click 'Send' to test the POST call
//use cntrl+C to stop running in terminal