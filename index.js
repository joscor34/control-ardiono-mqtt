const port = require('./arduinoControl')
const keys = require('./keys')

var mqtt = require('mqtt')
var client = mqtt.connect(keys.broker.BrokerMQTT, keys.opciones);

client.on('connect', function() {
  client.subscribe('/ALSW/Clasificar', function(err) {
    console.log("MQTT Activado")
  })
})

client.on('message', function(topic, message) {
  let Mensaje = message.toString();
  if (Mensaje === "Encender") {
    console.log("Encender Foco");
    port.write("H");
  } else if (Mensaje === "Apagar") {
    console.log("Apagar Foco")
    port.write("L");
  }
})
