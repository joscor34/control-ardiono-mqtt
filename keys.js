const broker = {
  BrokerMQTT:'mqtt://broker.shiftr.io'
}

let opciones = {
  port: 1883,
  clientId: "MQTT-Nodejs",
  username: "chepecarlos4",
  password: "secretoamor"
}

module.exports = {
  broker,
  opciones
}