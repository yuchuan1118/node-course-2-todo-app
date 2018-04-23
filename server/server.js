var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose'); // var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

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

app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = {app};
