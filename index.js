const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();

client.on('message', message => {
	console.log(message.body);
});

client.on('message', message => {

		if(message.body === '/menu') {
			message.reply('/Consultas\n/Ofertas');
		}else if(message.body === 'Hola' || message.body === 'hola' || message.body === 'Hola.'){
			client.sendMessage(message.from, 'Hola 😃🙋, ¿Que tal, en que puedo ayudarte?😊');
		}else if(message.body === '/Consultas'){
			client.sendMessage(message.from, ' ');
		}else if(message.body === '/Ofertas'){
			client.sendMessage(message.from, ' ');
		}else{
			client.sendMessage(message.from, 'Para acceder al menu envie */menu* para ver las opciones');
			//client.sendMessage(message.from, 'Ingrese */menu* para ver las opciones');
		}
	}
);