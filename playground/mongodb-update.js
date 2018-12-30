//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5c28d287edc35f709ee59917')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((results) => {
    //     console.log(results);
    // });


    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c277d7ca491d741ae91658f')
    }, {
        $set: {
            name: 'Kevin'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((results) => {
        console.log(results);
    });

    //db.close();
});