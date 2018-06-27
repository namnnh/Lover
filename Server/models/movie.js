const mongoose = require('mongoose');

// Define movie schema
var movieSchema = mongoose.Schema({
  title: {
    type: String,
    unique: true,
  },
  poster: String,
  genre: String,
  days: Array,
  times: Array,
});

movieSchema.methods.toWeb = function () {
  let json = this.toJSON();
  json.id = this._id;
  return json;
};
// Export Mongoose model
let movie = module.exports = mongoose.model('movie', movieSchema);