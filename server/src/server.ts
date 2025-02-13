
import { createServer } from "node:http";
import app from "./app";
import { Server } from 'socket.io';

const server = createServer(app);
const io = new Server(server)

io.on('connection', (socket) => {
  socket.on('helo', (args)=>{
    socket.join(args)
    socket.emit('helo', "hello from the server")
    console.log(args)
  });

  socket.on('msg', (args)=>{
    console.log(args);
    socket.emit('smsg', "helo smsg from server return")
  })

});

server.listen(5000, () => {
  console.log(`Server is running at http://localhost:${5000}`);
});
