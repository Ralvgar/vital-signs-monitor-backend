require("dotenv").config();
import express from "express";
import { mqttService } from "./mqtt/mqttService";
import { createServer } from "http";
import { Server, Socket } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {});

io.on("connection", (socket: Socket) => {
  console.log("conected");

  socket.on("message", (message) => {
    console.log(message);
    io.emit("message", message);
  });
});

httpServer.listen(8080, () => console.log("listening"));

const app = express();
// const http = new Server(app)
// const io = socket(http)

app.listen(process.env.PORT, () => {
  mqttService.onConnect();
});
