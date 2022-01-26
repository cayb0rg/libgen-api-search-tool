const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    password: String,
    libraries: [{type: Schema.Types.ObjectId, ref:'Library'}]
})