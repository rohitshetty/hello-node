PORT="/dev/ttyUSB0"                                //Replace this by the arduino port
var serial = require('serialport')

var SerialPort= serial.SerialPort;

var line = new SerialPort(PORT,{                   //instantiate serial port default baud set to 9600

	parser: serial.parsers.readline("\n")          //Set up the parser
})

line.on('open',function(){           

	console.log("opened \n");


	line.on('data',function(data){               //This callback is called whenever there is data incoming
		console.log(data);
	})


})