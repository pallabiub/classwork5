 var http = require('http');
  var express = require('express');
  var bodyParser = require('body-parser');
  var app = express();
  var server = http.Server(app);
  
  var mongo =require('mongodb');
  var db, uri= "mongodb://"+process.env.IP+":28017";
   mongo.MongoClient.connect(uri,
   {useNewUrlParser:true},
   function(err, client){
     if(err){
       console.log('could not connect to mongodb')
      } else{
         db=client.db('node-cw8');
       }
     }
   )
  
  
  var save =function(form_data){
    db.createCollection('users',function(err, collection){});
    var collection =db.collection('users');
    collection.save(form_data);
  }
  
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  
  app.get('/', function(req, res){
    res.sendFile(__dirname+'/index.html');
  });
  app.get('/about', function(req, res){
    res.sendFile(__dirname+'/about.html');
  });
  app.get('/form', function(req, res){
    res.sendFile(__dirname+'/form.html');
    save(req.body);
  });
  app.post('/submit_user', function(req, res){
    console.log(JSON.stringify(req.body));
    save(req.body);
  });
  server.listen(process.env.PORT, process.env.IP, function(){
    console.log('Server running');
  });
