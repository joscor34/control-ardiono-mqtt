const SerialPort = require('serialport');
const port = new SerialPort("/dev/ttyACM1", {
  baudRate: 9600
})

module.exports = port;
