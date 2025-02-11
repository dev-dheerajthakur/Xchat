"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_http_1 = require("node:http");
const app_1 = __importDefault(require("./app"));
const socket_io_1 = require("socket.io");
const server = (0, node_http_1.createServer)(app_1.default);
const io = new socket_io_1.Server(server);
io.on('connection', (socket) => {
    console.log('a user connected');
});
server.listen(5000, () => {
    console.log(`Server is running at http://localhost:${5000}`);
});
//# sourceMappingURL=server.js.map