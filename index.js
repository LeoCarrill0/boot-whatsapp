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
		message.reply('pong');
	}
    if(message.body != ' ') {
		client.sendMessage(message.from, 'Hola 😃🙋, ¿Que tal, en que puedo ayudarte?😊');
        //client.sendMessage(message.from, 'Ingrese */menu* para ver las opciones');
	}
});