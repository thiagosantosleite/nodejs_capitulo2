
var mongoose = require('mongoose');
var schema = require('./schema.js');

var uri = 'mongodb://root:mongodb@192.168.217.41:27001,192.168.217.41:27002,192.168.217.41:27003/movies_c2?authSource=admin&readPreference=secondary&poolSize=30&auto_reconnect=true';
mongoose.connect(uri);

// Parameters are: Model, Schema, collection
var User= mongoose.model('User', schema, 'users');

var user = new User({
  name: 'John Smith',
  email: 'john@smith.io'
});

user.save(function(error){
  if (error){
    console.log(error);
    process.exit(1);
  }

  User.find({email: 'john@smith.io'}, function(error, docs){
    if (error){
      console.log(error);
      process.exit(1);
    };

    console.log(require('util').inspect(docs));
    process.exit(0);
  });
});
