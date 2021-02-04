require("dotenv").config();
import express from "express";
import { mqttService } from "./mqtt/mqttService";

const app = express();

app.use(express.json());

app.listen(process.env.PORT, () => {
  mqttService.onConnect();
});
