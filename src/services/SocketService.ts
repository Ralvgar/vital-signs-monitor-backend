import WebSocket from "ws";

let wss;

export class SocketService {
  static createServer = () => {
    wss = new WebSocket.Server({
      port: 8080,
    });
    wss.on("connection", (ws: WebSocket) => {
      console.log("Connected");
      ws.on("message", (msg: string) =>
        console.log("Message from socket", msg)
      );
      ws.send("message");
    });
  };
}

// implementar inyeccion de dependencias
