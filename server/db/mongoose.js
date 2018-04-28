var mongoose = require('mongoose');
const MONGODB_URI = 'mongodb://chrisli:chris@ds161459.mlab.com:61459/todoapp'
mongoose.Promise = global.Promise;
mongoose.connect(MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
// module.exports = {
//   mongoose: mongoose
// };
