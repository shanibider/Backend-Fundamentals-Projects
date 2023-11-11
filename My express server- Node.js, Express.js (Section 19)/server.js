// basic express server

const express= require("express");

const app= express();

app.get("/", function(req, res){
  res.send("<h1>hello</h1>");
});

app.get("/contact", function(req, res){
  res.send("Contact me at: ... ");
});

app.get("/about", function(req, res){
  res.send("My name is Shani and i love doing sport");
});

app.get("/hobbies", function(req, res){
  res.send("coffee & sport");
});

app.listen(3003, function (){
  console.log ("server started on port 3003");
});
