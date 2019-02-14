const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("543457632439107585")
setInterval(function() {
channel.send(`بسم الله الرحمن الرحيم .. بسم الله الرحمن الرحيم 
By : ReTir'ed`);
}, 100000000000)
})

client.login(process.env.BOT_TOKEN);
