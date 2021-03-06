// Setup basic express server
const express = require('express')
const app = express()
const path = require('path')

// Works with https also
const http = require('http')
const port = process.env.PORT || 3000
// Start the server
const server = http.createServer(app).listen(port, function () {
  console.log('Express started on https://localhost:' + port)
  console.log('Press Ctrl-C to terminate...')
})

// And create the websocket server
const io = require('socket.io')(server)

// In this examle we just have static files
app.use(express.static(path.join(__dirname, '/public')))

// ----- Chatroom logic

// This is called every time a client is conneting
// the socket is for the client that connects
io.on('connection', function (socket) {
  // When a client call for login
  socket.on('login', function (data) {
    // Save the username in the socket object
    socket.username = data.username
    let welcomeMessage = 'Welcome to the chat ' + socket.username

    // This is sent to the one client that connected
    socket.emit('welcome', { message: welcomeMessage })
    // This is broadcast to all connected users (except the client that send this)
    socket.broadcast.emit('newUser', { message: socket.username + ' has joined the chat!' })
  })

  // When a client sends a new message
  socket.on('chatMessage', function (data) {
    // Tell all clients there is a new message - Send back to the one that wrote it
    io.emit('chatMessage', {
      message: data.messageText,
      user: socket.username
    })
  })

  // Called when a socket/client is disconnecting from the WS
  socket.on('disconnect', function () {
    // echo globally that this client has left
    io.emit('userLeft', {
      user: socket.username
    })
  })
})
