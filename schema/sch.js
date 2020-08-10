const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PostSchema = new Schema({
    name: {type: String, max: 100},
    content: {type: String},
});


// Export the model
module.exports = mongoose.model('Post', PostSchema);