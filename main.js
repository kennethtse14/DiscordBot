const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

const fs = require('fs');
client.commands = new Discord.Collection();

// ensure command files is a javascript file
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Bot is ready!');
});

client.on('message', message =>{
    if(!message.content.startsWith(config.prefix) || message.author.bot) return;

    const args = message.content.slice(config.prefix.length).split(" ");
    const command = args.shift().toLowerCase()

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }
});

client.login(config.token);