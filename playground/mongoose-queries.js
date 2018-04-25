const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

const {ObjectId} = require('mongodb');

// var id = '4adf5421b845f3d5dce1a95d';
var id = '5ad2b2b6090140441a9e4b800';

if(!ObjectId.isValid(id)) {
  console.log('ID not Valid.');
}

User.findById(id).then((user) => {
  if (!user) {
    return console.log('Id not found');
  }
  console.log('User by Id\n', JSON.stringify(user, undefined, 2) );
}).catch((e) => {
  console.log(e);
});

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('todo', todo);
// });
//
// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by Id', todo);
// }).catch((e) => {
//   console.log(e);
// });
