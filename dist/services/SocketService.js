"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketService = void 0;
var http_1 = require("http");
var socket_io_1 = require("socket.io");
var io;
var SocketService = /** @class */ (function () {
    function SocketService() {
    }
    SocketService.init = function (app) {
        var server = http_1.createServer(app);
        io = new socket_io_1.Server(server);
    };
    SocketService.onConnect = function () {
        io.on("connection", function (socket) {
            socket.emit("message", "Hello world");
        });
    };
    return SocketService;
}());
exports.SocketService = SocketService;
// implementar inyeccion de dependencias
