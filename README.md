# Pir-NodeJs

## Resumen 

Esta es una experimentación con  usando un Sensor de movimiento PIR conectada a  una raspberry pi enviando datos por osc,  un codigo de Javascript, comunicados por NodeJs y recibido en OpenFrameworks.

cacharriado X Olivia jack & Noisk8

## Proceso 

Partimos por conectar El sensor de movimiento a la Raspberry pi, como lo indica la imágen y utilizamos un codigo en javascript, que ayudado por las librerias (onoff, osc-min, dgram, udp4) permite recibir es habilitar los pines Gpio  del raspberry para recibir la señal del sensor.

![Conexiones](https://github.com/Noisk8/Pir-NodeJs/blob/master/PIR%26NodeJS_Peque%C3%B1a.png)

Luego instalamos en la Raspberry pi la versión 7.0.x de NodeJs (Con la versión que viene por default 0.10 puede que no funciones bien)

## Instalar NodeJs

para esto descargamos nodeJs utilizando los siguientes comandos.

wget https://deb.nodesource.com/setup_7.x

sudo -E bash setup_7.x

**Para verificar la instalación y versión**

~ node -v

Luego accedemos a la carpeta donde tengamos el proyecto y estando allí ejecutamos 

~npm init 

~nano index.js (Acá va el codigo del repo)

Ahora instalamos las librerias 

~npm install onoff --save

~npm install osc-min --save

~npm install dgram --save

~npm install udp --save


Para probar nuestro codigo, en una terminal dentro de la carpeta del proyecto. 

~sudo node index.js

Cuando estemos seguros de que todo este corriendo de manera satisfactoria, vamos a conectar nuestro 
codigo con el openframeworks vía osc 

 ** udp.send(buf, 0, buf.length, 12345, "192.168.0.109"); → Acá indicamos a nuestro codigo de javascript que se comunique 
 por el puerto 12345 con la "IP" que se va comunicar **
 
 Para recibir estos mensajes utilizamos uno de los ejemplos de Openframeworks  [ Comunication/oscReceiveExample  (https://github.com/openframeworks/openFrameworks/tree/master/examples/communication/oscReceiveExample)]
 
 En el archivo ofApp.h definimos el puerto que va recibir el mensaje
 
 *** // listen on port 12345
#define PORT 12345 → Acá se define el puerto que escucha. *** 


Utilizamos otro ordenador ya con OF ya instalado, Con Abrimos el ejemplo  [ Comunication/oscReceiveExample ]

Mientras este corriendo el Javascript y este lanzando mensaje  este OF debe de estar recibiendo el mensaje.


Version Beta 4ever
