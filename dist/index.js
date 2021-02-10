"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
var MqttService_1 = require("./services/MqttService");
MqttService_1.MqttService.connect();
// SocketService.init();
