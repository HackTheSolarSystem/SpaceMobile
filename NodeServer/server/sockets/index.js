const serverSocketConnection = io => {  //gets passed a client's information to be emitted to all other clients by server
  
io.on('connection', socket => {

    console.log(`${socket.id} has made a connection`)
    socket.on('enter event name', () => {
      socket.broadcast.emit('data to be emitted to all other clients')  
    })

    socket.on('disconnect', socket => {
      console.log(`${socket.id} has logged off`)
    })
  })
  
}

module.exports = serverSocketConnection