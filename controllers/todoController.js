var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var data = [{item:'get milk'},{item:'walk around'},{item:'coding'}]
var urlencodedParser = bodyParser.urlencoded({extended: false});

mongoose.connect('')

var todoSchema = new mongoose.Schema({
  item: String
});

var Todo = mongoose.model('Todo',todoSchema);
// var itemOne =Todo({item:"buy flowers"}).save(function(err){
//   if (err) throw err;
//     console.log('item saved');
// });
//controller to render data
module.exports =function(app){
  app.get("/todo",function(req,res){
    Todo.find({},function(err, data){
      if (err) throw err;
        res.render('todo',{todos:data});
    });
    // res.render('todo',{todos:data});
  });
  app.post("/todo",urlencodedParser, function(req,res){
    //get data from the view and add it to mongodb
    var newTodo = Todo(req.body).save(function(err,data){
      if (err) throw err;
        res.json(data);
    });
    // data.push(req.body);
    // res.json(data);
  });
  app.delete("/todo/:item",function(req,res){
    //delete the requested item from
    Todo.find({item: req.params.item.replace(/\-/g," ")}).remove(function(err,data){
      if(err) throw err;
        res.json(data);
    });
    // data = data.filter(function(todo){
    //   return todo.item.replace(/ /g, '-')!== req.params.item;
    // });
    // res.json(data);
  });
}
