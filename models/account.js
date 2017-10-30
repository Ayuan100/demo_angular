var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    email: {
        type: String, 
        index: {unique: true}
    },
    password: String,
    avatar: {
        type: String,
        default: '/images/default-avatar.jpg'
    },
    title: {
        type: String,
        default: 'none'
    },
    description: {
        type: String,
        default: 'empty'
    },
    activeToken: String,
    activeExpires: String,
    active: {
        type: Boolean,
        default: false
    }
});

var passportLocalMongoose = require('passport-local-mongoose');

UserSchema.plugin(passportLocalMongoose,{usernameField:"email"});

module.exports = mongoose.model('UserAccountDemo', UserSchema);