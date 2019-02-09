const express = require('express')
const morgan = require('morgan')

const app = express()

//middleware
app.use(morgan('dev'))
app.use(express.json())


const port = process.env.PORT || 3000
const server = app.listen(port, () => console.log(`listening on port ${port}`)) //returns HTTP server obj for socket.io to wrap around and enable sockets
const io = require('socket.io')(server)

require('./sockets')(io) //passes that to the socket events we created

