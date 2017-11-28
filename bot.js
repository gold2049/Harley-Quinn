const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(Mzg1MDMxMjYyNDQxNzAxMzc2.DP7cCw.e6rLrxOr6ZJwICGmhPSq4ecCjz4);
