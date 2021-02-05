"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MqttService = void 0;
var mqtt_1 = require("mqtt");
var MqttOptions_1 = require("./MqttOptions");
var MQTT_CLIENT = process.env.MQTT_CLIENT;
var MQTT_TOPIC = process.env.MQTT_TOPIC;
var MqttService = /** @class */ (function () {
    function MqttService() {
    }
    MqttService.connect = function () {
        var client = mqtt_1.connect(MQTT_CLIENT);
        client.on(MqttOptions_1.MqttOptions.connect, function () {
            client.subscribe(MQTT_TOPIC, function (err) { return !err && MqttService.onRecive(client); });
        });
    };
    MqttService.onRecive = function (client) {
        client.on(MqttOptions_1.MqttOptions.message, function (topic, message, packet) {
            var msgRecived = message.toString();
            console.log(msgRecived);
        });
    };
    return MqttService;
}());
exports.MqttService = MqttService;
