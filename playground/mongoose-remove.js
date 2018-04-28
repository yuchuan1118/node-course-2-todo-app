const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

const {ObjectId} = require('mongodb');

// Todo.remove({}).then((res) => {
//   console.log(res);
// });

// Model.findOneAndRemove()


// Model.findByIdAndRemove()

Todo.findByIdAndRemove('5ae3536e3245762946301a4b').then((res) => {
  console.log(res);
});
