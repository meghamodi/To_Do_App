var express = require('express');
var app = express();

//controller  stored in a variable is then fired
var todoController = require("./controllers/todoController")
//set up template engine
app.set('view engine','ejs');

//static file
app.use(express.static("./public"));

//fire controllers
todoController(app);

app.listen(3000);
console.log("You are listening to port 3000");
