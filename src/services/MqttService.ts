import { connect, MqttClient } from "mqtt";
import { MqttOptions } from "./MqttOptions";

const MQTT_CLIENT = process.env.MQTT_CLIENT as string;
const MQTT_TOPIC = process.env.MQTT_TOPIC as string;

export class MqttService {
  static connect = () => {
    const client = connect(MQTT_CLIENT);
    client.on(MqttOptions.connect, () => {
      client.subscribe(
        MQTT_TOPIC,
        (err) => !err && MqttService.onRecive(client)
      );
    });
  };

  static onRecive = (client: MqttClient) => {
    client.on(MqttOptions.message, (topic, message, packet) => {
      const msgRecived = message.toString();
      console.log(msgRecived);
    });
  };
}
