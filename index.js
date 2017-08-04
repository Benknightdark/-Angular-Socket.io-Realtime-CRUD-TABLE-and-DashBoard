var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3001);

app.get('/', function (req, res) {
  res.send("ngnggngn")
});

io.on('connection', function (socket) {
  socket.on('news', function (data) {
    io.emit('news', data);
  });
  socket.on('Create', function (data) {
    io.emit('Create', data);
  });
  socket.on('Edit', function (data) {
    io.emit('Edit', data);
  });
  socket.on('Delete', function (data) {
    io.emit('Delete', data);
  });

});
