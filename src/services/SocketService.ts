import { Server, Socket } from "socket.io";

let io: Server;

export class SocketService {
  static createServer = () => {
    io = new Server();
    io.listen(3000);
  };

  static sendMessage = (msg: string) => {
    io.emit("message", msg);
  };
}
