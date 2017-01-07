var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose =require('mongoose');

app.use(express.static(__dirname+'/client'));
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

///////////////////////
/////// genres ////////
///////////////////////

// GET
app.get('/api/genres', function(req, res){
  Genre.getGenres(function(err, genres){
    if(err){
      throw err;
    }
    res.json(genres);
  });
});

// POST
app.post('/api/genres', function(req, res){
  var genre = req.body;
  Genre.addGenre(genre, function(err, genre){
    if(err){
      throw err;
    }
    res.json(genre);
  });
});

// PUT
app.put('/api/genres/:id', function(req, res){
  var id = req.params.id;
  var genre = req.body;
  Genre.updateGenre(id, genre, {}, function(err, genre){
    if(err){
      throw err;
    }
    res.json(genre);
  });
});

// DELETE
app.delete('/api/genres/:id', function(req, res){
  var id = req.params.id;
  Genre.deleteGenre(id, function(err, genre){
    if(err){
      throw err;
    }
    res.json(genre);
  });
});


//////////////////////////
//////// artists /////////
//////////////////////////

// GET
app.get('/api/artists', function(req, res){
  Artist.getArtists(function(err, artists){
    if(err){
      throw err;
    }
    res.json(artists);
  });
});

//GET ID
app.get('/api/artists/:id', function(req, res){
  Artist.getArtistById(req.params.id, function(err, artist){
    if(err){
      throw err;
    }
    res.json(artist);
  });
});

// POST
app.post('/api/artists', function(req, res){
  var artist = req.body;
  Artist.addArtist(artist, function(err, artist){
    if(err){
      throw err;
    }
    res.json(artist);
  });
});

// PUT
app.put('/api/artists/:id', function(req, res){
  var id = req.params.id;
  var artist = req.body;
  Artist.updateArtist(id, artist, {}, function(err, artist){
    if(err){
      throw err;
    }
    res.json(artist);
  });
});

// DELETE
app.delete('/api/artists/:id', function(req, res){
  var id = req.params.id;
  Artist.deleteArtist(id, function(err, genre){
    if(err){
      throw err;
    }
    res.json(genre);
  });
});




//listen on port 3000
app.listen(3000);
console.log('Running on port 3000');