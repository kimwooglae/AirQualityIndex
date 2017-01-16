var serialport = require("serialport"),
    ledStatus = false,
    portName = '/dev/ttyUSB0';
//    portName = 'COM5';
//  portName = '/dev/cu.usbmodem1421';
var fs = require('fs');

var fd = fs.openSync('./data/data_rasp.csv', 'a')

var serialPort = new serialport( portName, {
    baudrate: 9600,
    parser: serialport.parsers.readline("\r\n")
});

serialPort.on( 'data', function(data) {
    var msg = formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss') + ',' + data;
    console.log(msg);
    fs.writeSync(fd, msg + "\n");
});

serialPort.on('close', showPortClose);
serialPort.on('error', showError);

function showPortClose() {
    console.log('port closed.');
}
 
function showError(error) {
    console.log('Serial port error: ' + error);
}

formatDate = function date2str(x, y) {
    var z = {
        M: x.getMonth() + 1,
        d: x.getDate(),
        h: x.getHours(),
        m: x.getMinutes(),
        s: x.getSeconds()
    };
    y = y.replace(/(M+|d+|h+|m+|s+)/g, function(v) {
        return ((v.length > 1 ? "0" : "") + eval('z.' + v.slice(-1))).slice(-2)
    });

    return y.replace(/(y+)/g, function(v) {
        return x.getFullYear().toString().slice(-v.length)
    });
}
