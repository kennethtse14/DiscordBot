const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.once('ready', () => {
    console.log('Bot is ready!');
});

client.on('message', message =>{
    if(!message.content.startsWith(config.prefix) || message.author.bot) return;

    const args = message.content.slice(config.prefix.length).split(" ");
    const command = args.shift().toLowerCase()

    if(command === 'ping'){
        message.channel.send('pong!');
    }
});

client.login(config.token);