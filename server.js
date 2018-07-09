var http = require ('http');
var fs =require ('fs');

var server = http.createServer(function(req,res){
      res.statusCode = 200;
      res.setheader('content-type','text/html');
      fs.readFile('index.html',function(err,data){
            if(err){
            return console.log("file read error");
            }
            res.end(data);
            });
            });
            server.listen(process.env.IP,function(){
            console.log('server running');
     });