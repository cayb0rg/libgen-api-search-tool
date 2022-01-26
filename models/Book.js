const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String, 
    author: String, 
    year: String, 
    extension: String, 
    filesize: '496963', 
    id: "255661", 
    coverurl:"../../public/images/cover.jpg"
})