const mongooser = require('mongoose');
const Schema = new mongooser.Schema({
    nmae: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
})

const User = mongooser.model('User', Schema);
module.exports = User;