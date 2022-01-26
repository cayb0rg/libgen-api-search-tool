const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const LibrarySchema = new Schema({
    user: [{type: Schema.Types.ObjectId, ref:'User'}],
    name: String,
    description: String,
    books: [{type: Schema.Types.ObjectId, ref: 'Book'}]
})