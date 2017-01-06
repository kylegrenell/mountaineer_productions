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

// Get Artists
module.exports.getArtists = function(callback, limit){
  Artist.find(callback).limit(limit);
}

// Get Artist By Id
module.exports.getArtistById = function(id, callback){
  Artist.findById(id, callback);
}

// add artist
module.exports.addArtist = function(artist, callback){
  Artist.create(artist, callback);
}

// Update artist
module.exports.updateArtist = function(id, artist, options, callback){
  var query = {id: id};
  var update = {
    name: artist.name,
    genre: artist.genre,
    record_label: artist.record_label,
    image_url: artist.image_url,
    website: artist.website
  }
  Artist.findOneAndUpdate(query, update, options, callback);
}

// delete artist
module.exports.deleteArtist = function(id, callback){
  var query = {id: id};
  Artist.remove(query, callback);
}
