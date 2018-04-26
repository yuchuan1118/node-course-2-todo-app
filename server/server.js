var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose'); // var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
const {ObjectId} = require('mongodb');

var app = express();

app.use(bodyParser.json()); // configure middleware

app.post('/todos', (req, res) => {
  // console.log(req.body); //'body' where get store by body-parser
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.staus(400).send(e);
  });
});

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
  if (!ObjectId.isValid(id)) {
    return res.status(400).send();
  };
  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(400).send();
    }

    res.send({todo: todo});

  }).catch((e) => {
    return res.status(400).send();
  });


});

app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = {app};
