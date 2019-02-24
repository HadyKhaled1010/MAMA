const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("545716434647384096")
setInterval(function() {
channel.send(`**بحبك يا ادهم اه اه اه اه** 
By Hady اه اه اه`);
}, 100000000000)
})

client.login(process.env.BOT_TOKEN);
