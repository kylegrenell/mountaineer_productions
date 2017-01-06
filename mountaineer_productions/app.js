var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose =require('mongoose');

app.use(bodyParser.json());

Genre = require('./models/genre');
Artist = require('./models/artists');

// connect to mongoose
mongoose.connect('mongodb://localhost/mountaineers');
var db = mongoose.connection;

// http requests - restful routes
app.get('/', function(req, res){
  res.send('Please use /api/genres or api/music');
});

// genres
app.get('/api/genres', function(req, res){
  Genre.getGenres(function(err, genres){
    if(err){
      throw err;
    }
    res.json(genres);
  });
});

app.post('/api/genres', function(req, res){
  var genre = req.body;
  Genre.addGenre(genre, function(err, genre){
    if(err){
      throw err;
    }
    res.json(genre);
  });
});




// artists
app.get('/api/artists', function(req, res){
  Artist.getArtists(function(err, artists){
    if(err){
      throw err;
    }
    res.json(artists);
  });
});

app.get('/api/artists/:_id', function(req, res){
  Artist.getArtistById(req.params._id, function(err, artist){
    if(err){
      throw err;
    }
    res.json(artist);
  });
});

//listen on port 3000
app.listen(3000);
console.log('Running on port 3000');