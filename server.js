var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8080);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

app.get('/draw1', function (req, res) {
  res.sendfile(__dirname + '/draw1.html');
});

app.get('/draw2', function (req, res) {
  res.sendfile(__dirname + '/draw2.html');
});


io.on('connection', function (socket) {
    socket.on('draw',function(data){
        //console.log(data);
        socket.broadcast.emit('draw',data);
    });

    socket.on('clean',function(data){
        socket.broadcast.emit('clean',data);
    });
});
