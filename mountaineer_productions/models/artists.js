var mongoose = require('mongoose');

// genre schema

var artistSchema = mongoose.Schema({
  name:{
      type: String,
      required: true
  },
  genre:{
      type: String,
      required: true
    },
  record_label:{
      type: String,
      required: true
    },
  image_url:{
      type: String
    },
  bandcamp:{
      type: String
    },
  create_date:{
      type: Date,
      default: Date.now
    }
  });

var Artist = module.exports = mongoose.model('Artist', artistSchema);

// Get genres
module.exports.getArtists = function(callback, limit){
  Artist.find(callback).limit(limit);
}