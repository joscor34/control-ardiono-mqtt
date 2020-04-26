# Conexión con arduino y MQTT

Este proyecto es una simple conexión entre el servicio MQTT y el puerto serial del arduino.

***

## Setup

Puedes clonar este repositorio.
Para instalar las dependencias necesarias necesitas hacer lo siguinte:

``npm insall``

***

## Run

Para correrlo simplemente tienes que ejecutar el siguiente comando:

``npm start``

***

Puede que la consola te arroje el siguiente error:

> UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 1)

para solucionarlo lo unico que debes hacer ir al:

[arduinoControl.js](https://github.com/joscor34/control-ardiono-mqtt/blob/master/arduinoControl.js)

y modificar la linea:

``const port = new SerialPort("/dev/ttyACM1", { baudRate: 9600 })``

cambia ``/dev/ttyACM1`` por el puerto en el que esté tu arduino.
