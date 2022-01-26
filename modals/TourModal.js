const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tourSchema = new Schema({
     name: String,
     duration: Number
   });

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;