
import { createServer } from "node:http";
import app from "./app";
import { Server } from 'socket.io';

const server = createServer(app);
const io = new Server(server)

io.on('connection', (socket) => {
  console.log('a user connected');
});

server.listen(5000, () => {
  console.log(`Server is running at http://localhost:${5000}`);
});
