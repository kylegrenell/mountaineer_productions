var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose =require('mongoose');

Genre = require('./models/genre');

// connect to mongoose
mongoose.connect('mongodb://localhost/mountaineers');
var db = mongoose.connection;

// http requests - restful routes
app.get('/', function(req, res){
  res.send('Please use /api/packs');
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

//listen on port 3000
app.listen(3000);
console.log('Running on port 3000');