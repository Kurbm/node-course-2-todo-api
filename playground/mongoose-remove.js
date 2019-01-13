const {ObjectID} = require('mongodb');

const {mongoose} = require ('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove
//Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '5c3b6820813757be33854670'}).then((todo) => {

});

Todo.findByIdAndRemove('5c3b6820813757be33854670').then((todo) => {
    console.log(todo);
});