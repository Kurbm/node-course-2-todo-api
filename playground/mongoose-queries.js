const {ObjectID} = require('mongodb');

const {mongoose} = require ('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5c2fbe14cc37eb3048f4c916';

// var id = '5c2fd237bd8e588e4b4317281';

// if (!ObjectID.isValid(id)) {
//     console.log('Id not valid');
// } 

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found')
//     }
//     console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

//Query User Collection, need to load in user, find by id, 3 cases: user found, user not found, error

User.findById(id).then((user) => {
    if (!user) {
        return console.log('Unable to find user');
    }
    console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));