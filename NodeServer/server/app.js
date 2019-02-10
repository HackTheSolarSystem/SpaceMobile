const express = require('express')
const morgan = require('morgan')
const syncAndSeed = require('./Models/index.js')

const app = express()

//middleware
app.use(morgan('dev'))
app.use(express.json())

// test client
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/test_client.html');
});

const port = process.env.PORT || 3000
// const server = app.listen(port, () => console.log(`listening on port ${port}`)) //returns HTTP server obj for socket.io to wrap around and enable sockets
const server = require('http').createServer(app);
const io = require('socket.io')(server);
server.listen(3000, function() {
  console.log('Socket IO server listening on port 3000');
});

require('./sockets')(io) //passes that to the socket events we created

syncAndSeed()