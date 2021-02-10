require("dotenv").config();
import { MqttService } from "./services/MqttService";
import { SocketService } from "./services/SocketService";

MqttService.connect();
SocketService.createServer();
