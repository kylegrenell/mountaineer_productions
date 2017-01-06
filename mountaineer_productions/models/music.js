var mongoose = require('mongoose');

// music schema

var musicSchema = mongoose.Schema({
  name:
  {
    type: String,
    required: true
  },
  genre:
  {
    type: String,
    required: true
  },
  record_label:
  {
    type: String,
    required: true
  },
  image_url:
  {
    type: String
  },
  bandcamp:
  {
    type: String
  },
  create_date:
  {
    type: Date,
    default: Date.now
  }
});

var Music = module.exports = mongoose.model('Music', musicSchema);

// Get music
module.exports.getMusic = function(callback, limit){
  Music.find(callback).limit(limit);
}


