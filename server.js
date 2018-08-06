var express = require("express");
var path    = require("path");
var app     = express();
var server = require('http').Server(app);
var io = require('socket.io').listen(server);

app.use(express.static(path.join(__dirname + '/public'))); 


app.get('/',function(req,res){
	res.sendFile("ecommerce copy.html", { root: path.join(__dirname, 'public') })
});


server.listen(process.env.PORT || 3000,function(){
    console.log('Listening on '+server.address().port);
});

 