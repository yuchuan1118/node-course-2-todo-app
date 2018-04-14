// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp-2', (err, client) => {
  if (err) {
    return console.log('Unable connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');

//   db.collection('Todos').findOneAndUpdate({_id: new ObjectID("5a870de795db3bce06b1b56e")
// }, {
//   $set: {
//     completed: false
//   }
// }, {
//     returnOriginal: false
// }).then((result) => {
//   console.log(result);
// });

  db.collection('Users').findOneAndUpdate({_id: new ObjectID("5a86710f34351e873e4426fd")
}, { $set:
  {
    name: 'Chris'
  }, $inc:
  {
    age: 1
  }
}, {
  returnOriginal: false
}).then((result) => {
  console.log(result);
});



  // client.close();
});
