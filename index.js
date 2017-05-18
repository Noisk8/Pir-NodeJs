var Gpio = require('onoff').Gpio,
 // buzzer = new Gpio(18, 'out'),
    led = new Gpio(20, 'out'),
    pir = new Gpio(21, 'in', 'both');
var osc = require("osc-min")

var dgram = require("dgram")

var udp = dgram.createSocket("udp4")
//readValue()

 function envosc(val){

 var buf;
  buf = osc.toBuffer({
    address: "/PIR",
    args: [ 
      {
        type: "integer",
        value: val
      }
    ]
  });
  udp.send(buf, 0, buf.length, 12345, "192.168.0.109");


}




pir.watch(function(err, value) {
  if (err) exit();
 led.writeSync(value);
  console.log("b"+value);
 envosc(value) 
//if(value == 1)  require('./mailer').sendEmail();
});
 
console.log('Pi Bot deployed successfully!');
console.log('Guarding the Magic pencil...');
 
function exit() {
  ///buzzer.unexport();
  pir.unexport();
  process.exit();
}
