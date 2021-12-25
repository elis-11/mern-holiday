const {Schema, model, Types} = require('mongoose')

const Schema = new Schema({
    email: {type: String, require: true, unique: true},
    password: {type: String, require: true},
    todos: [{type: Types.ObjectId, ref: 'Todo'}]
})


module.exports = model('User', Schema)